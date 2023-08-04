function milesTokM(miles){
    let km = miles * 1.6934;
    return km;
}
let yourMiles = 14;
let yourDis = milesTokM(yourMiles);
console.log(yourDis);

let myInp = 33;
let myOP = milesTokM(myInp);
console.log(myOP);