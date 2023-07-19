// function isPowerOfTwo(n) {
//   if (n < 1) {
//     return false;
//   }
//   while (n > 1) {
//     if (n % 2 !== 0) {
//       return false;
//     }
//     n = n / 2;
//   }
//   return true;
// }

// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(2));
// console.log(isPowerOfTwo(5));

function isPowerOfTwoBtw(n){
    if(n < 1){
        return false;
    }
    return (n & (n-1)) === 0
}

console.log(isPowerOfTwoBtw(1));
console.log(isPowerOfTwoBtw(2));
console.log(isPowerOfTwoBtw(5));

