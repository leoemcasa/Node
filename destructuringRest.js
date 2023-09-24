// const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
// console.log(a, b);
// console.log(arr);
//Use a destructuring assignment with the rest syntax to emulate the behavior of Array.prototype.slice(). removeFirstTwo() 
// should return a sub-array of the original array list with the first two elements omitted.
function removeFirstTwo(list) {
    console.log(list);
    const [x, y, ...arr] = list;
    list = [...arr];

    return list;
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);
  console.log(sourceWithoutFirstTwo);