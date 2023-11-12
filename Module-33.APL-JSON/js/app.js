const url = "https://jsonplaceholder.typicode.com/todos/1";


 function dataLoads(){
    fetch(url)
    .then( res => res.json())
    .then(data => console.log(data))
 }