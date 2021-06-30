//Switch
console.log("Select an option: \na. Option 1 \nb. Option 2 \nc. Option 3");

choice = prompt();

var text;
switch(choice){
    case "a":
        text= "Option 1 selected"; //if(choice="a")
        break;
    case "b":
        text= "Option 2 selected";
        break;
    case "c":
        text= "Option 3 selected";
        break;
    default:
        text= "No Option is selected"; //else
        break;
}
console.log(text);


//another one

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
      break;
  }

  // Only change code above this line
  return answer;
}

caseInSwitch(1);
