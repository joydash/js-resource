let object ={street:10,house:'15A',society:'Earth Perfect'}
function findAddress(obj) {
console.log(obj);
    const empty = '__';
    if(object.street==0){
        return empty;
    }else{
        console.log(object.street);
    }
    if(object.house==0){
        return empty;
    }else{
        console.log(object.house);
    }
    if(object.society==0){
        return empty;
    }else{
        console.log(object.society);
    }
}
let result = findAddress(object);