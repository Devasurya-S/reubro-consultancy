window.onscroll = function () { scrollFunction() };
var $bannerBg = $(".banner-section").outerHeight()*0.5;
function scrollFunction() {
    if (document.body.scrollTop > $bannerBg || document.documentElement.scrollTop > $bannerBg) {
        document.getElementById("stickyHeader").className = "sticky-header";
    } else {
        document.getElementById("stickyHeader").className = "";
    }
}