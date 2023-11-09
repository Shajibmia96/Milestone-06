const headPhone  ={
    color:"Black",
    price:"1500tk",
    brand : "logy",
    isClean: false
}

const keys = Object.keys(headPhone);
// console.log(keys);
const values = Object.values(headPhone);
// console.log(values);
const pair = Object.entries(headPhone);
// console.log(pair)
// delete headPhone.isClean
// console.log(headPhone);
Object.freeze(headPhone);
headPhone.price = 1200;
delete headPhone.color;
console.log(headPhone)
