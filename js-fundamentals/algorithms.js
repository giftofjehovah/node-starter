/*
  1. Sum
  Given two numbers, write a function that returns the sum of them.

  E.g.
  sum(1, 2) -> 3
  sum(5, 4) -> 9
*/
function sum (a, b) {
  return a + b
}

/*
  2. Sum from One
  Given a number, write a function that returns the sum of all numbers from 1 to the given number

  E.g.
  sumFromOne(10) -> 55
  sumFromOne(25) -> 325
*/
function sumFromOne (number) {
  let sum = 0
  for (let i = 0; i <= number; i++) {
    sum += i
  }
  return sum
}

/*
  3. Is Even Number
  Given a number, write a function that returns true if the number is even.

  E.g.
  isEvenNumber(2) -> true
  isEvenNumber(8) -> true
  isEvenNumber(7) -> false
*/
function isEvenNumber (number) {
  return number % 2 === 0
}
/*
  4. Even numbers
  Given a number, write a function that returns all even numbers up to it in an array.

  E.g.
  evenNumbers(4) -> [2, 4]
  evenNumbers(11) -> [2, 4, 6, 8, 10]
*/
function evenNumbers (number) {
  let evenNumbers = []
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      evenNumbers.push(i)
    }
  }
  return evenNumbers
}

/*
  5. Odd one out
  Given an array of numbers, write a function that return the number that are not in pairs

  E.g.
  oddOneOut([2, 2, 4, 6, 6]) -> 4
  oddOneOut([1, 5, 9, 21, 1, 5, 21]) -> 9
*/
function oddOneOut (arrayOfNumbers) {
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    const currentNumber = arrayOfNumbers[i]
    if (arrayOfNumbers.indexOf(currentNumber) === arrayOfNumbers.lastIndexOf(currentNumber)) {
      return arrayOfNumbers[i]
    }
  }
}

/*
  6. String Reversal
  Given a string of characters as input, write a function that returns it with characters reversed.

  E.g.
  reverseString('Happy') -> 'yppaH'
  reverseString('Hello World!') -> '!dlroW olleH'
*/
function reverseString (word) {
  return word.split('').reverse().join('')
}

/*
  7. Max Character
  Given a string of characters, return the character that appears the most often.

  E.g.
  maxCharacter("hello world!") -> "l"
  maxCharacter("this is coding") -> "i"
*/
function maxCharacter (word) {
  const wordArray = word.split('')
  const wordObj = {}
  let maxCount = 0
  let maxCharacter = ''
  for (let i = 0; i < wordArray.length; i++) {
    const currentChar = wordArray[i]
    wordObj[currentChar] = wordObj[currentChar] + 1 || 1
  }
  for (let char in wordObj) {
    if (wordObj[char] > maxCount) {
      maxCount = wordObj[char]
      maxCharacter = char
    }
  }
  return maxCharacter
}

/*
  8. Fibonacci
  Implement a function that returns the fibonacci number at a given index.

  fibonacci sequence = 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

  E.g
  fibonacci(6) -> 8
  fibonacci(10) -> 55
  fibonacci(100) -> 354224848179262000000
*/
function fibonacci (index) {
  const fibonacciSeq = [1, 1]
  for (let i = 2; i <= index - 1; i++) {
    const nextSeq = fibonacciSeq[i - 1] + fibonacciSeq[i - 2]
    fibonacciSeq.push(nextSeq)
  }
  return fibonacciSeq[index - 1]
}

module.exports = {
  sum,
  sumFromOne,
  isEvenNumber,
  evenNumbers,
  oddOneOut,
  reverseString,
  maxCharacter,
  fibonacci
}
