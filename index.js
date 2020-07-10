// Write your code here!
const element = document.getElementById("main");
element.parentNode.removeChild(element);


const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "BLah is the champion";
newHeader.className = "victory";