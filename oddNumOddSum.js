//get odd numbers of an array and get add sum of on array
//no push to git hub
function getOddNumbersAnArray(numbers){
        const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
    if(element % 2 === 1){
        console.log(index, element);
        getOddNumbersAnArray.push(element);
    }
    
    }
    return oddNumbers;
}

    const myNumbers = [12, 65, 45, 78, 32, 45, 91];
    const oddNumbers = getOddNumbersAnArray(myNumbers);
    console.log(oddNumbers);
    const oddNumberSum = getSumOfArray(oddNumbers);
    console.log("odd number sum:" , oddNumberSum)
