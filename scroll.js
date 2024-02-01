$(document).ready(function () {
    var hamburgerMenu = $('.Hamburger-Menu');
    var originalPosition = hamburgerMenu.offset().top;

    $(window).scroll(function () {
        if ($(window).scrollTop() > originalPosition) {
            hamburgerMenu.addClass('fixed');
        } else {
            hamburgerMenu.removeClass('fixed');
        }
    });
});