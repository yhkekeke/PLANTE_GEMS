// 在網頁載入完成後執行
document.addEventListener("DOMContentLoaded", function () {
    // 引入 header.html 到 body 的最前面
    fetch("header.html")
        .then(response => response.text())
        .then(data => document.body.insertAdjacentHTML("afterbegin", data));

    // 引入 footer.html 到 body 的最後面
    fetch("footer.html")
        .then(response => response.text())
        .then(data => document.body.insertAdjacentHTML("beforeend", data));
});
