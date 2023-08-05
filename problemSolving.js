//#problem solving
/*
show output the 1 to 50;
if the number of divisale by 3 than instead of the number show "foo"
if the number of divisale by 5 than instead of the number show "bar"
if the number of divisale by 3 and 5 than instead of the number show "foobar"
*/

for(let i = 1; i <= 50; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('foobar');
    }
    else if(i % 3 === 0){
        console.log('foo');
    }
    else if(i % 5 === 0){
        console.log('bar');
    }
    else{
        console.log(i);
    }
     
}

//#problem solving
/*
    fixed per item wood requerment
    chair ----> 3 cft
    table ----> 10 cft
    bad  -----> 50 cft
    vary to item
*/

function woodCalculator(quantityOfChair, quantityOfTable, quantityOfBad){
    const perChair = 3;
    const perTable = 10;
    const perBad = 50;

    const totalChair = perChair * quantityOfChair;
    const totalTable = perTable * quantityOfTable;
    const totalBad = perBad * quantityOfBad;
    
    const allWood = totalBad + totalChair + totalTable;
    return allWood;
}

const totalWood = woodCalculator(6,1,1);
console.log("Requerd your all wood:" , totalWood , "cft");