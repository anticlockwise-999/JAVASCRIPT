//Function parameter/argument

function one(param1){
    console.log(`Hello ${param1}`);
}
one("Neo");

//
function two(fname,lname){
    console.log(`Hello ${fname} ${lname}`);
}
let firstname="Cristiano";
let lastname= "Ronaldo";
two(firstname,lastname);

//
function three(fname="Mahi",lname="Jakaria"){
    console.log(`Hello ${fname} ${lname}`);
}
three();

//
function addnum(a=0,b=0){
    console.log(a+b);
};
addnum(3.5,4.5);

//
function addnum2(a=0,b=0){
    return(a+b);
};
console.log(addnum2(4,3.4));

//
function addnum3(a=0,b=0){
    console.log(`${a} + ${b} =  ${ a + b }`)
    return(a+b);
};
let sum = (addnum3(2,3.4));
console.log(sum);