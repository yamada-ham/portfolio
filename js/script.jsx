$(function(){
slide();
caption();
scrollLink();
drwer();
scrollAnim();
scrollAnim2();
});

function slide(){
  var mySwiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    slidesPerView: 3,
    loop: true,
    // autoplay: {
    // 	delay: 3000,
    // 	stopOnLastSlide: false,
    // 	disableOnInteraction: false,
    // 	reverseDirection: false
    // },
    breakpoints:{
      768:{
        slidesPerView: 1,
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });
}

function caption(){
  let duration = 300;
  let $images = $('#images p');
  $images.on('mouseover',function(){
      $(this).find('strong,span').stop(true).animate({
        opacity:1//可視化する
      },duration);
    })
    .on('mouseout',function(){
      $(this).find('strong, span').stop(true).animate({
        opacity:0//透明にする
      },duration);
    });
}

function scrollLink(){
  $(function(){
    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });
}


function drwer(){
  var menu = $('.menu');
	var btn = $('#menubtn');
	var menuOverlay = $('#menuOverlay');

	if(window.innerWidth < 768){
		menu.prepend('<div class="btnCloseBox"><img src="./img/btnClose.png"></div>');
	}else{

	}

	btn.on('click',function(){
		btn.addClass('drawer');
		if($(this).hasClass('drawer')){
			menu.stop().animate({left:'0px'});
		  $('.overlay').css({display:'block'});
		}

	});
	$('.btnCloseBox img').on('click',function(){
		menu.stop().animate({left:'-200px'});
		$('.overlay').css({display:'none'});
	});
	$('.overlay').on('click',function(){
		menu.stop().animate({left:'-200px'});
		$(this).css({display:'none'});
	});
}


function scrollAnim(){
  $('.textSlide').css({right:'-400px',position:'relative',opacity:'0'});


  $(window).on('scroll load',function(){
    var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();

    $('.animation').each(function(i){
      var targetPosition = $(this).offset().top;
      if(topWindow > targetPosition - windowHeight){
        $(this).stop().animate({top:'0px',opacity:'1'},400,'easeOutQuad');
      }
    });

    $('.textSlide').each(function(i){
      var targetPosition = $(this).offset().top;
      if(topWindow > targetPosition - windowHeight){
        $(this).stop().animate({right:'0px',opacity:'1'},400,'easeOutQuad');
      }
    });
  });
}

function scrollAnim2(){
  $('.textSlide2').css({right:'-400px',position:'relative',opacity:'0'});


  $(window).on('scroll load',function(){
    var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();

    $('.animation2').each(function(i){
      var targetPosition = $(this).offset().top;
      if(topWindow > targetPosition - windowHeight+50){
        $(this).stop().animate({top:'0px',opacity:'1'},400,'easeOutQuad');
      }
    });

    $('.textSlide2').each(function(i){
      var targetPosition = $(this).offset().top;
      if(topWindow > targetPosition - windowHeight){
        $(this).stop().animate({right:'0px',opacity:'1'},400,'easeOutQuad');
      }
    });
  });
}
