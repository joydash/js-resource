function cubeNumber(number) {
  if (typeof number === 'number') {
    if (number >= 0) {
      return number * number * number;
    }
  } else {
    return "Invalid input. Please provide a valid number.";
  }
}






function matchFinder(string1, string2) {
  if (typeof string1 !== 'string' || typeof string2 !== 'string') {
    return "Invalid input. Please provide two valid strings.";
  }

  if (string1.includes(string2)) {
    return true;
  } else {
    return false;
  }
}






function sortMaker(arr){
 if(arr[0] < 0 || arr[1] < 0){
  return "Invalid Input";
 }
 else if(arr[0] === arr[1]){
  return "equal";
 }
 else if(arr[0] > 0 && arr[1] > 0){
  let max = arr[0];
  temp = 0;
  if(max < arr[1]){
    temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
    
  }return arr;
  
 }
}
 




function findAddress(obj) {
    if(typeof obj !== "object"){
        return "Please provide a object "
    }
    else{
        const street =  obj.street  || '__' ;
        const house  =  obj.house   || '__' ;
        const society=  obj.society || '__' ;
        
        return " "+street+" "+house+" "+society ;    
    }
   
}




function canPay(changeArray, totalDue) {
  if(changeArray.length == 0){
      return "Please enter valid array";
  }else{
      let sum = 0;
  for(let i=0;i<changeArray.length;i++){
      sum = sum + changeArray[i];
  }
  if(sum >= totalDue){
      return true;
  }else{
     return false;
  }
  }
}


