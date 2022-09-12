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
  }
  setUp() {
    const myQuiz = JSON.parse(localStorage.getItem("myQuiz"));
    const { quizId } = this.props;
    const quiz = myQuiz.find((quiz) => quiz.quizId === quizId);
    this.quiz = quiz;
  }
  templete() {
    return `
            <h1>정답을 맞춰보세요</h1>
            <form>
                <div id="quizForm"></div>                
            </form>            
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
        new BaseQuiz(quizForm);
        break;
      case "drag":
        new DragQuiz(quizForm);
        break;
      case "line":
        new LineQuiz(quizForm);
        break;
    }
  }
}
