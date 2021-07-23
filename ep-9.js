// let fibo = [0,1]
// let n = 2;
// while (n<=10) {
//     fibo[n] = fibo[n-1] + fibo[n-2];
//     n++; 
// }
// console.log(fibo);

function fibonacci(n) {
   if (n == 0) {
     return 0;
   }    
   else if (n == 1) {
       return 1;
   }
   else{
        return fibonacci(n-1) + fibonacci(n-2);
   }
}
console.log(fibonacci(10));