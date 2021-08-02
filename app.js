window.addEventListener("load", function () {
  // Setting variables
  const body = document.querySelector("body");
  body.style.backgroundColor = "#F4F5F9";
  const root = document.querySelector("#root");

  // Button Creation
  let btn = document.createElement("button");
  btn.innerHTML = "Add";
  btn.classList.add("btn", "btn-primary");

  const todoContainer = document.createElement("div");

  // Card Creation
  function todoFactory(todoId, text, done) {
    const card = document.createElement("div");
    card.classList.add("card", "p-3", "my-3");

    const alignerContainerDiv = document.createElement("div");
    alignerContainerDiv.classList.add("d-flex");

    const input = document.createElement("input");
    input.classList.add("form-control", "mx-2");
    if (text) {
      input.value = text;
    }

    const saveBtn = document.createElement("button");
    saveBtn.classList.add("btn", "btn-primary", "fas", "fa-save");

    saveBtn.disabled = true;

    card.appendChild(alignerContainerDiv);
    alignerContainerDiv.appendChild(input);
    alignerContainerDiv.appendChild(saveBtn);
    todoContainer.prepend(card);

    const checkBox = document.createElement("input");
    checkBox.classList.add("form-check-input", "mx-2");
    checkBox.type = "checkbox";

    const todoSpan = document.createElement("span");
    todoSpan.classList.add("w-100");

    const editBtn = document.createElement("button");
    editBtn.classList.add("btn", "btn-outline-info", "mx-1", "fas", "fa-edit");

    const deleteCardBtn = document.createElement("button");
    deleteCardBtn.classList.add("btn", "btn-danger", "mx-1", "fas", "fa-trash");

    if (text) {
      makeFinalTodo(true);
    }

    if (done) {
      checkBox.checked = true;
      todoSpan.classList.add("text-decoration-line-through");
      todoSpan.classList.remove("text-decoration-none");
      card.style.opacity = 0.3;
    }

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

    function makeFinalTodo(initial = false) {
      alignerContainerDiv.removeChild(input);
      alignerContainerDiv.removeChild(saveBtn);

      todoSpan.innerHTML = input.value.trim();

      alignerContainerDiv.appendChild(checkBox);
      alignerContainerDiv.appendChild(todoSpan);
      alignerContainerDiv.appendChild(editBtn);
      alignerContainerDiv.appendChild(deleteCardBtn);

      //updateTodo.disabled;

      function setDone() {
        if (checkBox.checked) {
          todoSpan.classList.add("text-decoration-line-through");
          todoSpan.classList.remove("text-decoration-none");
          card.style.opacity = 0.3;
        } else {
          todoSpan.classList.remove("text-decoration-line-through");
          todoSpan.classList.add("text-decoration-none");
          card.style.opacity = 1;
        }
        if (!initial) {
          db.updateTodo(todoId, input.value.trim(), checkBox.checked);
        }
      }

      checkBox.addEventListener("click", setDone);

      editBtn.addEventListener("click", makeDraftTodo);
      if (!initial) {
        db.updateTodo(todoId, input.value.trim(), checkBox.checked);
      }
      // funcion para borrar card

      function deleteCard() {
        db.deleteTodo(todoId);
        todoContainer.removeChild(card);
      }
      deleteCardBtn.addEventListener("click", deleteCard);
    }

    saveBtn.addEventListener("click", function () {
      makeFinalTodo(false);
    });
  }

  btn.addEventListener("click", function () {
    const todoId = db.addTodo();
    todoFactory(todoId);
  });
  root.appendChild(btn);
  root.appendChild(todoContainer);

  // load card stored in db
  let savedDbArray = db.getTodos();
  if (savedDbArray.length != 0) {
    for (i = 0; i < savedDbArray.length; i++) {
      todoFactory(
        savedDbArray[i].id,
        savedDbArray[i].text,
        savedDbArray[i].done
      );
    }
  }
});
