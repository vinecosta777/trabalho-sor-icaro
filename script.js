function somar() {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    let resultado = numero1 + numero2;

    document.getElementById("resultado").innerText = resultado;
    console.log(numero1 + "+" + numero2 + "=" + resultado);
}

function subtrair(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    let resultado = numero1 - numero2;
    document.getElementById("resultado").innerText = resultado;
    console.log(numero1 + "-" + numero2 + "=" + resultado);
}
function multiplicar(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    let resultado = numero1 * numero2;
    document.getElementById("resultado").innerText = resultado;
    console.log(numero1 + "x" + numero2 + "=" + resultado);
}
function dividir(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    let resultado = numero1 / numero2;
    document.getElementById("resultado").innerText = resultado;
    console.log(numero1 + "÷" + numero2 + "=" + resultado);
}
function limpar(){
    const numero1 = document.getElementById("numero1").value = "";
    const numero2 = document.getElementById("numero2").value = "";

    let resultado = 0;

    document.getElementById("resultado").innerText = resultado;
    console.log("Campos da calculadora reiniciados.");
}
