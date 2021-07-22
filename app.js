// Setting variables
let root = document.querySelector("#root");

// Button Creation
let btn = document.createElement("button");
btn.innerHTML = "Add";
root.appendChild(btn);
btn.classList.add("btn", "btn-primary");
btn.id = "btntop";

// Card Creation
let card = document.createElement("div");
root.appendChild(card);
card.classList.add("card");

function showcard() {
  card.style.display = "block";
}
btn.addEventListener("click", showcard);

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
savebtn.id = "savebtn";

function saved() {
  let newcard = document.createElement("div");
  let newcardbody = document.createElement("div");
  let savetext = cardimput.value;
  root.appendChild(newcard);
  newcard.appendChild(newcardbody);
  newcard.classList.add("card");
  newcardbody.classList.add("card-body");
  newcard.style.display = "block";
  newcardbody.innerHTML = savetext;
}

savebtn.addEventListener("click", saved);
