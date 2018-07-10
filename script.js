
/*----------------------------------------------------*/
/* Quote Loop
------------------------------------------------------ */

var tw = document.querySelector('#tw');
var lin = document.querySelector('#lin');
var insta = document.querySelector('#insta');
var yt = document.querySelector('#yt');
var gm = document.querySelector('#gm');
var fb = document.querySelector('#fb');
var env = document.querySelector('#env');
var whats = document.querySelector('#whats');


yt.addEventListener("mouseover",function(){
    this.setAttribute("src","images_2/SVG-h/youtube.svg");
});

yt.addEventListener("mouseout",function(){
    this.setAttribute("src","images_2/SVG/youtube.svg");
});

// tw.addEventListener("mouseover",function(){
//     this.setAttribute("src","images_2/SVG-h/twitter.svg");
// });

// tw.addEventListener("mouseout",function(){
//     this.setAttribute("src","images_2/SVG/twitter.svg");
// });

// insta.addEventListener("mouseover",function(){
//     this.setAttribute("src","images_2/SVG-h/instagram.svg");
// });

// insta.addEventListener("mouseout",function(){
//     this.setAttribute("src","images_2/SVG/instagram.svg");
// });

whats.addEventListener("mouseover",function(){
    this.setAttribute("src","images_2/SVG-h/whatsapp.svg");
});

whats.addEventListener("mouseout",function(){
    this.setAttribute("src","images_2/SVG/whatsapp.svg");
});

// env.addEventListener("mouseover",function(){
//     this.setAttribute("src","images_2/SVG-h/envelop.svg");
// });

// env.addEventListener("mouseout",function(){
//     this.setAttribute("src","images_2/SVG/envelop.svg");
// });

fb.addEventListener("mouseover",function(){
    this.setAttribute("src","images_2/SVG-h/facebook2.svg");
});

fb.addEventListener("mouseout",function(){
    this.setAttribute("src","images_2/SVG/facebook2.svg");
});

gm.addEventListener("mouseover",function(){
    this.setAttribute("src","images_2/SVG-h/google-plus2.svg");
});

gm.addEventListener("mouseout",function(){
    this.setAttribute("src","images_2/SVG/google-plus2.svg");
});

// lin.addEventListener("mouseover",function(){
//     this.setAttribute("src","images_2/SVG-h/linkedin.svg");
// });

// lin.addEventListener("mouseout",function(){
//     this.setAttribute("src","images_2/SVG/linkedin.svg");
// });


function fade($ele) {
    $ele.fadeIn(1000).delay(3000).fadeOut(1000, function() {
        var $next = $(this).next('.quote');
        fade($next.length > 0 ? $next : $(this).parent().children().first());
   });
}
fade($('.quoteLoop > .quote').first());


/*----------------------------------------------------*/
/* Navigation
------------------------------------------------------ */

$(window).scroll(function() {

    if ($(window).scrollTop() > 300) {
        $('.main_nav').addClass('sticky');
    } else {
        $('.main_nav').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_nav').hasClass('open-nav')) {
        $('.main_nav').removeClass('open-nav');
    } else {
        $('.main_nav').addClass('open-nav');
    }
});

$('.main_nav li a').click(function() {
    if ($('.main_nav').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_nav').removeClass('open-nav');
    }
});


/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

jQuery(document).ready(function($) {

   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});
  
});


TweenMax.staggerFrom(".heading", 0.8, {opacity: 0, y: 20, delay: 0.2}, 0.4);





