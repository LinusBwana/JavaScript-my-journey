
// example 1
const month = 10;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        "Invalid month"
        break;
}

// example 2
let score = 50;
let grade;
switch (true) {
    case score >= 80:
        grade = "A";
    break;
    case score >= 70:
        grade = "B";
        break;
    case score >= 60:
        grade = "C";
        break;
    case score >= 50:
        grade = "D";
        break;
    default:
        grade = "E";
        break;
}
console.log(grade)


