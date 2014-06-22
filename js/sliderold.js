
var sliderContainer= document.getElementById("sliderContainer");
var sliderImage= document.getElementById("sliderImage");
var sliderList = document.getElementById("sliderList");
var carImages = sliderList.getElementsByTagName("img");

function AddClickHandler(element, handler){
	if(element != null){
		if(element.addEventListener) {
			element.addEventListener("click", handler, false);
		}
		else {
			element.attachEvent("onclick", handler);
		}
	}
}

function ChangeImage(change){
	// Find current image index
	var currentImageIndex= findCurrentImageIndex();

	currentImageIndex = currentImageIndex + change;
	if(currentImageIndex >= 0 && currentImageIndex < carImages.length){
		sliderImage.src=carImages[currentImageIndex].src;
	}	
}

function findCurrentImageIndex(){
	var currentImageIndex=-1;
	var currentImageUrl = sliderImage.src;
	for(var i=0; i<carImages.length; i++){
		var image = carImages[i];
		if(currentImageUrl===image.src){
			currentImageIndex=i;
		}
	}
	return currentImageIndex;
}

function ShowImage(){
	sliderImage.src=this.src;
}

function ShowPreviousImage(){
	var change = -1;
	
	ChangeImage(change);
}

function ShowNextImage(){
	var change = 1;
	
	ChangeImage(change);
}

for(var i=0; i<carImages.length; i++){
	var image = carImages[i]
	AddClickHandler(image, ShowImage);
}

var previousImage=document.getElementById("previousImage");
AddClickHandler(previousImage, ShowPreviousImage);

var nextImage=document.getElementById("nextImage");
AddClickHandler(nextImage, ShowNextImage);


function handlesliderImageOnLoad() {
	// when we are at the first or the last image we want to disable the next/prev buttons (whichever makes sense)
	var currentImageIndex= findCurrentImageIndex();
	if(currentImageIndex===0){
		previousImage.className="hidden";
	}
	else{
		previousImage.className="";
	}
	
	if(currentImageIndex===carImages.length-1){
		nextImage.className="hidden";
	}
	else{
		nextImage.className="";
	}

}