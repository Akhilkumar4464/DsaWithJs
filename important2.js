/**
 * the fibonacchi numbers,commonly denoted F(n), form a sequence, called the Fibonacci sequence, such that each number is the
 *  two preceding ones, usually starting with 0 and 1.
 * 
 * f(n)= start from 0 and 1, and each subsequent number is the sum of the previous two.
 *  now find the f(5)= 0+1+1+2+3+5
 * 
 */
 var fib=function fib(n) {


    if(n<2){
        return n;
    }

    let prev=0; curr= 1 ; next=0;

    for(let i=0; i<n; i++){
next= prev+curr;
prev=curr;
curr=next;
    }
    return next;

}
// test the function
console.log(fib(5)); // output: 5
console.log(fib(8)); // output: 34
console.log(fib(10)); // output: 89