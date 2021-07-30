// const db = [
// 	{ id: 1, text: 'jamon', done: false},
// 	{ id: 2, text: 'japon', done: true},
// 	{ id: 3, text: 'monja', done: true},
// ]

let db = [];

let idCount = 0;

function getTodos() {
  console.log(db);
}

function addTodo() {
  idCount++;

  db.push({ id: idCount, text: "", done: false });

  getTodos();

  return idCount;
}

function deleteTodo(id) {
  db = db.filter((todo) => todo.id !== id);

  getTodos();

  return true;
}

function updateTodo(id, text, done) {
  for (let i = 0; i !== db.length; i++) {
    if (db[i].id === id) {
      db[i].text = text;
      db[i].done = done;
    }
  }

  getTodos();
}
