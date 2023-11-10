const number = [23,42,42,45,2,42,56,32,5,35,63,24,63,2];
const total = number.reduce( (p ,c)=> p+c,0)
console.log(total);

const roll = [4,2,42,1,4,5,2,5,2,5];
const sum = roll.reduce((P, C)=> P+C,0)
console.log(sum)