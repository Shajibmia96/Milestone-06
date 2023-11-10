const players = [23,45,64,64,78,54,74,21,42,56,64,11,23,42,43,80];
const selected = players.filter( p => p %2 === 3)
// console.log(selected)

const friends = ['Shajib', "Akash", "Tipu", "Sayem" , "Tanvir" , "Sadekur"];
const friendsList = friends.filter(friend => friend[0] === "T")
console.log(friendsList)