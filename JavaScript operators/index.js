// = assignment operator
// == comparison operator. Compares if values are equal
// === strict equality equality. Compares if values and data types are equal
// != inequality operator
// !== strict inequality operator

const PI = 3.14;

// example 1 - returns true
if(PI == "3.14"){
    console.log("That is PI");
}
else{
    console.log("That is NOT PI");
}

// example 2 - returns false
if(PI === "3.14"){
    console.log("That is PI");
}
else{
    console.log("That is NOT PI");
}

// example 3 - returns false
if(PI != "3.14"){
    console.log("That is NOT PI");
}
else{
    console.log("That is PI");
}

// example 4 - returns true
if(PI !== "3.14"){
    console.log("That is NOT PI");
}
else{
    console.log("That is PI");
}