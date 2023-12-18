$(function(){
    faqOpen("aboutGems");
    faqToggle("aboutGems");
    faqToggle("aboutBuying");
    faqToggle("aboutQuality");
    faqToggle("aboutServer");

    $("article").click(function(){
        // 初始化
        $("article").find("p.faq_a").slideUp(750, "easeInOutBack");
        $("article").find(".faq_q>p").css({ "color": "var(--Cblack)", });
        $("article").find(".circleBTN>p").removeClass('down');

        var faqA = $(this).find("p.faq_a");

        if(!faqA.is(":visible")){
            faqA.slideDown(750, "easeOutCubic");
            $(this).find(".faq_q>p").css({ "color": "var(--Cdpp)", });
            $(this).find(".circleBTN>p").addClass('down');
            console.log($(this).find(".circleBTN>p"))
        }
    })
})

function faqOpen(ID){
    $(`p#${ID}`).addClass("showType");
    $(`main>div.${ID}`).addClass("block").addClass("customAni");
    $(`main>div.${ID}>article`).addClass("fadeIn");
}

function faqToggle(ID){
    $(`#${ID}`).click(function(){
        faqOpen(ID);

        $(`nav>p:not(#${ID})`).removeClass("showType");
        $(`main>div:not(.${ID})`).removeClass("block").removeClass("customAni");
    })
}