const priya = 'asif akbar';
const meye = "meye tumi ki dukkho chino";
const kobita = `kobita tumi sopno charini`;
const multiLine = 'this is my first line \n' +
    'this is second line \n' +
    'third line text \n' +
    'fourth line';
const newMultiLine = `
    this is my first line
    this is second line
    third line text 
    fourth line`;

// console.log(multiLine);
// console.log(newMultiLine);

const count = 5;
const old = '<h3 class = "friend-name">Friend - 5</h3>';
const old2 = '<h3 class = "friend-name">Friend - '+count+'</h3>'; //karet diye korle dynamic vabe use kora jai
const new1 = `<h3 class = "friend-name">Friend - ${count}</h3>`; //es6 e dynamic vabe use kore eivabe
// console.log(new1);
const first = 'abul';
const last = 'hasan';
const fullName  = first + ' '+ last;
const fullNewName = `This person full Name is :${first} ${last} Has money ${count * 500}`;
console.log(fullName);
console.log(fullNewName);