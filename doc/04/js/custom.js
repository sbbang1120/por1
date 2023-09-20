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

    $('.main_slide').on('init afterChange', function (e, s, c) {
        const current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
    });

    $('.main_slide').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
    });

    $('.main_content .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev')
    });
    $('.main_content .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext')
    });


    var mySwiper = document.querySelectorAll('.main_visual02 .swiper-slide');

    var mySwiper = new Swiper('.main_visual02 .swiper', {
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 4000,
        loop: true,
        loopedSlides: 5,
        slidesPerView: 3,
        breakpoints: {
            768: {
                slidesPerView: 5,
            },
        }
    })

    $('.main_num .counter').counterUp({
        time: 1000,
    });


    init = function () {
        var targetIdx = mainCon01.slides[mainCon01.activeIndex].getAttribute(
            'data-swiper-slide-index');
        var numIdx = parseInt(targetIdx) + 1;

        if (numIdx < 10) active.innerText = '0' + numIdx;
        else active.innerText = numIdx;

        if (mc01Slide.length < 10) total.innerText = '0' + mc01Slide.length;
        else total.innerText = mc01Slide.length;
    }

    var mySwiper = document.querySelectorAll('.main_news .swiper-slide');

    var mySwiper = new Swiper('.main_news .swiper', {
        loop: mySwiper.length > 2,
        loopedSlides: mySwiper.length,
        slidesPerView: 1,
        spaceBetween: 40,
        navigation: {
            nextEl: '.main_news .next_btn',
            prevEl: '.main_news .prev_btn',
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
            }
        },
    })


})