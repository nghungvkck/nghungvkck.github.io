# nghung-Blog

Blog tĩnh cá nhân về Machine Learning và Database, triển khai bằng HTML, CSS và JavaScript thuần.

## Tổng quan

- Entry point: `index.html`
- Nội dung bài viết: thư mục `pages/`
- Giao diện dùng chung: `css/style.css`
- Giao diện bài viết chi tiết: `css/focal-loss.css`
- Tương tác JavaScript: `js/main.js`
- Ảnh tĩnh: `images/`

## Sơ đồ cấu trúc ngắn gọn

```text
nghungBlog/
|-- index.html
|-- README.MD
|-- css/
|   |-- style.css
|   `-- focal-loss.css
|-- js/
|   `-- main.js
|-- images/
|   |-- focal.png
|   |-- MSE.png
|   |-- MAE.png
|   |-- huber-loss-function.png
|   `-- SQL-Databases.png
`-- pages/
    |-- focal-loss.html
    |-- mse-loss.html
    |-- mae-loss.html
    |-- huber-loss.html
    `-- SQL_database.html
```

## Nội dung hiện có

### Machine Learning

- `pages/focal-loss.html`
- `pages/mse-loss.html`
- `pages/mae-loss.html`
- `pages/huber-loss.html`

### Database

- `pages/SQL_database.html`

## Cách chạy local

Vì đây là static site, có 2 cách chạy:

### Cách 1: mở trực tiếp

Mở `index.html` bằng trình duyệt.

### Cách 2: chạy local server

Nếu máy có Python:

```bash
python -m http.server 8000
```

Sau đó truy cập `http://localhost:8000`.

## Công nghệ sử dụng

- HTML5
- CSS3
- JavaScript
- Google Fonts
- MathJax ở một số trang có công thức

## Gợi ý tổ chức lại để gọn hơn

Hiện tại project vẫn chạy tốt với cấu trúc hiện có. Nếu muốn dọn tiếp, nên ưu tiên:

1. Giữ nguyên `index.html`, `pages/`, `css/`, `js/`, `images/` vì đây là lõi của project.
2. Đổi tên `css/focal-loss.css` thành `css/post.css` hoặc `css/article.css` vì file này đang dùng chung cho nhiều bài, không chỉ riêng Focal Loss.
3. Tách phần CSS inline trong các file HTML sang stylesheet riêng nếu muốn dễ bảo trì hơn.
4. Chuẩn hóa navbar giữa các trang bài viết để tránh mỗi trang một biến thể.

## Ghi chú

- README cũ có nhắc tới `main.py`, nhưng cấu trúc hiện tại không còn file này trong project.
- README cũ cũng ghi `sql-injection.html`, trong khi file thực tế là `pages/SQL_database.html`.

## Liên hệ

- GitHub: [@nghungvkck](https://github.com/nghungvkck)
- Email: [nghungvkck@gmail.com](mailto:nghungvkck@gmail.com)
- Blog: [nghung-blog](https://nghungvkck.github.io/)
