// Setting variables
let root = document.querySelector("#root");

// Button Creation
let btn = document.createElement("button");
btn.innerHTML = "New";
root.appendChild(btn);
btn.classList.add("btn", "btn-primary");

// Card Creation

let card = document.createElement("card");
root.appendChild(card);
card.classList.add("card", "card");

// Card body

let cardbody = document.createElement("card-body");
card.appendChild(cardbody);
cardbody.classList.add("cardbody", "card-body");
cardbody.innerHTML = "test";

// Card text
