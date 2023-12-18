function textBGC(selector) {
    $(selector).mouseenter(function(e) {
        $(selector).find("img").addClass("textBGC");
        $(selector).find("h4").addClass("textBGCtoHOVER");
    }).mouseleave(function(e) {
        $(selector).find("img").removeClass("textBGC");
        $(selector).find("h4").removeClass("textBGCtoHOVER");
    });
}

$(function() {
    textBGC('.necklace', "6%, -15%", 1.35);
    textBGC('.bracelet', "0, 0", 1.2);
    textBGC('.earrings', "0, 0", 1.15);
});
