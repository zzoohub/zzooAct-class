export default class Header {
  constructor(target, props) {
    this.target = target;
    this.props = props;
    this.setUp();
    this.render();
    this.setEvent();
  }
  setUp() {}
  template() {
    const { atom } = this.props;
    return `
        <nav>
            <div style="color:${
              atom.page === "home" ? "red" : "gray"
            }" id="link" data-nav="home">HOME</div>
            <div style="color:${
              atom.page === "create" ? "red" : "gray"
            }" id="link" data-nav="create">제작</div>
            <div style="color:${
              atom.page === "store" ? "red" : "gray"
            }" id="link" data-nav="store">보관함</div>   
        </nav>
    `;
  }
  render() {
    this.target.innerHTML = this.template();
  }
  setEvent() {
    const { setAtom } = this.props;
    const links = this.target.querySelectorAll("#link");
    for (const link of links) {
      link.addEventListener("click", (event) => {
        const {
          target: {
            dataset: { nav },
          },
        } = event;
        setAtom({ page: nav });
      });
    }
  }
}
