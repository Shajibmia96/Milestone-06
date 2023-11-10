const oddArray = [1,3,5,7,9,11];
// ForLoop;

const result = [];
for(odd of oddArray){
    const evenNumber = odd +1;
    result.push(evenNumber)
}
// console.log(result);

// map

const getEven =oddArray.map(odd => odd+1);
// console.log(getEven)

const numbers = [25,20,67,40,70,201,210,55];
const dividedNumber =numbers.filter(number => number%10===0);
// console.log("Output of filter",dividedNumber);

const find = numbers.find(number => number%10 ===0)
// console.log("Output of find",find)


//task --03

const instructor=[
    {name:"Akash" , age:19, position : 'senior1'},
    {name:"Tanvir" , age:23, position : 'junior'},
    {name:"Shajib" , age:29, position : 'senior'}
]

const getSenior =instructor.filter(pos=>pos.position==="senior") 
// console.log(getSenior);

const people = [
    {name:"mina" , age:12},
    {name:"tina" , age:13},
    {name:"jina" , age:22}
]

const ageSum = people.reduce((peo , poe ) => peo+poe.age , 0);
console.log(ageSum)


