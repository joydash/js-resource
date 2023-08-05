let num1 = 12;
let num2 = 17;
console.log(num1, num2);

// 1st approach 
// let temp = num1;
// num1 = num2;
// num2 = temp;

// 2nd approach ------ Destructuring
[num1,num2] = [num2,num1];
console.log(num1,num2);