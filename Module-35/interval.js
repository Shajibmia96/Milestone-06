let count =0;
console.log(1)
console.log(2)
const intervalID =setInterval(() =>{
    // count++;
    console.log(++count);
    if(count ===10){
        clearInterval(intervalID)
    }
},1000)

console.log(4)
console.log(5)
console.log(6)
console.log(7)