var num = 0;

function add() {
    num++;
    mostrar(num);
}

function sub() {
    num--;
    mostrar(num);
}

function mostrar(valor) {
    var element = document.getElementById("resultado");
    if (element) {
        element.innerHTML = valor;
    }
}