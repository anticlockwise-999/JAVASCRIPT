
//Static function
class person {  
    constructor(fname, lname) { //function = constructor   fname= parameter
        this.firstname = fname ; //property=firstname, this indicates property of object
        this.lastname = lname ;
    }
    greeting(){ //gretting = function or method
        return `Hello ${this.firstname} ${this.lastname}`;
    }
    static test(){
        console.log("I am static");
    }
}
let person1 = new person("Mahi", "Jakaria");

console.log(person1.greeting()); //prints Hello Mahi Jakaria
//we have to call normal method from object
console.log(person.test()); //prints I am static
//we have to call static from class 
