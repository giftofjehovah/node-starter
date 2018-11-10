# Javascript Fundamentals

## Content
1. Variables
1. Data Type
1. Operators
1. Control Flow
1. Loops
1. Functions

***

## Variables
A variable is a named storage for data. We can use variables to store any form of data in your javascript application. To create a variable in Javascript, we need to use the `let` keyword.

The statement below create (also known as declare or define) a variable with the name "firstName":
```js
let firstName
```

New we can assign a value to the variable by using the assignment operator `=`:
```js
let firstName

firstName = 'Jonathan'
```

The value is now saved in the variable. We can access it using the defined variable name:
```js
let firstName
firstName = 'Jonathan'

console.log(firstName) // output: 'Jonathan'
```

We can also merge the variable declaration and assignment into a single line:
```js
let firstName = 'Jonathan'

console.log(firstName) // output: 'Jonathan'
```

> In older scripts you may also find another keyword: `var` instead of `let`:
> ```js
> var firstName = 'Jonathan'
> ```
> 
> The `var` keyword is almost the same as `let`. It also declares a variable, but is slightly different. 
> For now, we just use the keyword `let` for our variable declaration.

***

## Data Type
A variable can contain any data. A variable can be assigned as a string and later a number.
```js
let note = 'This is a string'
note = 3
```

We will learn about 5 different data type today.

1. ### String
```js
let firstName = 'Jonathan'
```
1. ### Number
```js
let numberOfCats = 3
```
1. ### Boolean
```js
let isTodaySunday = true
let isTodayMonday = false
```
1. ### Arrays
```js
let listOfNumbers = [1, 2, 3, 5, 8, 13]
```
1. ### Object
```js
let person = {
  name: 'Jonathan',
  age: 21,
  gender: 'male',
  isMarried: false,
  listOfFavColors: ['black', 'white', 'grey']
}
```
***

## Operators
Operators are used to assign values, compare values, perform arithmetic operations and more.

### Arithmetic Operators
Arithemtic operators are used to perform arithmetic between variables and values.

| Operator | Description                     | Example          | Results in x |
|:--------:|---------------------------------|------------------|:------------:|
| +        | Addition                        | `let x = 1 + 2`  | 3            |
| -        | Subtraction                     | `let x = 2 - 1`  | 1            |
| *        | Multiplication                  | `let x = 2 * 2`  | 4            |
| /        | Division                        | `let x = 1 / 2`  | 0.5          |
| %        | Modulus (division remainder)    | `let x = 5 % 2`  | 1            |
| **       | Exponentiation                  | `let x = 4 ** 4` | 16           |
| ++       | Increment                       | `let x = 1; x++` | 2            |
| --       | Decrement                       | `let x = 1; x--` | 0            |

### Comparison Operators
Comparison operators are used in logical statements to determine equality or difference betweeen variables or values.
Given that `x = 5`, the table below explains the comparison operators.

| Operator | Description                        | Comparing        | Results      |
|:--------:|------------------------------------|------------------|:------------:|
| ===      | equal value and equal type         | `x === 8`        | `false`      |
| !==      | not equal value or not equal type  | `x !== 8`        | `true`       |
| >        | greater than                       | `x > 5`          | `false`      |
| <        | lesser than                        | `x < 8`          | `true`       |
| >=       | greater than or equal to           | `x >= 5`         | `true`       |
| <=       | lesser than or equal to            | `x <= 5`         | `true`       |

### Logical Operators
Logical operators are used to determine the logic between variables or values.
Given that `x = 6` and `y = 3`, the table below explains the logical operators:

| Operator | Description                        | Example                  | Results      |
|:--------:|------------------------------------|--------------------------|:------------:|
| `&&`     | and                                | `x < 10 && y > 1`        | `true`       |
| `||`     | or                                 | `x === 5 || y === 5`     | `false`      |
| `!`      | not                                | `!(x === y)`             | `true`       |

***

## Control Flow
Sometimes we need to perform different actions based on a condition.

### The "if" statement
The if statement gets a condition, evalutes it and if the result is `true`, executes the code.

For example:
```js
let firstName = 'Jonathan'

if (firstName === 'Jonathan') {
  console.log('first name is Jonathan')
}
// result: 'first name is Jonathan'
```

### The "else" statement
The `if` statement may contain an optional "else" block. Its excutes when the condition is wrong.

For example:
```js
let firstName = 'Vincent'

if (firstName === 'Jonathan') {
  console.log('first name is Jonathan')
} else {
  console.log('first name is not Jonathan')
}
// result: 'first name is not Jonathan'
```

### The "else if" statement
Sometimes we would like to test several conditions. There is an `else if` for that.

For example:
```js
let firstName = 'Tom'

if (firstName === 'Jonathan') {
  console.log('first name is Jonathan')
} else if (firstName === 'Vincent'){
  console.log('first name is Vincent')
} else {
  console.log('first name is neither Jonathan nor Vincent')
}
// result: 'first name is neither Jonathan nor Vincent'
```

***

## Loops
We often have a need to perform similar actions many times in a row.

Loops are a way to repeat the same part of code multiple times.

### While Loops

The while loop have the following syntax
```js
while (condition) {
  // code
  // loop body
  // repeated action
}
```
While the `condition` is `true`, the code from the loop body is executed

For example:
```js
let i = 0
while (i < 3) {
  console.log(`the current i is ${i}`)
  i++
}
// result:
// the current i is 0
// the current i is 1
// the current i is 2
```

### For Loops

The for loop have the following syntax
```js
for (begin; condition; step) {
  // code
  // loop body
  // repeated action
}
```
Example:
```js
for (let i = 0; i < 3; i++) {
  console.log(`the current i is ${i}`)
}
// result:
// the current i is 0
// the current i is 1
// the current i is 2
```

Let's examine the `for` statement part by part:
| part        | Example                              | Description                                                                  |
|-------------|--------------------------------------|------------------------------------------------------------------------------|
| begin       | `let i = 0`                          | Execute once upon entering the loop                                          |
| condition   | `i < 3`                              | Checked on every loop iteration, if `false` the loop stops.                  |
| step        | `i ++`                               | Executes after the body on each iteration, but before the condition check.   |
| body        | `console.log(the current i is ${i})` | Runs again and again while condition is `true`                               |

***

## Functions
Quite often we need to perform a similar action in many places of the script.

For example, we need to show a nice-looking message when a visitor logs in, logs out and maybe somewhere else.

Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

### Function Declaration
To create a function we can use a function declaration.

Example:
```js
function logFirstName() {
  console.log('first name is Jonathan')
}
```

The function can be called by its name: `logFirstName()`

Example:
```js
function logFirstName() {
  console.log('first name is Jonathan')
}

logFirstName()
// result: first name is Jonathan
```

### Parameters
We can pass data to functions using parameters (also called function arguments).

Example:
```js
function logFirstName(name) {
  console.log(`first name is ${name}`)
}

logFirstName('Jonathan') // result: first name is Jonathan
logFirstName('Vincent') // result: first name is Vincent
```

When the function is called, it will use its parameter values that was passed in.

### Returning a value
A function can return a value back into the calling code as the result.

Example:
```js
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
console.log(result) // result: 3
```