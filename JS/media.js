let lastScrollTop = 0;
// 初始化: 上次滾動位置為0
function scrollBack(element) {
  let currentScrollTop = $(window).scrollTop();
  // 取得本次滾動位置

  if (currentScrollTop > lastScrollTop) {
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

$(function () {
  if (isMobile()) {
    $(document).scroll(function () {
      scrollBack("header");
      // scrollBack("aside");
      // 這個沒成功，因為她是sticky?
    });
  }
})

$(function () {
  $("iconify-icon").each(function () {
    var point = window.innerWidth;
    console.log(point);
    let $icon = $(this).find('svg');
    let iconW = $icon.width();
    let iconH = $icon.height();
    let scale;

    if (point >= 1920) {
      scale = 4;
    } else if (point <= 1920 && point >= 1024) {
      scale = 3;
    } else if (point <= 1024 && point >= 480) {
      scale = 2;
    }
    console.log(scale);
    iconW *= scale;
    iconH *= scale;

    // 將計算後的寬度和高度應用到 SVG 元素
    $icon.width(iconW);
    $icon.height(iconH);
  });
})