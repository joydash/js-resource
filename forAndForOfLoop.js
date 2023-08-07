// for loop execut the all of lopping possibility and for loop only loop the array . for loop devloped only for array in array looping.

const products = ['laptop', 'mobile', 'charger', 'moneyback',];

for(let i = 0; i < products.length ; i++){
    const product = products[i];
    console.log(product);
}

//for of loop detecated by the only array in loop

for (const product of products) {
    console.log('for of loop is -----', product);
}
