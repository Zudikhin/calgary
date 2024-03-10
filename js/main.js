$(document).ready(function() {
    "use strict";

    $(".header_block_burger").click(function() {
        $(".back_modal").addClass("active");
        $(".modal_menu").addClass("active");
        $("body").addClass("scroll");
    });

    $(".modal_menu_close").click(function() {
        $(".back_modal").removeClass("active");
        $(".modal_menu").removeClass("active");
        $("body").removeClass("scroll");
    });

    $(".back_modal").click(function() {
        $(this).removeClass("active");
        $(".modal_menu").removeClass("active");
        $("body").removeClass("scroll");
    })

    $(".faq_block_right_item_head").click(function() {
        $(this).toggleClass("active");
        $(this).siblings().slideToggle();
    });

    $('.read_slider_wrap').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        prevArrow: $('.read_block_arrows_prev'),
        nextArrow: $('.read_block_arrows_next')
    });

});