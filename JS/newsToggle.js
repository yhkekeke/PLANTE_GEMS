$(function(){
    newsOpen("all");
    newsToggle("all");
    newsToggle("events");
    newsToggle("feedback");
    newsToggle("article");
})

function newsOpen(ID){
    $(`#${ID}`).addClass("showType");
    $(`#${ID}`).find("img").attr("src", "../pic/circleBTN_pw_C_md.png").addClass("showType-img");
}

let lis = document.getElementsByTagName("li");

function newsToggle(ID){
    $(`#${ID}`).click(function(){
        // 初始化 bug!!!!!
        $(lis).removeClass("showType");
        $(lis).find("img").attr("src", "pic/circleBTN_dpp_C_md.png").removeClass("showType-img");

        newsOpen(ID);
        $('section').css({ "display": "grid" });

        if(ID !== "all"){
            $("section").each(function(){
                if($(this).find("." + ID).length <= 0){
                // $(this).find("." + ID) 返回的是包含這些元素的 jQuery 物件
                    $(this).css({ "display": "none", })
                };
            });
        }
    });
};
