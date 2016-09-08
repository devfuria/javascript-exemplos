/**
 * Carregando a combobox
 */
document.getElementById("btnCarregar").onclick = function () {
    var comboCidades = document.getElementById("cboCidades");

    var opt0 = document.createElement("option");
    opt0.value = "0";
    opt0.text = "";
    comboCidades.add(opt0, comboCidades.options[0]);

    var opt1 = document.createElement("option");
    opt1.value = "scs";
    opt1.text = "São Caetano do Sul";
    comboCidades.add(opt1, comboCidades.options[1]);

    var opt2 = document.createElement("option");
    opt2.value = "sa";
    opt2.text = "Santo André";
    comboCidades.add(opt2, comboCidades.options[2]);

    var opt3 = document.createElement("option");
    opt3.value = "sbc";
    opt3.text = "São Bernardo do Campo";
    comboCidades.add(opt3, comboCidades.options[3]);

};

/**
 * Descobrindo o valor selecionado
 */
document.getElementById("btnInfo").onclick = function () {
    var comboCidades = document.getElementById("cboCidades");
    console.log("O indice é: " + comboCidades.selectedIndex);
    console.log("O texto é: " + comboCidades.options[comboCidades.selectedIndex].text);
    console.log("A chave é: " + comboCidades.options[comboCidades.selectedIndex].value);
};


/**
 * Selecionando um valor para a combobox
 */
document.getElementById("btnAleatoriamente").onclick = function () {
    var comboCidades = document.getElementById("cboCidades");
    comboCidades.selectedIndex = Math.floor(Math.random() * comboCidades.length);
};

/**
 * Removendo elementos da combobox
 */
document.getElementById("btnRemoverItem").onclick = function () {
    var comboCidades = document.getElementById("cboCidades");
    comboCidades.remove(0);
};

/**
 * Removendo todos os elementos
 */
document.getElementById("btnRemoverTodos").onclick = function () {
    var comboCidades = document.getElementById("cboCidades");
    while (comboCidades.length) {
        comboCidades.remove(0);
    }
};