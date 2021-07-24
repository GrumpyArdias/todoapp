// Setting variables
const body = document.querySelector("body");
body.style.backgroundColor = "#F4F5F9";
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
  saveBtn.classList.add("btn", "btn-primary", "fas", "fa-save");

  card.appendChild(flexDiv);
  flexDiv.appendChild(input);
  flexDiv.appendChild(saveBtn);
  root.appendChild(card);

  /// Cuando clicke el botón de guardar, el card debe volverse readonly, y toggleable (done/not-done)

  function makeFinalTodo() {
    const todoText = input.value.trim();

    if (todoText.length < 1) return;

    flexDiv.removeChild(input);
    flexDiv.removeChild(saveBtn);

    const checkBox = document.createElement("input");
    checkBox.classList.add("form-check-input", "mx-2");
    checkBox.type = "checkbox";
    flexDiv.appendChild(checkBox);

    const todoSpan = document.createElement("span");

    todoSpan.innerHTML = todoText;
    flexDiv.appendChild(todoSpan);

    function setDone() {
      if (checkBox.checked) {
        todoSpan.className = "text-decoration-line-through";
        card.style.opacity = 0.3;
      } else {
        todoSpan.className = "text-decoration-none";
        card.style.opacity = 1;
      }
    }
    checkBox.addEventListener("click", setDone);
  }

  saveBtn.addEventListener("click", makeFinalTodo);
}

btn.addEventListener("click", cardFactory);
root.appendChild(btn);
