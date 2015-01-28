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
		$('#guessHead').css('color','#cc324b')

	});

	$('.guessing').on('mouseleave',function(){
		$('#guessImageColor').hide();
		$('#guessImageGrey').show();
		$('#guessHead').css('color','#FFFFFF')

	});

	$('.shopping').on('mouseenter',function(){
		$('#shopImageGrey').hide();
		$('#shopImageColor').show();
		$('#shopHead').css('color','red')

	});

	$('.shopping').on('mouseleave',function(){
		$('#shopImageColor').hide();
		$('#shopImageGrey').show();
		$('#shopHead').css('color','#FFFFFF')

	});

	$('.movie').on('mouseenter',function(){
		$('#movieImageGrey').hide();
		$('#movieImageColor').show();
		$('#movieHead').css('color','#0000FF')
	});

	$('.movie').on('mouseleave',function(){
		$('#movieImageColor').hide();
		$('#movieImageGrey').show();
		$('#movieHead').css('color','#FFFFFF')

	});

});

