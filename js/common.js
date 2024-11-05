$(document).ready(function(){ //실행틀 시작

  $(".dim").hide();
  $(".ham").click(function () {
    $(".dim").fadeIn();
    $(".mgnb_wrap").animate({
        "left": "0"
    });
  });

  $(".mgnb_close").click(function () {
    $(".dim").fadeOut();
    $(".mgnb_wrap").animate({
        "left": "-100%"
    });
    $(".mdepth2").hide();
  });

  $(".mdepth2").hide();

  $(".mgnb > li").click(function () {
    $(this).children(".mdepth2").slideDown();
    $(this).siblings().children(".mdepth2").slideUp();
  });

  $(".mgnb-close").click(function(){
    $(".mgnb-wrap").animate({right : "-300px"}, 500, "swing");
  });
  

  $(".depth2").hide();

  $(".gnb > li").mouseenter(function () {
      $(this).children(".depth2").stop().fadeIn();
  });
  $(".gnb > li").mouseleave(function () {
      $(this).children(".depth2").stop().fadeOut();
  });

});// 실행틀 끝