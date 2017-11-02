var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/dog.jpg') {
		myImage.setAttribute('src', 'images/dog2.jpg');
	} else {
		myImage.setAttribute('src', 'images/dog.jpg');
	}
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
	var myName = prompt("Please enter your name: ");
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Dog House Welcome, ' + myName;
	
}
if(!localStorage.getItem('name')) {
		setUserName();
	} else {
		var storeName = localStorage.getItem('name');
		myHeading.innerHTML = 'Dog House Welcome, ' + storeName;
	}
myButton.onclick = function() {
	setUserName();
}