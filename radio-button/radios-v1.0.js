/**
 * Botão Submit
 */
document.getElementById("btnSubmit").onclick = function() {
    var radios = document.getElementsByName("band-rock");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            console.log("Escolheu: " + radios[i].value);
        }
    }
};

/**
 * Botão Load
 */
document.getElementById("btnLoad").onclick = function() {
    var radios = document.getElementsByName("band-rock");

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].value === "led-zeppelin") {
            radios[i].checked = true;
        }
    }
};