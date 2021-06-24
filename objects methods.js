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


