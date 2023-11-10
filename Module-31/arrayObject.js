const products =[
      {id:1 , name:"Lenevo" , price:"65000" , ram:"6gb"},
      {id:2 , name:"Dell" , price:"55000" , ram:"3gb"},
      {id:3 , name:"Samsung" , price:"45000" , ram:"4gb"},
      {id:4 , name:"BlackBarry" , price:"40000" , ram:"6gb"},
      {id:5 , name:"mac" , price:"165000" , ram:"8gb"}
]

const product =products.map(p=>p.name);
// console.log(product)
const prices = products.filter(pri => pri.price > 60000)
// console.log(prices)

const chift = products.find(chi => chi.price < 50000);
console.log(chift)