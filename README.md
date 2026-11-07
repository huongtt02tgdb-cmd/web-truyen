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
- Mở thẳng file `index.html`, hoặc bật GitHub Pages cho repo này
  (Settings → Pages → Branch: `main` / root) rồi vào địa chỉ `https://<tên-github>.github.io/web-truyen/`

## Lưu trữ — đọc kỹ
Dữ liệu lưu trong **trình duyệt của từng máy** (localStorage), không đồng bộ giữa các máy
và sẽ mất nếu xóa dữ liệu trình duyệt. Hãy bấm **“Xuất bản sao”** thường xuyên để giữ file `.json`,
khi cần thì dùng **“Nhập bản sao”** ở máy khác để khôi phục.
