export default class Component {
  target;
  state;
  constructor(target) {
    this.target = target;
    this.setUp();
    this.setEvent();
    this.render();
  }
  setUp() {}
  render() {
    this.target.innerHTML = this.templete();
  }
  templete() {
    return ``;
  }
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
  setEvent() {}
  makeEvent(eventType, selector, callback) {
    const children = [...this.target.querySelectorAll(selector)];

    const isExist = (target) =>
      children.includes(target) || target.closest(selector);

    this.target.addEventListener(eventType, (event) => {
      if (!isExist(event.target)) return false;
      callback(event);
    });
  }
}
