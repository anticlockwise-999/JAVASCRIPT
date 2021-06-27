//DOM selector

let val;
//Getting an element (ge)
val = document.getElementById('document-title');
val = document.getElementById('document-title').id;
val = document.getElementById('document-title').className;

//Changing style
document.getElementById('document-title').style.background= '#333';
document.getElementById('document-title').style.color= '#fff';
document.getElementById('document-title').pading= '10px';
//document.getElementById('document-title').dispaly= 'none'; //to hide a display

//Changing content
document.getElementById('document-title').textContent = 'New Title'; //changing document title to inner title
document.getElementById('document-title').innerHTML = '<i>Again new title</i>'; //

//document.querySelector() (getting access)
val= document.querySelector('#document-title');
val= document.querySelector('.title-class');
val= document.querySelector('h3');
val= document.querySelector('ol');
val.style.background = 'red';
val.style.color = 'white';
val = document.querySelector('li:last-child'); //getting access to last element of the list
val = document.querySelector('li:nth-child(2)'); //getting access to 2nd element of the list
document.querySelector('li:nth-child(1)').innerHTML = "hello"; //changing name google to hello

console.log(val);
