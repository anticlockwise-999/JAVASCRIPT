//Class
//Class is a template or blue print or proper planning to create objetcs

class person {
    constructor(fname, lname, birthday) { //function = constructor
        this.firstname = fname ; //property=firstname,
        this.lastname = lname ;
        this.dob= birthday ;
    }
    calculateAge(){ //this function helps to calculate age
        let birthday =  new Date(this.dob);
        let diff = Date.now() - birthday.getTime();
        let ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear()-1960);
    }


}
let person1= new person("Mahi" ,"Jakaria" ,"11-1-1997");
let person2= new person("Leonardo" ,"DiCaprio" ,"11-11-1974");  
let person3= new person("Brad" ,"Pitt" ,"11-11-1964");  

//after creating 3 object, we passed 3 parameters or property value for each object

console.log(person1); //prints person {firstname: "Mahi", lastname: "Jakaria", dob: "11-1-1997"}
console.log(person2); //prints person {firstname: "Leonardo", lastname: "DiCaprio", dob: "11-11-1974"}
console.log(person3); //prints person {firstname: "Brad", lastname: "Pitt", dob: "11-11-1964"}


console.log(person1.calculateAge()); //prints 33
console.log(person2.calculateAge()); //prints 56
console.log(person3.calculateAge()); //prints 66



