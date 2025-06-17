// map() accepts a callback and applies that function to each element of an array, then return a new array without changing the original array

const dates = ["2025-06-17", "2025-06-18", "2025-06-18"];

const fortmattedDates = dates.map(function (element){
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
});
console.log(fortmattedDates);


