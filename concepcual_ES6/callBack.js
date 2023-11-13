// function getSum(a ,b,setValue){
//     //  const b = 4;
//     setValue(a,b)
// };

// function setValue(num1 , num2){
//     const sum = num1+num2;
//     console.log(sum)
// };

// getSum(4 ,6,setValue)

 const getSum = (a,b,setValue) =>{
     setValue(a,b)
 }

 const setValue = (x,y) =>{
    const mul = x*y
    console.log(mul)
 }
 const divided =(x,y) =>{
     const div =x/y;
     console.log(div);
 }

 

getSum(10,10 ,setValue);
getSum(100 , 10 ,divided)