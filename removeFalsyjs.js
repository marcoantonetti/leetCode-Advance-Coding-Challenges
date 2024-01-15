"use strict";
/* Given an object or array obj, return a compact object. A compact object is the same as the original object, 
except with keys containing falsy values removed. This operation applies to the object and any nested objects. 
Arrays are considered objects where the indices are keys. 
A value is considered falsy when Boolean(value) returns false. */

const obj = [null, 0, false, 1];
const obj1 = { a: null, b: [false, 1] };
const obj2 = [null, 0, 5, [0], [false, 16]];

function removeFalsy(obj) {
  if (Array.isArray(obj)) {
    let output = [];

    obj.forEach((value) => {
      if (Array.isArray(value)) {
        output.push(value.filter((item) => Boolean(item)));
      } else if (Boolean(value)) output.push(value);
    });

    return output;
  } else if (typeof obj === "object") {
    let output = {};

    for (const key in obj) {
      if (Array.isArray(obj[key])) {
        output[key] = obj[key].filter((value) => Boolean(value));
      } else if (Boolean(obj[key])) output[key] = obj[key];
    }

    return output;
  }
}

console.log(removeFalsy({ a: 1, b: 1, c: null, d: "false", e: 0 }));
console.log(removeFalsy(obj));
console.log(removeFalsy(obj1));
console.log(removeFalsy(obj2));

//# sourceMappingURL=removeFalsy.js.map
