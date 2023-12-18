let lastScrollTop = 0;
// 初始化: 上次滾動位置為0
function scrollBack(element){
    let currentScrollTop = $(window).scrollTop();
    // 取得本次滾動位置

    if ( currentScrollTop > lastScrollTop) {
        $(element).addClass("none");
        // .removeClass("sticky");
    } else {
        $(element).removeClass("none");
    }

    lastScrollTop = currentScrollTop;
}

function isMobile() {
    return window.innerWidth <= 768;
}

$(function(){
    if (isMobile()){
        $(document).scroll(function(){
            scrollBack("header");
            // scrollBack("aside");
            // 這個沒成功，因為她是sticky?
        });
    }
})
