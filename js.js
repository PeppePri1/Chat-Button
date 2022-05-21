var myFunction;
function myFunction (btns) {
var obj = document.getElementById(btns);
if (obj.style.display == "block") {
obj.style.display = "none";
}else {
obj.style.display = "block";
}
}
