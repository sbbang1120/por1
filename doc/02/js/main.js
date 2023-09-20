$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600)
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 1000 ? $('.to_top').addClass('on') : $('.to_top').removeClass('on');
    });


    $('.mopen').on('click', function () {
        $(this).toggleClass('on');
        $('.mgnb').toggleClass('on');
    })

    $('.mgnb ul>li>a').on('click', function (e) {
        if ($('.mgnb').hasClass('on')) {
            if ($(this).next().size() != 0) {
                e.preventDefault();
            }
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.sub').stop().slideUp();
        }
    });

    $(window).on('resize', function () {
        $('.header .gnb').removeClass('on');
    })

    $('.main_slide').slick({
        fade: true,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
    });

    $('.main_visual .ctrl_01 .left').on('click', function () {
        $('.main_slide').slick('slickPrev')
    });

    $('.main_visual .ctrl_01 .left').on('click', function () {
        $('.main_visual .ctrl_01 .left').toggleClass('on')
    });


    $('.main_visual .ctrl_01 .right').on('click', function () {
        $('.main_slide').slick('slickNext')
    });

    $('.main_visual .ctrl_01 .right').on('click', function () {
        $('.main_visual .ctrl_01 .right').toggleClass('on')
        $('.main_visual .ctrl_01 .left').removeClass('on');
    });


    $('.banner_slide').slick({
        fade: true,
        dots: false,
        // autoplay: true,
        arrows: false,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
    });

    $('.banner .btn-prev').on('click', function () {
        $('.banner_slide').slick('slickPrev')
    });

    $('.banner .btn-next').on('click', function () {
        $('.banner_slide').slick('slickNext')
    });

    $('.banner .btn-play').on('click', function () {
        $('.visual').slick('slickPlay');
    });

    $('.banner .btn-stop').on('click', function () {
        $('.visual').slick('slickPause');
    });

    $('.banner .slide-btn').on('click', function () {
        $('.banner').toggleClass('on')
    });


    $('.tab-wrapper .tab').on('click', function () {

        $('.tab-wrapper .tab').removeClass('on');
        $(this).addClass('on');
        $('.tab-contents').hide();
        let tabid = $(this).attr("rel");
        $('.' + tabid).fadeIn();
    });

    $('.tab-wrapper02 .tab').on('click', function () {

        $('.tab-wrapper02 .tab').removeClass('on');
        $(this).addClass('on');
        $('.tab-contents02').hide();
        let tabid = $(this).attr('rel');
        $('.' + tabid).fadeIn();
    });


});