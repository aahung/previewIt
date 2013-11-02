var previewItExtensionID;
$(function(){
	previewItExtensionID = chrome.i18n.getMessage("@@extension_id");
	var boxCol = new BoxCollection();
	var listener = new Listener(boxCol);
	listener.start();
});

