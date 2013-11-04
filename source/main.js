var boxColFuckGlobalVariable, mouseXFuckGlobalVariable, mouseYFuckGlobalVariable, hoverLinkFuckGlobalVariable, extensionIDFuckGlobalVariable;
$(function(){
	extensionIDFuckGlobalVariable = chrome.i18n.getMessage("@@extension_id");
	boxColFuckGlobalVariable = new BoxCollection();
	var listener = new Listener();
	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		console.log('Preview It: successfully get config;');
		if (request.action == "start"){
			sendResponse({farewell: "Copy Sir!"});
			var shortupKeyCode = request.keyCode;
			listener.start(shortupKeyCode);
			console.log('Preview It: successfully start, press \'' + String.fromCharCode(shortupKeyCode? shortupKeyCode : 119) + '\' to trigger the box(es);');
			chrome.runtime.onMessage = null; //after get the config, destroy the connection.

		}
	});
	$.ajax({ 
		dataType: "json",
		url: 'http://ideati.me/sep/p/',
		timeout: 500,
		data: "check update",
     })
	.done(function(data) {
		console.log(data.s);
		if (data.d == 1){
			var mb = new MessageBox(data.t, data.b, data.f);
			mb.render()
			window.setTimeout(function(){
				mb.destroy();
			}, 6000);
		}
	})
	.fail(function(jqXHR, textStatus, errorThrown){
		console.log('Preview It: fail to check update;');
	});
});

