import Login from "../components/Login";
import Header from "../components/Header";
import Home from "../pages/Home";
import Create from "../pages/Create";
import Store from "../pages/Store";

export default class Layout {
  constructor(root) {
    this.atom = {};
    this.root = root;
    this.setUp();
    this.render();
    this.checkLogin();
  }
  setUp() {
    this.setAtom({
      user: localStorage.getItem("loginUser"),
      page: "create",
    });
  }
  templete() {
    return `
          <div id="header_wrap" class="wrapper">
            <header></header>
          </div>
          <div id="main_wrap" class="wrapper">
            <main></main>
          </div>
          <div id="footer_wrap" class="wrapper">
            <footer></footer>
          </div>
    `;
  }
  checkLogin() {
    const { user } = this.atom;
    if (!user) {
      const main = document.querySelector("main");
      new Login(main, { setAtom: this.setAtom.bind(this) });
    }
  }
  setAtom(newAtom) {
    this.atom = { ...this.atom, ...newAtom };
    this.render();
  }
  render() {
    this.root.innerHTML = this.templete();
    this.mount();
  }
  mount() {
    const { page } = this.atom;

    const header = this.root.querySelector("header");
    new Header(header, {
      atom: this.atom,
      setAtom: this.setAtom.bind(this),
    });

    const main = this.root.querySelector("main");
    if (page === "home") {
      new Home(main, {
        atom: this.atom,
        setAtom: this.setAtom.bind(this),
      });
    } else if (page === "create") {
      new Create(main, {
        atom: this.atom,
        setAtom: this.setAtom.bind(this),
      });
    } else if (page === "store") {
      new Store(main, {
        atom: this.atom,
        setAtom: this.setAtom.bind(this),
      });
    }
  }
}
