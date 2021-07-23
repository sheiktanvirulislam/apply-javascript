function leapyear(year){
   
    if(year%400 == 0){
        return "this is leap year";
    } 
    else if(year%100 & year%4 == 0){
        return "this is not a leap year";


    }




}
var year = leapyear(1700);
console.log(year);