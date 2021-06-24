//Normal declaration:
function one(name){
    console.log('Adios' + name); //prints Adios monsieur
}


//Function expression:
let two= function(name2){
    console.log('Adios' + name2); //prints Adios senorita

//Arrow function:
let three =(name3) => {
    console.log("I am"+ name3 //prints I am vengeance
    );
}

one(" monsieur"); 
two(" senorita");
three(" vengeance");