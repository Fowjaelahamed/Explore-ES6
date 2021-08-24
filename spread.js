// spread operator-> ... 

const numbers = [12,34,56,78,67,88,20];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(12,34,56,78,67,88,20);
const maxInArray = Math.max(...numbers);
// console.log(max,maxInArray);
const numbers2 = [300,...numbers,99];
numbers.push(100);
console.log(numbers);
console.log(numbers2);