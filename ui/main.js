//counter code

var button = document.getElementById("first");
var first = 0;

button.Onclick = function () {
    first = first + 1;
    var span = document.getElementById("count");
    span.innerHTML = first.toString();
};


