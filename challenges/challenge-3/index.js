

const myInput = document.getElementById("myInput");
const myLabel = document.getElementById("myLabel");
const myP = document.getElementById("myP");
const myButton = document.getElementById("myButton");
let age;

myButton.onclick = function(){
    age = myInput.value;
    age = Number(age);

    if(age >= 18){
        myP.textContent = "You can apply for an ID";
    }
    else if(age<0){
        myP.textContent = "You age can not be less than 0";
    }
    else if(age == 0){
        myP.textContent = "You have just been born";
    }
    else if(age >= 100){
        myP.textContent = "You are too old to apply for an ID";
    }
    else{
        myP.textContent = "You can not apply fo an ID";
    }

}



