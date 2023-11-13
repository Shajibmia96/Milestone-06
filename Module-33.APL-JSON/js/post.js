// function postLoad(){
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => res.json())
//     .then(data => postData(data))
// }

// function postData(data){
//     // console.log(data)
//     const postDiv = document.getElementById("postList")
     
//     for(const post of data){
//         console.log(post)
//         const divItem = document.createElement("div");
//         divItem.classList.add("postList")
//         divItem.innerHTML = `
//                     <h3>User : ${post.id}<h3/>
//                     <h5>Title : ${post.title}<h5/>
//                     <p> description : ${post.body}</p>
//         `
//         postDiv.appendChild(divItem)
//     }
    
// }
// postLoad()



function userInfo(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => userData(data))
}

function userData(dataList){
    const DivInfo = document.getElementById("postList")

     for(list of dataList){
        
      const  div = document.createElement("div")
      div.classList.add("postList")

        div.innerHTML = `
        <h2>User Id : ${list.id} <h2/>
        <h4> Title : ${list.title}<h4/>
        <p> Description: ${list.body} </p>
        `
        DivInfo.appendChild(div)
     }
}