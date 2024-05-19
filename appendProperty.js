// append is used to append the HTML elements at the end of the desired element


let container = document.querySelector(".container");
let card = document.querySelector(".card");

let cloned = card.cloneNode();
container.append(cloned);         // node will be appended


container.append("hello" , "world" , "js");           // multiple arguements possible
// container.appendChild("hello" , "world" , "js");    // multiple arguements not possible 

