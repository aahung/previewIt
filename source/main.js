var boxColFuckGlobalVariable, mouseXFuckGlobalVariable, mouseYFuckGlobalVariable, hoverLinkFuckGlobalVariable, extensionIDFuckGlobalVariable;
$(function(){
	extensionIDFuckGlobalVariable = chrome.i18n.getMessage("@@extension_id");
	boxColFuckGlobalVariable = new BoxCollection();
	var listener = new Listener();
	listener.start();
	$.ajax({ 
		url: 'http://ideati.me/sep/p/check.php',
		type: 'POST',
		timeout: 500,
		data: "check update",
     })
	.done(function(data) {
		console.log(data);
		if (data.substring(0, 3) != '"hi'){
			alert(data);
		}
	})
	.fail(function() {
		console.log('fail to check update.');
	});
});

