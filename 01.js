//sum of n natural numbers 1 to n
//sum of 1 to 5 
//expected output 15
//expected output 55
//expected output 36

function sumofnums(num){
    let sum = 0;
 for (let i = 1; i <= num; i++) {
       
sum+=i;
 }
   return sum;


}
console.log(sumofnums(5));
console.log(sumofnums(10));
console.log(sumofnums(8));

//shorthand for this stuff
//function sumofnums(num){
  
   // return num*(num+1)/2;
//}
//console.log(sumofnums(5));

