var lampada = {
    ligada: false,
    elemento: document.getElementById('myimage'),
    acender: function() {
        lampada.elemento.src = "lampada-on.gif";
        lampada.ligada = true;
    },
    apagar: function() {
        lampada.elemento.src = "lampada-off.gif";
        lampada.ligada = false;
    }
};
lampada.elemento.onclick = function() {
    if (lampada.ligada) {
        lampada.apagar();
    } else {
        lampada.acender();
    }
};