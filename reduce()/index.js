// .reduce - reduces the elements of an array to a single value


// example 1
const prices = [45, 43.08, 90.50, 56.90, 10.30, 88.16];
const total = prices.reduce(function(accumulator, next){
    return accumulator + next
});
console.log(`The total is Ksh${total.toFixed(2)}`);


// example 2
const grades = [75, 90, 70, 49, 17, 65, 38, 87, 69];
const maxGrade = grades.reduce(function(previous, next){
    return Math.max(previous, next);
});
console.log(maxGrade);