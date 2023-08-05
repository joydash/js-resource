//faactorial sum
function faactorialSum(numbers){
    let sum = 0;
    for(let i = 0; i <= numbers; i++){
        sum += i;
        console.log(i ,sum);
    }
    return sum;
} 
 let total = faactorialSum(20);
console.log(total);
