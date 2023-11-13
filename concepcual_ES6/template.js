const name = "Shajib";
const address = "Narayanjong";
const age = 23;
const myFav = ["Bangla" , "English" , "Mathematic"]
const fatherName = "Joynal abedin";

const myInfo = ` 
                My name is ${name}.
                My home district ${address}.
                Iam ${age} years old .
                My Father name ${fatherName}
                My favorite subjects ${myFav.map(item => item).join(" ")}

`
console.log(myInfo)