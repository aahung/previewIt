// get the mouse position
var mouseX, mouseY;
var boxCol;
var hoverLink;
$(function(){
	boxCol = new boxCollection();
	$(window).mousemove(function(e){
		mouseX = e.clientX;
		mouseY = e.clientY;
	});
});
// main function
function listenLinks(){
	$("a").hover(function(){
		hoverLink = this; //save this to a for future usage
	}, function(){
		hoverLink = null;
	});
}

$(function(){
	listenKeys();
	listenLinks();
});

function listenKeys(){
	$(window).on("keypress", function(e){
		var key = e.which;
		if (key == 119 && hoverLink != null) {
			if (boxCol.member.length == 0){
				var newBox = new previewBox($(hoverLink).attr('href'));
				boxCol.add(newBox);
				newBox.render();
			}
			else {
				if (boxCol.topBox().src == $(hoverLink).attr('href')) {
					boxCol.pop();
				}
				else {
					var newBox = new previewBox($(hoverLink).attr('href'));
					boxCol.add(newBox);
					newBox.render();
				}
			}
		}
		if (key == 119 && hoverLink == null)  {
			if (boxCol.member.length == 0){
				;
			}
			else {
				boxCol.pop();
				debugger;
			}
		}
	});
}
