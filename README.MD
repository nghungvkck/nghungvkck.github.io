# nghung-Blog

Chào mọi người, mình là Hưng. Đây là mã nguồn trang blog cá nhân của mình, nơi chia sẻ các kiến thức về Học máy (Machine Learning), Trí tuệ nhân tạo (AI), Cơ sở dữ liệu và các chủ đề liên quan.

## Tổng quan Hệ thống (System Overview)

Dự án này là một trang web tĩnh (Static Web) hoàn toàn không sử dụng Backend, được xây dựng bằng **HTML, CSS và Javascript thuần**. Mặc dù là web tĩnh, dự án đã được tích hợp nhiều tính năng hiện đại để tối ưu hóa trải nghiệm người dùng (UX) và chuẩn SEO.

### Các tính năng nổi bật:
- 🌙 **Chế độ Tối/Sáng (Dark Mode):** Cho phép người dùng chuyển đổi giao diện sáng/tối dễ dàng, tự động lưu trạng thái (Preference) vào trình duyệt.
- 🔍 **Tìm kiếm và Phân loại (Search & Filter):** Thanh tìm kiếm và bộ lọc theo thẻ (Tags) hoạt động tức thời trên giao diện (Real-time client-side filtering) mà không cần tải lại trang.
- 📖 **Trải nghiệm đọc tối ưu:** 
  - Thanh tiến trình đọc (Reading Progress Bar).
  - Tự động tạo Mục lục (Table of Contents - TOC) từ các thẻ Heading (`<h2>`, `<h3>`).
  - Nút cuộn lên đầu trang (Scroll to Top).
- 💬 **Hệ thống Bình luận:** Tích hợp **Utterances** (dựa trên GitHub Issues) để quản lý bình luận một cách tự nhiên và an toàn.
- 🌐 **Tối ưu chuẩn SEO:** Hỗ trợ đầy đủ các thẻ Open Graph (cho Facebook, LinkedIn chia sẻ), `sitemap.xml` và `robots.txt`.
- 💻 **Syntax Highlighting:** Sử dụng `Highlight.js` để tự động tô màu các đoạn code snippet trong bài viết.

## Cấu trúc thư mục

- `pages/`: Chứa tất cả các bài viết của Blog (Mỗi bài là một file `.html`).
- `css/`: Chứa các file định dạng giao diện (`style.css`, `article.css`).
- `js/`: Chứa mã Javascript xử lý logic (`article.js` cho TOC, `features.js` cho Dark mode, Search, Progress bar...).
- `images/`: Nơi lưu trữ hình ảnh của toàn bộ blog.
- `index.html`: Trang chủ của blog.
- `about.html`: Trang thông tin cá nhân.
- `sitemap.xml` & `robots.txt`: File hỗ trợ SEO.

## Hướng dẫn cho AI (Tạo bài viết mới tự động)

Nếu bạn muốn nhờ một trợ lý AI (như ChatGPT, Gemini, Claude) viết bài mới và tự động chèn vào code của dự án một cách chuẩn xác nhất mà không làm hỏng cấu trúc các tính năng hiện tại, vui lòng gửi cho AI file hướng dẫn này: 
👉 [**AI_WRITER_GUIDE.md**](./AI_WRITER_GUIDE.md)

---

## Liên hệ

- GitHub: [@nghungvkck](https://github.com/nghungvkck)
- Email: [nghungvkck@gmail.com](mailto:nghungvkck@gmail.com)
- Blog: [nghung-blog](https://nghungvkck.github.io/)
