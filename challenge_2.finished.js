// Challenge 2: SUM ALL PRIMES
/**
 * Pass in a number to loop up to and add all of primes. 
 * ex. sumAllPrimes(10) == 17
 */

function sumAllPrimes(num) {
 let total = 0;
 function isPrime(input) {
  for (let j = 2; j < input; j++) {
   if (input % j === 0) {
    return false;
   }
  }
  return true;
 }
 for (let i = 2; i <= num; i++) {
  if (isPrime(i)) {
   total += i;
  }
 }
 return total;
}
console.log(sumAllPrimes(1000));