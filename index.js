const form = document.querySelector('form');


function saveInput(e){
    e.preventDefault();
    const itemValue = document.querySelector('input').value
    if(itemValue === ''){
        return;
    }
    const node = document.createElement("LI");                 // Create a <li> node
    const textnode = document.createTextNode(itemValue);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("list").appendChild(node);     // Append <li> to <ul> with id="myList"
    form.reset();
}

form.addEventListener("submit", (e) => saveInput(e))