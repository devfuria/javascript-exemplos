var app = {
    num: 0,
    add: function() {
        this.num++;
        this.mostrar(this.num);
    },
    sub: function() {
        this.num--;
        this.mostrar(this.num);
    },
    mostrar: function(valor) {
        var element = document.getElementById("resultado");
        if (element) {
            element.innerHTML = valor;
        }
    }
}