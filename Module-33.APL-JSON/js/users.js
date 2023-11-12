function userDataLoad(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data1 => userData(data1));
};
 function userData(data){
     for(const user of data){
        const ul = document.getElementById("usersList");
       const li = document.createElement("li");
             li.innerText = user.email
             ul.appendChild(li)
     }
 }