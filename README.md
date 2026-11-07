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

## Bản online — GitHub Pages, vào thẳng không cần mật khẩu
- Repo để **Public** + bật Pages (Settings → Pages → Branch: `main` / root) thì web chạy tại:
  `https://huongtt02tgdb-cmd.github.io/web-truyen/` — mở link là vào viết ngay.
- Lưu ý: public nghĩa là ai cũng xem/mở được **trang web trống** này, nhưng **truyện bạn viết
  KHÔNG nằm trên GitHub** — chữ lưu trong trình duyệt của từng máy (xem mục Lưu trữ), người khác
  mở link chỉ thấy trang trắng của họ, không thấy truyện của bạn.

## Lưu trữ — đọc kỹ
Dữ liệu lưu trong **trình duyệt của từng máy** (localStorage), không đồng bộ giữa các máy
và sẽ mất nếu xóa dữ liệu trình duyệt. Hãy bấm **“Xuất bản sao”** thường xuyên để giữ file `.json`,
khi cần thì dùng **“Nhập bản sao”** ở máy khác để khôi phục.
