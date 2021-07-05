//Profile Lookup


var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
 
  for (let x = 0; x < contacts.length; x++) {

     //The for loop runs, starting at the first object in the contacts list.  

    if (contacts[x].firstName === name) { //checking parameter name 

          //If the firstName parameter passed into the function matches the value of the "firstName" key in the first object, the if statement passes.
          //otherwise it will go to else 

      if (contacts[x].hasOwnProperty(prop)) { //checking parameter prop

        //Then, we use .hasOwnProperty() method (checks if there’s a given property and returns a boolean) with prop as an argument. 
        //If it’s true, the value of prop is returned;

        return contacts[x][prop];
      } else {
        return "No such property"; //If the second if statement fails, No such property is returned.
      }
    }
  }
  return "No such contact";

  //If the firstName parameter isn’t matched by the final contacts object, the for loop exits and No such contact is returned.
}

console.log(lookUpProfile("Harry", "likes"));
//returns (3) ["Hogwarts", "Magic", "Hagrid"]
