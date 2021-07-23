//prime_num


function isPrime(n) {
    for (let i = 2 ; i<n; i++){
        let result = n%i;
        if (result == 0) {
         return "this is not a prime num";
            
      }
        else{
              return "this is a prime num";
            
          }
      
      
      
      
      }     
}  


console.log(isPrime(13))
