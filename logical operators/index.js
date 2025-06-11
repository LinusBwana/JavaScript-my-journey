// logical operators are used to combine or manipulate boolean values
// AND == &&
// OR = ||
// NOT = !


const temp = -200;

// example 1
if(temp < 0 || temp <= 30){
    console.log("The weather is bad");
}
else{
    console.log("The weather is good");
}

// example 2
if(temp > 0 && temp <= 30){
    console.log("The weather is good");
}
else{
    console.log("The weather is bad");
}

// example 3
const isSunny = true;

if(!isSunny){
    console.log("It is CLOUDY");
}
else{
    console.log("It is SUNNY");
}