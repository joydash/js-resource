//fn = 1
function add(number1 , number2){
    let sum = number1 + number2;
    return sum;
}
let total = add(80, 130);
console.log("Total is:", total );

//fn = 2
function bringsSingara(money){
    let singaraPrice = 10;
    let quantity = money / singaraPrice;
    return quantity;
}
let myTaka = 250;
let singaras = bringsSingara(myTaka);
console.log("please give me a" , singaras , "Singara");

// fn = 3
function getAvrg(assignment1Marks , assignment2Marks , assignment3Marks){
    let total = assignment1Marks + assignment2Marks + assignment3Marks;
    let avrg = total;
    return avrg;
}
let assignment1Marks = 60;
let assignment2Marks = 58;
let assignment3Marks = 59;

let myAvrg = getAvrg(assignment1Marks, assignment2Marks, assignment3Marks);
console.log("Your Avarage CGPA is:" , myAvrg);

// fn = 4
function add(num1,num2){
    let sum = num1 + num2;
    return sum;
}
let counting1 = add(154,265);
let counting2 = add(254,986);
let finalCounting = counting1 + counting2;
console.log(finalCounting);