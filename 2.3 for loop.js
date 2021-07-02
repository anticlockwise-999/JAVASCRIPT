
var i=1;

//while loop
while (i <=5){
    console.log(i);
    i++;
}
console.log("End of the while loop")
console.log("Start of for loop");

//for loop
for(var j=1; j<=4; j++){
    console.log(j);
}
//first condition check, then print, then update

for(var k=5; k>=1; k--){
    console.log(k);
}

//another way : increase
var myArray = [];
for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}

//another way : decrease

var myArray = [];
for (var i =9; i > 0; i -= 2) {
  myArray.push(i);
}

//Iterate Through an Array with a For Loop
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
  console.log(i); //prints 0,1,2,3,4
}




//Nesting For Loops

function multiplyAll(arr) {
    var product = 1;
 
    for (var i = 0; i < arr.length; i++) { //i =array number
        //array length =3 
      for (var j = 0; j < arr[i].length; j++) {  //j= element number in array
        product = product * arr[i][j];
  
      }
    }  
    return product;
  }
  console.log(multiplyAll([[1,2],[3,4,5],[2]])); //prints 240



//Replace Loops using Recursion
function sum(arr, n) {

    if(n <= 0) {
      return 0;
    } else {
      return sum(arr, n-1 ) + arr[n-1];
    }
  }
  console.log(sum([2, 3, 4, 5], 4));  //prints 14 //since 2+3+4+5=14

