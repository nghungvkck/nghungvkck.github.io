# Hướng dẫn dành cho Trợ lý AI (ChatGPT / Gemini / Claude)

**Bối cảnh:** Bạn đang đóng vai trò là một người viết nội dung (Content Creator) và lập trình viên. Bạn được yêu cầu tạo một bài viết blog mới cho trang web tĩnh của người dùng.

Để đảm bảo toàn bộ giao diện và các tính năng (Dark mode, Mục lục tự động, SEO, Bình luận, Tìm kiếm) hoạt động chính xác, **BẠN PHẢI TUÂN THỦ NGHIÊM NGẶT** các bước và cấu trúc HTML mẫu dưới đây:

---

### Bước 1: Tạo file bài viết (.html) mới trong thư mục `pages/`
Tạo một file `.html` (Ví dụ: `ten_bai_viet.html`) và đặt vào thư mục `pages/`. File bắt buộc phải có nội dung base template như sau:

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>[ĐIỀN TÊN BÀI VIẾT VÀO ĐÂY] - Hung Blog</title>
    <!-- SEO & Open Graph Tags -->
    <meta property="og:title" content="[ĐIỀN TÊN BÀI VIẾT VÀO ĐÂY] - Hung Blog" />
    <meta property="og:type" content="article" />
    
    <link rel="stylesheet" href="../css/style.css?v=20260522-1" />
    <link rel="stylesheet" href="../css/article.css?v=20260522-1" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@700&display=swap" rel="stylesheet" />
    <!-- Highlight.js cho tô màu code -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
    <script>hljs.highlightAll();</script>
    <!-- Script tính năng: Dark mode, Progress bar, Scroll to top -->
    <script src="../js/features.js" defer></script>
    <style>
        /* Tuỳ chỉnh nhẹ cho code block */
        pre code.hljs {
            border-radius: 8px;
            padding: 16px;
            font-size: 0.9rem;
            line-height: 1.5;
        }
    </style>
</head>
<body class="article-page">
    <div id="reading-progress"></div>

    <nav class="navbar">
        <div class="nav-left">
            <a href="../index.html" class="brand-mark" aria-label="nghung Blog">
                <span class="brand-ring"></span>
            </a>
            <div class="nav-links">
                <a href="../index.html">Home</a>
                <a href="../index.html#machine-learning">Books</a>
                <a href="https://www.facebook.com/nguyen.hung.577643/">Facebook</a>
                <a href="https://github.com/nghungvkck">GitHub</a>
                <a href="../cv.pdf" download style="color: var(--accent, #0056b3); font-weight: bold;">Tải CV</a>
            </div>
        </div>
        <div class="nav-right">
            <button id="theme-toggle" class="icon-btn" aria-label="Chuyển giao diện sáng tối">🌙</button>
        </div>
    </nav>

    <main class="blog-post">
        <div class="article-layout">
            <aside class="article-sidebar">
                <h3 class="article-toc-title">Mục lục</h3>
                <nav class="article-toc"></nav>
            </aside>

            <article class="post-container">
                <header class="post-header">
                    <h1>[ĐIỀN TÊN BÀI VIẾT VÀO ĐÂY]</h1>
                    <div class="post-meta">
                        <span>Ngày đăng: [ĐIỀN NGÀY HIỆN TẠI VÀO ĐÂY (Vd: 15/10/2026)]</span>
                    </div>
                </header>

                <div class="post-content">
                    <!-- NỘI DUNG BÀI VIẾT BẮT ĐẦU Ở ĐÂY -->
                    
                    <h2>I. Tiêu đề phần 1 (Sử dụng thẻ h2)</h2>
                    <p>Nội dung đoạn văn bản...</p>
                    
                    <h3>1. Tiêu đề phụ (Sử dụng thẻ h3)</h3>
                    <p>Lưu ý: Mục lục (Table of Contents) sẽ được trình duyệt tự động generate từ các thẻ <code>&lt;h2&gt;</code> và <code>&lt;h3&gt;</code>. AI không được tự viết List mục lục tĩnh bằng tay.</p>
                    
                    <pre><code class="language-python"># Sử dụng thẻ pre và code cho code block. Điền đúng tên ngôn ngữ.
def hello_world():
    print("Hello AI!")
</code></pre>

                    <!-- Khối thông tin chú ý nổi bật (Nên dùng nếu có Lưu ý) -->
                    <div style="background: #f8fbff; border: 1px solid #dce9ff; border-radius: 10px; padding: 18px; margin: 20px 0;">
                        <h3 style="margin-top: 0;">🚀 Lưu ý quan trọng</h3>
                        <p>Nội dung cần chú ý...</p>
                    </div>

                    <!-- NỘI DUNG BÀI VIẾT KẾT THÚC Ở ĐÂY -->
                </div>

                <!-- KHU VỰC BÌNH LUẬN (Utterances) - AI KHÔNG ĐƯỢC XOÁ ĐOẠN NÀY -->
                <div class="comments-section" style="margin-top: 50px; border-top: 1px solid var(--border); padding-top: 30px;">
                    <h3>Bình luận</h3>
                    <script src="https://utteranc.es/client.js"
                            repo="nghungvkck/nghungvkck.github.io"
                            issue-term="pathname"
                            theme="github-light"
                            crossorigin="anonymous"
                            async>
                    </script>
                </div>
            </article>
        </div>
    </main>

    <button id="scroll-to-top" aria-label="Lên đầu trang">↑</button>

    <!-- Thêm Javascript tạo mục lục tự động - KHÔNG ĐƯỢC XOÁ -->
    <script src="../js/article.js"></script>
</body>
</html>
```

---

### Bước 2: Gọi Hình Ảnh (Nếu có)
- Trích xuất mô tả hình ảnh hoặc sử dụng hình ảnh được cấp. Hình ảnh luôn được đặt trong thư mục `images/`.
- Trong file bài viết `.html`, gọi ảnh bằng đường dẫn tương đối so với file html (đang nằm trong `pages/`):
  `<img src="../images/ten_hinh_anh.jpg" alt="Mô tả ảnh" style="max-width: 100%; border-radius: 8px; margin: 20px 0;" />`.

---

### Bước 3: Cập nhật trang chủ (`index.html`)
Sau khi tạo file HTML bài viết xong, BẠN PHẢI MỞ file `index.html` lên và chèn đoạn code thẻ sau vào bên trong `<section id="machine-learning" class="post-section">`.
(Hãy chèn nó lên **ngay đầu danh sách** để bài mới nhất hiện ở trên cùng).

**Cấu trúc một card bài viết để chèn vào `index.html`:**

```html
            <a href="pages/ten_file_vua_tao.html" class="post-link">
                <article class="card">
                    <!-- Ảnh đại diện cho bài viết ngoài trang chủ -->
                    <img src="images/hinh_anh_dai_dien.jpg" alt="Tên Bài Viết" />
                    <div class="card-content">
                        <h3>[ĐIỀN TÊN BÀI VIẾT]</h3>
                        <p>[Viết tóm tắt ngắn gọn 1-2 dòng về bài viết để hiển thị ngoài trang chủ]</p>
                        <span class="post-date">[ĐIỀN NGÀY VÀO ĐÂY, Vd: 15 Thg 10 2026]</span>
                    </div>
                </article>
            </a>
```
*(Lưu ý: Thẻ `href` ở đây là `pages/` và `src` của ảnh là `images/` vì file index.html nằm ở ngoài cùng)*

---

### Bước 4: Cập nhật Sitemap & Robots
Ghi nhớ thêm 1 thẻ `<url><loc>https://nghungvkck.github.io/pages/ten_file_vua_tao.html</loc></url>` vào file `sitemap.xml` để trang web được tối ưu SEO.

### Checklist dành cho AI trước khi hoàn thành:
- [ ] File HTML của bài viết đã chứa thẻ `id="reading-progress"`, `<button id="theme-toggle">`, script `features.js` và khung bình luận `<div class="comments-section">`.
- [ ] Bố cục bài viết đã dùng đúng các thẻ Heading `<h2>` và `<h3>`.
- [ ] Block Code đã dùng `<pre><code class="language-...">`.
- [ ] Đã thêm card bài viết ra trang chủ `index.html`.
