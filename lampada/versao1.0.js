var element = document.getElementById('myimage');
element.onclick = function() {
    if (element.src.match("lampada-on")) {
        element.src="lampada-off.gif";
    } else {
        element.src="lampada-on.gif";
    }
};