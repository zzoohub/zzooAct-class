class Atom {
  atom;
  constructor() {
    this.atom = {};
    render();
  }
  setAtom(newAtom) {
    this.atom = { ...this.atom, ...newAtom };
    this.render();
  }
  render() {}
  templete() {}
}
