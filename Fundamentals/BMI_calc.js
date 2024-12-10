const massMark=78;
const heightMark=1.69;
const massJohn=92;
const heightJohn=1.95;
let BMIMark= massMark/(heightMark*heightMark);
let BMIJohn= massJohn/(heightJohn*heightJohn);
console.log(BMIMark,BMIJohn);
let markHigherBMI=BMIMark>BMIJohn;
console.log(markHigherBMI);
