const getData = new Promise ((resolve , reject) =>{
//   resolve(655565)
// reject("this is not a number")
 const number = Math.random()*10;
 console.log(number)
    if(number <5){
        resolve(42124)
    }else{
        reject("This is not a number")
    }
});

// console.log(getData +3)
getData.then(data => console.log(data))
        .catch(err => console.error("Err :", err))
      

