const number = 21;

let result = (number % 7 === 0 && number % 3 === 0) 
    ? "Multiple of 7 and 3" 
    : (number % 7 === 0) 
        ? "Multiple of 7" 
        : (number % 3 === 0) 
            ? "Multiple of 3" 
            : "The number is not a multiple of 7 and 3.";

console.log(result);
// Output: Multiple of 7 and 3