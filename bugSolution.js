```javascript
function myFunction(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Handle non-numeric input
  }
  if (b === 0) {
    return Infinity; // Handle division by zero
  }
  if (isNaN(a) || isNaN(b)) {
    return NaN; // Handle NaN input
  }
  return a / b;
}

console.log(myFunction(10, 0)); // Returns Infinity
console.log(myFunction(10, NaN)); // Returns NaN
console.log(myFunction(NaN, 10)); //Returns NaN
console.log(myFunction(10, 'a')); // Returns NaN
```