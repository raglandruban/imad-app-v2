console.log('Loaded!');

var element = document.getElementById("main-text");

element.innerHTML = "MY WEBAPP,RAGLAND";


var element = document.getElementById("madi");
 var marginleft = 0;
 function moveright ()
 {
     marginleft = marginleft + 1;
     img.style.marginleft = marginleft + 'px';
 }
 img.onclick = function () {
     var interval = setInterval(moveright, 50);
 };