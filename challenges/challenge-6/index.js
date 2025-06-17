
const diceInput = document.getElementById("diceInput");
const diceImages = document.getElementById("diceImages");
const diceResults = document.getElementById("diceResults");
const rollDiceButton = document.getElementById("rollDiceButton");

rollDiceButton.addEventListener('click', function() {

    const values = [];
    const images = [];

    for(let i=0; i<diceInput.value; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="images/dice ${value}.png" alt="Dice ${value}">`);
    }
    diceResults.textContent = `dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join("");

});
