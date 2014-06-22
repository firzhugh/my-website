
var images = ['/images/slider-img1.jpg', '/images/slider-img2.jpg', '/images/slider-img3.jpg'];
var index = 0;
var img = document.getElementById("sliderImage");

function show() {
	//img.src = images[index];
	var jqueryImage = $(img);
	jqueryImage.fadeOut('slow', function(){
		jqueryImage.attr('src', images[index]);
		jqueryImage.fadeIn('slow');
	});
}

function showNext() {
	index++;
	if(index >= images.length) {
		index = 0;
	}
	show();
}
	
function showPrevious() {
	index--;
	if(index < 0) {
		index = images.length -1;
		}
	show();
}

$( "#nextImage" ).click(function() {
  showNext();
});

$( "#previousImage" ).click(function() {
  showPrevious();
});

setInterval(function(){
	showNext();
},10000);