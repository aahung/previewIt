function previewIt(){
	$("a").hover(function(){
		var mouseX, mouseY;
		$(document).mousemove(function(e){
			mouseX = e.pageX;
			mouseY = e.pageY;
		}); 
		var a = this;
		$(window).off("keypress");
		$(window).keypress(function(e) {
			var key = e.which;
			if (key == 119) {
				if ($(".previewBox").length == 0)
					createPreview(a, mouseX, mouseY);
				else {
					$('.previewBox').remove();
				}
			}
		});
	}, function(){
		$(document).off("mousemove");
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

function createPreview(a, mouseX, mouseY){
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var ele = document.createElement("iframe");
	$(ele).css({"height": "400px", "width": "700px", "position": "fixed", "border": "0px", "z-index": "2000", "box-shadow": "0px 0px 10px 0px black"});
	if (mouseX < windowWidth / 2){
		$(ele).css("left", mouseX);
	}
	else{
		$(ele).css("right", windowWidth - mouseX);
	}
	if (mouseY < windowHeight / 2){
		$(ele).css("top", mouseY);
	}
	else{
		$(ele).css("bottom", windowHeight - mouseY);
	}
	debugger;
	$(ele).attr("src", $(a).attr("href"));
	$(ele).addClass("previewBox");
	$(a).parent().append(ele);
}
previewIt();

