//#problem solving : Array of duplicate element remove

// const names = ['abul', 'babuk', 'cabul', 'dabul', ' ebul', 'abul', 'gabul', 'cabul', 'babul', 'babul', 'abul', 'tulbul'];
// console.log(names);

//     function detectName(names){
//         const unique = [];
//         for(let i = 0; i< names.length; i++){
//             const name = names[i];
//             console.log(name);
//             if(unique.includes(name) === false){
//                 unique.push(name);
//             }
//         }
//         return unique;
//     }

// const uniqueName = detectName(names);
// console.log(uniqueName);


//#problem solving
/*
show output the 1 to 50;
if the number of divisale by 3 than instead of the number show "foo"
if the number of divisale by 5 than instead of the number show "bar"
if the number of divisale by 3 and 5 than instead of the number show "foobar"
*/

// for(let i = 1; i <= 50; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log('foobar');
//     }
//     else if(i % 3 === 0){
//         console.log('foo');
//     }
//     else if(i % 5 === 0){
//         console.log('bar');
//     }
//     else{
//         console.log(i);
//     }
     
// }

//#problem solving
/*
    fixed per item wood requerment
    chair ----> 3 cft
    table ----> 10 cft
    bad  -----> 50 cft
    vary to item
*/

// function woodCalculator(quantityOfChair, quantityOfTable, quantityOfBad){
//     const perChair = 3;
//     const perTable = 10;
//     const perBad = 50;

//     const totalChair = perChair * quantityOfChair;
//     const totalTable = perTable * quantityOfTable;
//     const totalBad = perBad * quantityOfBad;
    
//     const allWood = totalBad + totalChair + totalTable;
//     return allWood;
// }

// const totalWood = woodCalculator(6,1,1);
// console.log("Requerd your all wood:" , totalWood , "cft");



// #problem solving 
// multi brand phone arrays now find out chipest phone in the array 

// let phones = [
//     {name : 'iPhone',camera : '52MP', storage : '32gb', price : 85000, color : "gray"},

//     {name : 'mi',camera : '50MP', storage : '32gb' ,price : 28000, color : "silver"},

//     {name : 'vivo',camera : '48MP', storage : '32gb', price : 27000, color : "gray"},

//     {name : 'realme',camera : '52MP', storage : '32gb', price : 29000, color : "white"},

//     {name : 'poco',camera : '52MP', storage : '32gb', price : 26000, color : "gray"},

//     {name : 'nokia',camera : '40MP', storage : '32gb', price : 33000, color : "blue"},

//     {name : 'samsung',camera : '35MP', storage : '32gb' ,price : 36000, color : "gray"},

//     {name : 'symphony',camera : '30MP', storage : '32gb' ,price : 19000, color : "black"},
// ]
// console.log(Array.isArray(phones));
// console.log(phones.includes('gray'));

// function chipestPhone(phones){
//     let chipest = phones[0];
//     for(let i = 0; i < phones.length; i++){
//         const phone = phones[i];
//         if(phone.price < chipest.price){
//             chipest = phone;
//         }
//     }
//     return chipest;
// }
// const mySelection = chipestPhone(phones);
// console.log(mySelection);


// #problem solving
//Shopping card all product quantity added total price 

let ShoppingCard = [
    {name:'shoe', price: 6500 , quantity: 2},

    {name:'shirt', price: 2200 , quantity: 4},

    {name:'pent', price: 3700 , quantity: 4},

    {name:'belt', price: 600 , quantity: 2}

];
function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length ; i++){
        const product = products[i];
        console.log(product);
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal; 
    }
    return sum;
}

const expense = totalCost(ShoppingCard);
console.log('Your total expense today is :' , expense);