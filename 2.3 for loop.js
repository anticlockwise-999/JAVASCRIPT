
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
