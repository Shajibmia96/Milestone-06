const number = [3,42,24,532,25,32,2,52,2,]

const [a,b,c,d ,...e] = number;
// console.log(a ,b,c,d ,e);

const person = {name:"Shajib" , age: 23, address:"Narayangonj"}

console.log(person.age)
console.log(person['age'])


const complexArray = {
    name: "Shajib",
    age:23,
    address :{
        street: "A/32",
        HoldingNumber : 45

    },

    category:{
        num : [34,67,32,6,32,62,4 ,76,101 , "This is call"]
    },
    data:"Hi.... Every one"
}

// console.log(complexArray.category.num[complexArray.category.num.length-1])
console.log(complexArray?.data?.contact?.phone)