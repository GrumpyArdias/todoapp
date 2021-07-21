// Setting variables
let root = document.querySelector("#root");

// Button Creation
let btn = document.createElement("button");
btn.innerHTML = "New";
root.appendChild(btn);
btn.classList.add("btn", "btn-primary");

// Card Creation

let card = document.createElement("div");
root.appendChild(card);
card.classList.add("card");

// Card text

let cardtext = document.createElement("form");
let cardimput = document.createElement("input");
card.appendChild(cardtext);
cardtext.appendChild(cardimput);
cardtext.classList.add("form-control");

// Card Save button
let savebtn = document.createElement("button");
card.appendChild(savebtn);
savebtn.classList.add("btn", "btn-primary");
savebtn.innerHTML = "G";
