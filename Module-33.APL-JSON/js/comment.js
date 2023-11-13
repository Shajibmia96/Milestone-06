function getUserComment (){
    
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then( res => res.json())
    .then(data => userComment(data))
}

function userComment(comments){
     const commentsDiv = document.getElementById("comment-container");

     for( const comment of comments ){
        
        const commentList = document.createElement("div");
        commentList.innerHTML = `
                        <h1>name : ${comment.name} </h1>
                        <h1>email : ${comment.email} </h1>
                        <p>body : ${comment.body} </p>

        `
        commentsDiv.appendChild(commentList)
        
     }
}

getUserComment()


const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name); 

