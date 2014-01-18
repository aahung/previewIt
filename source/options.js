function onload(){
	if(!localStorage["shortup_key_code"]) {
		var key = String.fromCharCode(119);
	}
	else{
		var key = String.fromCharCode(localStorage["shortup_key_code"]);
	}
	var shortupChar = document.getElementById("shortcut-key");
	shortupChar.value = key;
}
function save(){
	var shortupChar = document.getElementById("shortcut-key");
	var code = shortupChar.value.charCodeAt(0);
	localStorage["shortup_key_code"] = code;
}

// Saves options to localStorage.
function save_options() {
	var shortupChar = document.getElementById("shortcut-key");
	var width = document.getElementById("width");
	var height = document.getElementById("height");
	if (shortupChar.value == "") {
		return;
	};
	widthLabel.innerHTML = width.value * 14 + 'px';
	heightLabel.innerHTML = height.value * 8 + 'px';
	if (shortupChar.value || width.value || height.value){
		var code = shortupChar.value.charCodeAt(0);
		localStorage["shortup_key_code"] = code;
		localStorage['width'] = width.value;
		localStorage['height'] = height.value;
		// Update status to let user know options were saved.
		var status = document.getElementById("status");
		status.innerHTML = "Options Saved.";
		setTimeout(function() {
		status.innerHTML = "";
		}, 750);
	}
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  	if(!localStorage["shortup_key_code"]) {
		var key = String.fromCharCode(119);
	}
	else{
		var key = String.fromCharCode(localStorage["shortup_key_code"]);
	}
	var shortupChar = document.getElementById("shortcut-key");
	shortupChar.value = key;
	if(!localStorage['width']){	 	
			var width = 50;	 	
			var height = 50;	 	
		}	 	
		else{	 	
			var width = localStorage['width'];	 	
			var height = localStorage['height'];	 	
		}	 	
		var _width = document.getElementById("width");//call-by-referen ce	 	
		var _height = document.getElementById("height");	 			
		_width.value = width;	 	
		_height.value = height;
		widthLabel.innerHTML = _width.value * 14 + 'px';
		heightLabel.innerHTML = _height.value * 8 + 'px';
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#shortcut-key').addEventListener('keyup', save_options);
document.querySelector('#save').addEventListener('click', save_options);
document.querySelector('#width').addEventListener('change', save_options); 
document.querySelector('#height').addEventListener('change', save_options);
