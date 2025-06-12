## Temperature Converter 
This program is a simple Temperature Converter built using HTML, CSS, and JavaScript. It allows users to input a temperature value and convert it either from Celsius to Fahrenheit or vice versa using radio button selection.

### 
```javascript
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
```

### Explanation
This code implements a simple temperature converter with the following functionality:    
It gets references to the **input field, radio buttons** *(toFahrenheit, toCelsius)*, the *convert button*, and the *result display element*.  
When the button is clicked, it reads the value from the text box.  
If the *Fahrenheit option* is checked, it attempts to convert the temperature from Celsius to Fahrenheit using the formula *(temp × 9/5) + 32*.   
If the *Celsius option* is selected, it converts Fahrenheit to Celsius using the correct formula *(temp - 32) × 5/9*.  
The result is displayed with *two decimal places* using *.toFixed(2).*  
If **no radio button is selected**, it shows a message prompting the user to choose a conversion type.  

### Key takeaway
**By doing this challenge, I deepened my understanding on:**  
Working with JavaScript functions.   
How to access and manipulate DOM elements using getElementById.  
How to handle user input and click events with addEventListener.  
The use of .checked to verify which radio button is selected.  
Why it's important to give radio buttons the same name="" attribute to ensure they behave as a mutually exclusive group.  
How to apply conditional logic (if, else if, else) to determine which conversion to perform.  
How to format and limit decimals in the result using .toFixed(2).  
How to dynamically display output to the user on the web page.  