document.addEventListener("DOMContentLoaded", () => {
    const navLeft = document.querySelector(".article-page .navbar .nav-left");
    const articleBody = document.body;
    const pagePath = window.location.pathname.toLowerCase();
    const booksHref =
        pagePath.includes("sql") || pagePath.includes("vector")
            ? "../index.html#database-ai"
            : "../index.html#machine-learning";

    if (articleBody.classList.contains("article-page") && navLeft && !navLeft.querySelector(".brand-mark")) {
        navLeft.innerHTML = `
            <a href="../index.html" class="brand-mark" aria-label="nghung Blog">
                <span class="brand-ring"></span>
            </a>
            <div class="nav-links">
                <a href="../index.html">Home</a>
                <a href="${booksHref}">Books</a>
                <a href="#">Facebook</a>
                <a href="#">GitHub</a>
            </div>
        `;
    }

    const layout = document.querySelector(".article-layout");
    const article = document.querySelector(".post-container");
    const tocRoot = document.querySelector(".article-toc");
    const content = document.querySelector(".post-content");

    if (!layout || !article || !tocRoot || !content) {
        return;
    }

    const tocTitle = document.querySelector(".article-toc-title");
    if (tocTitle) {
        tocTitle.textContent = "Mục lục";
    }

    const headings = Array.from(content.querySelectorAll("h2, h3"));

    if (!headings.length) {
        return;
    }

    const slugify = (text) =>
        text
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9\s-]/g, "")
            .trim()
            .replace(/\s+/g, "-");

    headings.forEach((heading, index) => {
        if (!heading.id) {
            heading.id = `${slugify(heading.textContent) || "section"}-${index + 1}`;
        }
    });

    const list = document.createElement("ul");
    list.className = "toc-list";

    headings.forEach((heading) => {
        const item = document.createElement("li");
        item.className = `toc-item toc-${heading.tagName.toLowerCase()}`;

        const link = document.createElement("a");
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent.trim();

        item.appendChild(link);
        list.appendChild(item);
    });

    tocRoot.appendChild(list);

    const links = Array.from(list.querySelectorAll("a"));

    const updateActive = () => {
        let currentId = headings[0].id;

        headings.forEach((heading) => {
            const rect = heading.getBoundingClientRect();
            if (rect.top <= 180) {
                currentId = heading.id;
            }
        });

        links.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
        });
    };

    const onScroll = () => {
        updateActive();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
});
