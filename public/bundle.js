;(() => {
  "use strict"
  var n = {
      796: (n, t, e) => {
        e.d(t, { Z: () => a })
        var r = e(81),
          o = e.n(r),
          i = e(645),
          s = e.n(i)()(o())
        s.push([n.id, "", ""])
        const a = s
      },
      50: (n, t, e) => {
        e.d(t, { Z: () => a })
        var r = e(81),
          o = e.n(r),
          i = e(645),
          s = e.n(i)()(o())
        s.push([
          n.id,
          "header {\n  height: 100px;\n}\nheader nav {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\nheader nav div {\n  margin-right: 20px;\n  cursor: pointer;\n  background-color: #888;\n  padding: 10px 20px;\n}\n",
          "",
        ])
        const a = s
      },
      226: (n, t, e) => {
        e.d(t, { Z: () => a })
        var r = e(81),
          o = e.n(r),
          i = e(645),
          s = e.n(i)()(o())
        s.push([n.id, "main {\n  border: 1px solid #fff;\n  min-height: 500px;\n}\n", ""])
        const a = s
      },
      538: (n, t, e) => {
        e.d(t, { Z: () => a })
        var r = e(81),
          o = e.n(r),
          i = e(645),
          s = e.n(i)()(o())
        s.push([
          n.id,
          'html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\na {\n  text-decoration: none;\n  color: inherit;\n}\n* {\n  box-sizing: border-box;\n}\n',
          "",
        ])
        const a = s
      },
      740: (n, t, e) => {
        e.d(t, { Z: () => h })
        var r = e(81),
          o = e.n(r),
          i = e(645),
          s = e.n(i),
          a = e(538),
          c = e(50),
          d = e(226),
          l = e(796),
          p = s()(o())
        p.i(a.Z),
          p.i(c.Z),
          p.i(d.Z),
          p.i(l.Z),
          p.push([
            n.id,
            "body {\n  background-color: #333;\n  color: #fff;\n}\n.wrapper {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n.wrapper header,\n.wrapper main,\n.wrapper footer {\n  max-width: 1024px;\n  width: 100%;\n}\n",
            "",
          ])
        const h = p
      },
      645: n => {
        n.exports = function (n) {
          var t = []
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var e = "",
                  r = void 0 !== t[5]
                return (
                  t[4] && (e += "@supports (".concat(t[4], ") {")),
                  t[2] && (e += "@media ".concat(t[2], " {")),
                  r && (e += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")),
                  (e += n(t)),
                  r && (e += "}"),
                  t[2] && (e += "}"),
                  t[4] && (e += "}"),
                  e
                )
              }).join("")
            }),
            (t.i = function (n, e, r, o, i) {
              "string" == typeof n && (n = [[null, n, void 0]])
              var s = {}
              if (r)
                for (var a = 0; a < this.length; a++) {
                  var c = this[a][0]
                  null != c && (s[c] = !0)
                }
              for (var d = 0; d < n.length; d++) {
                var l = [].concat(n[d])
                ;(r && s[l[0]]) ||
                  (void 0 !== i &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer".concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {").concat(l[1], "}")),
                    (l[5] = i)),
                  e && (l[2] ? ((l[1] = "@media ".concat(l[2], " {").concat(l[1], "}")), (l[2] = e)) : (l[2] = e)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports (".concat(l[4], ") {").concat(l[1], "}")), (l[4] = o))
                      : (l[4] = "".concat(o))),
                  t.push(l))
              }
            }),
            t
          )
        }
      },
      81: n => {
        n.exports = function (n) {
          return n[1]
        }
      },
      379: n => {
        var t = []
        function e(n) {
          for (var e = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === n) {
              e = r
              break
            }
          return e
        }
        function r(n, r) {
          for (var i = {}, s = [], a = 0; a < n.length; a++) {
            var c = n[a],
              d = r.base ? c[0] + r.base : c[0],
              l = i[d] || 0,
              p = "".concat(d, " ").concat(l)
            i[d] = l + 1
            var h = e(p),
              u = { css: c[1], media: c[2], sourceMap: c[3], supports: c[4], layer: c[5] }
            if (-1 !== h) t[h].references++, t[h].updater(u)
            else {
              var m = o(u, r)
              ;(r.byIndex = a), t.splice(a, 0, { identifier: p, updater: m, references: 1 })
            }
            s.push(p)
          }
          return s
        }
        function o(n, t) {
          var e = t.domAPI(t)
          return (
            e.update(n),
            function (t) {
              if (t) {
                if (
                  t.css === n.css &&
                  t.media === n.media &&
                  t.sourceMap === n.sourceMap &&
                  t.supports === n.supports &&
                  t.layer === n.layer
                )
                  return
                e.update((n = t))
              } else e.remove()
            }
          )
        }
        n.exports = function (n, o) {
          var i = r((n = n || []), (o = o || {}))
          return function (n) {
            n = n || []
            for (var s = 0; s < i.length; s++) {
              var a = e(i[s])
              t[a].references--
            }
            for (var c = r(n, o), d = 0; d < i.length; d++) {
              var l = e(i[d])
              0 === t[l].references && (t[l].updater(), t.splice(l, 1))
            }
            i = c
          }
        }
      },
      569: n => {
        var t = {}
        n.exports = function (n, e) {
          var r = (function (n) {
            if (void 0 === t[n]) {
              var e = document.querySelector(n)
              if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement)
                try {
                  e = e.contentDocument.head
                } catch (n) {
                  e = null
                }
              t[n] = e
            }
            return t[n]
          })(n)
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            )
          r.appendChild(e)
        }
      },
      216: n => {
        n.exports = function (n) {
          var t = document.createElement("style")
          return n.setAttributes(t, n.attributes), n.insert(t, n.options), t
        }
      },
      565: (n, t, e) => {
        n.exports = function (n) {
          var t = e.nc
          t && n.setAttribute("nonce", t)
        }
      },
      795: n => {
        n.exports = function (n) {
          var t = n.insertStyleElement(n)
          return {
            update: function (e) {
              !(function (n, t, e) {
                var r = ""
                e.supports && (r += "@supports (".concat(e.supports, ") {")),
                  e.media && (r += "@media ".concat(e.media, " {"))
                var o = void 0 !== e.layer
                o && (r += "@layer".concat(e.layer.length > 0 ? " ".concat(e.layer) : "", " {")),
                  (r += e.css),
                  o && (r += "}"),
                  e.media && (r += "}"),
                  e.supports && (r += "}")
                var i = e.sourceMap
                i &&
                  "undefined" != typeof btoa &&
                  (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                    " */",
                  )),
                  t.styleTagTransform(r, n, t.options)
              })(t, n, e)
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1
                n.parentNode.removeChild(n)
              })(t)
            },
          }
        }
      },
      589: n => {
        n.exports = function (n, t) {
          if (t.styleSheet) t.styleSheet.cssText = n
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild)
            t.appendChild(document.createTextNode(n))
          }
        }
      },
    },
    t = {}
  function e(r) {
    var o = t[r]
    if (void 0 !== o) return o.exports
    var i = (t[r] = { id: r, exports: {} })
    return n[r](i, i.exports, e), i.exports
  }
  ;(e.n = n => {
    var t = n && n.__esModule ? () => n.default : () => n
    return e.d(t, { a: t }), t
  }),
    (e.d = (n, t) => {
      for (var r in t) e.o(t, r) && !e.o(n, r) && Object.defineProperty(n, r, { enumerable: !0, get: t[r] })
    }),
    (e.o = (n, t) => Object.prototype.hasOwnProperty.call(n, t)),
    (e.nc = void 0),
    (() => {
      var n = e(379),
        t = e.n(n),
        r = e(795),
        o = e.n(r),
        i = e(569),
        s = e.n(i),
        a = e(565),
        c = e.n(a),
        d = e(216),
        l = e.n(d),
        p = e(589),
        h = e.n(p),
        u = e(740),
        m = {}
      ;(m.styleTagTransform = h()),
        (m.setAttributes = c()),
        (m.insert = s().bind(null, "head")),
        (m.domAPI = o()),
        (m.insertStyleElement = l()),
        t()(u.Z, m),
        u.Z && u.Z.locals && u.Z.locals
      class f {
        constructor(n, t) {
          ;(this.target = n), (this.props = t), this.setUp()
        }
        setUp() {
          ;(this.target.innerHTML = this.template()), this.setEvent()
        }
        template() {
          return '\n        <div id="login">\n            <form id="loginForm">\n                <div id="close_login">닫기</div>\n                <input minlength="2" placeholder="닉네임을 지어주세요" />\n                <button>확인</button>\n            </form>\n        </div>\n    '
        }
        setEvent() {
          document.querySelector("#loginForm").addEventListener("submit", this.onValid.bind(this))
        }
        onValid(n) {
          n.preventDefault()
          const t = n.target.children[1].value
          localStorage.setItem("loginUser", t)
          const { setAtom: e } = this.props
          e({ user: t })
        }
      }
      class v {
        constructor(n, t) {
          ;(this.target = n), (this.props = t), this.setUp(), this.render(), this.setEvent()
        }
        setUp() {}
        template() {
          const { atom: n } = this.props
          return `\n        <nav>\n            <div style="color:${
            "home" === n.page ? "red" : "gray"
          }" id="link" data-nav="home">HOME</div>\n            <div style="color:${
            "create" === n.page ? "red" : "gray"
          }" id="link" data-nav="create">제작</div>\n            <div style="color:${
            "store" === n.page ? "red" : "gray"
          }" id="link" data-nav="store">보관함</div>   \n        </nav>\n    `
        }
        render() {
          this.target.innerHTML = this.template()
        }
        setEvent() {
          const { setAtom: n } = this.props,
            t = this.target.querySelectorAll("#link")
          for (const e of t)
            e.addEventListener("click", t => {
              const {
                target: {
                  dataset: { nav: e },
                },
              } = t
              n({ page: e })
            })
        }
      }
      class g {
        constructor(n, t) {
          ;(this.main = n), (this.props = t), this.setUp(), this.render()
        }
        setUp() {}
        templete() {
          const { atom: n } = this.props
          return `\n        <h1>${n.page}</h1>\n    `
        }
        render() {
          this.main.innerHTML = this.templete()
        }
      }
      class b {
        constructor(n, t) {
          ;(this.main = n), (this.props = t), this.setUp(), this.render()
        }
        setUp() {}
        templete() {
          const { atom: n } = this.props
          return `\n          <h1>${n.page}</h1>\n      `
        }
        render() {
          this.main.innerHTML = this.templete()
        }
      }
      class y {
        constructor(n, t) {
          ;(this.main = n), (this.props = t), this.setUp(), this.render()
        }
        setUp() {}
        templete() {
          const { atom: n } = this.props
          return `\n            <h1>${n.page}</h1>\n        `
        }
        render() {
          this.main.innerHTML = this.templete()
        }
      }
      class w {
        constructor(n) {
          ;(this.atom = {}), (this.root = n), this.setUp(), this.render(), this.checkLogin()
        }
        setUp() {
          this.setAtom({ user: localStorage.getItem("loginUser"), page: "home" })
        }
        templete() {
          return '        \n          <div id="header_wrap" class="wrapper">\n            <header></header>\n          </div>\n          <div id="main_wrap" class="wrapper">\n            <main></main>\n          </div>\n          <div id="footer_wrap" class="wrapper">\n            <footer></footer>\n          </div>                              \n    '
        }
        checkLogin() {
          const { user: n } = this.atom
          if (!n) {
            const n = document.querySelector("main")
            new f(n, { setAtom: this.setAtom.bind(this) })
          }
        }
        setAtom(n) {
          ;(this.atom = { ...this.atom, ...n }), this.render()
        }
        render() {
          ;(this.root.innerHTML = this.templete()), this.mount()
        }
        mount() {
          const { page: n } = this.atom,
            t = this.root.querySelector("header")
          new v(t, { atom: this.atom, setAtom: this.setAtom.bind(this) })
          const e = this.root.querySelector("main")
          "home" === n
            ? new g(e, { atom: this.atom, setAtom: this.setAtom.bind(this) })
            : "create" === n
            ? new b(e, { atom: this.atom, setAtom: this.setAtom.bind(this) })
            : "store" === n && new y(e, { atom: this.atom, setAtom: this.setAtom.bind(this) })
        }
      }
      new (class {
        constructor() {
          const n = document.getElementById("root")
          new w(n)
        }
      })()
    })()
})()
