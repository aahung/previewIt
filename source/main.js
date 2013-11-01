// get the mouse position
var mouseX, mouseY;
var boxCol;
$(function(){
	boxCol = new boxCollection();
	$(window).mousemove(function(e){
		mouseX = e.clientX;
		mouseY = e.clientY;
	});
});
// main function
function previewIt(){
	$("a").hover(function(){
		var a = this; //save this to a for future usage
		getKeyInstruct(a, 'in');
	}, function(){
		getKeyInstruct("", 'out');
	});	
}

$(function(){
	previewIt();
});

function getKeyInstruct(a, postion){
	try	{
		$(window).off("keypress");//end the bind of keypress event created by previous code
	}
	catch(e){
		console.log(e);
	}
			alert('');
	$(window).keypress(function(e) {
		var key = e.which;
		if (postion == "in"){
			if (key == 119) {
				if (boxCol.member.length == 0){
					var newBox = new previewBox($(a).attr('href'));
					boxCol.add(newBox);
					newBox.render();
				}
				else {
					if (boxCol.topBox().src == $(a).attr('href')) {
						boxCol.pop();
					}
					else {
						var newBox = new previewBox($(a).attr('href'));
						boxCol.add(newBox);
						newBox.render();
					}
				}
			}
		}
		else {
			if (key == 119) {
				if (boxCol.member.length == 0){
					;
				}
				else {
					boxCol.pop();
					debugger;
				}
			}
		}
	});
}
