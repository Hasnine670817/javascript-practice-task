
let number = 153;
const numString = number.toString();

let a = Number(numString.slice(0, 1));
let b = Number(numString.slice(1, 2));
let c = Number(numString.slice(2, 3));

let sum = (a * a * a) + (b * b * b) + (c * c * c);

if (sum === number) {
    console.log("Armstrong");
}
else {
    console.log("Not Armstrong");
}

// Output: Armstrong