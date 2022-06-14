/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call 
const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);
console.log("Sum:", sum)

// Extra arguments are ignored
const sum2 = sumAll (1, 2, 3, 4, 5, 6);
console.log("Sum2:", sum2)
// 4 5 6 are still ignored. Can't pass any more values into it.

// Function using ...rest
    // The parameter can technically be called anything you want after the ...
const sumRest = (a, b, c, ...anyName) => {
    let sum = a + b + c;
    for (let i of anyName) {
        sum += i;
    }

    return sum;
} 

let sum3 = sumRest (1, 2, 3, 4, 5, 6);
console.log("Sum3:", sum3);

