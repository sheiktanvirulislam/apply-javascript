 // let result = 1
// for (let i = 5; i>=1; i--) {
//      result = result*i
    
// }
// console.log(result)


// let i = 4;
// let result = 1;
// while (i>=1){
//     result = i*result;
//     i--;    


// }



// console.log(result)






function fact(n){
    if (n == 1 || n== 0) {
         return 1;
 
    } 
    else{
        return    n*fact(n-1);
        
    } 

}
console.log(fact(5))