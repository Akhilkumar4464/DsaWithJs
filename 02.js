/**
 * question 2: sum of digits of a number
 * 
 * number is :1287 = 1+2+8+7=18
 */

function sumOfDigits(num) {
let sum=0;
while(num > 0){
    sum += num%10;
    //num=Math.floor(num/10); if use it so answar will be 18(integer)
    num=num/10;
}
return sum;
}

console.log(sumOfDigits(1287)); //expected output is 19.9999999