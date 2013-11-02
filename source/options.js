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
	if (shortupChar.value){
		var code = shortupChar.value.charCodeAt(0);
		localStorage["shortup_key_code"] = code;
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
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#shortcut-key').addEventListener('keyup', save_options);
document.querySelector('#save').addEventListener('click', save_options);