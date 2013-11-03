var boxColFuckGlobalVariable, mouseXFuckGlobalVariable, mouseYFuckGlobalVariable, hoverLinkFuckGlobalVariable, extensionIDFuckGlobalVariable;
$(function(){
	extensionIDFuckGlobalVariable = chrome.i18n.getMessage("@@extension_id");
	boxColFuckGlobalVariable = new BoxCollection();
	var listener = new Listener();
	listener.start();
	$.ajax({ 
		dataType: "json",
		url: 'http://ideati.me/sep/p/',
		timeout: 500,
		data: "check update",
     })
	.done(function(data) {
		console.log(data);
		if (data.d == 1){
			var mb = new MessageBox(data.t, data.b, data.f);
			mb.render()
			window.setTimeout(function(){
				mb.destroy();
			}, 6000);
		}
	})
	.fail(function(jqXHR, textStatus, errorThrown){
		console.log('fail to check update.');
	});
});

