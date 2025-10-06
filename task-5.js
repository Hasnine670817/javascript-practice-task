
let year = 2020;

if ((year % 40 === 0 && year % 100 !== 0) || (year % 4 === 0)) {
    console.log("Leap Year");
} else {
    console.log("Not Leap Year");
}
// Output: Leap Year