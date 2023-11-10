const numbers = [11,21,34,31,2];



const result =numbers.map(n => Math.pow(n , 3));

// for(number of numbers){
//     const double = number*2;
//     result.push(double)
// }
// console.log(result);

const FiveBonus = numbers.map(num => num+5) ;
console.log(FiveBonus)