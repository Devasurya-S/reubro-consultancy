window.onscroll = function () { scrollFunction() };
var $bannerBg = $(".banner-section").outerHeight()*0.5;
function scrollFunction() {
    if (document.body.scrollTop > $bannerBg || document.documentElement.scrollTop > $bannerBg) {
        document.getElementById("stickyHeader").className = "sticky-header";
    } else {
        document.getElementById("stickyHeader").className = "";
    }
}
$(document).ready(function(){
    $('.main-bannerbg').owlCarousel({
        loop:true,
        margin:5,
        nav:false,
        dots:false,
        autoplay: true,
        autoPlayTimeout: 500,
        autoplaySpeed: 5500,
        animateOut: 'fadeOut',
        items:1
    })
})