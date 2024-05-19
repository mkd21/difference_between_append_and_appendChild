let container = document.querySelector(".container");
let card = document.querySelector(".card");

// lets say we dont want to remove any element from its position but instead we want to copy it 


// appendChild toh cut paste krta hai but if we want to copy paste then? 

// we have a method called cloneNode() 
// it takes a parameter as true or false

// true means that the cloned node should contain all attributes of original node (inner html , text and all copy hoga)

// false means vice versa

// baaki true do ya false css to copy hoga hi 



let h1 = document.querySelector("h1");

// let cloned = h1.cloneNode(true);
let cloned = h1.cloneNode(false);

// console.log(cloned);

// container.appendChild(cloned);



                        // TASK 
// clone cards inside the container 100 times and the text inside the cards should show their number 
// they are positioned at 
// and place them inside the container 

// clone node bnao usko container me append kro 100 times.

// let cloneCard = card.cloneNode(false);
// cloneCard.innerText = "2";
// console.log(cloneCard);
// container.appendChild(cloneCard);

// automate the above part 


for(let i = 2; i <=100; i++){

    let cloneCard = card.cloneNode();
    cloneCard.innerText = i;
    if(i == 99 || i == 100)
    {
        cloneCard.style.cssText = "align-self : flex-start; background-color : blue;";
    }
    container.appendChild(cloneCard);
}