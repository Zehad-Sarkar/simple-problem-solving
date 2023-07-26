// problem 1. >  Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.
//Example Input: "hello world" Example Output: "dlrow olleh"

function reverseString(string) {
  let reverse = "";
  for (let i = string.length - 1; i >= 0; i--) {
    const index = string[i];
    reverse += index;
  }
  return reverse;
}

const reversed = reverseString("hello world");
// console.log('reversed',reversed);

//problem 2. > Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
//Example Input: [2, -5, 10, -3, 7] Example Output: 19

function sumOfPositiveNumbers(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (element > 0) {
      sum = sum + element;
    }
  }
  return sum;
}
const numbers = [2, -5, 10, -3, 7];
const numbersOfSum = sumOfPositiveNumbers(numbers);
// console.log('numbersOfSum',numbersOfSum);

//problem 3. > Write a JavaScript program to find the most frequent element in an array and return it.
// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

function frequentElement(elements) {
  let frequentNumber = {};
  let mostFrequentNumber;
  let maxFrequentNumber = 0;
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    frequentNumber[element] = (frequentNumber[element] || 0) + 1;
    if (frequentNumber[element] > maxFrequentNumber) {
      maxFrequentNumber = frequentNumber[element];
      mostFrequentNumber = element;
    }
  }

  return mostFrequentNumber;
}
const array = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const frequent = frequentElement(array);
// console.log('frequent',frequent);

//problem 4. > Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
//  Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)

function findTwoNumbers(array, target) {
  let result = [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0 + 1; j < array.length; j++) {
      let sum = array[i] + array[j];
      if (sum === target) {
        result.push([i, j]); //it returns all pairs
        // return [i,j] //it return only first pairs
      }
    }
  }
  return result[1]; //its return 1 index from [[0,3],[1,2]]
  // return result; //it return all pairs
}

const arr = [1, 3, 6, 8, 11, 15];
const target = 9;
const result = findTwoNumbers(arr, target);
// console.log('result',result);

//problem 5. > Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "num2 cant be 0 it must be positive value";
      }
      return num1 / num2;
  }
}
const calResult = calculator(5, 5, "*");
// console.log("calResult", calResult);

//problem 6. > Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function passwordGenerate(length) {
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerCase = upperCase.toLowerCase();
  let numbers = "1234567890";
  const specialChar = "!@#$%^&*()_-+=<>?/{}~";
  const allChars = upperCase + lowerCase + numbers + specialChar;

  let password = 0;
  for (let i = 0; i < length; i++) {
    const pass = Math.floor(Math.random() * allChars.length);
    password += allChars[pass];
  }
  return password;
}
const passResult = passwordGenerate(12);
// console.log('passResult',passResult);

//problem 7. > Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInteger(romans) {
  const romanNumberValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const roman = romans.toUpperCase();

  let result = 0;
  for (let i = 0; i < roman.length; i++) {
    const currentSymbolValue = romanNumberValues[roman[i]];
    const nextSymbolValue = romanNumberValues[roman[i + 1]];
    if (nextSymbolValue > currentSymbolValue) {
      result += nextSymbolValue - currentSymbolValue;
      i++;
    } else {
      result += currentSymbolValue;
    }
  }
  return result;
}
const integerNumber = romanToInteger("X");
// console.log('integerNumber',integerNumber);

//problem 8. > Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function secondSmallestNumber(number) {
  let first = 0;
  let second = 0;
  for (let i = 0; i < number.length; i++) {
    const element = number[i];

    if (element > first) {
      second = first;
      first = element;
    } else if (element > second && element !== first) {
      second = element;
    }
  }

  return second;
}
const arrayNumber = [1, 2, 3, 4, 5];
const secondSmallest = secondSmallestNumber(arrayNumber);
// console.log('secondSmallest',secondSmallest);
