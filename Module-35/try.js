function getErro(){
const inputField = document.getElementById("inputId");
const inputText = inputField.value;
const button = document.getElementById("btn-Id");
const errorTag = document.getElementById("error")
// console.log("hi..")
  try{
//    console.log(japan)
   const input = parseFloat(inputText);
    if(isNaN(input)){
       throw("please input a valid age")
    }
    else if(input < 18){
           throw("you age so low")
    }
    else if(input >30){
            throw("You age so hight")
    }
    errorTag.innerHTML =""
}

  catch(erro){
    console.log("ERROR:" , erro);
   errorTag.innerHTML = "EROOR" + erro

  }
  finally{
    console.log("finally we go it")
  }
  console.log(121212)
}