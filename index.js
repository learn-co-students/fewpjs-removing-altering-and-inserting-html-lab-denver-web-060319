// Write your code here!

let element = document.querySelector('main');
element.remove();

let newHeader = document.createElement('h1')
newHeader.setAttribute('id', 'victory')
newHeader.innerHTML = "Tri Nguyen is the champion"