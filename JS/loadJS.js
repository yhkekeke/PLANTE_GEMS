/** 引入iconify、header、footer、fixed */
$(function(){
    const scriptElement = document.createElement('script');
    scriptElement.src = "https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js";
    scriptElement.crossOrigin = "anonymous";
    $("head").append(scriptElement);
    // crossOrigin 主要是用來處理跨域請求的相關設置:
    // 1. 設置為 anonymous，表示不使用使用者的驗證信息進行跨域請求。通常在引入跨域的 JavaScript 文件時，如果該文件支持匿名訪問，就可以使用 anonymous。
    // 2. 設置為 use-credentials，表示使用使用者的驗證信息進行跨域請求。這在需要使用者驗證信息的情況下使用。
    // 3. 沒有設置，默認值通常為空字符串 ''。這表示使用默認的同源策略，即只能請求同一域的資源，不允許跨域請求。

    $("body").prepend('<div id="header"></div>');
    $("#header").load("../header.html");
    $("body").append('<div id="footer"></div>');
    $("#footer").load("../footer.html");
    // append 將元素加到指定元素的末尾
    // prepend 將元素加到指定元素的開頭
});