

document.addEventListener('DOMContentLoaded', function(){
	const myHeading = document.querySelector('h1');
	if(myHeading != null)
	{
		myHeading.textContent = 'Hi fen!';
	}
	let myName = 'Nguyen Trung Hau';
	let myID = '18125129';
	let myClass = '18CTT3';
	let myEmail = 'nthau16plus04@gmail.com';

	let myImage = document.querySelector('img');

	myImage.onclick = function() {
	    let mySrc = myImage.getAttribute('src');
	    if(mySrc === 'images/phiphuonganh.jpg') {
	      	myImage.setAttribute('src','images/chipu.jpg');
	      	myHeading.textContent = 'Chuy Pu hia!';
	    } else if(mySrc === 'images/chipu.jpg') {
	      	myImage.setAttribute('src','images/tranthanh.jpg');
	      	myHeading.textContent = 'Truấn Thèn hia!';
	    }else {
	    	myImage.setAttribute('src','images/phiphuonganh.jpg');
	    	myHeading.textContent = 'Cuấm suần ai thì cém!';
	    }
	}

});