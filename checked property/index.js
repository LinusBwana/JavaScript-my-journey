// .checked is a property that determines the checked state of an HTML checkbox or radio button element

const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckbox.checked){
        subResult.textContent = `You have subscribed`;
    }
    else{
        subResult.textContent = `You have not subscribed`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `Your payment method is Visa`;
    }
    else if(mastercardBtn.checked){
        paymentResult.textContent = `Your payment method is MasterCard`;
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = `Your payment method is PayPal`;
    }
    else{
         paymentResult.textContent = `You have not chosen the payment method`;
    }
};





