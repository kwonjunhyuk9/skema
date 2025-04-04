// 기본 페이지 로딩하기
window.addEventListener('DOMContentLoaded', () => {
    loadPage('profile');
});

// 함수 호출 시 페이지 전환하기
function loadPage(page) {
    fetch(`${page}/${page}.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById("content").innerHTML = html;
        })
        .catch(error => console.error("page load error:", error));
}