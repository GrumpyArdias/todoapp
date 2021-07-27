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
  const alignerContainerDiv = document.createElement("div");
  alignerContainerDiv.classList.add("d-flex");
  const input = document.createElement("input");
  input.classList.add("form-control", "mx-2");
  const saveBtn = document.createElement("button");
  saveBtn.classList.add("btn", "btn-primary", "fas", "fa-save");

  saveBtn.disabled = true;

  card.appendChild(alignerContainerDiv);
  alignerContainerDiv.appendChild(input);
  alignerContainerDiv.appendChild(saveBtn);
  root.appendChild(card);

  const checkBox = document.createElement("input");
  checkBox.classList.add("form-check-input", "mx-2");
  checkBox.type = "checkbox";

  const todoSpan = document.createElement("span");
  todoSpan.classList.add("w-100");

  const editBtn = document.createElement("button");
  editBtn.classList.add("btn", "btn-outline-info", "mx-1", "fas", "fa-edit");

  const deleteCardBtn = document.createElement("button");
  deleteCardBtn.classList.add("btn", "btn-danger", "mx-1", "fas", "fa-trash");

  function makeDraftTodo() {
    alignerContainerDiv.removeChild(checkBox);
    alignerContainerDiv.removeChild(todoSpan);
    alignerContainerDiv.removeChild(editBtn);
    alignerContainerDiv.removeChild(deleteCardBtn);

    alignerContainerDiv.appendChild(input);
    alignerContainerDiv.appendChild(saveBtn);
    alignerContainerDiv.appendChild(deleteCardBtn);
  }

  input.addEventListener("input", function () {
    if (input.value.trim().length <= 0) {
      saveBtn.disabled = true;
    } else {
      saveBtn.disabled = false;
    }
  });

  function makeFinalTodo() {
    alignerContainerDiv.removeChild(input);
    alignerContainerDiv.removeChild(saveBtn);

    todoSpan.innerHTML = input.value.trim();

    alignerContainerDiv.appendChild(checkBox);
    alignerContainerDiv.appendChild(todoSpan);
    alignerContainerDiv.appendChild(editBtn);
    alignerContainerDiv.appendChild(deleteCardBtn);

    function setDone() {
      if (checkBox.checked) {
        todoSpan.classList.add("text-decoration-line-through");
        todoSpan.classList.remove("text-decoration-none");
        card.style.opacity = 0.3;
        todoSpan.contentEditable = "false";
      } else {
        todoSpan.classList.remove("text-decoration-line-through");
        todoSpan.classList.add("text-decoration-none");
        card.style.opacity = 1;
      }
    }
    checkBox.addEventListener("click", setDone);
    editBtn.addEventListener("click", makeDraftTodo);

    // funcion para borrar card

    function deleteCard() {
      root.removeChild(card);
    }
    deleteCardBtn.addEventListener("click", deleteCard);
  }

  saveBtn.addEventListener("click", makeFinalTodo);
}

btn.addEventListener("click", cardFactory);
root.appendChild(btn);
