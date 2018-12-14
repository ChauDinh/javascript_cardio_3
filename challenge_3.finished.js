// Challenge 3: SEEK & DESTROY
/**
 * Remove from the array whatever is in the following arguments. Then return the leftover numbers in an array
 * ex. seekAndDesktroy([2, 3, 4, 6, 6, "halo"], 2, 6) === [3, 4, "halo"]
 */

// Solution 1: using arguments, indexOf, filter
function seekAndDesktroy(arr) {
 const args = Array.from(arguments);

 function filterArray(arr) {
  // return true if NOT in array
  return args.indexOf(arr) === -1;
 }

 return arr.filter(filterArray);
}
console.log(seekAndDesktroy([2, 3, 4, 6, 6, "halo"], 2, 6));

// Solution 2: using ...rest, filter, & includes
function seekAndDesktroy2(arr, ...rest) {
 return arr.filter(val => !rest.includes(val));
}
console.log(seekAndDesktroy2([2, 3, 4, 6, 6, "halo"], 2, 6));

