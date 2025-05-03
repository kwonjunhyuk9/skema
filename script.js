window.addEventListener('DOMContentLoaded', () => {
    loadPage('profile');
});

function loadPage(page) {
    fetch(`${page}/${page}.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById("content").innerHTML = html;
        })
        .catch(error => console.error("page load error:", error));
}