$(function () {
    $('.main_slide').slick({
        arrows: false,
        dots: true,
        vertical: true
    });

    $('.mopen').on('click', function () {
        $('#gnb').toggleClass('on')
    })
});

