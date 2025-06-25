window.addEventListener('DOMContentLoaded', () => {
    dropDown();
    loadPage('profile');
});

function dropDown() {
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const page = e.target.dataset.page;
            loadPage(page);
        });
    });
}

function loadPage(page) {
    fetch(`${page}/${page}.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById("content").innerHTML = html;
        })
        .catch(error => console.error("page load error:", error));
}
