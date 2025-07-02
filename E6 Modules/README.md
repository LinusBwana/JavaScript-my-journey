# ES6 Modules
**ES6 Modules** (introduced in ECMAScript 2015) allow JavaScript code to be split into reusable pieces. A module can **export** functions, constants, or classes and another file can **import** them as needed.  
This practice exercise demonstrates how to I used **ES6 Modules** in JavaScript to organize and reuse code across files. The example calculates the **circumference**, **area**, and **volume** of a circle/sphere based on a given radius.

I used this feature to:
- Keep my code organized
- Avoid repeating logic
- Separate the logic from the display or user interface

Modules allow us to export variables and functions from one file and import them into another.

## What I Did

### In `mathUtil.js`:
I created a module that exports:
- A constant `PI`
- Three functions:  
  - `getCircumference(radius)`  
  - `getArea(radius)`  
  - `getVolume(radius)`

```js
export const PI = 3.14159;

export function getCircumference(radius) {
    return 2 * PI * radius;
}

export function getArea(radius) {
    return PI * radius * radius;
}

export function getVolume(radius) {
    return 4 * PI * radius * radius;
}
```

I imported the constants and functions from mathUtil.js like this:
```javascript
import { PI, getArea, getCircumference, getVolume } from './mathUtil.js';
```

Then I used them to:  
- Log the value of PI  
- Calculate and print:  
   - The circumference of a circle
   - The area of a circle
   - The volume of a sphere

### In `index.html`:
To enable module usage in the browser, I added this line:  

```javascript
<script type="module" src="index.js"></script>
```
This tells the browser to treat index.js as a **JavaScript module**, allowing it to use *import* statements.

#### Console Output
```javascript
3.14159
62.83cm
314.16cm²
1256.64cm³
```

## What I learnt
- How to export constants and functions from a module
- How to import and use them in a main script
- How to structure code modularly using native JavaScript