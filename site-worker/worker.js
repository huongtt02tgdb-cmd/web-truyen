// Web Truyện — site riêng tư: cổng mật khẩu + phục vụ file tĩnh
// Deploy tự động qua GitHub Actions (giống kotoba-site)
// Secret: SITE_PASSWORD (đặt 1 lần, workflow tự đẩy lên Worker)

const COOKIE = 'truyen_auth';
const MAX_AGE = 30 * 24 * 3600; // cookie 30 ngày

async function tokenFor(env) {
  const data = new TextEncoder().encode(env.SITE_PASSWORD + '::truyen-auth-v1');
  const buf = await crypto.subtle.digest('SHA-256', data);
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}

function getCookie(req, name) {
  const h = req.headers.get('Cookie') || '';
  for (const part of h.split(';')) {
    const i = part.indexOf('=');
    if (i > 0 && part.slice(0, i).trim() === name) return part.slice(i + 1).trim();
  }
  return '';
}

function loginPage(msg) {
  return '<!DOCTYPE html><html lang="vi"><head><meta charset="utf-8">'
    + '<meta name="viewport" content="width=device-width,initial-scale=1">'
    + '<title>Web Truyện — Đăng nhập</title>'
    + '<style>body{font-family:system-ui,sans-serif;display:flex;min-height:100vh;align-items:center;justify-content:center;background:#eef0f7;margin:0}'
    + '.box{background:#fff;padding:32px;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,.08);width:320px;max-width:calc(100vw - 40px)}'
    + 'h2{margin:0 0 16px;font-size:20px}input{width:100%;padding:10px 12px;font-size:16px;border:1.5px solid #ddd;border-radius:10px;box-sizing:border-box}'
    + 'button{width:100%;margin-top:12px;padding:10px;font-size:16px;border:0;border-radius:10px;background:#B3282D;color:#fff;cursor:pointer}'
    + '.err{color:#c00;font-size:14px;margin:0 0 12px}</style></head><body><div class="box"><h2>🔒 Web Truyện</h2>'
    + (msg ? '<p class="err">' + msg + '</p>' : '')
    + '<form method="POST" action="/login"><input type="password" name="pw" placeholder="Mật khẩu" autocomplete="current-password" autofocus>'
    + '<button type="submit">Vào viết</button></form></div></body></html>';
}

export default {
  async fetch(request, env) {
    if (!env.SITE_PASSWORD) {
      return new Response('Chưa cấu hình SITE_PASSWORD.', { status: 500 });
    }
    const url = new URL(request.url);

    if (url.pathname === '/login' && request.method === 'POST') {
      let pw = '';
      try { pw = (await request.formData()).get('pw') || ''; } catch (e) {}
      if (pw === env.SITE_PASSWORD) {
        const tok = await tokenFor(env);
        return new Response(null, {
          status: 302,
          headers: {
            'Location': '/',
            'Set-Cookie': `${COOKIE}=${tok}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=${MAX_AGE}`,
          },
        });
      }
      return new Response(loginPage('Sai mật khẩu, thử lại nhé.'),
        { status: 401, headers: { 'Content-Type': 'text/html; charset=utf-8' } });
    }

    if (url.pathname === '/logout') {
      return new Response(null, {
        status: 302,
        headers: { 'Location': '/', 'Set-Cookie': `${COOKIE}=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0` },
      });
    }

    if (getCookie(request, COOKIE) === await tokenFor(env)) {
      return env.ASSETS.fetch(request);
    }
    return new Response(loginPage(''), { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
  },
};
