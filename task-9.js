
let char = 'A';

const result = (char >= 'A' && char <= 'Z') 
    ? "Uppercase" 
    : (char >= 'a' && char <= 'z') 
        ? "Lowercase" 
        : "Not a letter";

console.log(result);
// Output: Uppercase