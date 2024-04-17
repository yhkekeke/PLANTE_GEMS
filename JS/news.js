/** 監視目標元素是否進入VP */
function isInVP(element) {
  let scroll_top = $(window).scrollTop();
  let element_top = $(element).offset().top;

  if(scroll_top + document.documentElement.clientHeight >= element_top){
      return true;
  }
}

/** 當目標元素進入視口則加CSS */
function handleFade(){
  var $newsSections = $("#news section");
  $newsSections.each(function(){
      if(isInVP($(this))){
          $(this).addClass("fadeIn");
      };
  });
}

/** 抓取 #news section */
const $newsSections = $("#news section");
/** news section fadeIn */
$(function(){
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

// 
// 
// 


/** newsTag被點擊後給他樣式 */
function newsClicked(ID){
  $(`#${ID}`).addClass("clickedCBTN");
  $(`#${ID}`).find("div").addClass("clickedCBTN").addClass("pw");
}

/** newsTag被點擊後執行 */ 
const lis = document.getElementsByTagName("li");
function newsToggle(ID){
  $(`#${ID}`).click(function(){
      /** 初始化所有newsTag */
      $(lis).removeClass("clickedCBTN");
      $(lis).find("div").removeClass("clickedCBTN").removeClass("pw");
      console.log($(lis));
      /** 給被點擊的newsTag樣式 */
      newsClicked(ID);
  
      /** 先顯示所有news */
      $('section').addClass("grid");

      /** 不是ALL標籤的，篩選不屬於被點擊newsTag的，關閉 */
      if(ID !== "all"){
          $("section").each(function(){
              if($(this).find("." + ID).length <= 0){
              // $(this).find("." + ID) 返回的是包含這些元素的 jQuery 物件
                  $(this).removeClass("grid").addClass("none");
              };
          });
      }
      // console.log("here");
      handleFade();
  });
};



$(function(){
  /** news內容初始化 */
  newsClicked("all");

  /** 監聽newsTag的Click */
  newsToggle("all");
  newsToggle("events");
  newsToggle("feedback");
  newsToggle("article");

  /**一進網頁 監聽scroll, 幫每個 section 處理 fade  */
  handleFade();

  /** 當scroll，目前被點擊的目標元素，相應 section 處理 fade */
  $(document).scroll(function(){
      handleFade();
  });
})