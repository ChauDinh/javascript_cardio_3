// Challenge 1: ADD ALL NUMBERS
/**
 * Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
 * ex: addAll(2, 3, 4) === 9
 */

// Solution I:
 function addAll() {
  let args = Array.prototype.slice.call(arguments) // Array.from(arguments) in ES6
  let total = 0;
  for (let i = 0; i < args.length; i++) {
   total += args[i];
  }
  return total;
 }
 console.log("Challenge 1: First Solution");
 console.log(addAll(2, 3, 4));

// Solution II: - using ...rest & reduce
 function addAll2(...numbers) {
  return numbers.reduce((acc, cur) => acc + cur);
 }
 console.log("Challenge 1: Second Solution");
 console.log(addAll2(2, 3, 4));
