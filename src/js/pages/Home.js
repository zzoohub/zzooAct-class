import "../../css/pages/home.css"

export default class Home {
  constructor(main, props) {
    this.main = main
    this.props = props
    this.quizList = []
    this.setUp()
    this.render()
    this.setEvent()
  }
  setUp() {
    this.quizList = JSON.parse(localStorage.getItem("myQuiz"))
  }
  templete() {
    const { atom } = this.props
    return `
        <div id="home">
        <h1>${atom.page}</h1>
        <ul>
          ${this.quizList?.map(
            quiz => `
            <li id="quiz" data-quiz-id="${quiz.quizId}">
              <span>${quiz.creator}</span>
              <span>퀴즈타입: ${quiz.quizType}</span>    
              <p>${quiz.questions[0].text}</p>          
            </li>
            `,
          )}
        </ul>
        </div>
    `
  }
  render() {
    this.main.innerHTML = this.templete()
  }
  setEvent() {
    const quizs = this.main.querySelectorAll("#quiz")

    for (const quiz of quizs) {
      quiz.addEventListener("click", event => {
        const { setAtom } = this.props

        const {
          target: {
            dataset: { quizId },
          },
        } = event
        setAtom({ page: "quiz", playing: quizId })
      })
    }
  }
}
