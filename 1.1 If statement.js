//part 1

var age= prompt();

if (age >= 50){
    console.log("Old");
} else if (age <50 && age >= 30){
    console.log("Under 50 but above or equal 30");
} else if(age < 30 && age >= 18){
    console.log("Under 30 but above or equal 18");
} else {
    console.log("Under 18");
}



//part2: return

function testEqual(val) {
  if (val==12) {
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);



//part 3: Golf code anf parameter
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  
  if (strokes == 1) {
    return "Hole-in-one!";
  } else if (strokes <= par - 2) {
    return "Eagle";
  } else if (strokes == par - 1) {
    return "Birdie";
  } else if (strokes == par) {
    return "Par";
  } else if (strokes == par + 1) {
    return "Bogey";
  } else if (strokes == par + 2) {
    return "Double Bogey";
  } else {
    return "Go Home!";
  }
}

golfScore(5, 4);
