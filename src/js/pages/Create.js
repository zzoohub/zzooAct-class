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
      const quizItem = {
        quizId: (Math.random() * 100000000).toFixed(),
        creator: localStorage.getItem("loginUser"),
        quizType: this.state.type,
        isSolved: false,
        questions: [],
        answers: [],
      };
      for (const child of form) {
        if (child.nodeName === "INPUT") {
          const {
            value,
            dataset: { question, answer },
          } = child;
          if (!value) return;
          if (question) {
            quizItem.questions.push({ index: question, text: value });
          } else if (answer) {
            quizItem.answers.push({ index: question, text: value });
          }
        } else {
          continue;
        }
      }

      try {
        const { setAtom } = this.props;
        if (localStorage.getItem("myQuiz")) {
          const myQuiz = [
            ...JSON.parse(localStorage.getItem("myQuiz")),
            quizItem,
          ];
          localStorage.setItem("myQuiz", JSON.stringify(myQuiz));
          setAtom({ page: "home" });
        } else {
          const myQuiz = [];
          myQuiz.push(quizItem);
          localStorage.setItem("myQuiz", JSON.stringify(myQuiz));
          setAtom({ page: "home" });
        }
      } catch (error) {
        console.log(error);
      }
    });
  }
}
