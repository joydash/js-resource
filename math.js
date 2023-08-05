/*
Method of math :
Math.pow means any number up square 
Math.abs means 
Math.max
Math.min
Math.round
Math.ceil
Math.floor
Math.random
*/

//ex of math round in 20 times loop counting 0/6 :

for(let i=0; i < 20; i++){
    const random = Math.round(Math.random()*6);
    console.log(random);


}


//problem solving 

let num1 = 67;
let num2 = 97;
let num3 = 99;
let win = Math.max(num1, num2, num3);
console.log(win)
