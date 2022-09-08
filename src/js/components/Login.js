import "../../css/components/login.css";

export default class Login {
  constructor(target, props) {
    this.target = target;
    this.props = props;
    this.setUp();
  }
  setUp() {
    this.target.innerHTML = this.template();
    this.setEvent();
  }
  template() {
    return `
        <div id="login">
            <form id="loginForm">
                <h2 class="loginForm_title">닉네임을 만드세요</h2>
                <input minlength="2" placeholder="닉네임을 지어주세요" />
                <button>확인</button>
            </form>
        </div>
    `;
  }
  setEvent() {
    const form = document.querySelector("#loginForm");
    form.addEventListener("submit", this.onValid.bind(this));
  }
  onValid(event) {
    event.preventDefault();
    const value = event.target.children[1].value;
    localStorage.setItem("loginUser", value);

    const { setAtom } = this.props;
    setAtom({ user: value });
  }
}
