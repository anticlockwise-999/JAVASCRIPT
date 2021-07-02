//Built in functions: alert() console.log()

//user defined functions

function saysomething(){
    console.log("Hello!");
    console.log("I am learning JS! ");
    console.log("Right now")
}
saysomething();


//Use the parseInt Function

function convertToInteger(str) {
return parseInt(str);}

convertToInteger("56");


//Use the parseInt Function with a Radix

function convertToInteger(str) {
  return parseInt(str,2); //The radix variable says that 10011 is in the binary system, or base 2. This example converts the string 10011 to an integer 19.
}
convertToInteger("10011");
