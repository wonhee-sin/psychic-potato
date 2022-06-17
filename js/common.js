let isOver1 = [false, false, false, false]
let isOver2 = [false, false, false, false]
let i =0;

function goHide(i){
     if(!isOver1[i-1] && !isOver2[i-1]){
          $('.gnb_depth2_'+i).stop().fadeOut("fast");
     }
}

$(document).ready(function(){


     // gnb 작동
     $('.openAll1').mouseover(function(){
          if( parseInt($('header').css('width')) > 800 ){
               $('.gnb_depth2_1').fadeIn('fast');
               isOver1[0] = true;
          }
     });
     $('.openAll1').mouseout(function(){
          isOver1[0] = false;
          setTimeout("goHide(1)",200);
     });

     $('.gnb_depth2_1').mouseover(function(){
          isOver2[0] = true;
     });
     $('.gnb_depth2_1').mouseout(function(){
          isOver2[0] = false;
          setTimeout("goHide(1)",200);
     });

     $('.openAll2').mouseover(function(){
          if( parseInt($('header').css('width')) > 800 ){
               $('.gnb_depth2_2').fadeIn('fast');
               isOver1[1] = true;
          }
     });
     $('.openAll2').mouseout(function(){
          isOver1[1] = false;
          setTimeout("goHide(2)",200);
     });
     
     $('.gnb_depth2_2').mouseover(function(){
          isOver2[1] = true;
     });
     $('.gnb_depth2_2').mouseout(function(){
          isOver2[1] = false;
          setTimeout("goHide(2)",200);
     });

     $('.openAll3').mouseover(function(){
          if( parseInt($('header').css('width')) > 800 ){
               $('.gnb_depth2_3').fadeIn('fast');
               isOver1[2] = true;
          }
     });
     $('.openAll3').mouseout(function(){
          isOver1[2] = false;
          setTimeout("goHide(3)",200);
     });
     
     $('.gnb_depth2_3').mouseover(function(){
          isOver2[2] = true;
     });
     $('.gnb_depth2_3').mouseout(function(){
          isOver2[2] = false;
          setTimeout("goHide(3)",200);
     });

     $('.openAll4').mouseover(function(){
          if( parseInt($('header').css('width')) > 800 ){
               $('.gnb_depth2_4').fadeIn('fast');
               isOver1[3] = true;
          }
     });
     $('.openAll4').mouseout(function(){
          isOver1[3] = false;
          setTimeout("goHide(4)",200);
     });
     
     $('.gnb_depth2_4').mouseover(function(){
          isOver2[3] = true;
     });
     $('.gnb_depth2_4').mouseout(function(){
          isOver2[3] = false;
          setTimeout("goHide(4)",200);
     });


     // 모바일 메뉴 띄우기
     $('.openMOgnb').click(function(){
          $('header').addClass('on');
          $('header .header_cont').slideDown('fast');
          $('header .header_area .header_cont .closePop').show();
          $("body").bind('touchmove',function(e){e.preventDefault()});
     });
     $('header .header_cont .closePop').click(function(){
          $('.header_cont').slideUp('fast');
          $('header').removeClass('on');
          $("body").unbind('touchmove');
     });
});




$(document).ready(function(){
     // PC브라우저에서 좁혀서 메뉴 닫고 다시 넓힐 때 상단메뉴 노출되게.
     $(window).resize(function() {
         if ( parseInt($('header').css('width')) > 800 ) $('.header_cont').show();
     }); 
 });



































$(document).ready(function(){
     $(window).resize(function() {
          if ( parseInt($('header').css('widht')) >800 ){
               $('.header_cont').show();
          }
     });
});