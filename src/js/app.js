import Todo from "./components/todos.js";
import "../css/styles.css";

class App {
  constructor() {
    const root = document.getElementById("root");
    new Todo(root);
  }
}

new App();
