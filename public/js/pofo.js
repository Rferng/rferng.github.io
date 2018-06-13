function smoothScroll(target,duration){
	var target = document.querySelector(target);
	var targetPosition = target.getBoundingClientRect().top;
	var startPosition = window.pageYOffset;
	var distance = targetPosition - startPosition;
	var startTime = null;

	function animation(currentTime){
		if (startTime === null) startTime = currentTime;
		var timeElapsed = currentTime - startTime;
		var run = ease(timeElapsed,startPosition,distance,duration);
		window.scrollTo(0,run);
		if(timeElapsed < duration) requestAnimationFrame(animation);
	}

	function ease(t, b, c, d) {
		t /= d/2;
		if (t < 1) return c / 2 * t * t + b;
		t--;
		return -c / 2 * (t * (t - 2) - 1) + b;
	}

	requestAnimationFrame(animation);
}

var upBtn = document.querySelector('.upBtn');
upBtn.addEventListener('click',function(){
	smoothScroll('.top',1000);
});

$(window).scroll(function(){
	if( $(window).scrollTop()>550){
		$("a.upBtn").fadeIn('fast');
	}else{
		$("a.upBtn").fadeOut('slow');
	}
});

// $('a.scroll-to-top').click(function(){
// 	$('body').animate({
// 		scrollTop: 0
// 	}, 500);
// 	return false;
// });

//(target to animate to,duration)

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

