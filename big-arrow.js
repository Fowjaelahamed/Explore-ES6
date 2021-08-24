// arrow function 
// double parameter 
const add = (num1, num2) => num1 + num2;
// thriple parameter 
const addThree = (num, num1, num2) => num + num1 + num2;
// single parameter 
const fiveTimes = (num) => num * 5;
// single parameter without first bracket 
const tenTimes = num => num * 10;
// without any parameter 
const getName = () => 'Charlie johans';
// multiline work to do 
const doMath = (x,y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff ;
    const output = result * 5;
    return output;
};

console.log(add(1, 2));
console.log(addThree(1, 2, 3));
console.log(fiveTimes(10));
console.log(tenTimes(10));
console.log(getName());
console.log(doMath(12,2));