// get the mouse position
var mouseX, mouseY;
$(function(){
	$(window).mousemove(function(e){
		mouseX = e.clientX;
		mouseY = e.clientY;
	});
});
// main function
function previewIt(){
	$("a").hover(function(){
		var a = this; //save this to a for future usage
		$(window).off("keypress");//end the bind of keypress event created by previous code
		$(window).keypress(function(e) {
			var key = e.which;
			if (key == 119) {
				if ($(".previewBox").length == 0)
					createPreview(a); //pass mouse position and "this" reference to function
				else {
					$('.previewBox').remove(); //if there does exsit preview box, remove it. Why doing this is sometimes user wants to close the preview even the mouse still on the link
				}
			}
		});
	}, function(){
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

function createPreview(a){
	// get browser size
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var ele = document.createElement("iframe");//create preview box element, for future render
	$(ele).css({"height": "400px", "width": "700px", "position": "fixed", "border": "0px", "z-index": "2000", "box-shadow": "0px 0px 10px 0px black", "background": "url('http://dribbble.s3.amazonaws.com/users/80078/screenshots/995621/loading.gif')", "background-position": "center center"});
	// judge the mouse position and set the position of preview box dynamically
	if (mouseX < windowWidth / 2){
		$(ele).css("right", "10px");
	}
	else{
		$(ele).css("left", "10px");
	}
	if (mouseY < windowHeight / 2){
		$(ele).css("bottom", "10px");
	}
	else{
		$(ele).css("top", "10px");
	}
	$(ele).attr("src", $(a).attr("href"));
	$(ele).addClass("previewBox");//set identity
	$(ele).load(function(){
		$(this).css("background", "white");
	});
	$(a).parent().append(ele);//render the preview box element
}
$(function(){previewIt();});

