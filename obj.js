 // object 
// The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.

let myCom = {
    brand : "dell",
    model : "DESKTOPL0I2E01",
    color : "gray",
    hdd : "1tb",

}
console.log(myCom)
myCom.hdd = "2tb"
console.log(myCom.hdd)
console.log(myCom)
let keys = Object.keys(myCom);
console.log(keys)
let values = Object.values(myCom);
console.log(values);

for(var propertyName in myCom){
    let value = myCom[propertyName];
    console.log(propertyName, value)
}
