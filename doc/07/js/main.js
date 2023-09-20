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



    $('.main_slide').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        pauseOnHover: false,
        arrows: false,
    });

    $('.main_visual .arrows .left-box').on('click', function () {
        $('.main_slide').slick('slickPrev')
    });
    $('.main_visual .arrows .right-box').on('click', function () {
        $('.main_slide').slick('slickNext')
    });

    $('.scr').on('click', function (e) {
        e.preventDefault();
        const st = $(this.hash).offset().top;
        console.log(st);
        $('html, body').animate({ scrollTop: st }, 600)
    });

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500)
    })


    $(document).ready(function () {
        var delay = 2500;

        $('.twin01').hover(
            function () {
                $('.twin03').fadeIn('slow');
                clearTimeout($(this).data('timeoutId'));
            },
            function () {
                var timeoutId = setTimeout(function () {
                    $('.twin03').fadeOut('slow');
                }, delay);
                $(this).data('timeoutId', timeoutId);
            }
        );

        $('.twin02').hover(
            function () {
                $('.twin04').fadeIn('slow');
                clearTimeout($(this).data('timeoutId'));
            },
            function () {
                var timeoutId = setTimeout(function () {
                    $('.twin04').fadeOut('slow');
                }, delay);
                $(this).data('timeoutId', timeoutId);
            }
        );
    });









    // const twin01 = document.querySelector('.twin01');
    // const twin02 = document.querySelector('.twin02');
    // const twin03 = document.querySelector('.twin03');
    // const twin04 = document.querySelector('.twin04');

    // twin01.addEventListener('mouseenter', () => {
    //   twin03.style.opacity = 1;
    // });

    // twin01.addEventListener('mouseleave', () => {
    //   twin03.style.opacity = 0;
    // });

    // twin02.addEventListener('mouseenter', () => {
    //   twin04.style.opacity = 1;
    // });

    // twin02.addEventListener('mouseleave', () => {
    //   twin04.style.opacity = 0;
    // });


    $('.product_slide').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.main_product .arrows .left').on('click', function () {
        $('.product_slide').slick('slickPrev');
    })
    $('.main_product .arrows .right').on('click', function () {
        $('.product_slide').slick('slickNext');
    })



    $('.main_visual .dots li').on('click', function () {
        const idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on')
        main_slide.slideTo(idx);
    })

})