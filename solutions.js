// Sum of Two Numbers
function sum(a, b) {
    if(typeof a!== "number"||typeof b!=="number") {
      return "Los datos de entrada no son adecuados"
    }else{
    return a + b;
  }   
} 

// Factorial of a Number
function factorial(n) {
  while (n<0|| typeof n !== "number"){
    return "Los datos de entrada no son adecuados"
  }
  let count= 1 ;
  for(let i = 1;i <=n; i++){
    count= count * i;
  }
  return count;
}

// Find the Largest Number
function findLargest(arr) {
  if (!Array.isArray(arr)|| arr.length === 0) {
    return "Los datos de entrada no son adecuados";
  }
  let largest = arr[0];
  for (let i = 1;i < arr.length;i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
  
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

