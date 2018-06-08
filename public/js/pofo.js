
$(window).scroll(function(){
	if( $(window).scrollTop()>550){
		$("a.scroll-to-top").fadeIn('fast');
	}else{
		$("a.scroll-to-top").fadeOut('slow');
	}
});

$('a.scroll-to-top').click(function(){
	$('body').animate({
		scrollTop: 0
	}, 500);
	return false;
});

// window.onscroll = function() {scrollFunction()};


// function scrollFunction() {
//     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//         document.getElementById("toTheTop").style.display = "block";
//     } else {
//         document.getElementById("toTheTop").style.display = "none";
//     }
// }


// $('a').click(function(){
//     $('html, body').animate({
//         scrollTop: $( $(this).attr('href') ).offset().top
//     }, 500);
//     return false;
// });

