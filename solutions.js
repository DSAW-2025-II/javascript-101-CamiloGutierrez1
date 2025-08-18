// Sum of Two Numbers
function sum(a, b) {
  if(typeof a!== "number" || typeof b!=="number") {
    return "Error, a & b must be numbers"
  }else{
    return a + b;
  }   
}console.log(sum(2,3)); 

// Factorial of a Number
function factorial(n) {
  // Add your code here
}

// Find the Largest Number
function findLargest(arr) {
  // Add your code here
}

// Count Vowels in a String
function countVowels(str) {
  // Add your code here
}

// Check if a Number is Prime
function isPrime(n) {
  // Add your code here
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};

