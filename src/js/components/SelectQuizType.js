import Component from "../core/Component"

export default class SelectQuizType extends Component {
  setUp() {}
  templete() {
    const {
      state: { type },
    } = this.props

    return `
      <select name="selectQuizType" id="select_quiz">
        <option value="base" ${type === "base" ? "selected" : null}>묻고 답하기</option>
        <option value="line" ${type === "line" ? "selected" : null}>선잇기</option>
        <option value="drag" ${type === "drag" ? "selected" : null}>드래그</option>
      </select>
    `
  }
  setEvent() {
    this.makeEvent("input", "#select_quiz", event => {
      const {
        target: { value },
      } = event
      const { setState } = this.props
      setState({ type: value })
    })
  }
}
