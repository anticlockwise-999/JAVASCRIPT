console.log("Select an option: \n1. add \n2. subtract \n3. multiply \n4. divide");
var num1 = prompt("Enter first number: ");
var num2 = prompt("Enter 2nd number: ");
var option = prompt("Choose an operation: ");
var result = null;

num1 = parseInt(num1); //converting to integer
num2 = parseInt(num2);
option = parseInt(option);

var num1Con = isNaN(num1);
var num2Con = isNaN(num2);
var optionCon = isNaN(option);

if (num1Con || num2Con || optionCon){
    console.log("Invalid Input");
} else{
    switch(option){
        case 1:
            result = num1 + num2;
            break;
        case 2:
            result = num1 - num2;
            break;
        case 3:
            result = num1 * num2;
            break;
        case 4:
            result = num1/num2;
            break;
        default:
            break;
    }
    if(result == null){
        console.log("No result");
    }
    else {
        console.log("Result: "+ result);
    }
}



