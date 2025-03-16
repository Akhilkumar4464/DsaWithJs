/**
 * given an integer x, return true if x is a palindrome,and false otherwise
 * 
 * 121=121;
 * 1234 != 4321
 */

var isPalindrome = function(x){
    let copyNum=x;
    let reversedNum=0;
    while(copyNum>0){
const lastDigit=copyNum%10;
reversedNum= (reversedNum*10+lastDigit);
copyNum= Math.floor(copyNum/10);
    }
    return x===reversedNum;
}

// test the function
console.log(isPalindrome(121)); // true
console.log(isPalindrome(1234)); // false
console.log(isPalindrome(12167));//false
console.log(isPalindrome(1333331));