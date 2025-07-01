// date objects - are objects that contain values that represent dates and times
// These date objects can be chnaged and formatted

const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const dateOfTheMonth = date.getDate();
const dayOfWeek = date.getDay();
const hour = date.getHours();
const minute = date.getMinutes();

console.log(date);
console.log(year);
console.log(month);
console.log(dateOfTheMonth);
console.log(dayOfWeek);
console.log(hour);
console.log(minute);

date.setFullYear(2027);
date.setMonth(0);
date.setDate(10);
date.setHours(15);
date.setMinutes(30);

console.log(date);

const date1 = new Date("2024-12-31 23:59:59:59");
const date2 = new Date("2025-1-1 00:00:00:00");

if(date2 > date1){
    console.log("HAPPY NEW YEAR");
};