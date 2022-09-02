import Todo from "./components/todos.js";

class App {
  constructor() {
    const root = document.getElementById("root");
    new Todo(root);
  }
}

new App();
