// Setting variables
const root = document.querySelector("#root");

// Button Creation
let btn = document.createElement("button");
btn.innerHTML = "Add";
btn.classList.add("btn", "btn-primary");

// Card Creation
function cardFactory() {
  const card = document.createElement("div");
  card.classList.add("card", "p-3", "my-3");

  const flexDiv = document.createElement("div");
  flexDiv.classList.add("d-flex");

  // Card text

  const input = document.createElement("input");
  input.classList.add("form-control", "mx-2");
  console.log(input);

  // Card Save button
  const saveBtn = document.createElement("button");
  saveBtn.classList.add("btn", "btn-primary");
  saveBtn.innerHTML = "G";

  card.appendChild(flexDiv);
  flexDiv.appendChild(input);
  flexDiv.appendChild(saveBtn);
  root.appendChild(card);

  /// Cuando clicke el botón de guardar, el card debe volverse readonly, y toggleable (done/not-done)

  function makeFinalTodo() {
    flexDiv.removeChild(input, saveBtn);
    let innerText = input.value;
    flexDiv.innerHTML = innerText;
    const checkBox = document.createElement("input");
    checkBox.classList.add("form-check-input", "mx-2");

    function check() {
      innerText = innerText.strike();
      flexDiv.innerHTML = innerText;
    }
    checkBox.addEventListener("click", check);

    flexDiv.appendChild(checkBox);
  }

  saveBtn.addEventListener("click", makeFinalTodo);
}

btn.addEventListener("click", cardFactory);
root.appendChild(btn);
