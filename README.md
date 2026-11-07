# Web Truyện — Viết & Lưu

Web viết truyện tĩnh (1 file `index.html`, không cần server/backend), cấu trúc như kotoba:
trang chính là danh sách truyện → vào từng truyện là danh sách chương → vào từng chương để viết.

## Tính năng
- Tạo nhiều **truyện**, mỗi truyện có nhiều **chương**
- **Tự lưu** khi đang gõ (hiện trạng thái Đang lưu / Đã lưu), mở lại còn nguyên
- **Tìm kiếm** truyện, và tìm chương theo tiêu đề / nội dung
- **Đếm chữ** trực tiếp: số chữ, số ký tự, thời gian đọc ước tính + tổng chữ của cả truyện
- Tải từng chương / cả truyện xuống dạng `.txt`
- **Xuất / Nhập bản sao** (file `.json`) để chuyển máy hoặc sao lưu

## Cách chạy
- Mở thẳng file `index.html` trên máy, hoặc dùng bản online có mật khẩu như kotoba (mục dưới).

## Bản online riêng tư — Cloudflare Worker + cổng mật khẩu (giống kotoba)
- Repo để **Private**. Mỗi lần push `index.html` / `site-worker/**` lên `main`,
  GitHub Actions (`.github/workflows/deploy.yml`) tự deploy lên Worker **truyen-site**:
  địa chỉ `https://truyen-site.myanl-kotoba.workers.dev`
- Chưa đăng nhập thì chỉ thấy trang **"Web Truyện — Đăng nhập"**; mật khẩu nằm ở secret
  `SITE_PASSWORD`, cookie đăng nhập 30 ngày (HttpOnly). `run_worker_first = ["/*"]` là bắt buộc
  để file tĩnh không bypass cổng mật khẩu.
- Repo cần 3 secrets (Settings → Secrets and variables → Actions), dùng lại đúng bộ của kotoba:
  `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`, `SITE_PASSWORD` (mật khẩu tự đặt cho web này).
  Thêm secrets xong thì chạy lại workflow (Actions → deploy → Run workflow) nếu lượt chạy trước bị lỗi thiếu secrets.

## Lưu trữ — đọc kỹ
Dữ liệu lưu trong **trình duyệt của từng máy** (localStorage), không đồng bộ giữa các máy
và sẽ mất nếu xóa dữ liệu trình duyệt. Hãy bấm **“Xuất bản sao”** thường xuyên để giữ file `.json`,
khi cần thì dùng **“Nhập bản sao”** ở máy khác để khôi phục.
