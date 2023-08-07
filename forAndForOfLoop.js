// for loop execut the all of lopping possibility and for loop only loop the array . for loop devloped only for array in array looping.

const products = ['laptop', 'mobile', 'charger', 'moneyback',];

for(let i = 0; i < products.length ; i++){
    const product = products[i];
    console.log(product);
}

// The main difference between a traditional "for" loop and a "for...in" loop lies in what they are designed to iterate over and how they operate


//for of loop detecated by the only array in loop

for (const product of products) {
    console.log('for of loop is -----', product);
}


// Certainly! The "for...in" loop is a programming construct that is commonly used to iterate over the properties of an object or elements of an iterable, such as an array or a map. It's available in many programming languages, including JavaScript, Python, and others.

const myObject = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  for (const property in myObject) {
    console.log(property + ": " + myObject[property]);
  }
  


