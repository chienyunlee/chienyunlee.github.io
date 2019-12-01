// JavaScript Document
/*
$(function(){
	
	if (document.all){
			window.attachEvent('onload',AllStart);
	}else{
			window.addEventListener('load',AllStart,false);
	}
	
});
*/
$(function(){
	
	// Fullpage
	$('#fullpage').fullpage({
			anchors:['intro','about','chapter','outro'],
			//slidesNavigation: true,
			onLeave: function(index, nextIndex){
				switch(index){
					case 1:
						$('.intro .part1').removeClass('fade-out fade-out1');
						$('.intro .part1>h1').removeClass('fade-in');
						$('.intro .part2').removeClass('fade-out fade-out2');
						$('.intro .part2>h1').removeClass('fade-in');
						$('.intro .part3>h1').removeClass('fade-in');
						$('.intro .part3>a').removeClass('fade-in');
					break;
					case 2:
						$('.about .part1').removeClass('fade-out fade-out1');
						$('.about .part1>h1').removeClass('fade-in');
						$('.about .part2').removeClass('fade-out fade-out2');
						$('.about .part2>h1').removeClass('fade-in');
						$('.about .part3>h1').removeClass('fade-in');
						$('.about .scroll').removeClass('fade-in-s');
					break;
					case 3:
						$('.chapter-left h5').removeClass('fade-in-r');
						$('.chapter-left h2').removeClass('fade-in-r');
						$('.chapter-left h3').removeClass('fade-in-r');
						$('.chapter-left .by').removeClass('fade-in-r');
						$('.chapter-right .game').removeClass('fade-in-r');
						$('.chapter-right .tips').removeClass('fade-in');
						$('.chapter-about-main h1').removeClass('fade-in');
						$('.chapter-about-main h4').removeClass('fade-in');
						$('.chapter-about-main h6').removeClass('fade-in');
						$('#chapter-about8 .scroll').removeClass('fade-in-s');
						$('#chapter-game3 #game3 .video-con').addClass('disappear');
					break;
					case 4:
						$('.outro .part1').removeClass('fade-out fade-out1');
						$('.outro .part1>h1').removeClass('fade-in');
						$('.outro .part2').removeClass('fade-out fade-out2');
						$('.outro .part2>h1').removeClass('fade-in');
						$('.outro .part3>h1').removeClass('fade-in');
						$('.outro .part3>a').removeClass('fade-in');
						$('.outro .scroll').removeClass('fade-in-s');
					break;
				}
				switch(nextIndex){
					case 1:
						document.getElementById('intro-bg').currentTime = 0;
						document.getElementById('intro-bg').play();
						$('.intro .part1').addClass('fade-out fade-out1');
						$('.intro .part1>h1').addClass('fade-in');
						$('.intro .part2').addClass('fade-out fade-out2');
						$('.intro .part2>h1').addClass('fade-in');
						$('.intro .part3>h1').addClass('fade-in');
						$('.intro .part3>a').addClass('fade-in');
					break;
					case 2:
						$('.about .part1').addClass('fade-out fade-out1');
						$('.about .part1>h1').addClass('fade-in');
						$('.about .part2').addClass('fade-out fade-out2');
						$('.about .part2>h1').addClass('fade-in');
						$('.about .part3>h1').addClass('fade-in');
						$('.about .scroll').addClass('fade-in-s');
					break;
					case 3:
						$('.chapter-left h5').addClass('fade-in-r');
						$('.chapter-left h2').addClass('fade-in-r');
						$('.chapter-left h3').addClass('fade-in-r');
						$('.chapter-left .by').addClass('fade-in-r');
						$('.chapter-right .game').addClass('fade-in-r');
						$('.chapter-right .tips').addClass('fade-in');
						$('.chapter-about-main h1').addClass('fade-in');
						$('.chapter-about-main h4').addClass('fade-in');
						$('.chapter-about-main h6').addClass('fade-in');
						$('#chapter-about8 .scroll').addClass('fade-in-s');
						$('#chapter-game3 #game3 .video-con').removeClass('disappear');
						document.getElementById('G3-1').currentTime = 0;
						document.getElementById('G3-1').play();
						document.getElementById('G3-2').currentTime = 0;
						document.getElementById('G3-2').play();
						document.getElementById('G3-3').currentTime = 0;
						document.getElementById('G3-3').play();
						document.getElementById('G3-4').currentTime = 0;
						document.getElementById('G3-4').play();
						document.getElementById('G3-5').currentTime = 0;
						document.getElementById('G3-5').play();
					break;
					case 4:
						document.getElementById('outro-bg').currentTime = 0;
						document.getElementById('outro-bg').play();
						$('.outro .part1').addClass('fade-out fade-out1');
						$('.outro .part1>h1').addClass('fade-in');
						$('.outro .part2').addClass('fade-out fade-out2');
						$('.outro .part2>h1').addClass('fade-in');
						$('.outro .part3>h1').addClass('fade-in');
						$('.outro .part3>a').addClass('fade-in');
						$('.outro .scroll').addClass('fade-in-s');
					break;
				}	
			},

			afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){

				if (index == 3 && slideIndex == 0){
					$('.chapter-num>li:nth-child(1)').addClass('selected');
					$('#chapter-game1 .chapter-left h5').addClass('fade-in-r');
					$('#chapter-game1 .chapter-left h2').addClass('fade-in-r');
					$('#chapter-game1 .chapter-left h3').addClass('fade-in-r');
					$('#chapter-game1 .chapter-left .by').addClass('fade-in-r');
					$('#chapter-game1 .chapter-right .game').addClass('fade-in-r');
					$('#chapter-game1 .chapter-right .tips').addClass('fade-in');
				}

				if (index == 3 && slideIndex == 1){
					$('.chapter-num>li:nth-child(1)').addClass('selected');
					$('#chapter-about1 .chapter-about-main h1').addClass('fade-in');
					$('#chapter-about1 .chapter-about-main h4').addClass('fade-in');
				}

				if (index == 3 && slideIndex == 2){
					$('.chapter-num>li:nth-child(2)').addClass('selected');
					$('#chapter-game2 .chapter-left h5').addClass('fade-in-r');
					$('#chapter-game2 .chapter-left h2').addClass('fade-in-r');
					$('#chapter-game2 .chapter-left h3').addClass('fade-in-r');
					$('#chapter-game2 .chapter-left .by').addClass('fade-in-r');
					$('#chapter-game2 .chapter-right .game').addClass('fade-in-r');
					$('#chapter-game2 .chapter-right .tips').addClass('fade-in');
				}

				if (index == 3 && slideIndex == 3){
					$('.chapter-num>li:nth-child(2)').addClass('selected');
					$('#chapter-about2 .chapter-about-main h1').addClass('fade-in');
					$('#chapter-about2 .chapter-about-main h4').addClass('fade-in');
				}

				if (index == 3 && slideIndex == 4){
					$('.chapter-num>li:nth-child(3)').addClass('selected');
					$('#chapter-game3 .chapter-left h5').addClass('fade-in-r');
					$('#chapter-game3 .chapter-left h2').addClass('fade-in-r');
					$('#chapter-game3 .chapter-left h3').addClass('fade-in-r');
					$('#chapter-game3 .chapter-left .by').addClass('fade-in-r');
					$('#chapter-game3 .chapter-right .game').addClass('fade-in-r');
					$('#chapter-game3 .chapter-right .tips').addClass('fade-in');
					$('#chapter-game3 #game3 .video-con').removeClass('disappear');
					document.getElementById('G3-1').currentTime = 0;
					document.getElementById('G3-1').play();
					document.getElementById('G3-2').currentTime = 0;
					document.getElementById('G3-2').play();
					document.getElementById('G3-3').currentTime = 0;
					document.getElementById('G3-3').play();
					document.getElementById('G3-4').currentTime = 0;
					document.getElementById('G3-4').play();
					document.getElementById('G3-5').currentTime = 0;
					document.getElementById('G3-5').play();
				}

				if (index == 3 && slideIndex == 5){
					$('.chapter-num>li:nth-child(3)').addClass('selected');
					$('#chapter-about3 .chapter-about-main h1').addClass('fade-in');
					$('#chapter-about3 .chapter-about-main h4').addClass('fade-in');
				}

				if (index == 3 && slideIndex == 6){
					$('.chapter-num>li:nth-child(4)').addClass('selected');
					$('#chapter-game4 .chapter-left h5').addClass('fade-in-r');
					$('#chapter-game4 .chapter-left h2').addClass('fade-in-r');
					$('#chapter-game4 .chapter-left h3').addClass('fade-in-r');
					$('#chapter-game4 .chapter-left .by').addClass('fade-in-r');
					$('#chapter-game4 .chapter-right .game').addClass('fade-in-r');
					$('#chapter-game4 .chapter-right .tips').addClass('fade-in');
				}

				if (index == 3 && slideIndex == 7){
					$('.chapter-num>li:nth-child(4)').addClass('selected');
					$('#chapter-about4 .chapter-about-main h1').addClass('fade-in');
					$('#chapter-about4 .chapter-about-main h4').addClass('fade-in');
				}

				if (index == 3 && slideIndex == 8){
					$('.chapter-num>li:nth-child(5)').addClass('selected');
					$('#chapter-game5 .chapter-left h5').addClass('fade-in-r');
					$('#chapter-game5 .chapter-left h2').addClass('fade-in-r');
					$('#chapter-game5 .chapter-left h3').addClass('fade-in-r');
					$('#chapter-game5 .chapter-left .by').addClass('fade-in-r');
					$('#chapter-game5 .chapter-right .game').addClass('fade-in-r');
					$('#chapter-game5 .chapter-right .tips').addClass('fade-in');
				}

				if (index == 3 && slideIndex == 9){
					$('.chapter-num>li:nth-child(5)').addClass('selected');
					$('#chapter-about5 .chapter-about-main h1').addClass('fade-in');
					$('#chapter-about5 .chapter-about-main h4').addClass('fade-in');
				}

				if (index == 3 && slideIndex == 10){
					$('.chapter-num>li:nth-child(6)').addClass('selected');
					$('#chapter-game6 .chapter-left h5').addClass('fade-in-r');
					$('#chapter-game6 .chapter-left h2').addClass('fade-in-r');
					$('#chapter-game6 .chapter-left h3').addClass('fade-in-r');
					$('#chapter-game6 .chapter-left .by').addClass('fade-in-r');
					$('#chapter-game6 .chapter-right .game').addClass('fade-in-r');
					$('#chapter-game6 .chapter-right .tips').addClass('fade-in');
				}

				if (index == 3 && slideIndex == 11){
					$('.chapter-num>li:nth-child(6)').addClass('selected');
					$('#chapter-about6 .chapter-about-main h1').addClass('fade-in');
					$('#chapter-about6 .chapter-about-main h4').addClass('fade-in');
					$('#chapter-about6 .chapter-about-main h6').addClass('fade-in');
				}

				if (index == 3 && slideIndex == 12){
					$('.chapter-num>li:nth-child(7)').addClass('selected');
					$('#chapter-game7 .chapter-left h5').addClass('fade-in-r');
					$('#chapter-game7 .chapter-left h2').addClass('fade-in-r');
					$('#chapter-game7 .chapter-left h3').addClass('fade-in-r');
					$('#chapter-game7 .chapter-left .by').addClass('fade-in-r');
					$('#chapter-game7 .chapter-right .game').addClass('fade-in-r');
					$('#chapter-game7 .chapter-right .tips').addClass('fade-in');
				}

				if (index == 3 && slideIndex == 13){
					$('.chapter-num>li:nth-child(7)').addClass('selected');
					$('#chapter-about7 .chapter-about-main h1').addClass('fade-in');
					$('#chapter-about7 .chapter-about-main h4').addClass('fade-in');
					$('#chapter-about7 .chapter-about-main h6').addClass('fade-in');
				}

				if (index == 3 && slideIndex == 14){
					$('.chapter-num>li:nth-child(8)').addClass('selected');
					$('#chapter-game8 .chapter-left h5').addClass('fade-in-r');
					$('#chapter-game8 .chapter-left h2').addClass('fade-in-r');
					$('#chapter-game8 .chapter-left h3').addClass('fade-in-r');
					$('#chapter-game8 .chapter-left .by').addClass('fade-in-r');
					$('#chapter-game8 .chapter-right .game').addClass('fade-in-r');
					$('#chapter-game8 .chapter-right .tips').addClass('fade-in');
				}

				if (index == 3 && slideIndex == 15){
					$('.chapter-num>li:nth-child(8)').addClass('selected');
					$('#chapter-about8 .chapter-about-main h1').addClass('fade-in');
					$('#chapter-about8 .chapter-about-main h4').addClass('fade-in');
					$('#chapter-about8 .chapter-about-main h6').addClass('fade-in');
					$('#chapter-about8 .scroll').addClass('fade-in-s');
				}
			},

			onSlideLeave: function(section, origin, destination, direction){

				if (section == 'chapter' && direction == 'right'){
					$('.chapter-num>li').removeClass('selected');
					$('.chapter-left h5').removeClass('fade-in-r');
					$('.chapter-left h2').removeClass('fade-in-r');
					$('.chapter-left h3').removeClass('fade-in-r');
					$('.chapter-left .by').removeClass('fade-in-r');
					$('.chapter-right .game').removeClass('fade-in-r');
					$('.chapter-right .tips').removeClass('fade-in');
					$('.chapter-about-main h1').removeClass('fade-in');
					$('.chapter-about-main h4').removeClass('fade-in');
					$('.chapter-about-main h6').removeClass('fade-in');
					$('#chapter-about8 .scroll').removeClass('fade-in-s');
					$('#chapter-game3 #game3 .video-con').addClass('disappear');
				}

				if (section == 'chapter' && direction == 'left'){
					$('.chapter-num>li').removeClass('selected');
					$('.chapter-left h5').removeClass('fade-in-r');
					$('.chapter-left h2').removeClass('fade-in-r');
					$('.chapter-left h3').removeClass('fade-in-r');
					$('.chapter-left .by').removeClass('fade-in-r');
					$('.chapter-right .game').removeClass('fade-in-r');
					$('.chapter-right .tips').removeClass('fade-in');
					$('.chapter-about-main h1').removeClass('fade-in');
					$('.chapter-about-main h4').removeClass('fade-in');
					$('.chapter-about-main h6').removeClass('fade-in');
					$('#chapter-about8 .scroll').removeClass('fade-in-s');
					$('#chapter-game3 #game3 .video-con').addClass('disappear');
				}
			}
	});

	
	// Nav
	$('.intro a').click(function(){
		$.fn.fullpage.moveTo(2, 0);
	});
	
	$('.chapter-num>li:nth-child(1)').click(function(){
		$.fn.fullpage.moveTo(3, 0);
	});
	
	$('.chapter-num>li:nth-child(2)').click(function(){
		$.fn.fullpage.moveTo(3, 2);
	});
	
	$('.chapter-num>li:nth-child(3)').click(function(){
		$.fn.fullpage.moveTo(3, 4);
	});
	
	$('.chapter-num>li:nth-child(4)').click(function(){
		$.fn.fullpage.moveTo(3, 6);
	});
	
	$('.chapter-num>li:nth-child(5)').click(function(){
		$.fn.fullpage.moveTo(3, 8);
	});
	
	$('.chapter-num>li:nth-child(6)').click(function(){
		$.fn.fullpage.moveTo(3, 10);
	});
	
	$('.chapter-num>li:nth-child(7)').click(function(){
		$.fn.fullpage.moveTo(3, 12);
	});
	
	$('.chapter-num>li:nth-child(8)').click(function(){
		$.fn.fullpage.moveTo(3, 14);
	});

	$('.chapter-num').on('click', 'li', function() {
		$(this).siblings().removeClass('selected');
		$(this).addClass('selected');
	});

	
	// Popup
	$('.btn-doodle').bind('click', function(e) {
		e.preventDefault();
		$('.popup').bPopup({
			closeClass:'btn-close',
			zIndex: 2,
			speed: 450,
			transition: 'slideUp',
			onOpen:function(){
				$.fn.fullpage.setAllowScrolling(false);
			},
			onClose:function(){
				$.fn.fullpage.setAllowScrolling(true);
			}
		});
	});
	
	
	// Game Video
	var G1 = document.getElementById('G1'); 
	var	G2 = document.getElementById('G2');
//	var	G3 = document.getElementById('G3');
	var	G5 = document.getElementById('G5');
	var	G6 = document.getElementById('G6');
	var	G8 = document.getElementById('G8');

	$('#btnG1').click(function(){
		$(this).css('display', 'none');
		G1.play();
	});

	$('#btnG2').click(function(){
		$(this).css('display', 'none');
		G2.play();
	});

//	$('#btnG3').click(function(){
//		G3.play();
//	});

	$('#btnG5').click(function(){
		$(this).css('display', 'none');
		G5.play();
	});

	$('#btnG6').mousedown(function(){
		G6.play();
	});
	
	$('#btnG6').mouseup(function(){
		G6.pause();
	});

	$('#btnG8').click(function(){
		$(this).css('display', 'none');
		G8.play();
	});

});
