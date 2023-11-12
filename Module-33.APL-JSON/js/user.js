const URLS = "https://jsonplaceholder.typicode.com/users"
function loadUser(){
      fetch(URLS)
      .then(res => res.json())
      .then(data => displayUser(data))
}

function displayUser(a){
   console.log(a)
}