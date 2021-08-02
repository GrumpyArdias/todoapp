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
      return storedDb;
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
    updateTodo: function (id, text, done) {
      for (let i = 0; i !== records.length; i++) {
        if (records[i].id === id) {
          records[i].text = text;
          records[i].done = done;
        }
      }
      localStorage.setItem("db", JSON.stringify(records));
    },
  };
}

const db = createDb();
