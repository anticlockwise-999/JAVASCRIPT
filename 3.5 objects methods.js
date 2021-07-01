//object method

//user defined method: 
let person ={
    firstname : "Ashraful", 
    lastname : "Alam", 
    dob: "04-04-1957",

    //property :value (number/string/date/array/object/function)
    
    //if we write a function in object that's call "method"
    fullname: function(){
        return `${this.firstname} ${this.lastname}`;
    }
}
console.log(person.firstname); //prints Ashraful
console.log(person.fullname()); //prints Ashraful Alam

//now let's use built-in method string with length and split as property

let str = "Kante"; 
console.log(str.length); //5
console.log(str.split()); 

//Another way

var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};
myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];

//Another one
var dogs = {
  Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed);



//Accessing Nested Objects


var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
console.log(ourStorage.cabinet["top drawer"].folder2); //prints secrets
console.log(ourStorage.desk.drawer); //prints staplar


//Accessing Nested Arrays

var ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
console.log(ourPets[0].names[1]); //prints Fluffy
console.log(ourPets[1].names[0]); //prints Spot
