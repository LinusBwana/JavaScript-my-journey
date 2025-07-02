// ES6 Module is an external file that contains reusable code that can be imported into another JS files.

import {PI, getArea, getCircumference, getVolume} from './mathUtil.js';

console.log(PI);

const circumference = getCircumference(10);
console.log(`${circumference.toFixed(2)}cm`);

const area = getArea(10);
console.log(`${area.toFixed(2)}cm²`);

const volume = getVolume(10);
console.log(`${volume.toFixed(2)}cm³`);