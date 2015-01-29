$(document).ready(function(){
	$('nav ul li').on('click',function(){
	  	$(".inner").hide();
	  var id = this.id
	  if(id === 'profi'){

	  	$('.profile').fadeIn(1500);

		}
	   else if(id === 'portf'){
	   	$('.portfolio').fadeIn(1000);
	   }
	   else if(id === 'contc'){
	   	$('.contact').fadeIn(1000);
	   }
	   else if(id === 'hom'){
	   	$('.cover').fadeIn(1000);
	   }

	});

	$('.guessing').on('mouseenter',function(){
		$('#guessImageGrey').hide();
		$('#guessImageColor').show();

		$('#guessHead').css('text-shadow','0 0 10px #B2B2B2');
		$('#guessIntro').show();


	});

	$('.guessing').on('mouseleave',function(){
		$('#guessImageColor').hide();
		$('#guessImageGrey').show();
		$('#guessHead').css('text-shadow','0 0 0');
		$('#guessIntro').hide();

	});

	$('.shopping').on('mouseenter',function(){
		$('#shopImageGrey').hide();
		$('#shopImageColor').show();
		$('#shopHead').css('text-shadow','0 0 10px #B2B2B2');
		$('#shopIntro').show();
	});

	$('.shopping').on('mouseleave',function(){
		$('#shopImageColor').hide();
		$('#shopImageGrey').show();
		$('#shopHead').css('color','#FFFFFF');
		$('#shopHead').css('text-shadow','0 0 0');
		$('#shopIntro').hide();

	});

	$('.movie').on('mouseenter',function(){
		$('#movieImageGrey').hide();
		$('#movieImageColor').show();
		$('#movieHead').css('text-shadow','0 0 10px #B2B2B2');
		$('#movieIntro').show();
	});

	$('.movie').on('mouseleave',function(){
		$('#movieImageColor').hide();
		$('#movieImageGrey').show();
		$('#movieHead').css('color','#FFFFFF');
		$('#movieHead').css('text-shadow','0 0 0');
		$('#movieIntro').hide();

	});

});

