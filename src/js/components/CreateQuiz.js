import Component from "../core/Component"

export default class CreateQuiz extends Component {
  setUp() {}
  templete() {
    const {
      quizType: { type },
    } = this.props
    if (type === "base") {
      return `
      <div class="createBaseQuiz">
      <input required data-question="1" placeholder="퀴즈 내용"/>
      <input required data-answer="1" placeholder="정답"/>
      </div>

    `
    } else if (type === "line") {
      return `
      <div class="createLineQuiz">
        <div class="createLineQuiz_question">
          <input required data-question="1" placeholder="1번 퀴즈" />
          <input required data-question="2" placeholder="2번 퀴즈" />
          <input required data-question="3" placeholder="3번 퀴즈" />
        </div>
        <div class="createLineQuiz_answer">
          <input required data-answer="1" placeholder="1번 정답" />
          <input required data-answer="2" placeholder="2번 정답" />
          <input required data-answer="3" placeholder="3번 정답" />
        </div>
      </div>
      `
    } else if (type === "drag") {
      return `
        <div class="createDragQuiz">
          <div class="createDragQuiz_question">
            <input data-question="1" placeholder="퀴즈" />
          </div>
          <div class="createLineQuiz_answer">
            <input required data-answer="1" placeholder="정답" />
            <input required data-answer="2" placeholder="오답" />
            <input required data-answer="3" placeholder="오답" />
          </div>
        </div>
      `
    }
  }
}
