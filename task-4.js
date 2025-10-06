
let x = 5;
let y = 12;
let z = 8;

if ((x > y) && (x > z)) {
    console.log("Big number is:", x);
} else if ((y > z) && (y > x)) {
    console.log("Big number is:", y);
} else {
    console.log("Big number is:", z);
}
// Output: Big number is: 12