//1 * 2 * 3 * 4 * 5 * 6 * 7 faactorial multiplication

function multiplicationFun(numbers){
    let multi = 1;
    for(let i = 1; i<= numbers; i++){
         multi = multi * i;
    }
    return multi;
}
let total = multiplicationFun(10);
console.log(total);