const number = Math.max(43,53,6,7,4,3,26,7);
console.log(number);

const numbers = [43,53,24,67,120,43,74,85,85,32,89,100];
const arrayMax = Math.max(...numbers);
console.log(arrayMax);

const friends = [45,34,5,24,6,64,32,22];
const bondhu = [...friends];
bondhu.push(9)
console.log(friends)
console.log(bondhu);

const sonkha = [45,64, ...friends , 64];
console.log(sonkha)
