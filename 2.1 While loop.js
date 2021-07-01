var i=1;
while (i <=5){
    console.log("Value of of i: " +i);
    i++;
}
console.log("Out of the loop");

//another way
var myArray = [];
var i = 5;
while(i >= 0) {
  myArray.push(i);
  i--;
  console.log(i); //prints 4,3,2,1,0,-1
}
