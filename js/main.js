$(document).ready(function() {
    $(window).on("scroll",function(){
        if (($(window).scrollTop() >= 50) && ($(window).width() >= 992) ) {
            $('.header-wrapper').addClass('fixed');

        } else {
            $('.header-wrapper').removeClass('fixed');
        }
    });

    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 2000,
        arrows:false,
        fade:true
    });




});
