$(document).ready(function() {
    $(window).on("scroll",function(){
        if ($(window).scrollTop() >= 50) {
            $('.header-wrapper').addClass('fixed');

        } else {
            $('.header-wrapper').removeClass('fixed');
        }
    });

    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300
    });

});
