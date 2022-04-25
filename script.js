let a = ""; //first number
let b = ""; //second number
let sign = "";//знак операции
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["+", "-", "*", "/", "%"];
const out = document.querySelector(".outputField");

function allClear() {
    a = ""; //first number
    b = ""; //second number
    sign = ""; //знак операции
    // finish = false;
    out.textContent = 0;
};
//устанавливаем отслеживание события нажатия
document.querySelector('.calculator').onclick = (event) => {
    if(!event.target.classList.contains('calculator-button')) return; 
    if(event.target.classList.contains('.AC')) allClear;

    out.textContent = "";
    //указываем что в переменной будет значение, взятое из div-а
    const clickButton = event.target.textContent;
    
    //проверка нажатия числового значения либо .
    if (digit.includes(clickButton)) {
        if (b === '' && sign === '') {  //если b и знак пусты
            a += clickButton;           //продолжаем наполнять а
            out.textContent = a; 
        } else if(a!=='' && b!=='' && finish) {     //если а и b не пустые, и finish = true
            b = clickButton;                        //наполнять снова b
            finish = false;
            out.textContent = b;
        } else {                                    //продолжать наполнять b
            b += clickButton;
            out.textContent = b;
        }
        console.table(a, b, sign);
        return;
    }
//проверка нажатия функциональных кнопок
    if(action.includes(clickButton)) {
        sign = clickButton;
        console.table(a, b, sign);
        out.textContent = sign;
        return;
    }
//логика вычислений калькулятора
    if(clickButton == "=") {
        if (b === '') b = a;
        switch(sign) {
            case "+": 
                a = (+a) + (+b);
                break;
            case "*": 
                a = (+a) * (+b);
                break;
            case "-": 
                a = (+a) - (+b);
                break;
            case "/":
                if(b === '0') {
                    out.textContent = "Ошибка";
                    a = b = sign = '';
                    return;
                } 
                a = (+a) / (+b);
                break;
        }
        finish = true;
        out.textContent = a;
        // console.table(a, b, sigh);
        
    }
}