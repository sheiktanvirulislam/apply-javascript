// function fact(n){
//     if(n == 1){
//       return 1; 
//     }
//     else{
//         return n*fact(n-1);

//     }
// }
// const result = fact(4);
// console.log(result);
// let result = 1;
// for (let i = 1; i<=50; i++) {
        
//     result = (i)* result;
//     console.log(i,result);
// }
// console.log("the prime factorial result is",result)    
function fact(num){
    for (let i = 1; i<=num; i++) {
        
        result = (i)* result;
        console.log(i,result);
    }
}
fact(4)
