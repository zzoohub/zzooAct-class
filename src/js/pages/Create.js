export default class Create {
  constructor(main, props) {
    this.main = main;
    this.props = props;
    this.setUp();
    this.render();
  }
  setUp() {}
  templete() {
    const { atom } = this.props;
    return `
          <h1>${atom.page}</h1>
      `;
  }
  render() {
    this.main.innerHTML = this.templete();
  }
}
