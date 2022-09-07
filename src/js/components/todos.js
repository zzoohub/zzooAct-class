import Component from "../core/Component.js";

export default class Todo extends Component {
  get filteredItems() {
    const { status, items } = this.state;
    return items.filter(
      (item) =>
        (status === "active" && item.isActive) ||
        (status === "inActive" && !item.isActive) ||
        status === "all"
    );
  }
  setUp() {
    this.state = {
      status: "all",
      items: [
        { todo: "item1", isActive: false, seq: 0 },
        { todo: "item2", isActive: false, seq: 1 },
        { todo: "item3", isActive: false, seq: 2 },
      ],
    };
  }
  templete() {
    return `
      <div id="component_todoList">
      <h2>To Do List</h2>
      <input id="appender" placeholder="입력란" />
      <ul id="list">
        ${this.filteredItems
          .map(
            (item, i) =>
              `<li>${item.todo}
              <button id="toggle"  data-seq=${item.seq} style="color:${
                item.isActive ? "blue" : "red"
              }">
              ${item.isActive ? "활성" : "비활성"}</button>
              <button id="deleteTodo" data-seq=${item.seq}>삭제</button>
            </li>`
          )
          .join("")}
      </ul>

      <button id="changeStatus" data-status="all">전체보기</button>
      <button id="changeStatus" data-status="active">활성상태보기</button>
      <button id="changeStatus" data-status="inActive">비활성상태만</button>
      </div>
    `;
  }
  setEvent() {
    this.makeEvent("keyup", "#appender", ({ target, key }) => {
      if (key !== "Enter") return;
      this.addTodo(target.value);
    });

    this.makeEvent("click", "#deleteTodo", ({ target }) => {
      const { items } = this.state;
      const seq = target.dataset.seq;
      const arr = [...items];
      const index = arr.findIndex((item) => item.seq === Number(seq));

      arr.splice(index, 1);
      this.setState({ items: arr });
    });

    this.makeEvent("click", "#toggle", ({ target }) => {
      const items = [...this.state.items];
      const seq = target.dataset.seq;
      const index = items.findIndex((item) => item.seq === Number(seq));
      items[index].isActive = !items[index].isActive;
      this.setState({ items });
    });

    this.makeEvent("click", "#changeStatus", ({ target }) => {
      const {
        dataset: { status },
      } = target;

      this.setState({ status });
    });
  }
  addTodo(content) {
    const { items } = this.state;
    const todo = content;
    const seq = Math.max(0, ...items.map((item) => item.seq)) + 1;
    const isActive = false;

    this.setState({
      items: [...items, { todo, isActive, seq }],
    });
  }
}
