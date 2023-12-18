// 緩存目標元素???重要嗎?效果大嗎?
//  var $newsSections = $("#news section");
// $("#news section").each(function(){}

// if判斷重複，一般建議拉出來寫嗎?(LIKE isInVP?)

function isInVP(element) {
    let scroll_top = $(window).scrollTop();
    let element_top = $(element).offset().top;

    if(scroll_top + document.documentElement.clientHeight >= element_top){
        return true;
    }
}

$(function(){
    var $newsSections = $("#news section");

    $newsSections.each(function(){
        // 如果目標元素進入視口則fadeIn
        if(isInVP($(this))){
            $(this).addClass("fadeIn");
        }
    });
    $(document).scroll(function(){
        // 取得目標元素
        $newsSections.each(function(){
            // 如果目標元素進入視口則fadeIn
            if(isInVP($(this))){
                $(this).addClass("fadeIn");
            }
        });
    });
})

// 一進網頁 監聽scroll, 幫每個 section 處理 fade 
// 監聽 tab 變化, 幫每個 section 處理 fade  