//DOM multiple selector
// document.getElementsByClassName()
let list =  document.getElementsByClassName('title-class'); //gets class by the name title-class
list[0].style.background = 'red';
list[0].style.color= 'white';
list[0].style.padding = '10px';
list[0].textContent = 'Holla'; //changed name 
//console.log(list)



// document.getElementsByTagName()
list = document.getElementsByTagName('li'); //getting every tag name related to 'li'
list = document.querySelector('ol').getElementsByTagName('li');
//console.log(list[3]); //we will get 4th element of the list
let lis = Array.from(list);
lis.forEach(function(item){
    console.log(item);
});

//document.querySelectorAll() : for id start with #, for classname start with . and for tagname start without any help


list = document.querySelectorAll('.document-class'); //classname
list = document.querySelectorAll('li'); //tagname 

let liOdd = document.querySelectorAll('li:nth-child(odd)');  

liOdd.forEach(function(item){
    item.style.background = 'grey'; //coloring the background of odd numbers of list
});


console.log(list); //getting lists as a array

