// if statement = if a condition that is true, excute some code, if not, do something else

// example 1
/*
let age = 13;
if (age >= 25 ){
    console.log("You are an adult");
} 
else {
    console.log("You are nou authorised");
}
*/


// example 2
/*
 let time = 9;
 if(time < 12){
    console.log("Good morning");
 }
 else{
    console.log("Good afternoon");
 }


// example 3
let isStudent = false;

if(isStudent){
    console.log("You are a student");
}
else{
    console.log("you are not a student")
}
*/


// example 4
let age = 0;

if(age >= 18){
    console.log("You can apply for an ID");
}
else if(age<0){
    console.log("You age can not be less than 0");
}
else if(age == 0){
    console.log("You have just been born");
}
else if(age >= 100){
    console.log("You are too old to apply for an ID");
}
else{
    console.log("You can not apply fo an ID")
}