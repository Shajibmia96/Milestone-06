function server (){
      let count = 0;
      return function(){
        count++;
        return count
      }
}
const firstServer= server();
console.log(firstServer())