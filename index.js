var carts = document.getElementsByClassName('cart');
var cartsLength = carts.length;
for (var i = 0; i < cartsLength; i++) {
	carts[i].style.opacity = 0;
}

var topButton = document.getElementById('top-button');

var firstCart = document.getElementById('left');
var secondCart = document.getElementById('fade-in');
var thirdCart = document.getElementById('right');

var fourthCart = document.getElementById('up');
var fifthCart = document.getElementById('down');
var sixthCart = document.getElementById('fade-out');

var seventhCart = document.getElementById('walk-left');
var eightCart = document.getElementById('rotate');
var ninthCart = document.getElementById('walk-right');

var firstCartTop = firstCart.offsetTop;
var secondCartTop = secondCart.offsetTop;
var thirdCartTop = thirdCart.offsetTop;

var fourthCartTop = fourthCart.offsetTop;
var fifthCartTop = fifthCart.offsetTop;
var sixthCartTop = sixthCart.offsetTop;

var seventhCartTop = seventhCart.offsetTop;
var eightCartTop = eightCart.offsetTop;
var ninthCartTop = ninthCart.offsetTop;

var bar, winH;

topButton.onclick = function(e) {
	window.scrollTo(0, 0);
}

window.onscroll = function(e) {

	bar = window.scrollY || window.pageYOffset
			|| document.documentElement.scrollTop;
	winH = window.innerHeight - 160;

	if (bar >= 640) {

		topButton.style.animation = "fade-in .6s ease";
		topButton.style.opacity = 1;

	} else {

		topButton.style.animation = "";
		topButton.style.opacity = 0;
	}

	if (bar >= firstCartTop - winH) {

		firstCart.style.animation = "slide-left 1.2s ease-out";
		firstCart.style.opacity = 1;

		secondCart.style.zIndex = 8;
		secondCart.style.animation = "fade-in 1.2s ease";
		secondCart.style.opacity = 1;

		thirdCart.style.animation = "slide-right 1.2s ease-out";
		thirdCart.style.opacity = 1;

	} else {
		firstCart.style.animation = "";
		secondCart.style.animation = "";
		thirdCart.style.animation = "";

		firstCart.style.opacity = 0;
		secondCart.style.opacity = 0;
		thirdCart.style.opacity = 0;
	}

	if (bar >= fourthCartTop - winH) {

		fourthCart.style.animation = "jump-up 1.2s ease-out";
		fourthCart.style.opacity = 1;

		sixthCart.style.zIndex = 8;
		sixthCart.style.animation = "fade-out 1.2s ease";
		sixthCart.style.opacity = 1;

		fifthCart.style.animation = "jump-down 1.2s ease-out";
		fifthCart.style.opacity = 1;

	} else {

		fourthCart.style.animation = "";
		sixthCart.style.animation = "";
		fifthCart.style.animation = "";

		fourthCart.style.opacity = 0;
		sixthCart.style.opacity = 0;
		fifthCart.style.opacity = 0;
	}

	if (bar >= seventhCartTop - winH) {

		seventhCart.style.animation = "walk-left 1.2s ease-out";
		seventhCart.style.opacity = 1;

		eightCart.style.zIndex = 8;
		eightCart.style.animation = "rotate 1s ease-out 1";
		eightCart.style.opacity = 1;

		ninthCart.style.animation = "walk-right 1.2s ease-out";
		ninthCart.style.opacity = 1;

	} else {

		seventhCart.style.animation = "";
		eightCart.style.animation = "";
		ninthCart.style.animation = "";

		seventhCart.style.opacity = 0;
		eightCart.style.opacity = 0;
		ninthCart.style.opacity = 0;
	}

}