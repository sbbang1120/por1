$(function () {


    $(".main_content").fullpage({
        anchors: ['sub01', 'sub02', 'sub03', 'sub04', 'sub05', 'sub06', 'sub07'],
        KeyboardScrolling: true,
        navigation: false,
        sectionsColor: ["#2AC1BC", "#2AC1BC", "#2AC1BC", "#2AC1BC", "#2AC1BC", "#2AC1BC", "#2AC1BC"],
        afterLoad: function(anchorLink, index) {
          if (index === 1 || index === 8) {
            $('.button01').addClass('on');
          } else {
            $('.button01').removeClass('on');
          }
        },
        onLeave: function (idx, nidx, dir) {
          $('.gnb li').eq(nidx - 1).addClass('on').siblings().removeClass('on');
          console.log(idx, nidx, dir);
    
          if (dir == 'up') {
            $('.header').addClass('on');
          } else {
            $('.header').removeClass('on');
          }
    
          if (nidx === 8) {
            $('.button01').removeClass('on');
          }
        }
    });



})


