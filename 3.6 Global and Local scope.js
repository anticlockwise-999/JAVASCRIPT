//Global scope :  A variable declared outside a function, becomes GLOBAL.
var a= 1; 
let b=2;
const c =3;
var d=10; // we can access local scope through global scope

console.log(`Global scope: `,a,b,c); 
//prints Global scope:  1 2 3

//Local scope: Variables declared within a JavaScript function, become LOCAL to the function.
function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log(`Function scope: `,a,b,c,d ); 
} //prints Function scope:  4 5 6 10

test();

console.log(`Global scope: `,a,b,c); //prints Global scope:  1 2 3

if (true){
    var a =7;
    let b= 8;
    const c= 9;
    console.log(`If Scope: `,a,b,c); //prints If Scope:  7 8 9
}
console.log(`Global scope: `,a,b,c); 
//prints Global scope:  7 2 3 
//here we can see var changes and let,const remain same in global space
//so it will use "let" for variable declaration





