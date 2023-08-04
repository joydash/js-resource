// var = ['apple', 'banana', 'orange'];
// >find the index of banana and replace banana with mango
// >remove orange and add water melon 

// var item = ['apple', 'banana', 'orange'];
// var possitionIndex = item : indexOf ('banana');
// console.log(possitionIndex);

// var fruits = ['apple', 'banana', 'orange'];

// // Step 1: Find the index of 'banana'
// const bananaIndex = fruits.indexOf('banana');

// // Step 2: Replace 'banana' with 'mango'
// if (bananaIndex !== -1) {
//   fruits[bananaIndex] = 'mango';
// }

// // Step 3: Remove 'orange'
// const orangeIndex = fruits.indexOf('orange');
// if (orangeIndex !== -1) {
//   fruits.splice(orangeIndex, 1);
// }

// // Step 4: Add 'watermelon'
// fruits.push('watermelon');

// console.log(fruits);


// you and your friends tom , jane , peter , and jhone got their final exams results your total score is 85, tom total score is 66 , janes total score is 95 , peter total score is 56 , and jhons total score is 40 .
// the gretting chart is 
// 80 or avobe A Grate 
// 60 or avobe B 
// 50 or avobe C 
// 40 or avobe D 
// 32 or avobe F 

// function getGrade(totalScore) {
//     if (totalScore >= 80) {
//       return 'A Grade';
//     } else if (totalScore >= 60) {
//       return 'B';
//     } else if (totalScore >= 50) {
//       return 'C';
//     } else if (totalScore >= 40) {
//       return 'D';
//     } else {
//       return 'F';
//     }
//   }
  
//   // Given scores
//   const yourScore = 85;
//   const tomScore = 66;
//   const janeScore = 95;
//   const peterScore = 56;
//   const jhonScore = 40;
  
//   // Getting grades
//   const yourGrade = getGrade(yourScore);
//   const tomGrade = getGrade(tomScore);
//   const janeGrade = getGrade(janeScore);
//   const peterGrade = getGrade(peterScore);
//   const jhonGrade = getGrade(jhonScore);
  
//   // Output
//   console.log('Your Grade:', yourGrade);
//   console.log('Tom\'s Grade:', tomGrade);
//   console.log('Jane\'s Grade:', janeGrade);
//   console.log('Peter\'s Grade:', peterGrade);
//   console.log('John\'s Grade:', jhonGrade);
  

// You are given three numbers is 14,79,45 W.A.P that will print the largest number using if else 

// var num1 = 14;
// var num2 = 79;
// var num3 = 45;
// var largest;

// if(num1 >= num2 && num1 >= num3){
//     largest = num1;
// } else if(num2 >= num1 && num2 >= num3){
//     largest = num2;
// } else{
//     largest = num3
// }
// console.log("The largest number is:", largest);

// You are given a triangle with the sides 9,8,9 write a program to check weather a triangle is isoceles or not using if else 
var side1 = 9;
var side2 = 8;
var side3 = 9;
if(side1 == side2 || side1 == side3 || side2 == side3){
    console.log('the triangle is two side equal')
}else{
    console.log('its triangle is not isoceles')
}