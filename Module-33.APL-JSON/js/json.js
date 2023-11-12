const users = { id: 23, name:"Shajib" , home:"Dhaka"}  ;
console.log(users);
const stringify = JSON.stringify(users);
console.log(stringify)



const shop = {
    name:"Shajib",
    address:{
        street :"23/a , 532",
        District:"Narayangonj",
    },
    products :["pent" , "Longi" , "Shirt", "ECT"],
    isOpen: true,
    isNew:false
};
// console.log(shop)

const JSONshop = JSON.stringify(shop);
// console.log(JSONshop);

const stringShop = '{"name":"Shajib","address":{"street":"23/a , 532","District":"Narayangonj"},"products":["pent","Longi","Shirt","ECT"],"isOpen":true,"isNew":false}';

const parse = JSON.parse(stringShop);
console.log(parse)
