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