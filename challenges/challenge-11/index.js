// Calculator

const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

function appendToDisplay(){
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if(button.innerText === "CLEAR"){
                clearDisplay();
                return;
            }
            else if(button.innerText === "="){
                calculate();
                return;
            }
            display.value += button.innerText;
        })
    });
};
appendToDisplay();

function clearDisplay() {
    display.value = '';
};

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = 'Error';
    }
};