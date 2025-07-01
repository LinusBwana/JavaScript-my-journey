# date objects
In this practice, I explored how to work with the JavaScript `Date` object. I created a new date instance, extracted specific components of the date and time, modified the date, and compared two dates to detect the New Year transition. This helped me understand how JavaScript handles date/time data and how comparisons work between two `Date` instances.

## I practiced date objects using the examples below:
I created a new Date object representing the current date and time. Then I extracted individual components like year, month, date, day of the week, hour, and minute using various getter methods.
```javascript
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
```

#### Console output
```javascript
Tue Jul 01 2025 12:48:48 GMT+0300 (East Africa Time)
2025
6
1
2
12
48
```

### Update the Date Object
I modified the original Date object to represent a specific point in time. January 10, 2027, at 3:30 PM.
```javascript
date.setFullYear(2027);
date.setMonth(0);
date.setDate(10);
date.setHours(15);
date.setMinutes(30);

console.log(date);
```

#### Console output
```javascript
Sun Jan 10 2027 15:30:14 GMT+0300 (East Africa Time)
``` 

### Compare Two Dates
I created two Date objects. One for the very last moment of 2024 and one for the beginning of 2025. I then compared them to simulate a New Year transition. If the second date is greater than the first (which it is), I printed a celebratory message.

#### Console output
```javascript
HAPPY NEW YEAR
``` 

## What I learnt in the examples above
- How to create and manipulate JavaScript Date objects.
- That months are 0-based (January = 0, December = 11).
- How to compare Date instances using comparison operators.