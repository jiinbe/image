var canvas = new fabric.Canvas('c');
	
canvas.setWidth(600);
canvas.setHeight(600);
centeredScaling: true;
canvas.selection = false;
canvas.backgroundColor = 'rgba(27, 31, 36, 0.1)';
	
document.getElementById("imgLoader").onchange = function(e) {
var reader = new FileReader();
reader.onload = function(e) {
var image = new Image();
image.src = e.target.result;
image.onload = function() {
var img = new fabric.Image(image);
img.set({
borderColor: 'black',
cornerColor: 'black',
cornerSize: 20,
transparentCorners: false,
left: 100,
top: 60
});
img.scaleToWidth(300);
canvas.add(img).setActiveObject(img).renderAll();
}
}
reader.readAsDataURL(e.target.files[0]);
}

fabric.Image.fromURL('filter.png', function(img) {
canvas.setOverlayImage(img, canvas.renderAll.bind(canvas));
});
	
canvas.on({
'object:moving': function(e) {
e.target.opacity = 0.6;
},
'object:modified': function(e) {
e.target.opacity = 1;
}
});
	
$("#download").click(function(){
$("#c").get(0).toBlob(function(blob){
saveAs(blob, "image.png");
});
});

function selectFile() {
document.getElementById("imgLoader").click();
}
	
function checkInput() {
var input = document.getElementById('imgLoader').value;
var button = document.getElementById('download');
var button2 = document.getElementById('share');
button.disabled = input === '';
button2.disabled = input === '';
}
	
$(document).ready(function(){
$("#download").click(function(){
$("#hide").hide();
});
});
