const n = document.getElementById("input");

function button(value) {
    n.value += value;
}

function inputClear() {
    n.value = "";
}

function calculate() {
    try {
        n.value = Function('"use strict";return (' + n.value + ')')();
    } catch {
        n.value = "Erro";
    }
}
