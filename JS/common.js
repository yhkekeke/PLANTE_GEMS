/** 某些頁面統一監控 circleBTN 點擊與恢復 */
$(function(){
    function CBTNs(page, text){
        $(page).find($(".circleBTN")).click(function(e){
            $(this).addClass("clickedCBTN");
            $(this).find("div").addClass("clickedCBTN");
            $(this).find("p").addClass("clickedCBTN");
            $(this).find("text").addClass("clickedCBTN");
        }).mouseleave(function(e){
            $(this).removeClass("clickedCBTN");
            $(this).find("div").removeClass("clickedCBTN");
            $(this).find("p").removeClass("clickedCBTN");
            $(this).find("text").removeClass("clickedCBTN");
        })
    }

    CBTNs("#contact","h4");
    CBTNs("#b612","h4");
    CBTNs("#banner","~h1");
});

/** 監視目標元素是否進入VP */
function isInVP(element) {
    // console.log('isInVP工作中');
    let scroll_top = $(window).scrollTop();
    let element_top = $(element).offset().top;
    if(scroll_top + document.documentElement.clientHeight >= element_top){
        return true;
    }
}
/** footer header 2show1 */
$(document).scroll(function(){
    // console.log('抓到scroll');
    if(isInVP($("#footer"))){
        console.log('看到footer了');
        $("div#header").addClass("none");
    }else{
        $("div#header").removeClass("none");
    }
})

/** header nav */
$(function(){
    $("header").find("dl").mouseenter(function(e){
        $(this).find("dd").stop(true).slideToggle(300,'linear');
        $(this).find("dt").addClass("headerShow")
        $(this).find("dd").addClass("headershow");
    }).mouseleave(function(e){
        $(this).find("dd").stop(true).slideToggle(300,'linear');
        $(this).find("dt").removeClass("headerShow");
        $(this).find("dd").removeClass("headershow");
    })
});

/** header&footer icon hover */
$(function(){
    function attrChange(touch, changeEle , content, changeTo, backedTo){
        $(touch).mouseenter(function(){ 
            $(this).find(changeEle).attr(content, changeTo);
        }).mouseleave(function() {
            $(this).find(changeEle).attr(content, backedTo);
        }).click(function(){
            $(this).find(changeEle).attr(content, changeTo);
        });
    }

    attrChange("header .member", "iconify-icon", "style", "color: #B96982", "color: #fff");
    attrChange("header .search", "iconify-icon", "style", "color: #B96982", "color: #fff");
    attrChange("footer .icon a","iconify-icon", "style", "color: #fffafa", "color: #646464");
    attrChange("footer dl:last-of-type dd","iconify-icon", "style", "color: #9C1F43", "color: #646464");
})

/** header search bar */
$(function(){
    $("header .search").click(function(){
        $(this).addClass("grow");
        $(this).find("iconify-icon").attr("style", "color: #B96982");
    }).focus(function(){
        $(this).find("iconify-icon").attr("style", "color: #B96982");
    });
    /** 因資料未處理，還無法查詢 */
    $("header .close").click(function(event){
        event.stopPropagation();
        $("header .search").removeClass("grow");
    })
})

/** index banner 輪播 */
$(function () {
    let index = 0;
    let timer;
    let interval = 5000;

    function initializeSlider() {
        let divWidth = $('#sliderBoard').width();
        let imgcount = $('#banner li').length;

        $('#banner li').width(divWidth);
        $('#banner').width(divWidth * imgcount);
        $('#banner').css('left', divWidth * index * -1);

        // 清空並重新生成 #bannerButton
        $('#bannerButton').empty();
        for (let i = 0; i < imgcount; i++) {
            $('#bannerButton').append('<li></li>');
        }
        $('#bannerButton li:first').addClass('clicked');

        // 重新綁定點擊事件
        $('#bannerButton li').click(function () {
            clearInterval(timer);
            index = $(this).index();

            $('#banner').animate({
                left: divWidth * index * -1,
            });

            $(this).addClass('clicked');
            $('#bannerButton li').not(this).removeClass('clicked');

            startTimer();
        });
        startTimer(); // 確保最初設置計時器
    }

    function startTimer() {
        clearInterval(timer); // 清除現有計時器
        timer = setInterval(moveToNext, interval);
    }

    function moveToNext() {
        switchImage();
        startTimer(); // 在每次触发定时器时重新设置
    }
    
    function switchImage() {
        let divWidth = $('#sliderBoard').width();
        let imgcount = $('#banner li').length;
    
        if (index < imgcount - 1) {
            index++;
        } else {
            index = 0;
        }
    
        $('#banner').animate({
            left: divWidth * index * -1,
        });
    
        $(`#bannerButton li:eq(${index})`).addClass('clicked');
        $('#bannerButton li').not(`:eq(${index})`).removeClass('clicked');
    }
    
    // 初始化
    initializeSlider();
    startTimer(); // init初始化末行已執行這項，這行能否不要???(不確定)

    // 視窗大小改變時重新計算輪播尺寸和 #contentButton
    $(window).resize(function () {
        clearInterval(timer);
        $('#banner').stop(true, true); // 停止當前動畫並立即完成
        initializeSlider();
        startTimer();
    });
});

$(function(){
    /** faq 被選擇的tab */
    function faqOpen(ID){
        $(`p#${ID}`).addClass("faqShow");
        $(`main div.${ID}`).addClass("faqblockShow");
        $(`main div.${ID}>article`).addClass("fadeIn");
    }
    /** faq 監聽tab click事件及處理 */
    function faqToggle(ID){
        $(`#${ID}`).click(function(){
            $(`nav>p`).removeClass("faqShow");
            $(`main div`).removeClass("faqblockShow");

            faqOpen(ID);
        })
    }

    /** faq tab初始化與切換*/
    faqOpen("aboutGems");
    faqToggle("aboutGems");
    faqToggle("aboutBuying");
    faqToggle("aboutQuality");
    faqToggle("aboutServer");

    $("#faq").find($("article")).click(function(){
        var faqA = "p.faq_a";

        // 初始化所有faqA
        $("article").find("p.faq_a").slideUp(750, "easeInOutBack");
        $("article").find(".faq_q>p").removeClass("showColor");
        $("article").find(".circleBTN>p").removeClass('down');

        var faqA = $(this).find("p.faq_a");

        if(!faqA.is(":visible")){
            faqA.slideDown(750, "easeOutCubic");
            $(this).find(".faq_q>p").addClass("showColor");
            console.log($(this))
            $(this).find(".circleBTN>p").addClass('down');
        }
    })
})

/** blockquote 打字機 */
$(document).scroll(function(){
    function isChinese($element) {
        return /[\u4e00-\u9fa5]/.test($element);
    }

    // 取得目標元素，檢查滾動位置
    $(".typing").each(function(){
        // 如果目標元素進入視口，使用打字機效果顯示文字
        if(isInVP($(this))){
            // 取得文本內容
            var textContent = $(this).text();
            // 取得字體大小，運用 parseFloat 解析字符串，返回一個浮點數
            var fontSize = parseFloat($(this).css("font-size"));
            // 取得字元數
            var characterCount = textContent.length;
            // 動態地設定 animation 的值
            var animationValue = "typing 2.5s steps(" + characterCount + ") 1, caret 1s steps(1) 5";
            var textWidth = characterCount*fontSize;
            // 判斷文本內容是不是英文
            if(!isChinese(textContent)){
                textWidth *= 0.45;
                if($(this).hasClass('phone')){
                    textWidth *= 0.6;
                }
            }
            // 加入打字機動畫
            $(this).addClass("typingText").css({
                "animation": animationValue,
                "width": textWidth+"px",
            });
        };
    });
});

/** b612 圖文對照hover */
$(function() {
    function textApic(selector, text) {
        $(selector).mouseenter(function(e) {
            $(selector).find("img").addClass("textApic");
            $(selector).find(text).addClass("textBGCtoHOVER");
        }).mouseleave(function(e) {
            $(selector).find("img").removeClass("textApic");
            $(selector).find(text).removeClass("textBGCtoHOVER");
        });
    }

    textApic('.necklace', 'h4');
    textApic('.bracelet', 'h4');
    textApic('.earrings', 'h4');
    textApic('#index .necklace', 'p');
    textApic('#index .bracelet', 'p');
    textApic('#index .earrings', 'p');
    textApic('#index .diamondring', 'p');
    textApic('#index .diamonwristband', 'p');
});




// 控制顯示"goToTopBtn"的時機(依照視口滾動)
// window.onscroll = function() {
//     scrollFunction();
// };

// function scrollFunction() {
//     var button = document.getElementById("goToTopBtn");

//     // 在第一視口時隱藏，之後顯示
//     if(window.scrollY >= window.innerHeight){
//         button.style.display = "block";
//     }else{
//         button.style.display = "none";
//     }
// }

// $(function () {
//     let index = 0;
//     let timer;
//     let interval = 4000;

//     function carousel() {

//         let divWidth = $('#spotlight').width();
//         let imgcount = $('#spotlight section').length;

//         $('.carousel>div').width(divWidth);
//         $('#spotlight').width(divWidth * imgcount);
//         $('#spotlight').css('left', divWidth * index * -1);

//         // 清空並重新生成 #contentButton
//         $('#contentButton').empty();
//         for (let i = 0; i < imgcount; i++) {
//             $('#contentButton').append('<li></li>');
//         }
//         $('#contentButton li:first').addClass('clicked');

//         // 重新綁定點擊事件
//         $('#contentButton li').click(function () {
//             clearInterval(timer);
//             index = $(this).index();

//             $('#spotlight').animate({
//                 left: divWidth * index * -1,
//             });

//             $(this).addClass('clicked');
//             $('#contentButton li').not(this).removeClass('clicked');

//             startTimer();
//         });
//         startTimer(); // 確保最初設置計時器
//     }

//     function startTimer() {
//         clearInterval(timer); // 清除現有計時器
//         timer = setInterval(moveToNext, interval);
//     }

//     function moveToNext() {
//         switchImage();
//         startTimer(); // 在每次触发定时器时重新设置
//     }
    
//     function switchImage() {
//         let divWidth = $('.carousel').width();
//         let imgcount = $('#spotlight section').length;
    
//         if (index < imgcount - 1) {
//             index++;
//         } else {
//             index = 0;
//         }
    
//         $('#spotlight').animate({
//             left: divWidth * index * -1,
//         });
    
//         $(`#contentButton li:eq(${index})`).addClass('clicked');
//         $('#contentButton li').not(`:eq(${index})`).removeClass('clicked');
//     }
    
//     // 初始化
//     carousel();
//     startTimer(); // init初始化末行已執行這項，這行能否不要???(不確定)

//     // 視窗大小改變時重新計算輪播尺寸和 #contentButton
//     $(window).resize(function () {
//         clearInterval(timer);
//         $('#soptlight').stop(true, true); // 停止当前动画并立即完成
//         initializeSlider();
//         startTimer();
//     });
// });