var chkBike = document.getElementById("chkBike");
var chkCar = document.getElementById("chkCar");

document.getElementById("btnSubmit").onclick = function () {
    if (chkBike.checked) {
        console.log("escolheu 'bike'");
    } else {
        console.log("não escolheu 'bike'");
    }

    if (chkCar.checked) {
        console.log("escolheu 'car'");
    } else {
        console.log("não escolheu 'car'");
    }
};

document.getElementById("btnLoad").onclick = function () {
    if (Math.floor(Math.random() * 2)) {
        chkBike.checked = true;
    } else {
        chkBike.checked = false;
    }

    if (Math.floor(Math.random() * 2)) {
        chkCar.checked = true;
    } else {
        chkCar.checked = false;
    }
};