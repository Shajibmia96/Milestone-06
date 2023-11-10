class Address {
    constructor(district , policeStation, union){
         this.district = district;
         this.policeStation = policeStation ; 
         this.union = union;

    }
    occupation(){
        console.log("He is a student")
    }
};


class HouseNumber extends Address {
     constructor(district , policeStation, union ,village,aria , houseNumber){
        super(district , policeStation ,union);
        this.village = village
        this.aria = aria
        this.houseNumber=houseNumber
     }
} ;


 class FamilyMember extends HouseNumber{
    constructor(district , policeStation, union ,village,aria , houseNumber,FamilyMember){
        super(district , policeStation, union ,village,aria , houseNumber)
         this.FamilyMember = FamilyMember
    }
 } 

const Shajib = new HouseNumber("Narayangonj" , "Araihajar" , "Bishnondi", "Chaitankanda" , "Uttor para  Sarkar Bari" , 596);
const Sayem = new HouseNumber ("Narsingdi","Raipura" ,"Adiabad" , "ShirajNogorNoyachor","East para","KadirBari", 322 );

const Akash = new FamilyMember("Narsingdi" , "Ship por" , "Ushor" , "Sristigor", "Hajibagan", 122 , 4 );
console.log(Akash)
// console.log(Sayem)
// console.log(Shajib)