/* LEXICAL SCOPE ----------------------------------- */

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
/* --------------------------------------------------- */

/* CLOSURE */

// global scope
let y = 1

const parentFunctionB = () => {
  // local scope
  let myValueB = 2
  console.log(y) // access to global scope
  console.log(myValueB) // access to local scope

  // child (nested function)
  const childFunctionB = () => {
    console.log(y += 5)
    console.log(myValueB += 1)
  }

  return childFunctionB
}

const result = parentFunctionB() // parent function already called and closed
console.log(result)
result()
result()
result()
// console.log(myValueB) // throws error: private variable in closure of childFunctionB
/* --------------------------------------------------- */

/* Closures in IIFE (Immediately Invoked Function Expression) */

// IIFE:

const privateCounter = (() => {
  let count = 0
  console.log('Initial Value: ', count)
  return () => { count += 1; console.log(count) }
})()

privateCounter()
privateCounter()
privateCounter()