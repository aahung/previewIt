var mouseXFuckGlobalVariable, mouseYFuckGlobalVariable, hoverLinkFuckGlobalVariable, extensionIDFuckGlobalVariable;
$(function(){
	extensionIDFuckGlobalVariable = chrome.i18n.getMessage("@@extension_id");
	var boxCol = new BoxCollection();
	var listener = new Listener(boxCol);
	listener.start();
});

