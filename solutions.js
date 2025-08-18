// Sum of Two Numbers
function sum(a, b) {
  if(typeof a!== "number"||typeof b!=="number") {
      console.log("Los datos de entrada no son adecuados");
      return;
  }else{
    return a + b;
  }   
} 

// Factorial of a Number
function factorial(n) {
  if (typeof n !== "number" || n < 0) {
    console.log("Los datos de entrada no son adecuados");
    return;
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
    console.log("Los datos de entrada no son adecuados");
    return;
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
    console.log("Los datos de entrada no son adecuados");
    return;
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
