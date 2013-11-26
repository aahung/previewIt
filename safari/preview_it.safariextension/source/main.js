var boxColFuckGlobalVariable, mouseXFuckGlobalVariable, mouseYFuckGlobalVariable, hoverLinkFuckGlobalVariable, extensionIDFuckGlobalVariable, boxWidthFuckGlobalVariable, boxHeightFuckGlobalVariable, uuidFuckingGlobalVariable; 
$(function(){
	boxColFuckGlobalVariable = new BoxCollection();
	var listener = new Listener();
			shortupKeyCode = 119;
			uuidFuckingGlobalVariable = 123123123123;
			if (window.location.href != 'http://aahung.github.io/previewIt/'){
				listener.start(shortupKeyCode);
			}
			else {
				alert('This is demo page of Preview It, Preview It extension will be disabled in this page, in case of repeated boxes');
			} 	
			boxWidthFuckGlobalVariable = 700; 	
			boxHeightFuckGlobalVariable = 400;
			console.log('Preview It: successfully start, press \'' + String.fromCharCode(shortupKeyCode? shortupKeyCode : 119) + '\' to trigger the box(es);');

			var jsonObj = {'uuid': uuidFuckingGlobalVariable, 'version': 'safari_testing'};
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

});
function getPathByName(name){
}
