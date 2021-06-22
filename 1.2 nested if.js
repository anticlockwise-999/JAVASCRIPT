var n1 = prompt("First number: ");
var n2 = prompt("2nd number: ");
var n3 = prompt("Third number: ");

n1= parseInt(n1);
n2= parseInt(n2);
n3= parseInt(n3);

if (n1 >= n2){
    if (n1 >= n3){
        console.log(n1+ " is the largest");
    }
    else {
        console.log(n3+ " is the largest");
    }
} else {
    if (n2 >= n3){
        console.log(n2+ " is the largest");
    }
    else{
        console.log(n3+ " is the largest");
    }
}





