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




