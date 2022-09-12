import Component from "../core/Component";

export default class BaseQuiz extends Component {
  templete() {
    const {
      quiz: { questions, answers },
    } = this.props;

    return `
        <form id="baseQuiz">
          <p>${questions[0].text}</p>
          <input data-answer placeholder="정답을 맞춰주세요" />
          <button>제출</button>
        </form>
    `;
  }
  setEvent() {
    const { submit } = this.props;
    this.makeEvent("submit", "#baseQuiz", (event) => {
      event.preventDefault();
      const answer = this.target.querySelector("[data-answer]");
      submit(answer.value);
    });
  }
}
