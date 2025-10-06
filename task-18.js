
let number = 9;

if (number % 2 !== 0 && number > 0) {
    console.log("Odd & Positive");
}
else if (number % 2 !== 0 && number <= 0) {
    console.log("Odd but Not Positive");
}
else {
    console.log("Not Odd");
}
// Output: Odd & Positive