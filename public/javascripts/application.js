$(document).ready(
	
	function(){

	$('li#li_education').click(function(event){
		event.preventDefault();
		$('section#home').fadeOut(1000);
		$('section#videos').fadeOut(1000);
		$('section#photos').fadeOut(1000);
		$('section#education').fadeIn(1000);
		$(' h1#big_title').text('Education');
		}),
		
		$('li#li_home').click(function(event){
			event.preventDefault();
			$('section#education').fadeOut(1000);
			$('section#photos').fadeOut(1000);
			$('section#videos').fadeOut(1000);
			$('section#home').fadeIn(1000);
			$(' h1#big_title').text('Home');
		}),
		
		$('li#li_videos').click(function(event){
			event.preventDefault();
			$('section#home').fadeOut(1000);
			$('section#education').fadeOut(1000);
			$('section#photos').fadeOut(1000);
			$('section#videos').fadeIn(1000);
			$(' h1#big_title').text('Videos');
		}),
		
		$('li#li_photos').click(function(event){
			event.preventDefault();
			$('section#home').fadeOut(1000);
			$('section#education').fadeOut(1000);
			$('section#videos').fadeOut(1000);
			$('section#photos').fadeIn(1000);
			$(' h1#big_title').text('Photos');
		});
});


$(function() {
$( "#selectable" ).selectable();
});






