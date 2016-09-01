
function prepareEventHandelars(){
	var eventsCheck = document.getElementById("eventsCheck");
		eventsCheck.onclick = function () {
	    	alert("onload check pass");
	} 
}


window.onload = function() {
	// prep anything we need to
    prepareEventHandelars();

    var emailField = document.getElementById("email");
	emailField.onfocus = function() {
	     if (emailField.value == "your email") {
	     	emailField.value = "";
	     }
	};
	emailField.onblur = function() {
	     if (emailField.value == "") {
	     	emailField.value = "your email";
	     }
	};

	var myImage = document.getElementById("imageChange");
	var imageArray = ['images/img-2.png', 'images/img-3.png', 'images/img-1.png']; //length 3
	var imgIndex = 0;

	function changeImage() {
          myImage.setAttribute("src", imageArray[imgIndex]);
          imgIndex++; 
          console.log( imgIndex++, imageArray.length);
          if (imgIndex >= imageArray.length) {
          	imgIndex = 0;
          }
	}
	setInterval(changeImage, 3000);
}




(function($) {

"use strict";
/***************************
****************************
Author script goes here.

These are the jquery helper initialization 
calling and custom scripts as needed.

****************************
***************************/


})(jQuery);
