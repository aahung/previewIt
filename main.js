
function previewIt(){
	$("a").hover(function(){
		var a = this;
		$(window).off("keypress");
		$(window).keypress(function(e) {
			var key = e.which;
			if (key == 119) {
				if ($(".previewBox").length == 0)
					createPreview(a);
				else {
					$('.previewBox').remove();
				}
			}
		});
	}, function(){
		$(window).off("keypress");
		$(window).keypress(function(e) {
			var key = e.which;
			if (key == 119) {
				if ($(".previewBox").length > 0){
					$('.previewBox').remove();
				}
			}
		});
	});	
}

function createPreview(a){
	var ele = document.createElement("iframe");
	$(ele).css({"height": "400px", "width": "700px", "position": "absolute", "border": "0px", "z-index": "2000", "box-shadow": "0px 0px 10px 0px black"});
	$(ele).attr("src", $(a).attr("href"));
	$(ele).addClass("previewBox");
	$(a).parent().append(ele);
	debugger;
}
previewIt();

