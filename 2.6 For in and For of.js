//For-in we use string,array,object
//For-of we use string,array, but not object 

//strings and array have indexing system
let name = "I am learning Javascript";
let food= ["Cake","Chocolate","Ice Cream"]

//objects don't have indexing system
let person = {
    name: "Shakib Al Hasan",
    profession: "Cricketer",
    team: "BD",
    age: 33,
}


//in: we will get index
for (var y in food){
    console.log(`Index: ${y}; and item: ${food[y]}`);
}
// of: we will get items/values

for(var y of food){
    console.log(y);
}

for(var x in person){ //we can't use of 
    console.log(`property: ${x}
    values: ${person[x]}`);
} 