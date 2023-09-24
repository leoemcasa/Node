// var arr = [6, 89, 3, 45];
// var maximus = Math.max.apply(null, arr);
// console.log(maximus);
// var maximus = Math.max(...arr);
// console.log(maximus);

// Copy all contents of arr1 into another array arr2 using the spread operator.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line
arr1[0] = "jan";

let a = 0;
let b = a;
b = 1;

console.log(arr2);
console.log(a);
console.log(b);