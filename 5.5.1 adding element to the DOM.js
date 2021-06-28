//adding element to DOM

//adding element to ordered list
let olItem = document.createElement('li');

//add Id and Class
olItem.className = "a new another-class";
olItem.id = "new-element";

//add attribute
olItem.setAttribute('title','a title to new element');

olItem.appendChild(document.createTextNode('Javascript'));//adding javascript option
//console.log(olItem);

document.querySelector('ol').appendChild(olItem); //saving to the main page



//adding element to unordered list

let ulItem = document.createElement('li');
let link = document.createElement('a');

link.appendChild(document.createTextNode('Instagram')); //creating new item
link.querySelector('href','https:/www.instagram.com'); //giving link to the item

ulItem.appendChild(link); //adding the link
document.querySelector('ul').appendChild(ulItem); //adding the item

console.log(ulItem);
console.log(link);
