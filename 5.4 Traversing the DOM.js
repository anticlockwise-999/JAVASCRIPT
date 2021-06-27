//Traversing the DOM
let val;
let list = document.querySelector('ul'); //getting ul tag
let listItem = document.querySelector('ul li '); //getting items of the list
val=list;
val=listItem;
val= list.childNodes; //prints NodeList(7) [text, li.title-class, text, li, text, li, text]
val=list.children;  //prints nodelist without text
list.children[0].textContent = "Hello"; //changing first text from google to hello
val =list.children[1].children[0].href; //getting access to 1st element of the 2nd element

val = list.firstChild; //first element
val = list.firstElementChild; //first element without text
val =list.lastChild;
val = list.childElementCount; // without counting text element

//now let's focus on parents instead of child
val= listItem;//first item of the list
val= listItem.parentElement; //parent of the item
val= listItem.parentElement.parentElement; //parent of the parent element

val = listItem.nextSibling.nextSibling; //sibling to sibling
val = listItem.nextElementSibling; //without text
console.log(val);
