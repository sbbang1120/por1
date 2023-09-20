$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if ($(window).width() >= 768) {
            if (sct > 0) {
                $('.header').addClass('on');
            } else {
                $('.header').removeClass('on');
            }
        }

        if (sct < 2800) {
            $('.to_top').addClass('on');
        } else {
            $('.to_top').removeClass('on');
        }
    });


    $('.mopen').on('click', function () {
        $('.header .gnb').toggleClass('on');
        $('.header').toggleClass('on');
    });

    $(window).on('resize', function () {
        $('.header .gnb').removeClass('on');
    })

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        centeredSlides: true,
        autoplay: {
            delay: 2500,
        },
        breakpoints: {
            768: {
                slidesPerView: 2.5,
            },
        },
    });



    var swiper = new Swiper('.tab01 .swiper-container', {
        slidesPerView: 2,
        spaceBetween: 20,
        loof: true,
        loopAdditionalSlides: 1,
        navigation: {
            nextEl: '.tab01 .swiper-button-next',
            prevEl: '.tab01 .swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 4,
            },
        },
    });

    window.addEventListener('resize', function () {
        swiper.update();
    });

    var swiper = new Swiper('.tab02 .swiper-container', {
        slidesPerView: 2,
        spaceBetween: 20,
        loof: true,
        pagination: {
            el: '.tab02 .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.tab02 .swiper-button-next',
            prevEl: '.tab02 .swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 4,
            },
        },
        observer: true,
        observeParents: true,

    });

    var swiper = new Swiper('.tab03 .swiper-container', {
        slidesPerView: 2,
        spaceBetween: 20,
        loof: true,
        pagination: {
            el: '.tab02 .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.tab03 .swiper-button-next',
            prevEl: '.tab03 .swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 4,
            },
        },
        observer: true,
        observeParents: true,

    });


    $(".tab-wrapper .tab").on('click', function () {

        $(".tab-wrapper .tab").removeClass("on");
        $(this).addClass("on");
        $(".tab-contents").hide();
        let tabid = $(this).attr("rel");
        $("." + tabid).fadeIn();
    });

    var swiperTopNum = $('.main_slide').find('.swiper-container');
    var swiperSubNum = $('.sub_slide').find('.swiper-container');

    var subSlide = new Swiper('.sub_slide', {
        spaceBetween: 20,
        centeredSlides: false,
        slidesPerView: '2',
        loop: true,
        loopAdditionalSlides: 1,
        loopedSlides: swiperSubNum.length,
    });


    var mainSlide = new Swiper('.main_slide', {
        spaceBetween: 0,
        loop: true,
        loopAdditionalSlides: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loopedSlides: swiperTopNum.length,
    });



    mainSlide.controller.control = subSlide;
    subSlide.controller.control = mainSlide;






    $(".tab-wrapper02 .tab").on('click', function () {

        $(".tab-wrapper02 .tab").removeClass("on");
        $(this).addClass("on");
        $(".tab-contents02").hide();
        let tabid = $(this).attr("rel");
        $("." + tabid).fadeIn();
    });


    $(".tab-wrapper03 .tab").on('click', function () {

        $(".tab-wrapper03 .tab").removeClass("on");
        $(this).addClass("on");
        $(".tab-contents03").hide();
        let tabid = $(this).attr("rel");
        $("." + tabid).fadeIn();
    });

    var swiper = new Swiper('.tab08 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.tab08 .swiper-button-next',
            prevEl: '.tab08 .swiper-button-prev',
        },

    });

    var swiper = new Swiper('.tab09 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.tab09 .swiper-button-next',
            prevEl: '.tab09 .swiper-button-prev',
        },

    });


})