/**
 * Question3: count the number of digits of a number
 * 
 * 34252
 */

function countDigits(num) {
    num = Math.abs(num)
    let count = 0;
    do {
        count++;
        num = Math.floor(num / 10);
    } while (num > 0) {
        return count;
    }
}
console.log(countDigits(34252));
console.log(countDigits(121));
console.log(countDigits(-1231));
console.log(countDigits(7742304464));