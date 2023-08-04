//Check Even Function
function chekEven(number){
    let reminder = number % 2;
    if(reminder === 0){
        return true;
    }else{
        return false;
    }
}
let myInp = chekEven(32653); //simple way to call funtion
    console.log(myInp);

    let yourInp = 1254; // anouther way to call function
let yourRes = chekEven(yourInp);
console.log(yourRes);

//Check Odd Function
function checkOdd(number){
    let reminder = number % 2;
    if(reminder === 1){
        return true;
    }else{
        return false;
    }
}
let oddCheck = checkOdd(12636427);
console.log(oddCheck);
let oddRes = checkOdd(12542);
console.log(oddRes);