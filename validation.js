//Validity check in js input perameter 

function userValidity(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return ('please provide number');
    }
    return num1 + num2; 
       
}

const outputValidity = userValidity(14,46);
console.log(outputValidity);


