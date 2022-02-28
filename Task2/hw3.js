let readline = require('readline-sync');

let term1 = readline.question("1st Number: ");
let term2 = readline.question("2st Number: ");
var term3 = readline.question("3st Number: ");
var term4 = readline.question("4st Number: ");

let fact = 1;
for (var i = parseInt(term1); i > 1; i--) {
    fact = fact * i;
}
console.log("Factorial of the first number is = " + fact);

const nums = term2.split("");
let num = 0;
for (var i = 0; i < nums.length; i++) {
    num += parseInt(nums[i]);
}
console.log("The sum of all digits of the 2nd number is = " + num);


console.log("The reverse of the 3rd number is = " + term3.split("").reverse().join(""));

let reversed = term4.split("").reverse().join("");

let palin = true;

for (var i = 0; i < term4.length; i++) {
    if (parseInt(term4.charAt(i)) != parseInt(reversed.charAt(i)))
        palin = false;
}

console.log("Is the 4th number a palindrome (True/False)? = " + palin);

