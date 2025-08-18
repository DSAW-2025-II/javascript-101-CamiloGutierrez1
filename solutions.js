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
  let largest= arr[0];
  for (let i = 1;i < arr.length; i++) {
    if (arr[i] > largest) {
      largest =arr[i];
    }
  }
  return largest;
  
}

// Count Vowels in a String
function countVowels(str) {
  if (typeof str!== "string") {
    return "Los datos de entrada no son adecuados";
  }
  let count = 0;
  let vowels = "AEIOUaeiou";
  for (let i =0;i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

// Check if a Number is Prime
function isPrime(n) {
  if (typeof n !== "number" || n< 2) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  for (let i =2;i <= Math.sqrt(n);i++) {
    if (n % i === 0) 
    return false;
  }
  return true;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};

