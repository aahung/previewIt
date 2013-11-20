var boxColFuckGlobalVariable, mouseXFuckGlobalVariable, mouseYFuckGlobalVariable, hoverLinkFuckGlobalVariable, extensionIDFuckGlobalVariable, boxWidthFuckGlobalVariable, boxHeightFuckGlobalVariable, uuidFuckingGlobalVariable; 
$(function(){
	extensionIDFuckGlobalVariable = chrome.i18n.getMessage("@@extension_id");
	boxColFuckGlobalVariable = new BoxCollection();
	var listener = new Listener();
	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		console.log('Preview It: successfully get config;');
		if (request.action == "start"){
			sendResponse({farewell: "Copy Sir!"});
			var shortupKeyCode = request.keyCode;
			uuidFuckingGlobalVariable = request.uuid;
			if (window.location.href != 'http://aahung.github.io/previewIt/'){
				listener.start(shortupKeyCode);
			}
			else {
				chrome.runtime.onMessage = null; //after get the config, destroy the connection.
				alert('This is demo page of Preview It, Preview It extension will be disabled in this page, in case of repeated boxes');
			}
			if (request.width){	 	
					boxWidthFuckGlobalVariable = request.width * 1400 / 100;
				}	 	
			else {	 	
				boxWidthFuckGlobalVariable = 700; 	
			}	 	
			if (request.height){	 	
				boxHeightFuckGlobalVariable = request.height * 800 / 100;	 	
			}	 	
			else {	 	
				boxHeightFuckGlobalVariable = 400;
			}
			console.log('Preview It: successfully start, press \'' + String.fromCharCode(shortupKeyCode? shortupKeyCode : 119) + '\' to trigger the box(es);');
			chrome.runtime.onMessage = null; //after get the config, destroy the connection.
		}
		$.ajax({ 
			dataType: "json",
			url: getPathByName('manifest.json')
	     })
		.done(function(json) {
			var version = json.version;
			var jsonObj = {'uuid': uuidFuckingGlobalVariable, 'version': version};
			$.ajax({ 
				dataType: "json",
				type: "POST",
				url: 'http://ideati.me/sep/p/',
				timeout: 5000,
				data: jsonObj
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
		})
		.fail(function(jqXHR, textStatus, errorThrown){
			console.log('Preview It: fail to get manifest.json;');
		});
	});
});
function getPathByName(name){
	return 'chrome-extension://'+ chrome.i18n.getMessage("@@extension_id") + '/' + name;
}
