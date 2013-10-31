function previewIt(){
	$("a").hover(function(){
		var mouseX, mouseY;//define the mouse position
		$(document).mousemove(function(e){
			mouseX = e.pageX;
			mouseY = e.pageY;
		}); //get the mouse position related to left top of browser.
		var a = this; //save this to a for future usage
		$(window).off("keypress");//end the bind of keypress event created by previous code
		$(window).keypress(function(e) {
			var key = e.which;
			if (key == 119) {
				if ($(".previewBox").length == 0)
					createPreview(a, mouseX, mouseY); //pass mouse position and "this" reference to function
				else {
					$('.previewBox').remove(); //if there does exsit preview box, remove it. Why doing this is sometimes user wants to close the preview even the mouse still on the link
				}
			}
		});
	}, function(){
		$(document).off("mousemove");//end the bind of mouseover event created when hover
		$(window).off("keypress");//end the bind of keypress event created by previous code
		$(window).keypress(function(e) {
			var key = e.which;
			if (key == 119) { //119 is "w"
				if ($(".previewBox").length > 0){
					$('.previewBox').remove();//if there exist preview boxes, destroy it
				}
			}
		});
	});	
}

function createPreview(a, mouseX, mouseY){
	// get browser size
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var ele = document.createElement("iframe");//create preview box element, for future render
	$(ele).css({"height": "400px", "width": "700px", "position": "fixed", "border": "0px", "z-index": "2000", "box-shadow": "0px 0px 10px 0px black"});
	// judge the mouse position and set the position of preview box dynamically
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
	$(ele).attr("src", $(a).attr("href"));
	$(ele).addClass("previewBox");//set identity
	$(a).parent().append(ele);//render the preview box element
}
previewIt();

