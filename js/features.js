document.addEventListener("DOMContentLoaded", () => {
    // 1. Reading Progress Bar
    const progressBar = document.getElementById("reading-progress");
    if (progressBar) {
        window.addEventListener("scroll", () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercentage = (scrollTop / scrollHeight) * 100;
            progressBar.style.width = scrollPercentage + "%";
        }, { passive: true });
    }

    // 2. Scroll to Top Button
    const scrollToTopBtn = document.getElementById("scroll-to-top");
    if (scrollToTopBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add("show");
            } else {
                scrollToTopBtn.classList.remove("show");
            }
        }, { passive: true });

        scrollToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // 3. Dark Mode Toggle
    const themeToggleBtn = document.getElementById("theme-toggle");
    if (themeToggleBtn) {
        const currentTheme = localStorage.getItem("theme") || "light";
        if (currentTheme === "dark") {
            document.body.classList.add("dark-mode");
            themeToggleBtn.textContent = "☀️";
        }

        themeToggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            let theme = "light";
            if (document.body.classList.contains("dark-mode")) {
                theme = "dark";
                themeToggleBtn.textContent = "☀️";
            } else {
                themeToggleBtn.textContent = "🌙";
            }
            localStorage.setItem("theme", theme);
            
            // Sync Utterances theme if exists
            const utterancesIframe = document.querySelector('.utterances-frame');
            if (utterancesIframe) {
                const message = {
                    type: 'set-theme',
                    theme: theme === 'dark' ? 'github-dark' : 'github-light'
                };
                utterancesIframe.contentWindow.postMessage(message, 'https://utteranc.es');
            }
        });
    }
});

    // 4. Search and Filter (only on index.html)
    const searchInput = document.getElementById("search-input");
    const tagBtns = document.querySelectorAll(".tag-btn");
    const postLinks = document.querySelectorAll(".post-link");

    if (searchInput && postLinks.length > 0) {
        let currentTag = "all";
        let searchQuery = "";

        const filterPosts = () => {
            postLinks.forEach(link => {
                const title = link.querySelector("h3").textContent.toLowerCase();
                const desc = link.querySelector("p").textContent.toLowerCase();
                
                // Keyword to Tag mapping logic
                let postTags = [];
                if (title.includes("cnn") || title.includes("image") || title.includes("yolo") || title.includes("object")) postTags.push("CV", "DL");
                if (title.includes("tree") || title.includes("forest") || title.includes("xgboost") || title.includes("lightgbm")) postTags.push("ML");
                if (title.includes("sql") || title.includes("database")) postTags.push("DB");
                if (title.includes("fastapi") || title.includes("docker") || title.includes("conda")) postTags.push("Other");
                if (postTags.length === 0) postTags.push("ML"); // default fallback

                const matchesSearch = title.includes(searchQuery) || desc.includes(searchQuery);
                const matchesTag = currentTag === "all" || postTags.includes(currentTag);

                if (matchesSearch && matchesTag) {
                    link.style.display = "block";
                } else {
                    link.style.display = "none";
                }
            });
        };

        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value.toLowerCase();
            filterPosts();
        });

        tagBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                tagBtns.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                currentTag = btn.getAttribute("data-tag");
                filterPosts();
            });
        });
    }
