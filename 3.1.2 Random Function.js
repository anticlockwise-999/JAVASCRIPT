//Generate Random Whole Numbers with JavaScript

function randomFraction() {
 
  var result = 0;
  while (result === 0) {
    result = Math.random()*100; //Math.random() generates our random number between 0 and ≈ 0.9.
  }
  return result;  
}
console.log(randomFraction());


//Generate Random Whole Numbers with JavaScript

function randomWholeNum() {
  
  return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());


//Generate Random Whole Numbers within a Range
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

console.log(randomRange(10,80))