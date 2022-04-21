let a = ""; //first number
let b = ""; //second number
let sign = "";//знак операции
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

document.querySelector('.calculator').onclick = (event) => {
    if(!event.target.classList.contains('calculator-button')) return; 
    if(event.target.classList.contains('.AC')) allClear;

    out.textContent = "";
    const clickButton = event.target.textContent;
    
    //проверка нажатия числового значения либо .
    if (digit.includes(clickButton)) {
        if (b === '' && sign === '') {
            a += clickButton;
            out.textContent = a; 
        } else if(a!=='' && b!=='' && finish) {

        } else {
            b += clickButton;
            out.textContent = b;
        }
        console.table(a, b, sign);
        return;
    }

    if(action.includes(clickButton)) {
        sign = clickButton;
        console.table(a, b, sign);
        out.textContent = sign;
        return;
    }
}