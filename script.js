let a = ""; //first number
let b = ""; //second number
let sign = "";//знак операции
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["+", "-", "*", "/", "%"];
const out = document.querySelector(".outputField");

function allClear () {
    let a = ""; //first number
    let b = ""; //second number
    let sign = "";//знак операции
    let finish = false;
    out.textContent = "0";
}
document.querySelector('.AC').onclick = allClear(); 

// let num1 = Number(document.getElementByClassName('calculator-button'));
// alert(num1);