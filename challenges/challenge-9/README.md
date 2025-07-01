# Digital Clock
This exercise is a s**imple JavaScript digital clock** built as a personal challenge to better understand date and time handling in JavaScript.

## Exercise description
The goal was to create a live-updating digital clock that displays the current time in 12-hour format with AM/PM, and updates every second. The time should always be displayed in the following format:

```javascript
HH:MM:SSAM or HH:MM:SSPM
```

### Code
```javascript
function updateClock(){
    const date = new Date();

    let hours = date.getHours();
    const amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    const minutes = date.getMinutes().toString().padStart(2,0);
    const seconds = date.getSeconds().toString().padStart(2,0);

    const digitalClock = document.getElementById("digitalClock");
    digitalClock.textContent = `${hours}:${minutes}:${seconds}${amPm}`;
};

updateClock();
setInterval(updateClock, 1000);
```

## The Challenge I faced:
### 1. Leading Zero Formatting
While building the clock, I ran into a common formatting issue.  
Whenever the hour, minute, or second was less than 10, JavaScript would display it as a single digit.

For example:
```javascript
7:5:2AM
```
Instead of the expected:
```javascript
07:05:02AM
```

### The Solution
To fix this, I used JavaScript's *.toString().padStart()* method chain. 
- *.toString()* converts the number (e.g., 7) into a string ("7").
- *.padStart(2, "0")* then pads it to make sure it has two characters (e.g., "07").

This method ensures that all time units (hours, minutes, seconds) are always **2 digits long**, even when they’re less than 10.  
Here's how I implemented it in the code: 

```javascript
hours = hours.toString().padStart(2, "0");
const minutes = date.getMinutes().toString().padStart(2, "0");
const seconds = date.getSeconds().toString().padStart(2, "0");
```
This solved the formatting issue and made the display consistent.

### 2. AM / PM Handling
Another issue I faced was determining whether the current time was AM or PM, and converting the 24-hour clock to a 12-hour format.
I used the logic below to solve the issue:

```javascript
const amPm = hours >= 12 ? "PM" : "AM";
hours = hours % 12 || 12;
```

### The Solution
- I check if the hour is 12 or more to set "PM"; otherwise, it's "AM".
- I convert the 24-hour clock to 12-hour format using *hours % 12*.
- I added *|| 12* to handle the edge case where *hours % 12* is 0, so it shows 12 instead of 0 (i.e., 12 AM or 12 PM).

### Role of setInterval()
The clock updates in real time using the JavaScript *setInterval()* function. This function repeatedly calls *updateClock* function every second.

```javascript
setInterval(updateClock, 1000);
```
- *updateClock* is the function being called.  
- *1000* is the time interval in milliseconds (1000ms = 1 second).  

This means the updateClock function runs every second, ensuring that the displayed time stays accurate.
