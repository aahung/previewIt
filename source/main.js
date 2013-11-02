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
		data: "123",
     })
	.done(function(data) {
		console.log(data);
		if (data != '"hi"'){
			alert(data);
		}
	})
	.fail(function() {
		console.log('fail to check update.');
	});
});

