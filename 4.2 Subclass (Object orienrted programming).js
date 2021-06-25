//Subclass 
//Inheritance

class person {  //Person = Base class
    constructor(fname, lname) { //function = constructor   fname= parameter
        this.firstname = fname ; //property=firstname,
        this.lastname = lname ;
    }
    greeting(){ //gretting = function or method
        return `Hello ${this.firstname} ${this.lastname}`;
    }
}

class customer extends person { //linking to class person 
    //customer = subclass
    constructor(fname, lname, phone, membership){
        super(fname,lname);
        this.phone = phone;
        this.membership= membership;
    }
}

let person1 = new person("Mahi","Jakaria");

console.log(person1);
console.log(person1.greeting());
//prints Hello Mahi Jakaria
let customer1 = new customer("Leo","Caprio","0199364685","999");
console.log(customer1);
//prints firstname: "Leo" lastname: "Caprio" membership: "999" phone: "0199364685"