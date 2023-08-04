// Array 

//Q: What is the purpose of array?
//Ans: The purpose of an array is to store multiple pieces of data of the same type together.

// Q: How to declared an array in JS 
// Ans : To declare an array with literal notation you just define a new array using empty brackets

//Q: Number of element in an array ?
// Ans: Number of elements present in an array can be calculated as follows. int length = sizeof(arr)/sizeof(arr[0]); printf("Number of elements present in given array: %d", length);

// Q: What is index 
// Ans : JS Index means Array's position value 
// ex : var fruit = [mango, litchu, orange];
// is this array mango is a 0 number index and searialy litchu index 1 and orange index is 2

// Q: Find the value of an element by index
// var fruit = ['mango', 'litchu', 'orange'];
// console.log(fruit.length);

// is this array mango is a 0 number index and searialy litchu index 1 and orange index is 2

// Q: Find the value of an element by index and change on element
//Ans: ex : 
// var fruit = ['mango', 'litchu', 'orange'];
// console.log(fruit.indexOf('orange'))
// fruit.pop()
// console.log(fruit);

// Q:get the index of an element by the value 
// var getList = ['phone', 'charger', 'headphone', 'moneybag'];
// console.log(getList.length)
// console.log(getList);

//Q: how can you add an element to an array at the last possition
// var myList = ["myphone", "charger", "keyboard",]
// myList.push("myLaptop")
// console.log(myList);

//Q: how can you removed an element to an array at the last possition
// var myList = ["myphone", "charger", "keyboard",];
// myList.pop()
// console.log(myList);

//Q: Add the first element of the array 
// var myList = ["myphone", "charger", "keyboard",];
// myList.unshift("laptop")
// console.log(myList)

//Q: Removed the first element of the array 
// var myList = ['myphone', 'charger', 'laptop'];
// myList.shift();
// console.log(myList);