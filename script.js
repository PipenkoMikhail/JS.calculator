let a = " "; //first number
let b = " "; //second number
let sign = " ";//знак операции
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["+", "-", "*", "/", "%"];
const out = document.querySelector(".outputField");

function allClear() {
    let a = ""; //first number
    let b = ""; //second number
    let sign = "";//знак операции
    let finish = false;
    out.textContent = 0;
}
document.querySelector('.AC').onclick = allClear;
document.querySelector('.calculator').onclick = (event) => {
    if(!event.target.classList.contains('calculator-button')) return; 
    if(event.target.classList.contains('AC')) return;

    out.textContent = "";
    const clickButton = event.target.textContent;
    
    if(digit.includes(clickButton)) {
        a += clickButton;
        console.log(a, b, sign);
        out.textContent = a;
    }
}