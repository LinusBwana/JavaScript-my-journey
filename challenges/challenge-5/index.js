
const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const myButton = document.getElementById("myButton");
const result = document.getElementById("result");
let temp;

myButton.addEventListener('click', function convert(){
    temp = textBox.value
    if(toFahrenheit.checked){
        temp = (temp * 9 / 5) + 32;
        result.textContent = `Answer is ${temp.toFixed(2)}°F`;
    }
    else if(toCelsius.checked){
        temp = (temp - 32) * 5 / 9;
        result.textContent = `Answer is ${temp.toFixed(2)}°C`;
    }
    else{
       result.textContent = `Select type of conversion`;
    }
});

