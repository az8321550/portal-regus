$(document).ready(function() {
		$('#slides').slides({
			preload: true,
			preloadImage: 'images/loading.gif',
			play: 3000,
			pause: 1000,
			hoverPause: true
		});
		
		$('#select_lang').change(function(){ 
			val = $(this).find(":selected").val();
			Str = val;	//http://117.0.0.1/PIT/en/xxx.html
			window.location.href= Str; 			
		});
		
		
});