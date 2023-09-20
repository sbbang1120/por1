$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    })

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        if (sct < 2800) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });

    $('.header .gnb>ul>li>a').on('click', function (e) {
            e.preventDefault();
            $(this).next().stop().slideToggle();
    });

    $('.mopen').on('click', function () {
        $('.header .gnb').toggleClass('on');
        $('.header').toggleClass('on');
    })


    $(window).on('resize', function () {
        $('.header .gnb').removeClass('on');
        $('.sub').removeAttr('style')
    })


    $('.main_slide').slick({
        fade: true,
        dots: false,
        // autoplay: true,
        arrows: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
    });

    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev')
    });
    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext')
    });

    $('.product_slide').slick({
        fade: true,
        dots: true,
        autoplay: true,
        arrows: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
    });

    $('.main_product .arrows .left').on('click', function () {
        $('.product_slide').slick('slickPrev')
    });
    $('.main_product .arrows .right').on('click', function () {
        $('.product_slide').slick('slickNext')
    });








    // $('.detail01 .itm').on('click', function (e) {
    //     $(this).addClass('on').siblings().removeClass('on');
    // })

})