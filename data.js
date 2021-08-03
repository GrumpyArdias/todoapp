function createDb() {
  // Closure
  let idCount = 0;
  let records = [];

  return {
    // Syntax sugar propety: function()... === propery()
    getTodos() {
      const storedDb = JSON.parse(localStorage.getItem("db"));
      if (!storedDb) return [];
      idCount = storedDb[storedDb.length - 1]
        ? storedDb[storedDb.length - 1].id
        : 0;
      records = storedDb;

      return storedDb.sort(function (todoA, todoB) {
        if (!todoA.order || !todoB.order) return 1;
        return todoA.order < todoB.order ? 1 : -1;
      });
    },
    addTodo: function () {
      idCount++;
      records.push({ id: idCount, text: "", done: false });
      localStorage.setItem("db", JSON.stringify(records));

      return idCount;
    },
    deleteTodo: function (id) {
      records = records.filter((todo) => todo.id !== id);
      localStorage.setItem("db", JSON.stringify(records));
      return true;
    },
    updateTodo: function (id, text, done, order) {
      for (let i = 0; i !== records.length; i++) {
        if (records[i].id === id) {
          if (text) {
            records[i].text = text;
          }
          if (done !== null) {
            records[i].done = done;
          }
          if (order !== null) {
            records[i].order = order;
          }
        }
      }
      localStorage.setItem("db", JSON.stringify(records));
    },
  };
}

const db = createDb();
