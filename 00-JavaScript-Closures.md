# Scope

[`var`-`let`-`const`](https://youtu.be/_E96W6ivHng)

- all three (`var`,`let`, and `const`) are used to initialize variables in JavaScript

- Scope Types:
  - function scope: `var`
  - block scope: 'let', `const`
  
- Scope Environments:
  - global scope
  - local scope

```javascript
// untill 2015 - legacy code
var x = 1 // function scoped
var x = 2 // doesnt throw error when overwritten
console.log(x) // 2
// only use in legacy code


// after 2015, `let` and `const` were introduced

// let:
let y = 1 // block scoped
let y = 2 // throws error, 
// since `let` is specfied again the second time, this is treated as erroneous reassignment

let y = 1
y = 2 // does not throw error, 
// since no `let` is specified the second time, this is treated as a willing reassignment 

// const: 
const z = 1 // block scope
const z = 2 // throws error
z = 3 // throws error
// const variables may be defined only once
```

- always use `const` to ensure the variable name is never to be overwritten
- use `let` when variable name is expected to be overwritten at some point

## Global Scope

```javascript
// Global Variables
var x = 1
let y = 2;
const z = 3;
```

## Local Scope

### Block Scope

```javascript
{
  let a = 4
}
console.log(a) // reference error, not available outside the {} globally

if () {
  // block scope
}

for () {
  // block scope  
}

switch () {
  // block scope      
}
```

### Function Scope

```javascript
function myFunc() {
  const b = 5
  console.log(b)

  var d = 10
}
console.log(d) // reference error

myFunc() // 5
```

### Nested Scope

```javascript
function myFunc() {
  const b = 5
  console.log(b)

  {
    let c = 10
    console.log(c)
  }

  console.log(c) // reference error
}

myFunc() // 5, 10
```



# Lexical Scope

- defines how variable names are resolved in nested functions

- a child (nested) function has access to the:
  - variables of the parent function
  - global scope

- Example: 
  ```javascript
  // global scope
  let x = 1
  
  const parentFunction = () => {
    // local scope
    let myValue = 2
    console.log(x) // access to global scope
    console.log(myValue) // access to local scope
  
    // child (nested function)
    const childFunction = () => {
      console.log(x += 5)
      console.log(myValue += 1)
    }
  
    childFunction()
  }
  
  parentFunction()
  ```

# Closure

- Lexical scope is often confused with Closure itself,
  - but lexical scope is only a part of the concept of Closure

>>> A closure is a nested function that has access to the parent function scope, even after the parent funtion has closed

- **Closure** is created during function definition, not during function execution
  - like the boundaries of a baseball game defined prior to the game being played

- Example:
  ```javascript
  // global scope
  let x = 1
  
  const parentFunction = () => {
    // local scope
    let myValue = 2
    console.log(x) // access to global scope
    console.log(myValue) // access to local scope
  
    // child (nested function)
    const childFunction = () => {
      console.log(x += 5)
      console.log(myValue += 1)
    }
  
    return childFunction
  }
  
  const result = parentFunction() // parent function already called and closed
  console.log(result)
  
  result()
  result()
  result()
  console.log(myValue) // throws error: private variable in closure of childFunctionB
  ```

# Closures in IIFE (Immediately Invoked Function Expression)

- even anonymous functions have closures!
  
```javascript
// IIFE Example #1
const privateCounter = (() => {
  let count = 0
  console.log('Initial Value: ', count)
  return () => { count += 1; console.log(count) }
})()

privateCounter() // 1
privateCounter() // 2
privateCounter() // 3


// IIFE Example #2
const credits = ((num) => {
  let credits = num
  console.log('initial credits value: ', credits)
  return () => {
    credits -= 1
    if (credits > 0) console.log(`playing game, ${credits} credit(s) remaining!`)
    if (credits <= 0) console.log(`not enough credits!`)
  }
})(3)

credits()
credits()
credits()
```
