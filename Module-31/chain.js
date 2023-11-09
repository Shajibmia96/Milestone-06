const myInfo = [{name : 'Shajib' , id : 46496 , address: 395/2 , District: 'Narayangonj'}];
// console.log(myInfo[0].District)
// console.log(myInfo[0].id);


const data1 = {
    name : "Shajib",
    moreInfo : [
        {
            SkinColor : "Complexion",
            Education : 'Diploma in Computer science',
            Mobile : '01595035359',
            Height : 5.8
              
        },
        {
            SkinColor : "Comple",
            Education : 'Diploma in Computer science',
            Mobile : '01595035350',
            Height : 5.7
              
        },
        {
            SkinColor : "Complexion",
            Education : 'Diploma in Computer science',
            Mobile : '01595035359',
            Height : 5.6
              
        }
    ]
}
const data2 = {
    name : "Shajib",
   }
console.log(data1.moreInfo[0].Height)
console.log(data2?.moreInfo[0]?.Height)
