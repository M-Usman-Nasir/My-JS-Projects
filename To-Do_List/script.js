const todoList = document.getElementById("todo-list");
const newTodoInput = document.getElementById("new-todo");
const addButton = document.getElementById("add-button");

    addButton.addEventListener("click", function() {
      const newTodoText = newTodoInput.value;
      if (newTodoText) {
        const newTodoItem = document.createElement("li");
        newTodoItem.textContent = newTodoText;
        todoList.appendChild(newTodoItem);
        newTodoInput.value = "";
      }
    });