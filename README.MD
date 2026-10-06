# nghung-Blog

Chào Mọi người, mình là Hưng, đây là trang blog cá nhân của mình.
Dự án là một trang web tĩnh (Static Web) được xây dựng bằng HTML, CSS, JS.

## Liên hệ

- GitHub: [@nghungvkck](https://github.com/nghungvkck)
- Email: [nghungvkck@gmail.com](mailto:nghungvkck@gmail.com)
- Blog: [nghung-blog](https://nghungvkck.github.io/)

---

## 🤖 Dành cho Trợ lý AI (Gemini / AI Assistant)

Nếu bạn là một AI đang được yêu cầu viết một bài blog mới cho dự án này, hãy tuân thủ nghiêm ngặt các bước và cấu trúc dưới đây để đảm bảo giao diện và tất cả tính năng (Dark mode, Mục lục tự động, SEO, Bình luận, Tìm kiếm) hoạt động chính xác.

### Bước 1: Tạo file bài viết (.html) trong thư mục `pages/`
Tạo một file `.html` mới (ví dụ: `bai_viet_moi.html`) và đặt vào thư mục `pages/`. File phải tuân theo template HTML sau:

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tên bài viết của bạn - Hung Blog</title>
    <!-- SEO & Open Graph Tags -->
    <meta property="og:title" content="Tên bài viết của bạn - Hung Blog" />
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
                    <h1>Tên Bài Viết Của Bạn</h1>
                    <div class="post-meta">
                        <span>Ngày đăng: DD/MM/YYYY</span>
                    </div>
                </header>

                <div class="post-content">
                    <!-- NỘI DUNG BÀI VIẾT BẮT ĐẦU Ở ĐÂY -->
                    
                    <h2>I. Tiêu đề lớn (Sử dụng thẻ h2)</h2>
                    <p>Nội dung đoạn văn bản...</p>
                    
                    <h3>1. Tiêu đề phụ (Sử dụng thẻ h3)</h3>
                    <p>Mục lục (Table of Contents) sẽ được tự động generate từ các thẻ <code>&lt;h2&gt;</code> và <code>&lt;h3&gt;</code> bằng Javascript. Đừng tự viết mục lục tĩnh.</p>
                    
                    <pre><code class="language-python"># Sử dụng thẻ pre và code cho code block
def hello_world():
    print("Hello AI!")
</code></pre>

                    <!-- Có thể thêm các block nổi bật như sau -->
                    <div style="background: #f8fbff; border: 1px solid #dce9ff; border-radius: 10px; padding: 18px; margin: 20px 0;">
                        <h3 style="margin-top: 0;">🚀 Lưu ý quan trọng</h3>
                        <p>Nội dung cần chú ý...</p>
                    </div>

                    <!-- NỘI DUNG BÀI VIẾT KẾT THÚC Ở ĐÂY -->
                </div>

                <!-- KHU VỰC BÌNH LUẬN (Utterances) -->
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

    <!-- Thêm Javascript tạo mục lục tự động -->
    <script src="../js/article.js"></script>
</body>
</html>
```

### Bước 2: Thêm hình ảnh (Nếu có)
- Tải hoặc lưu hình ảnh vào thư mục `images/`.
- Trong file bài viết `.html`, gọi ảnh bằng đường dẫn tương đối: `<img src="../images/ten_hinh_anh.jpg" alt="Mô tả ảnh" />`.

### Bước 3: Cập nhật trang chủ (`index.html`)
Sau khi tạo file HTML bài viết mới, phải mở file `index.html` và thêm một block thẻ `<a>` chứa bài viết vào trong danh sách `class="post-section"`. Nên chèn lên đầu danh sách để bài mới nhất hiện lên trên.

**Cấu trúc một card bài viết trong `index.html`:**

```html
            <a href="pages/bai_viet_moi.html" class="post-link">
                <article class="card">
                    <img src="images/hinh_anh_dai_dien.jpg" alt="Tên Bài Viết" />
                    <div class="card-content">
                        <h3>Tên Bài Viết Của Bạn</h3>
                        <p>Một đoạn mô tả ngắn gọn về bài viết (khoảng 1-2 dòng).</p>
                        <span class="post-date">Ngày Thg Tháng Năm</span>
                    </div>
                </article>
            </a>
```

### Bước 4: Cập nhật file sitemap.xml
Nhớ cập nhật file `sitemap.xml` thêm đường dẫn trỏ tới bài viết mới để tối ưu SEO. Hoặc chạy script tự động generate sitemap nếu có.

**Lưu ý quan trọng cho AI:**
1. **Không làm hỏng cấu trúc hiện tại**: Các file `.html` luôn phải giữ đúng các thành phần như `id="reading-progress"`, `<button id="theme-toggle">`, và `<div class="comments-section">`.
2. **Mục lục (TOC)**: Được script `js/article.js` tự động tạo từ thẻ `h2` và `h3` bên trong `.post-content`.
3. **Format Code**: Sử dụng `<pre><code class="language-xxx">...</code></pre>` để code block được highlight đúng bởi thư viện Highlight.js.
