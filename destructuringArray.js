const [x, y] = [1, 2, 3, 4, 5, 6];
console.log(x, y);
const [xi, p,,, t] = [1, 2, 3, 4, 5, 6];
console.log(xi, p, t);
let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a];
console.log(a,b);
// Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.