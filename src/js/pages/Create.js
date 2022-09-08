import CreateQuiz from "../components/CreateQuiz";
import SelectQuizType from "../components/SelectQuizType";

export default class Create {
  constructor(main, props) {
    this.main = main;
    this.props = props;
    this.state = {};
    this.setUp();
    this.render();
  }
  setUp() {
    this.setState({
      type: "base",
    });
  }
  templete() {
    return `
          <div id="create">
            <form id="quizForm">
              <div id="setQuizType"></div>
              <div id="createQuiz"></div>
              <button>퀴즈 만들기</button>
            </form>
          </div>
      `;
  }
  render() {
    this.main.innerHTML = this.templete();
    this.mount();
    this.setEvent();
  }
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
  mount() {
    const { atom, setAtom } = this.props;
    const setQuizType = this.main.querySelector("#setQuizType");
    new SelectQuizType(setQuizType, {
      state: this.state,
      setState: this.setState.bind(this),
    });

    const createQuiz = this.main.querySelector("#createQuiz");
    new CreateQuiz(createQuiz, { atom, setAtom, quizType: this.state });
  }
  setEvent() {
    const form = this.main.querySelector("#quizForm");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const { target: form } = event;
      const newQuiz = {
        user: localStorage.getItem("user"),
        inputs: [],
      };
      for (const child of form) {
        if (child.nodeName === "SELECT") {
          newQuiz["type"] = child.value;
        } else if (child.nodeName === "BUTTON") {
        } else {
          newQuiz.inputs.push(child);
        }
      }
      try {
        if (localStorage.getItem("myQuiz")) {
          const myQuiz = [
            ...JSON.parse(localStorage.getItem("myQuiz")),
            newQuiz,
          ];
          localStorage.setItem("myQuiz", JSON.stringify(myQuiz));
        }
      } catch (error) {
        console.log(error);
      }
    });
  }
}
