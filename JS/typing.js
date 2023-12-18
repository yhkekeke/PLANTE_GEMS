/** blockquote 打字機 */
function isInVP(element) {
    let scroll_top = $(window).scrollTop();
    let element_top = $(element).offset().top;

    if(scroll_top + document.documentElement.clientHeight >= element_top){
        return true;
    }
}

$(document).scroll(function(){
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
            }
            // 加入打字機動畫
            $(this).addClass("typingText").css({
                "animation": animationValue,
                "width": textWidth+"px",
            });
        };
    });
});

function isChinese($element) {
    return /[\u4e00-\u9fa5]/.test($element);
}