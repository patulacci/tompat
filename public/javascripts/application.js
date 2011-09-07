$(document).ready(
	
	function(){

	$('li#li_education').click(function(event){
		event.preventDefault();
		$('div#home').fadeOut(1000);
		$('div#videos').fadeOut(1000);
		$('div#photos').fadeOut(1000);
		$('div#education').fadeIn(1000);
		$('div#title h1#big_title').text('Education');
		}),
		
		$('li#li_home').click(function(event){
			event.preventDefault();
			$('div#education').fadeOut(1000);
			$('div#photos').fadeOut(1000);
			$('div#videos').fadeOut(1000);
			$('div#home').fadeIn(1000);
			$('div#title h1#big_title').text('Home');
		}),
		
		$('li#li_videos').click(function(event){
			event.preventDefault();
			$('div#home').fadeOut(1000);
			$('div#education').fadeOut(1000);
			$('div#photos').fadeOut(1000);
			$('div#videos').fadeIn(1000);
			$('div#title h1#big_title').text('Videos');
		}),
		
		$('li#li_photos').click(function(event){
			event.preventDefault();
			$('div#home').fadeOut(1000);
			$('div#education').fadeOut(1000);
			$('div#videos').fadeOut(1000);
			$('div#photos').fadeIn(1000);
			$('div#title h1#big_title').text('Photos');
		});
});
