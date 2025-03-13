import "../css/styles.css"
import Layout from "./core/Layout"

class App {
  constructor() {
    const root = document.getElementById("root")
    new Layout(root)
  }
}

new App()
