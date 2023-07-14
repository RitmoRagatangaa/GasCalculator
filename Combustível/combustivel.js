let etanol
let gasolina

function Calcular() {
    etanol = parseFloat(formularioFlex.valoretanol.value.replace(",", "."));
    gasolina = parseFloat(formularioFlex.valorgasolina.value.replace(",", "."));

    if(etanol <= (0.72 * gasolina)) {
        document.querySelector("#status").src = "alcool.png";
    }

    else if(Calcular() == 0) {
        document.querySelector("#status").src = "neutro.png"
    }

    else {
        document.querySelector("#status").src = "gasolina.png";
    }
}

function Limpar () {
    document.querySelector("#status").src = "neutro.png";
}