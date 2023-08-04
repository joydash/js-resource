// function to leap year
function isLeapYearQuary(year){
    let leapYear = year % 4;
    if(leapYear === 0){
        return true;
    }else{
        return false;
    }
}
const muktijuddo = isLeapYearQuary(1971);
console.log("muktijudder sal ti leap year: ", muktijuddo);

const vasaAndolon = isLeapYearQuary(1952);
console.log("vasa andoloner sal ti leap year:",vasaAndolon);