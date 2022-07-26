# Scope

[`var`-`let`-`const`](https://youtu.be/_E96W6ivHng)

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

```javascript
const privateCounter = (() => {
  let count = 0
  console.log('Initial Value: ', count)
  return () => { count += 1; console.log(count) }
})()

privateCounter() // 1
privateCounter() // 2
privateCounter() // 3
```

