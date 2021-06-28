//Replacing element 

let newHeading = document.createElement('h1');
newHeading.appendChild(document.createTextNode('H1 new heading'));

let oldHeading = document.querySelector('h3'); //selected h3

let parent = document.querySelector('.container'); //selected class container from div

parent.replaceChild(newHeading,oldHeading);
console.log(newHeading);
console.log(oldHeading);
console.log(parent);