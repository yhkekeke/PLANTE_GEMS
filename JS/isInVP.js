function isInVP(element) {
    let scroll_top = $(window).scrollTop();
    let element_top = $(element).offset().top;

    if(scroll_top + document.documentElement.clientHeight >= element_top){
        return true;
    }
}