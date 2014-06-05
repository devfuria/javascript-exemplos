var lampada = {
    // propriedade para sabermos o estado da lampada
    ligada: false,
    // representa a tag img
    elemento: document.getElementById('myimage'),
    // método que acende a lampada
    acender: function() {
        this.elemento.src = "lampada-on.gif";
        this.ligada = true;
    },
    // método que apaga a lampada
    apagar: function() {
        this.elemento.src = "lampada-off.gif";
        this.ligada = false;
    }
};

/**
 * Método anexado ao evento 'click' da tag img
 * que alterna entre acessa e apagada
 */
lampada.elemento.onclick = function() {
    if (lampada.ligada) {
        lampada.apagar();
    } else {
        lampada.acender();
    }
};