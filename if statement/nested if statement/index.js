// if statement = if a condition that is true, excute some code, if not, do something else

// example 1
let age = 25;
let hasLicense = true;

if(age >= 18){
    console.log("You are old enough to drive");

    if (hasLicense){
        console.log("You have a license");
    }
    else{
        console.log("You have no license")
    }
}
else{
    console.log("You are young to drive");
}