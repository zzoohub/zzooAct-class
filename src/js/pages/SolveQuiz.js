import BaseQuiz from "../components/BaseQuiz";
import LineQuiz from "../components/LineQuiz";
import DragQuiz from "../components/DragQuiz";

export default class SolveQuiz {
  constructor(main, props) {
    this.main = main;
    this.props = props;
    this.quiz = undefined;
    this.setUp();
    this.render();
    this.setEvent();
  }
  setUp() {
    const myQuiz = JSON.parse(localStorage.getItem("myQuiz"));
    const { quizId } = this.props;
    const quiz = myQuiz.find((quiz) => quiz.quizId === quizId);
    this.quiz = quiz;
    console.log("this.quiz", this.quiz);
  }
  templete() {
    return `
            <h1>정답을 맞춰보세요</h1>
            <div id="quizForm">
                             
            </div>            
        `;
  }
  render() {
    this.main.innerHTML = this.templete();
    this.mount();
  }
  mount() {
    const quizForm = this.main.querySelector("#quizForm");
    switch (this.quiz.quizType) {
      case "base":
        new BaseQuiz(quizForm, {
          quiz: this.quiz,
          submit: this.submit.bind(this),
        });
        break;
      case "drag":
        new DragQuiz(quizForm, {
          quiz: this.quiz,
          submit: this.submit.bind(this),
        });
        break;
      case "line":
        new LineQuiz(quizForm, {
          quiz: this.quiz,
          submit: this.submit.bind(this),
        });
        break;
    }
  }
  setEvent() {}

  submit(answer) {
    console.log("answer:", answer);
    const { questions, answers, quizType, quizId } = this.quiz;
    const solvedQuiz = undefined;
    switch (quizType) {
      case "base":
        if (answers[0].text === answer) {
          this.quiz["isSolved"] = true;
          const myQuiz = JSON.parse(localStorage.getItem("myQuiz"));
          const quizIndex = myQuiz.findIndex((quiz) => quiz.quizId === quizId);
          myQuiz[quizIndex] = this.quiz;
          localStorage.setItem("myQuiz", JSON.stringify(myQuiz));
          alert("정답입니다! 맞힌 문제는 보관함에 저장됩니다.");
        } else {
          alert("틀렸습니다!!");
        }
        break;
      case "drag":
        new DragQuiz(quizForm, { quiz: this.quiz });
        break;
      case "line":
        new LineQuiz(quizForm, { quiz: this.quiz });
        break;
    }
  }
}
