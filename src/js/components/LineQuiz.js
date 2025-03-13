import Component from "../core/Component"

export default class LineQuiz extends Component {
  templete() {
    const {
      quiz: { questions, answers },
    } = this.props

    return `
        <div id="lineQuiz">
          <div class="questions">${questions.map(question => `<span>${question.text}</span>`)}</div>
          <div class="answers">${answers.map(answer => `<span>${answer.text}</span>`)}</div>
        </div>
    `
  }
}
