// arithmetic operators - operands (values, variables, etc)
// opeartors (+ - * /)

let students = 25;


students = students + 1;
students = students - 5;
students = students * 4;
students = students / 21
students = students ** 2
let extaStudents = students % 6;
console.log(students);
console.log(extaStudents);


// using argumented operators
students += 1;
students -= 5;
students *= 4;
students /= 21;
students **= 2
students %= 2;
console.log(students)


//increment operator - increases or decreases by only 1
students++;
students--;
console.log(students);


/* Operator precedence
1. parenthesis
2. exponents
3. multiplication & division & modulo
4. addition & subtraction
*/

let result = 1 + 2 * 3 + 4 ** 2;
console.log(result);