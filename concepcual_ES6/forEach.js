const array = [45,2,4,2,6,36,32,55];
 const arr =array.forEach(x =>{
    //   console.log(x +3)
 });


 const numbers = [2,3,4,6,35,3,35,52,21,53,32];

 let sum = 0;
 const number = numbers.map(item => sum += item)
//  console.log(sum);

const fruits = ["mango", "apple" , "grep" , "guava" , "jackfruit" , "grep"];

//   fruits.forEach((fruit , index  ) => console.log(fruit,index));

  const finds = fruits.find(item => item=== "grep");
  console.log(finds)

  const even = numbers.filter( number => number%2 == 0
      
  )
//   console.log(even)

//   const total = numbers.reduce((previ , curren) => (previ+ curren))
//   console.log(total)

 const mark = [43,56,75,43,56,35,53,67];
const preTotal = 100
  const totalMark = mark.reduce((pre , cur)=> pre +cur ,preTotal )
  console.log(totalMark)

 