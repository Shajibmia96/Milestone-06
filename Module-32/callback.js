function greeting(greetingSome , name){
         greetingSome(name);

     
}
function greetingSome(name){
    console.log("Hello" , name , "How are you")
}
function greetingEvening(name){
    console.log("hi,," , name)
}
greeting(greetingEvening, "Abul uncle")
greeting(greetingSome , "Shajib Mia")
greeting(greetingSome , "Sayem");
greeting(greetingSome , "Akash");
greeting(greetingSome , "Tipu");