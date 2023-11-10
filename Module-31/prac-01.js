//01
let data = {
    shofia :{
       id:424,
       study:[
        {
            primary:[
                {school_Name : "Chiatankanda golam Mohammd hi scoole"},
                { school_Location: "Araihajar"}
            ],
            secondary:[
                {school_Name:"Babu collage"},
                {school_Location:"Gopaldi"}
            ]
        }
       ]
    }
}

// console.log(data.shofia.study[0].secondary[1])

// task 02

let students = {
    2222:{
            name:"Sha ali",
            section : "C",
            class : "XI",
            address:{
                "building_no":12,
                "street" : "pirer bag road",
                "City" : "Sewrapara",
                "country":"Bangladesh"
            }
    },
    3333:{
        name:"Ali Shah",
        section :"A",
        class : "XXI",
        address:{
            "building_no":22,
            "street" : "pirer bag boro road",
            "City" : "Sewrapara -12",
            "country":"Bangladesh"
        }
    }
}
  
console.log(students["2222"].address['City']);
console.log(students[3333].name)