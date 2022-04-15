$(function () {
    const pathTocHeaderMap = {
        "/docs/get-started/": "get-started-with-pulumi-toc-header",
        "/docs/intro/": "intro-toc-header",
        "/docs/guides/": "user-guides-toc-header",
        "/docs/reference/": "reference-toc-header",
        "/docs/troubleshooting/": "support-toc-header",
    }

    Object.keys(pathTocHeaderMap).map(
        key => {
            if (document.location.pathname === key) {
                var container = document.getElementById('left-nav');
                var scrollTo = document.getElementById(pathTocHeaderMap[key]);
                container.scrollTop = scrollTo.offsetTop;
            }
        }
    )
});