const result =  (num1 , num2 ,num3 )=>{
      const [first , second ,third] = [num1 , num2 , num3] ; 
      return first * second * third;
      
}

const number = result(32,5,7);
console.log(number);
// Simple practices Two
const firstChoice = 'I am web developer';
const secondChoice = 'I love to code';
const thirdChoice = 'I love to eat Biriyani'
const oneLine = `${firstChoice} ${secondChoice} ${thirdChoice}`;
console.log(oneLine);

// Simple Practices three;

 function addNumber(num1= 3 , num2 = 10){
      const  sum = num1 + num2;
      return sum;
 }

 console.log(addNumber(20 ))


