function boxCollection(){
	this.length = 0;
	this.topLayer = 0;
	this.member = [];
}
boxCollection.prototype.add = function(box){
	this.member.push(box);
	box.layer = this.topLayer + 1;
	this.detect();
}
boxCollection.prototype.remove = function(box){
	this.member.pop(box);
	this.detect();
}
boxCollection.prototype.detect = function(){
	var topLayer = 0;
	for (var i = 0; i < this.member.length; i ++){
		if (this.member[i].layer > topLayer)
			topLayer = this.member[i].layer;
	}
	this.topLayer = topLayer;
}
boxCollection.prototype.pop = function(){
	var topBox = this.topBox();
	this.member.pop(topBox);
	topBox.destroy();
	this.detect();
}
boxCollection.prototype.topBox = function(){
	var boxes = this.member;
	var topLayer = this.topLayer;
	var topBox = $.grep(boxes, function(n, i){
		return n.layer == topLayer;
	});
	return topBox[0];
}
function previewBox(src){
	this.src = src;
	this.layer;
	this.ele;
}
previewBox.prototype.render = function(){
	// get browser size
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var ele = document.createElement("iframe");//create preview box element, for future render
	this.ele = ele;
	$(ele).attr("src", this.src);
	$(ele).addClass("previewBox");//set identity
	$(ele).attr("data-layer", this.layer);//set identity
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
	$(ele).css({"height": "400px", "width": "700px", "position": "fixed", "border": "0px", "z-index": "999999", "box-shadow": "0px 0px 10px 0px black", "background": "url('http://dribbble.s3.amazonaws.com/users/80078/screenshots/995621/loading.gif')", "background-position": "center center"});
	$(ele).load(function(){
		$(this).css("background", "white");
	});
	$("body").append(ele);//render the preview box element
}
previewBox.prototype.destroy = function(){
	this.ele.remove();
}