var __defProp = Object.defineProperty,
  __defProps = Object.defineProperties,
  __getOwnPropDescs = Object.getOwnPropertyDescriptors,
  __getOwnPropSymbols = Object.getOwnPropertySymbols,
  __hasOwnProp = Object.prototype.hasOwnProperty,
  __propIsEnum = Object.prototype.propertyIsEnumerable,
  __defNormalProp = (e, t, n) =>
    t in e
      ? __defProp(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: n,
        })
      : (e[t] = n),
  __spreadValues = (e, t) => {
    for (var n in t || (t = {}))
      __hasOwnProp.call(t, n) && __defNormalProp(e, n, t[n]);
    if (__getOwnPropSymbols)
      for (var n of __getOwnPropSymbols(t))
        __propIsEnum.call(t, n) && __defNormalProp(e, n, t[n]);
    return e;
  },
  __spreadProps = (e, t) => __defProps(e, __getOwnPropDescs(t)),
  __publicField = (e, t, n) => (
    __defNormalProp(e, "symbol" != typeof t ? t + "" : t, n), n
  );
!(function (e) {
  "function" == typeof define && define.amd ? define(e) : e();
})(function () {
  var e, t, n;
  const i = (e, t) => {
      let n;
      return (
        Object.getOwnPropertyNames(e).some((o) =>
          (a(t) && o === t) || (r(t) && t.includes(o))
            ? ((n = e[o]), !0)
            : !(!e[o] || "object" != typeof e[o]) &&
              ((n = i(e[o], t)), void 0 !== n)
        ),
        n
      );
    },
    r = (e) => Array.isArray(e),
    a = (e) => "[object String]" === Object.prototype.toString.call(e),
    o = (e) => (
      Object.keys(e).forEach((t) => {
        const n = e[t];
        if (null !== n && "object" == typeof n)
          if (!0 === Array.isArray(n))
            (e[t] = []),
              n.forEach((n) => {
                e[t].push(n);
              });
          else {
            const i = o(n);
            Object.keys(i).forEach((n) => {
              e[`${t}.${n}`] = i[n];
            }),
              delete e[t];
          }
      }),
      e
    ),
    {
      printError: s,
      purgeError: l,
      setErrorContainer: c,
      extractError: d,
      parseToErrorObject: u,
    } = new (class {
      constructor() {
        __publicField(
          this,
          "DEFAULT_STYLE",
          "\n      padding: 11px 9px;\n      background: #fecaca;\n      width: 100%;\n      border-radius: 4px;\n      text-align: center;\n      color: #b80000;\n      font-weight: 400;\n    "
        ),
          __publicField(this, "selector", "#ycp-error-container"),
          __publicField(this, "container", null),
          __publicField(this, "printError", (e) => {
            if ((this.setErrorContainer(), null === this.container)) return;
            const t = this.extractError(e);
            this.container.innerHTML = `\n      <div style="${this.DEFAULT_STYLE}">\n        <p>${t}</p>\n      </div>\n    `;
          }),
          __publicField(this, "setErrorContainer", (e) => {
            if (null === this.container) {
              void 0 !== e && (this.selector = e);
              const t = document.querySelector(this.selector);
              null !== t && (this.container = t);
            }
          }),
          __publicField(this, "purgeError", () => {
            null !== this.container && (this.container.innerHTML = "");
          });
      }
      extractError(e) {
        return "string" == typeof e
          ? e
          : i(e, ["message", "errorMessage"]) || "an unexpected error occurred";
      }
      parseToErrorObject(e) {
        return {
          message: e.message,
          trace:
            ((t = e.stack || ""),
            t
              .trim()
              .split(" ")
              .filter((e) => "" !== e && "\n" !== e)
              .join(" ")),
        };
        var t;
      }
    })();
  var h = ((e) => (
      (e.FATAL_ERROR = "fatal-error"),
      (e.SCRIPT_LOAD_TIME = "script-load-time"),
      (e.INITIATE_INTEGRATION = "initiate-integration"),
      (e.ACCOUNT_NOT_FOUND = "account-not-found"),
      (e.CASHPLUS_COPY_TOKEN = "cashplus-copy-token"),
      (e.CASHPLUS_NAVIGATE_CAROUSEL = "cashplus-navigate-carousel"),
      (e.UNSUPPORTED_LOCALE = "unsupported-locale"),
      (e.TRANSLATION_KEY_NOT_FOUND = "translation-key-not-found"),
      (e.INPUT_INTERACTION = "input-interaction"),
      (e.BAD_FORM_CONTAINER = "bad-form-container"),
      (e.WINDOW_UNLOADED = "window-unloaded"),
      e
    ))(h || {}),
    p = ((e) => (
      (e.PASTE = "paste"),
      (e.FOCUS = "focus"),
      (e.CLICK = "click"),
      (e.KEY_PRESS = "key_press"),
      e
    ))(p || {}),
    m = function () {
      return (
        (m =
          Object.assign ||
          function (e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
              for (var r in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e;
          }),
        m.apply(this, arguments)
      );
    };
  function f(e, t, n, i) {
    return new (n || (n = Promise))(function (r, a) {
      function o(e) {
        try {
          l(i.next(e));
        } catch (t) {
          a(t);
        }
      }
      function s(e) {
        try {
          l(i.throw(e));
        } catch (t) {
          a(t);
        }
      }
      function l(e) {
        var t;
        e.done
          ? r(e.value)
          : ((t = e.value),
            t instanceof n
              ? t
              : new n(function (e) {
                  e(t);
                })).then(o, s);
      }
      l((i = i.apply(e, t || [])).next());
    });
  }
  function g(e, t) {
    var n,
      i,
      r,
      a,
      o = {
        label: 0,
        sent: function () {
          if (1 & r[0]) throw r[1];
          return r[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (a = { next: s(0), throw: s(1), return: s(2) }),
      "function" == typeof Symbol &&
        (a[Symbol.iterator] = function () {
          return this;
        }),
      a
    );
    function s(a) {
      return function (s) {
        return (function (a) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; o; )
            try {
              if (
                ((n = 1),
                i &&
                  (r =
                    2 & a[0]
                      ? i.return
                      : a[0]
                      ? i.throw || ((r = i.return) && r.call(i), 0)
                      : i.next) &&
                  !(r = r.call(i, a[1])).done)
              )
                return r;
              switch (((i = 0), r && (a = [2 & a[0], r.value]), a[0])) {
                case 0:
                case 1:
                  r = a;
                  break;
                case 4:
                  return o.label++, { value: a[1], done: !1 };
                case 5:
                  o.label++, (i = a[1]), (a = [0]);
                  continue;
                case 7:
                  (a = o.ops.pop()), o.trys.pop();
                  continue;
                default:
                  if (
                    !((r = o.trys),
                    (r = r.length > 0 && r[r.length - 1]) ||
                      (6 !== a[0] && 2 !== a[0]))
                  ) {
                    o = 0;
                    continue;
                  }
                  if (3 === a[0] && (!r || (a[1] > r[0] && a[1] < r[3]))) {
                    o.label = a[1];
                    break;
                  }
                  if (6 === a[0] && o.label < r[1]) {
                    (o.label = r[1]), (r = a);
                    break;
                  }
                  if (r && o.label < r[2]) {
                    (o.label = r[2]), o.ops.push(a);
                    break;
                  }
                  r[2] && o.ops.pop(), o.trys.pop();
                  continue;
              }
              a = t.call(e, o);
            } catch (s) {
              (a = [6, s]), (i = 0);
            } finally {
              n = r = 0;
            }
          if (5 & a[0]) throw a[1];
          return { value: a[0] ? a[1] : void 0, done: !0 };
        })([a, s]);
      };
    }
  }
  function v() {
    for (var e = 0, t = 0, n = arguments.length; t < n; t++)
      e += arguments[t].length;
    var i = Array(e),
      r = 0;
    for (t = 0; t < n; t++)
      for (var a = arguments[t], o = 0, s = a.length; o < s; o++, r++)
        i[r] = a[o];
    return i;
  }
  var _ = "3.3.3";
  function y(e, t) {
    return new Promise(function (n) {
      return setTimeout(n, e, t);
    });
  }
  function b(e, t) {
    try {
      var n = e();
      (i = n) && "function" == typeof i.then
        ? n.then(
            function (e) {
              return t(!0, e);
            },
            function (e) {
              return t(!1, e);
            }
          )
        : t(!0, n);
    } catch (r) {
      t(!1, r);
    }
    var i;
  }
  function w(e, t, n) {
    return (
      void 0 === n && (n = 16),
      f(this, void 0, void 0, function () {
        var i, r, a;
        return g(this, function (o) {
          switch (o.label) {
            case 0:
              (i = Date.now()), (r = 0), (o.label = 1);
            case 1:
              return r < e.length
                ? (t(e[r], r),
                  (a = Date.now()) >= i + n ? ((i = a), [4, y(0)]) : [3, 3])
                : [3, 4];
            case 2:
              o.sent(), (o.label = 3);
            case 3:
              return ++r, [3, 1];
            case 4:
              return [2];
          }
        });
      })
    );
  }
  function x(e, t) {
    (e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]]),
      (t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]]);
    var n = [0, 0, 0, 0];
    return (
      (n[3] += e[3] + t[3]),
      (n[2] += n[3] >>> 16),
      (n[3] &= 65535),
      (n[2] += e[2] + t[2]),
      (n[1] += n[2] >>> 16),
      (n[2] &= 65535),
      (n[1] += e[1] + t[1]),
      (n[0] += n[1] >>> 16),
      (n[1] &= 65535),
      (n[0] += e[0] + t[0]),
      (n[0] &= 65535),
      [(n[0] << 16) | n[1], (n[2] << 16) | n[3]]
    );
  }
  function C(e, t) {
    (e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]]),
      (t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]]);
    var n = [0, 0, 0, 0];
    return (
      (n[3] += e[3] * t[3]),
      (n[2] += n[3] >>> 16),
      (n[3] &= 65535),
      (n[2] += e[2] * t[3]),
      (n[1] += n[2] >>> 16),
      (n[2] &= 65535),
      (n[2] += e[3] * t[2]),
      (n[1] += n[2] >>> 16),
      (n[2] &= 65535),
      (n[1] += e[1] * t[3]),
      (n[0] += n[1] >>> 16),
      (n[1] &= 65535),
      (n[1] += e[2] * t[2]),
      (n[0] += n[1] >>> 16),
      (n[1] &= 65535),
      (n[1] += e[3] * t[1]),
      (n[0] += n[1] >>> 16),
      (n[1] &= 65535),
      (n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0]),
      (n[0] &= 65535),
      [(n[0] << 16) | n[1], (n[2] << 16) | n[3]]
    );
  }
  function S(e, t) {
    return 32 === (t %= 64)
      ? [e[1], e[0]]
      : t < 32
      ? [(e[0] << t) | (e[1] >>> (32 - t)), (e[1] << t) | (e[0] >>> (32 - t))]
      : ((t -= 32),
        [(e[1] << t) | (e[0] >>> (32 - t)), (e[0] << t) | (e[1] >>> (32 - t))]);
  }
  function k(e, t) {
    return 0 === (t %= 64)
      ? e
      : t < 32
      ? [(e[0] << t) | (e[1] >>> (32 - t)), e[1] << t]
      : [e[1] << (t - 32), 0];
  }
  function P(e, t) {
    return [e[0] ^ t[0], e[1] ^ t[1]];
  }
  function E(e) {
    return (
      (e = P(e, [0, e[0] >>> 1])),
      (e = P((e = C(e, [4283543511, 3981806797])), [0, e[0] >>> 1])),
      (e = P((e = C(e, [3301882366, 444984403])), [0, e[0] >>> 1]))
    );
  }
  function T(e) {
    return parseInt(e);
  }
  function A(e) {
    return parseFloat(e);
  }
  function L(e, t) {
    return "number" == typeof e && isNaN(e) ? t : e;
  }
  function F(e) {
    return e.reduce(function (e, t) {
      return e + (t ? 1 : 0);
    }, 0);
  }
  function R(e, t) {
    if ((void 0 === t && (t = 1), Math.abs(t) >= 1))
      return Math.round(e / t) * t;
    var n = 1 / t;
    return Math.round(e * n) / n;
  }
  function I(e) {
    return e && "object" == typeof e && "message" in e ? e : { message: e };
  }
  function O(e, t, n) {
    var i = Object.keys(e).filter(function (e) {
        return !(function (e, t) {
          for (var n = 0, i = e.length; n < i; ++n) if (e[n] === t) return !0;
          return !1;
        })(n, e);
      }),
      r = Array(i.length);
    return (
      w(i, function (n, i) {
        r[i] = (function (e, t) {
          var n = function (e) {
              return "function" != typeof e;
            },
            i = new Promise(function (i) {
              var r = Date.now();
              b(e.bind(null, t), function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                var a = Date.now() - r;
                if (!e[0])
                  return i(function () {
                    return { error: I(e[1]), duration: a };
                  });
                var o = e[1];
                if (n(o))
                  return i(function () {
                    return { value: o, duration: a };
                  });
                i(function () {
                  return new Promise(function (e) {
                    var t = Date.now();
                    b(o, function () {
                      for (var n = [], i = 0; i < arguments.length; i++)
                        n[i] = arguments[i];
                      var r = a + Date.now() - t;
                      if (!n[0]) return e({ error: I(n[1]), duration: r });
                      e({ value: n[1], duration: r });
                    });
                  });
                });
              });
            });
          return function () {
            return i.then(function (e) {
              return e();
            });
          };
        })(e[n], t);
      }),
      function () {
        return f(this, void 0, void 0, function () {
          var e, t, n, a, o, s;
          return g(this, function (l) {
            switch (l.label) {
              case 0:
                for (e = {}, t = 0, n = i; t < n.length; t++)
                  (a = n[t]), (e[a] = void 0);
                (o = Array(i.length)),
                  (s = function () {
                    var t;
                    return g(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return (
                            (t = !0),
                            [
                              4,
                              w(i, function (n, i) {
                                o[i] ||
                                  (r[i]
                                    ? (o[i] = r[i]().then(function (t) {
                                        return (e[n] = t);
                                      }))
                                    : (t = !1));
                              }),
                            ]
                          );
                        case 1:
                          return n.sent(), t ? [2, "break"] : [4, y(1)];
                        case 2:
                          return n.sent(), [2];
                      }
                    });
                  }),
                  (l.label = 1);
              case 1:
                return [5, s()];
              case 2:
                if ("break" === l.sent()) return [3, 4];
                l.label = 3;
              case 3:
                return [3, 1];
              case 4:
                return [4, Promise.all(o)];
              case 5:
                return l.sent(), [2, e];
            }
          });
        });
      }
    );
  }
  function N() {
    var e = window,
      t = navigator;
    return (
      F([
        "MSCSSMatrix" in e,
        "msSetImmediate" in e,
        "msIndexedDB" in e,
        "msMaxTouchPoints" in t,
        "msPointerEnabled" in t,
      ]) >= 4
    );
  }
  function M() {
    var e = window,
      t = navigator;
    return (
      F([
        "webkitPersistentStorage" in t,
        "webkitTemporaryStorage" in t,
        0 === t.vendor.indexOf("Google"),
        "webkitResolveLocalFileSystemURL" in e,
        "BatteryManager" in e,
        "webkitMediaStream" in e,
        "webkitSpeechGrammar" in e,
      ]) >= 5
    );
  }
  function D() {
    var e = window,
      t = navigator;
    return (
      F([
        "ApplePayError" in e,
        "CSSPrimitiveValue" in e,
        "Counter" in e,
        0 === t.vendor.indexOf("Apple"),
        "getStorageUpdates" in t,
        "WebKitMediaKeys" in e,
      ]) >= 4
    );
  }
  function U() {
    var e = window;
    return (
      F([
        "safari" in e,
        !("DeviceMotionEvent" in e),
        !("ongestureend" in e),
        !("standalone" in navigator),
      ]) >= 3
    );
  }
  function V() {
    var e = document;
    return (
      e.exitFullscreen ||
      e.msExitFullscreen ||
      e.mozCancelFullScreen ||
      e.webkitExitFullscreen
    ).call(e);
  }
  function $() {
    var e = M(),
      t = (function () {
        var e,
          t,
          n = window;
        return (
          F([
            "buildID" in navigator,
            "MozAppearance" in
              (null !==
                (t =
                  null === (e = document.documentElement) || void 0 === e
                    ? void 0
                    : e.style) && void 0 !== t
                ? t
                : {}),
            "onmozfullscreenchange" in n,
            "mozInnerScreenX" in n,
            "CSSMozDocumentRule" in n,
            "CanvasCaptureMediaStream" in n,
          ]) >= 4
        );
      })();
    if (!e && !t) return !1;
    var n = window;
    return (
      F([
        "onorientationchange" in n,
        "orientation" in n,
        e && !("SharedWorker" in n),
        t && /android/i.test(navigator.appVersion),
      ]) >= 2
    );
  }
  function z(e) {
    var t = new Error(e);
    return (t.name = e), t;
  }
  function B(e, t, n) {
    var i, r, a;
    return (
      void 0 === n && (n = 50),
      f(this, void 0, void 0, function () {
        var o, s;
        return g(this, function (l) {
          switch (l.label) {
            case 0:
              (o = document), (l.label = 1);
            case 1:
              return o.body ? [3, 3] : [4, y(n)];
            case 2:
              return l.sent(), [3, 1];
            case 3:
              (s = o.createElement("iframe")), (l.label = 4);
            case 4:
              return (
                l.trys.push([4, , 10, 11]),
                [
                  4,
                  new Promise(function (e, n) {
                    var i = !1,
                      r = function () {
                        (i = !0), e();
                      };
                    (s.onload = r),
                      (s.onerror = function (e) {
                        (i = !0), n(e);
                      });
                    var a = s.style;
                    a.setProperty("display", "block", "important"),
                      (a.position = "absolute"),
                      (a.top = "0"),
                      (a.left = "0"),
                      (a.visibility = "hidden"),
                      t && "srcdoc" in s
                        ? (s.srcdoc = t)
                        : (s.src = "about:blank"),
                      o.body.appendChild(s);
                    var l = function () {
                      var e, t;
                      i ||
                        ("complete" ===
                        (null ===
                          (t =
                            null === (e = s.contentWindow) || void 0 === e
                              ? void 0
                              : e.document) || void 0 === t
                          ? void 0
                          : t.readyState)
                          ? r()
                          : setTimeout(l, 10));
                    };
                    l();
                  }),
                ]
              );
            case 5:
              l.sent(), (l.label = 6);
            case 6:
              return (
                null ===
                  (r =
                    null === (i = s.contentWindow) || void 0 === i
                      ? void 0
                      : i.document) || void 0 === r
                  ? void 0
                  : r.body
              )
                ? [3, 8]
                : [4, y(n)];
            case 7:
              return l.sent(), [3, 6];
            case 8:
              return [4, e(s, s.contentWindow)];
            case 9:
              return [2, l.sent()];
            case 10:
              return (
                null === (a = s.parentNode) || void 0 === a || a.removeChild(s),
                [7]
              );
            case 11:
              return [2];
          }
        });
      })
    );
  }
  function j(e) {
    for (
      var t = (function (e) {
          for (
            var t,
              n,
              i = "Unexpected syntax '" + e + "'",
              r = /^\s*([a-z-]*)(.*)$/i.exec(e),
              a = r[1] || void 0,
              o = {},
              s = /([.:#][\w-]+|\[.+?\])/gi,
              l = function (e, t) {
                (o[e] = o[e] || []), o[e].push(t);
              };
            ;

          ) {
            var c = s.exec(r[2]);
            if (!c) break;
            var d = c[0];
            switch (d[0]) {
              case ".":
                l("class", d.slice(1));
                break;
              case "#":
                l("id", d.slice(1));
                break;
              case "[":
                var u =
                  /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(
                    d
                  );
                if (!u) throw new Error(i);
                l(
                  u[1],
                  null !==
                    (n = null !== (t = u[4]) && void 0 !== t ? t : u[5]) &&
                    void 0 !== n
                    ? n
                    : ""
                );
                break;
              default:
                throw new Error(i);
            }
          }
          return [a, o];
        })(e),
        n = t[0],
        i = t[1],
        r = document.createElement(null != n ? n : "div"),
        a = 0,
        o = Object.keys(i);
      a < o.length;
      a++
    ) {
      var s = o[a],
        l = i[s].join(" ");
      "style" === s ? G(r.style, l) : r.setAttribute(s, l);
    }
    return r;
  }
  function G(e, t) {
    for (var n = 0, i = t.split(";"); n < i.length; n++) {
      var r = i[n],
        a = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(r);
      if (a) {
        var o = a[1],
          s = a[2],
          l = a[4];
        e.setProperty(o, s, l || "");
      }
    }
  }
  var Y = ["monospace", "sans-serif", "serif"],
    H = [
      "sans-serif-thin",
      "ARNO PRO",
      "Agency FB",
      "Arabic Typesetting",
      "Arial Unicode MS",
      "AvantGarde Bk BT",
      "BankGothic Md BT",
      "Batang",
      "Bitstream Vera Sans Mono",
      "Calibri",
      "Century",
      "Century Gothic",
      "Clarendon",
      "EUROSTILE",
      "Franklin Gothic",
      "Futura Bk BT",
      "Futura Md BT",
      "GOTHAM",
      "Gill Sans",
      "HELV",
      "Haettenschweiler",
      "Helvetica Neue",
      "Humanst521 BT",
      "Leelawadee",
      "Letter Gothic",
      "Levenim MT",
      "Lucida Bright",
      "Lucida Sans",
      "Menlo",
      "MS Mincho",
      "MS Outlook",
      "MS Reference Specialty",
      "MS UI Gothic",
      "MT Extra",
      "MYRIAD PRO",
      "Marlett",
      "Meiryo UI",
      "Microsoft Uighur",
      "Minion Pro",
      "Monotype Corsiva",
      "PMingLiU",
      "Pristina",
      "SCRIPTINA",
      "Segoe UI Light",
      "Serifa",
      "SimHei",
      "Small Fonts",
      "Staccato222 BT",
      "TRAJAN PRO",
      "Univers CE 55 Medium",
      "Vrinda",
      "ZWAdobeF",
    ];
  function W(e) {
    return (
      e.rect(0, 0, 10, 10),
      e.rect(2, 2, 6, 6),
      !e.isPointInPath(5, 5, "evenodd")
    );
  }
  function q(e, t) {
    (e.width = 240),
      (e.height = 60),
      (t.textBaseline = "alphabetic"),
      (t.fillStyle = "#f60"),
      t.fillRect(100, 1, 62, 20),
      (t.fillStyle = "#069"),
      (t.font = '11pt "Times New Roman"');
    var n = "Cwm fjordbank gly " + String.fromCharCode(55357, 56835);
    return (
      t.fillText(n, 2, 15),
      (t.fillStyle = "rgba(102, 204, 0, 0.2)"),
      (t.font = "18pt Arial"),
      t.fillText(n, 4, 45),
      K(e)
    );
  }
  function Z(e, t) {
    (e.width = 122),
      (e.height = 110),
      (t.globalCompositeOperation = "multiply");
    for (
      var n = 0,
        i = [
          ["#f2f", 40, 40],
          ["#2ff", 80, 40],
          ["#ff2", 60, 80],
        ];
      n < i.length;
      n++
    ) {
      var r = i[n],
        a = r[0],
        o = r[1],
        s = r[2];
      (t.fillStyle = a),
        t.beginPath(),
        t.arc(o, s, 40, 0, 2 * Math.PI, !0),
        t.closePath(),
        t.fill();
    }
    return (
      (t.fillStyle = "#f9c"),
      t.arc(60, 60, 60, 0, 2 * Math.PI, !0),
      t.arc(60, 60, 20, 0, 2 * Math.PI, !0),
      t.fill("evenodd"),
      K(e)
    );
  }
  function K(e) {
    return e.toDataURL();
  }
  var J, X;
  function Q() {
    var e = this;
    return (
      (function () {
        if (void 0 === X) {
          var e = function () {
            var t = ee();
            te(t) ? (X = setTimeout(e, 2500)) : ((J = t), (X = void 0));
          };
          e();
        }
      })(),
      function () {
        return f(e, void 0, void 0, function () {
          var e;
          return g(this, function (t) {
            switch (t.label) {
              case 0:
                return te((e = ee()))
                  ? J
                    ? [2, v(J)]
                    : (n = document).fullscreenElement ||
                      n.msFullscreenElement ||
                      n.mozFullScreenElement ||
                      n.webkitFullscreenElement
                    ? [4, V()]
                    : [3, 2]
                  : [3, 2];
              case 1:
                t.sent(), (e = ee()), (t.label = 2);
              case 2:
                return te(e) || (J = e), [2, e];
            }
            var n;
          });
        });
      }
    );
  }
  function ee() {
    var e = screen;
    return [
      L(A(e.availTop), null),
      L(A(e.width) - A(e.availWidth) - L(A(e.availLeft), 0), null),
      L(A(e.height) - A(e.availHeight) - L(A(e.availTop), 0), null),
      L(A(e.availLeft), null),
    ];
  }
  function te(e) {
    for (var t = 0; t < 4; ++t) if (e[t]) return !1;
    return !0;
  }
  var ne = {
    abpIndo: [
      "#Iklan-Melayang",
      "#Kolom-Iklan-728",
      "#SidebarIklan-wrapper",
      'a[title="7naga poker" i]',
      '[title="ALIENBOLA" i]',
    ],
    abpvn: [
      "#quangcaomb",
      ".iosAdsiosAds-layout",
      ".quangcao",
      '[href^="https://r88.vn/"]',
      '[href^="https://zbet.vn/"]',
    ],
    adBlockFinland: [
      ".mainostila",
      ".sponsorit",
      ".ylamainos",
      'a[href*="/clickthrgh.asp?"]',
      'a[href^="https://app.readpeak.com/ads"]',
    ],
    adBlockPersian: [
      "#navbar_notice_50",
      'a[href^="http://g1.v.fwmrm.net/ad/"]',
      ".kadr",
      'TABLE[width="140px"]',
      "#divAgahi",
    ],
    adBlockWarningRemoval: [
      "#adblock-honeypot",
      ".adblocker-root",
      ".wp_adblock_detect",
    ],
    adGuardAnnoyances: [
      'amp-embed[type="zen"]',
      ".hs-sosyal",
      "#cookieconsentdiv",
      'div[class^="app_gdpr"]',
      ".as-oil",
    ],
    adGuardBase: [
      "#ad-after",
      "#ad-p3",
      ".BetterJsPopOverlay",
      "#ad_300X250",
      "#bannerfloat22",
    ],
    adGuardChinese: [
      'a[href*=".ttz5.cn"]',
      'a[href*=".yabovip2027.com/"]',
      ".tm3all2h4b",
      ".cc5278_banner_ad",
    ],
    adGuardFrench: [
      ".zonepub",
      '[class*="_adLeaderboard"]',
      '[id^="block-xiti_oas-"]',
      'a[href^="http://ptapjmp.com/"]',
      'a[href^="https://go.alvexo.com/"]',
    ],
    adGuardGerman: [
      ".banneritemwerbung_head_1",
      ".boxstartwerbung",
      ".werbung3",
      'a[href^="http://www.eis.de/index.phtml?refid="]',
      'a[href^="https://www.tipico.com/?affiliateId="]',
    ],
    adGuardJapanese: [
      "#kauli_yad_1",
      "#ad-giftext",
      "#adsSPRBlock",
      'a[href^="http://ad2.trafficgate.net/"]',
      'a[href^="http://www.rssad.jp/"]',
    ],
    adGuardMobile: [
      "amp-auto-ads",
      "#mgid_iframe",
      ".amp_ad",
      'amp-embed[type="24smi"]',
      "#mgid_iframe1",
    ],
    adGuardRussian: [
      'a[href^="https://ya-distrib.ru/r/"]',
      'a[href^="https://ad.letmeads.com/"]',
      ".reclama",
      'div[id^="smi2adblock"]',
      'div[id^="AdFox_banner_"]',
    ],
    adGuardSocial: [
      'a[href^="//www.stumbleupon.com/submit?url="]',
      'a[href^="//telegram.me/share/url?"]',
      ".etsy-tweet",
      "#inlineShare",
      ".popup-social",
    ],
    adGuardSpanishPortuguese: [
      "#barraPublicidade",
      "#Publicidade",
      "#publiEspecial",
      "#queTooltip",
      '[href^="http://ads.glispa.com/"]',
    ],
    adGuardTrackingProtection: [
      'amp-embed[type="taboola"]',
      "#qoo-counter",
      'a[href^="http://click.hotlog.ru/"]',
      'a[href^="http://hitcounter.ru/top/stat.php"]',
      'a[href^="http://top.mail.ru/jump"]',
    ],
    adGuardTurkish: [
      "#backkapat",
      "#reklami",
      'a[href^="http://adserv.ontek.com.tr/"]',
      'a[href^="http://izlenzi.com/campaign/"]',
      'a[href^="http://www.installads.net/"]',
    ],
    bulgarian: [
      "td#freenet_table_ads",
      "#adbody",
      "#ea_intext_div",
      ".lapni-pop-over",
      "#xenium_hot_offers",
    ],
    easyList: [
      "#AD_banner_bottom",
      "#Ads_google_02",
      "#N-ad-article-rightRail-1",
      "#ad-fullbanner2",
      "#ad-zone-2",
    ],
    easyListChina: [
      'a[href*=".wensixuetang.com/"]',
      'A[href*="/hth107.com/"]',
      '.appguide-wrap[onclick*="bcebos.com"]',
      ".frontpageAdvM",
      "#taotaole",
    ],
    easyListCookie: [
      "#adtoniq-msg-bar",
      "#CoockiesPage",
      "#CookieModal_cookiemodal",
      "#DO_CC_PANEL",
      "#ShowCookie",
    ],
    easyListCzechSlovak: [
      "#onlajny-stickers",
      "#reklamni-box",
      ".reklama-megaboard",
      ".sklik",
      '[id^="sklikReklama"]',
    ],
    easyListDutch: [
      "#advertentie",
      "#vipAdmarktBannerBlock",
      ".adstekst",
      'a[href^="https://xltube.nl/click/"]',
      "#semilo-lrectangle",
    ],
    easyListGermany: [
      'a[href^="http://www.hw-area.com/?dp="]',
      'a[href^="https://ads.sunmaker.com/tracking.php?"]',
      ".werbung-skyscraper2",
      ".bannergroup_werbung",
      ".ads_rechts",
    ],
    easyListItaly: [
      ".box_adv_annunci",
      ".sb-box-pubbliredazionale",
      'a[href^="http://affiliazioniads.snai.it/"]',
      'a[href^="https://adserver.html.it/"]',
      'a[href^="https://affiliazioniads.snai.it/"]',
    ],
    easyListLithuania: [
      ".reklamos_tarpas",
      ".reklamos_nuorodos",
      'img[alt="Reklaminis skydelis"]',
      'img[alt="Dedikuoti.lt serveriai"]',
      'img[alt="Hostingas Serveriai.lt"]',
    ],
    estonian: ['A[href*="http://pay4results24.eu"]'],
    fanboyAnnoyances: [
      "#feedback-tab",
      "#taboola-below-article",
      ".feedburnerFeedBlock",
      ".widget-feedburner-counter",
      '[title="Subscribe to our blog"]',
    ],
    fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
    fanboyEnhancedTrackers: [
      ".open.pushModal",
      "#issuem-leaky-paywall-articles-zero-remaining-nag",
      "#sovrn_container",
      'div[class$="-hide"][zoompage-fontsize][style="display: block;"]',
      ".BlockNag__Card",
    ],
    fanboySocial: [
      ".td-tags-and-social-wrapper-box",
      ".twitterContainer",
      ".youtube-social",
      'a[title^="Like us on Facebook"]',
      'img[alt^="Share on Digg"]',
    ],
    frellwitSwedish: [
      'a[href*="casinopro.se"][target="_blank"]',
      'a[href*="doktor-se.onelink.me"]',
      "article.category-samarbete",
      "div.holidAds",
      "ul.adsmodern",
    ],
    greekAdBlock: [
      'A[href*="adman.otenet.gr/click?"]',
      'A[href*="http://axiabanners.exodus.gr/"]',
      'A[href*="http://interactive.forthnet.gr/click?"]',
      "DIV.agores300",
      "TABLE.advright",
    ],
    hungarian: [
      'A[href*="ad.eval.hu"]',
      'A[href*="ad.netmedia.hu"]',
      'A[href*="daserver.ultraweb.hu"]',
      "#cemp_doboz",
      ".optimonk-iframe-container",
    ],
    iDontCareAboutCookies: [
      '.alert-info[data-block-track*="CookieNotice"]',
      ".ModuleTemplateCookieIndicator",
      ".o--cookies--container",
      ".cookie-msg-info-container",
      "#cookies-policy-sticky",
    ],
    icelandicAbp: ['A[href^="/framework/resources/forms/ads.aspx"]'],
    latvian: [
      'a[href="http://www.salidzini.lv/"][style="display: block; width: 120px; height: 40px; overflow: hidden; position: relative;"]',
      'a[href="http://www.salidzini.lv/"][style="display: block; width: 88px; height: 31px; overflow: hidden; position: relative;"]',
    ],
    listKr: [
      'a[href*="//kingtoon.slnk.kr"]',
      'a[href*="//playdsb.com/kr"]',
      "div.logly-lift-adz",
      'div[data-widget_id="ml6EJ074"]',
      "ins.daum_ddn_area",
    ],
    listeAr: [
      ".geminiLB1Ad",
      ".right-and-left-sponsers",
      'a[href*=".aflam.info"]',
      'a[href*="booraq.org"]',
      'a[href*="dubizzle.com/ar/?utm_source="]',
    ],
    listeFr: [
      'a[href^="http://promo.vador.com/"]',
      "#adcontainer_recherche",
      'a[href*="weborama.fr/fcgi-bin/"]',
      ".site-pub-interstitiel",
      'div[id^="crt-"][data-criteo-id]',
    ],
    officialPolish: [
      "#ceneo-placeholder-ceneo-12",
      '[href^="https://aff.sendhub.pl/"]',
      'a[href^="http://advmanager.techfun.pl/redirect/"]',
      'a[href^="http://www.trizer.pl/?utm_source"]',
      "div#skapiec_ad",
    ],
    ro: [
      'a[href^="//afftrk.altex.ro/Counter/Click"]',
      'a[href^="/magazin/"]',
      'a[href^="https://blackfridaysales.ro/trk/shop/"]',
      'a[href^="https://event.2performant.com/events/click"]',
      'a[href^="https://l.profitshare.ro/"]',
    ],
    ruAd: [
      'a[href*="//febrare.ru/"]',
      'a[href*="//utimg.ru/"]',
      'a[href*="://chikidiki.ru"]',
      "#pgeldiz",
      ".yandex-rtb-block",
    ],
    thaiAds: [
      "a[href*=macau-uta-popup]",
      "#ads-google-middle_rectangle-group",
      ".ads300s",
      ".bumq",
      ".img-kosana",
    ],
    webAnnoyancesUltralist: [
      "#mod-social-share-2",
      "#social-tools",
      ".ctpl-fullbanner",
      ".zergnet-recommend",
      ".yt.btn-link.btn-md.btn",
    ],
  };
  function ie(e) {
    var t;
    return f(this, void 0, void 0, function () {
      var n, i, r, a, o, s, l;
      return g(this, function (c) {
        switch (c.label) {
          case 0:
            for (
              n = document,
                i = n.createElement("div"),
                r = new Array(e.length),
                a = {},
                re(i),
                l = 0;
              l < e.length;
              ++l
            )
              (o = j(e[l])),
                re((s = n.createElement("div"))),
                s.appendChild(o),
                i.appendChild(s),
                (r[l] = o);
            c.label = 1;
          case 1:
            return n.body ? [3, 3] : [4, y(50)];
          case 2:
            return c.sent(), [3, 1];
          case 3:
            n.body.appendChild(i);
            try {
              for (l = 0; l < e.length; ++l)
                r[l].offsetParent || (a[e[l]] = !0);
            } finally {
              null === (t = i.parentNode) || void 0 === t || t.removeChild(i);
            }
            return [2, a];
        }
      });
    });
  }
  function re(e) {
    e.style.setProperty("display", "block", "important");
  }
  function ae(e) {
    return matchMedia("(inverted-colors: " + e + ")").matches;
  }
  function oe(e) {
    return matchMedia("(forced-colors: " + e + ")").matches;
  }
  function se(e) {
    return matchMedia("(prefers-contrast: " + e + ")").matches;
  }
  function le(e) {
    return matchMedia("(prefers-reduced-motion: " + e + ")").matches;
  }
  function ce(e) {
    return matchMedia("(dynamic-range: " + e + ")").matches;
  }
  var de = Math,
    ue = function () {
      return 0;
    };
  var he = {
    default: [],
    apple: [{ font: "-apple-system-body" }],
    serif: [{ fontFamily: "serif" }],
    sans: [{ fontFamily: "sans-serif" }],
    mono: [{ fontFamily: "monospace" }],
    min: [{ fontSize: "1px" }],
    system: [{ fontFamily: "system-ui" }],
  };
  var pe = {
    fonts: function () {
      return B(function (e, t) {
        var n = t.document,
          i = n.body;
        i.style.fontSize = "48px";
        var r = n.createElement("div"),
          a = {},
          o = {},
          s = function (e) {
            var t = n.createElement("span"),
              i = t.style;
            return (
              (i.position = "absolute"),
              (i.top = "0"),
              (i.left = "0"),
              (i.fontFamily = e),
              (t.textContent = "mmMwWLliI0O&1"),
              r.appendChild(t),
              t
            );
          },
          l = Y.map(s),
          c = (function () {
            for (
              var e = {},
                t = function (t) {
                  e[t] = Y.map(function (e) {
                    return (function (e, t) {
                      return s("'" + e + "'," + t);
                    })(t, e);
                  });
                },
                n = 0,
                i = H;
              n < i.length;
              n++
            ) {
              t(i[n]);
            }
            return e;
          })();
        i.appendChild(r);
        for (var d = 0; d < Y.length; d++)
          (a[Y[d]] = l[d].offsetWidth), (o[Y[d]] = l[d].offsetHeight);
        return H.filter(function (e) {
          return (
            (t = c[e]),
            Y.some(function (e, n) {
              return t[n].offsetWidth !== a[e] || t[n].offsetHeight !== o[e];
            })
          );
          var t;
        });
      });
    },
    domBlockers: function (e) {
      var t = (void 0 === e ? {} : e).debug;
      return f(this, void 0, void 0, function () {
        var e, n, i, r;
        return g(this, function (a) {
          switch (a.label) {
            case 0:
              return D() || $()
                ? ((e = Object.keys(ne)),
                  [
                    4,
                    ie(
                      (r = []).concat.apply(
                        r,
                        e.map(function (e) {
                          return ne[e];
                        })
                      )
                    ),
                  ])
                : [2, void 0];
            case 1:
              return (
                (n = a.sent()),
                t &&
                  (function (e) {
                    for (
                      var t = "DOM blockers debug:\n```",
                        n = 0,
                        i = Object.keys(ne);
                      n < i.length;
                      n++
                    ) {
                      var r = i[n];
                      t += "\n" + r + ":";
                      for (var a = 0, o = ne[r]; a < o.length; a++) {
                        var s = o[a];
                        t += "\n  " + s + " " + (e[s] ? "ðŸš«" : "âž¡ï¸");
                      }
                    }
                    console.log(t + "\n```");
                  })(n),
                (i = e.filter(function (e) {
                  var t = ne[e];
                  return (
                    F(
                      t.map(function (e) {
                        return n[e];
                      })
                    ) >
                    0.6 * t.length
                  );
                })).sort(),
                [2, i]
              );
          }
        });
      });
    },
    fontPreferences: function () {
      return (function (e, t) {
        void 0 === t && (t = 4e3);
        return B(function (n, i) {
          var r = i.document,
            a = r.body,
            o = a.style;
          (o.width = t + "px"),
            (o.webkitTextSizeAdjust = o.textSizeAdjust = "none"),
            M()
              ? (a.style.zoom = "" + 1 / i.devicePixelRatio)
              : D() && (a.style.zoom = "reset");
          var s = r.createElement("div");
          return (
            (s.textContent = v(Array((t / 20) << 0))
              .map(function () {
                return "word";
              })
              .join(" ")),
            a.appendChild(s),
            e(r, a)
          );
        }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">');
      })(function (e, t) {
        for (
          var n = {}, i = {}, r = 0, a = Object.keys(he);
          r < a.length;
          r++
        ) {
          var o = a[r],
            s = he[o],
            l = s[0],
            c = void 0 === l ? {} : l,
            d = s[1],
            u = void 0 === d ? "mmMwWLliI0fiflO&1" : d,
            h = e.createElement("span");
          (h.textContent = u), (h.style.whiteSpace = "nowrap");
          for (var p = 0, m = Object.keys(c); p < m.length; p++) {
            var f = m[p],
              g = c[f];
            void 0 !== g && (h.style[f] = g);
          }
          (n[o] = h), t.appendChild(e.createElement("br")), t.appendChild(h);
        }
        for (var v = 0, _ = Object.keys(he); v < _.length; v++) {
          i[(o = _[v])] = n[o].getBoundingClientRect().width;
        }
        return i;
      });
    },
    audio: function () {
      var e = window,
        t = e.OfflineAudioContext || e.webkitOfflineAudioContext;
      if (!t) return -2;
      if (
        D() &&
        !U() &&
        !(function () {
          var e = window;
          return (
            F([
              "DOMRectList" in e,
              "RTCPeerConnectionIceEvent" in e,
              "SVGGeometryElement" in e,
              "ontransitioncancel" in e,
            ]) >= 3
          );
        })()
      )
        return -1;
      var n = new t(1, 5e3, 44100),
        i = n.createOscillator();
      (i.type = "triangle"), (i.frequency.value = 1e4);
      var r = n.createDynamicsCompressor();
      (r.threshold.value = -50),
        (r.knee.value = 40),
        (r.ratio.value = 12),
        (r.attack.value = 0),
        (r.release.value = 0.25),
        i.connect(r),
        r.connect(n.destination),
        i.start(0);
      var a = (function (e) {
          var t = 3,
            n = 500,
            i = 500,
            r = 5e3,
            a = function () {};
          return [
            new Promise(function (o, s) {
              var l = !1,
                c = 0,
                d = 0;
              e.oncomplete = function (e) {
                return o(e.renderedBuffer);
              };
              var u = function () {
                  setTimeout(function () {
                    return s(z("timeout"));
                  }, Math.min(i, d + r - Date.now()));
                },
                h = function () {
                  try {
                    switch ((e.startRendering(), e.state)) {
                      case "running":
                        (d = Date.now()), l && u();
                        break;
                      case "suspended":
                        document.hidden || c++,
                          l && c >= t ? s(z("suspended")) : setTimeout(h, n);
                    }
                  } catch (i) {
                    s(i);
                  }
                };
              h(),
                (a = function () {
                  l || ((l = !0), d > 0 && u());
                });
            }),
            a,
          ];
        })(n),
        o = a[0],
        s = a[1],
        l = o.then(
          function (e) {
            return (function (e) {
              for (var t = 0, n = 0; n < e.length; ++n) t += Math.abs(e[n]);
              return t;
            })(e.getChannelData(0).subarray(4500));
          },
          function (e) {
            if ("timeout" === e.name || "suspended" === e.name) return -3;
            throw e;
          }
        );
      return (
        l.catch(function () {}),
        function () {
          return s(), l;
        }
      );
    },
    screenFrame: function () {
      var e = this,
        t = Q();
      return function () {
        return f(e, void 0, void 0, function () {
          var e, n;
          return g(this, function (i) {
            switch (i.label) {
              case 0:
                return [4, t()];
              case 1:
                return (
                  (e = i.sent()),
                  [
                    2,
                    [
                      (n = function (e) {
                        return null === e ? null : R(e, 10);
                      })(e[0]),
                      n(e[1]),
                      n(e[2]),
                      n(e[3]),
                    ],
                  ]
                );
            }
          });
        });
      };
    },
    osCpu: function () {
      return navigator.oscpu;
    },
    languages: function () {
      var e,
        t = navigator,
        n = [],
        i =
          t.language || t.userLanguage || t.browserLanguage || t.systemLanguage;
      if ((void 0 !== i && n.push([i]), Array.isArray(t.languages)))
        (M() &&
          F([
            !("MediaSettingsRange" in (e = window)),
            "RTCEncodedAudioFrame" in e,
            "" + e.Intl == "[object Intl]",
            "" + e.Reflect == "[object Reflect]",
          ]) >= 3) ||
          n.push(t.languages);
      else if ("string" == typeof t.languages) {
        var r = t.languages;
        r && n.push(r.split(","));
      }
      return n;
    },
    colorDepth: function () {
      return window.screen.colorDepth;
    },
    deviceMemory: function () {
      return L(A(navigator.deviceMemory), void 0);
    },
    screenResolution: function () {
      var e = screen,
        t = function (e) {
          return L(T(e), null);
        },
        n = [t(e.width), t(e.height)];
      return n.sort().reverse(), n;
    },
    hardwareConcurrency: function () {
      return L(T(navigator.hardwareConcurrency), void 0);
    },
    timezone: function () {
      var e,
        t =
          null === (e = window.Intl) || void 0 === e
            ? void 0
            : e.DateTimeFormat;
      if (t) {
        var n = new t().resolvedOptions().timeZone;
        if (n) return n;
      }
      var i,
        r =
          ((i = new Date().getFullYear()),
          -Math.max(
            A(new Date(i, 0, 1).getTimezoneOffset()),
            A(new Date(i, 6, 1).getTimezoneOffset())
          ));
      return "UTC" + (r >= 0 ? "+" : "") + Math.abs(r);
    },
    sessionStorage: function () {
      try {
        return !!window.sessionStorage;
      } catch (e) {
        return !0;
      }
    },
    localStorage: function () {
      try {
        return !!window.localStorage;
      } catch (e) {
        return !0;
      }
    },
    indexedDB: function () {
      var e, t;
      if (
        !(
          N() ||
          ((e = window),
          (t = navigator),
          F([
            "msWriteProfilerMark" in e,
            "MSStream" in e,
            "msLaunchUri" in t,
            "msSaveBlob" in t,
          ]) >= 3 && !N())
        )
      )
        try {
          return !!window.indexedDB;
        } catch (n) {
          return !0;
        }
    },
    openDatabase: function () {
      return !!window.openDatabase;
    },
    cpuClass: function () {
      return navigator.cpuClass;
    },
    platform: function () {
      var e = navigator.platform;
      return "MacIntel" === e && D() && !U()
        ? (function () {
            if ("iPad" === navigator.platform) return !0;
            var e = screen,
              t = e.width / e.height;
            return (
              F([
                "MediaSource" in window,
                !!Element.prototype.webkitRequestFullscreen,
                t > 0.65 && t < 1.53,
              ]) >= 2
            );
          })()
          ? "iPad"
          : "iPhone"
        : e;
    },
    plugins: function () {
      var e = navigator.plugins;
      if (e) {
        for (var t = [], n = 0; n < e.length; ++n) {
          var i = e[n];
          if (i) {
            for (var r = [], a = 0; a < i.length; ++a) {
              var o = i[a];
              r.push({ type: o.type, suffixes: o.suffixes });
            }
            t.push({ name: i.name, description: i.description, mimeTypes: r });
          }
        }
        return t;
      }
    },
    canvas: function () {
      var e = (function () {
          var e = document.createElement("canvas");
          return (e.width = 1), (e.height = 1), [e, e.getContext("2d")];
        })(),
        t = e[0],
        n = e[1];
      return (function (e, t) {
        return !(!t || !e.toDataURL);
      })(t, n)
        ? { winding: W(n), geometry: Z(t, n), text: q(t, n) }
        : { winding: !1, geometry: "", text: "" };
    },
    touchSupport: function () {
      var e,
        t = navigator,
        n = 0;
      void 0 !== t.maxTouchPoints
        ? (n = T(t.maxTouchPoints))
        : void 0 !== t.msMaxTouchPoints && (n = t.msMaxTouchPoints);
      try {
        document.createEvent("TouchEvent"), (e = !0);
      } catch (i) {
        e = !1;
      }
      return {
        maxTouchPoints: n,
        touchEvent: e,
        touchStart: "ontouchstart" in window,
      };
    },
    vendor: function () {
      return navigator.vendor || "";
    },
    vendorFlavors: function () {
      for (
        var e = [],
          t = 0,
          n = [
            "chrome",
            "safari",
            "__crWeb",
            "__gCrWeb",
            "yandex",
            "__yb",
            "__ybro",
            "__firefox__",
            "__edgeTrackingPreventionStatistics",
            "webkit",
            "oprt",
            "samsungAr",
            "ucweb",
            "UCShellJava",
            "puffinDevice",
          ];
        t < n.length;
        t++
      ) {
        var i = n[t],
          r = window[i];
        r && "object" == typeof r && e.push(i);
      }
      return e.sort();
    },
    cookiesEnabled: function () {
      var e = document;
      try {
        e.cookie = "cookietest=1; SameSite=Strict;";
        var t = -1 !== e.cookie.indexOf("cookietest=");
        return (
          (e.cookie =
            "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT"),
          t
        );
      } catch (n) {
        return !1;
      }
    },
    colorGamut: function () {
      for (var e = 0, t = ["rec2020", "p3", "srgb"]; e < t.length; e++) {
        var n = t[e];
        if (matchMedia("(color-gamut: " + n + ")").matches) return n;
      }
    },
    invertedColors: function () {
      return !!ae("inverted") || (!ae("none") && void 0);
    },
    forcedColors: function () {
      return !!oe("active") || (!oe("none") && void 0);
    },
    monochrome: function () {
      if (matchMedia("(min-monochrome: 0)").matches) {
        for (var e = 0; e <= 100; ++e)
          if (matchMedia("(max-monochrome: " + e + ")").matches) return e;
        throw new Error("Too high value");
      }
    },
    contrast: function () {
      return se("no-preference")
        ? 0
        : se("high") || se("more")
        ? 1
        : se("low") || se("less")
        ? -1
        : se("forced")
        ? 10
        : void 0;
    },
    reducedMotion: function () {
      return !!le("reduce") || (!le("no-preference") && void 0);
    },
    hdr: function () {
      return !!ce("high") || (!ce("standard") && void 0);
    },
    math: function () {
      var e,
        t = de.acos || ue,
        n = de.acosh || ue,
        i = de.asin || ue,
        r = de.asinh || ue,
        a = de.atanh || ue,
        o = de.atan || ue,
        s = de.sin || ue,
        l = de.sinh || ue,
        c = de.cos || ue,
        d = de.cosh || ue,
        u = de.tan || ue,
        h = de.tanh || ue,
        p = de.exp || ue,
        m = de.expm1 || ue,
        f = de.log1p || ue;
      return {
        acos: t(0.12312423423423424),
        acosh: n(1e308),
        acoshPf: ((e = 1e154), de.log(e + de.sqrt(e * e - 1))),
        asin: i(0.12312423423423424),
        asinh: r(1),
        asinhPf: (function (e) {
          return de.log(e + de.sqrt(e * e + 1));
        })(1),
        atanh: a(0.5),
        atanhPf: (function (e) {
          return de.log((1 + e) / (1 - e)) / 2;
        })(0.5),
        atan: o(0.5),
        sin: s(-1e300),
        sinh: l(1),
        sinhPf: (function (e) {
          return de.exp(e) - 1 / de.exp(e) / 2;
        })(1),
        cos: c(10.000000000123),
        cosh: d(1),
        coshPf: (function (e) {
          return (de.exp(e) + 1 / de.exp(e)) / 2;
        })(1),
        tan: u(-1e300),
        tanh: h(1),
        tanhPf: (function (e) {
          return (de.exp(2 * e) - 1) / (de.exp(2 * e) + 1);
        })(1),
        exp: p(1),
        expm1: m(1),
        expm1Pf: (function (e) {
          return de.exp(e) - 1;
        })(1),
        log1p: f(10),
        log1pPf: (function (e) {
          return de.log(1 + e);
        })(10),
        powPI: (function (e) {
          return de.pow(de.PI, e);
        })(-100),
      };
    },
  };
  function me(e) {
    var t = (function (e) {
        if ($()) return 0.4;
        if (D()) return U() ? 0.5 : 0.3;
        var t = e.platform.value || "";
        if (/^Win/.test(t)) return 0.6;
        if (/^Mac/.test(t)) return 0.5;
        return 0.7;
      })(e),
      n = (function (e) {
        return R(0.99 + 0.01 * e, 1e-4);
      })(t);
    return {
      score: t,
      comment: "$ if upgrade to Pro: https://fpjs.dev/pro".replace(
        /\$/g,
        "" + n
      ),
    };
  }
  function fe(e) {
    return JSON.stringify(
      e,
      function (e, t) {
        return t instanceof Error
          ? m(
              {
                name: (n = t).name,
                message: n.message,
                stack:
                  null === (i = n.stack) || void 0 === i
                    ? void 0
                    : i.split("\n"),
              },
              n
            )
          : t;
        var n, i;
      },
      2
    );
  }
  function ge(e) {
    return (function (e, t) {
      t = t || 0;
      var n,
        i = (e = e || "").length % 16,
        r = e.length - i,
        a = [0, t],
        o = [0, t],
        s = [0, 0],
        l = [0, 0],
        c = [2277735313, 289559509],
        d = [1291169091, 658871167];
      for (n = 0; n < r; n += 16)
        (s = [
          (255 & e.charCodeAt(n + 4)) |
            ((255 & e.charCodeAt(n + 5)) << 8) |
            ((255 & e.charCodeAt(n + 6)) << 16) |
            ((255 & e.charCodeAt(n + 7)) << 24),
          (255 & e.charCodeAt(n)) |
            ((255 & e.charCodeAt(n + 1)) << 8) |
            ((255 & e.charCodeAt(n + 2)) << 16) |
            ((255 & e.charCodeAt(n + 3)) << 24),
        ]),
          (l = [
            (255 & e.charCodeAt(n + 12)) |
              ((255 & e.charCodeAt(n + 13)) << 8) |
              ((255 & e.charCodeAt(n + 14)) << 16) |
              ((255 & e.charCodeAt(n + 15)) << 24),
            (255 & e.charCodeAt(n + 8)) |
              ((255 & e.charCodeAt(n + 9)) << 8) |
              ((255 & e.charCodeAt(n + 10)) << 16) |
              ((255 & e.charCodeAt(n + 11)) << 24),
          ]),
          (s = S((s = C(s, c)), 31)),
          (a = x((a = S((a = P(a, (s = C(s, d)))), 27)), o)),
          (a = x(C(a, [0, 5]), [0, 1390208809])),
          (l = S((l = C(l, d)), 33)),
          (o = x((o = S((o = P(o, (l = C(l, c)))), 31)), a)),
          (o = x(C(o, [0, 5]), [0, 944331445]));
      switch (((s = [0, 0]), (l = [0, 0]), i)) {
        case 15:
          l = P(l, k([0, e.charCodeAt(n + 14)], 48));
        case 14:
          l = P(l, k([0, e.charCodeAt(n + 13)], 40));
        case 13:
          l = P(l, k([0, e.charCodeAt(n + 12)], 32));
        case 12:
          l = P(l, k([0, e.charCodeAt(n + 11)], 24));
        case 11:
          l = P(l, k([0, e.charCodeAt(n + 10)], 16));
        case 10:
          l = P(l, k([0, e.charCodeAt(n + 9)], 8));
        case 9:
          (l = C((l = P(l, [0, e.charCodeAt(n + 8)])), d)),
            (o = P(o, (l = C((l = S(l, 33)), c))));
        case 8:
          s = P(s, k([0, e.charCodeAt(n + 7)], 56));
        case 7:
          s = P(s, k([0, e.charCodeAt(n + 6)], 48));
        case 6:
          s = P(s, k([0, e.charCodeAt(n + 5)], 40));
        case 5:
          s = P(s, k([0, e.charCodeAt(n + 4)], 32));
        case 4:
          s = P(s, k([0, e.charCodeAt(n + 3)], 24));
        case 3:
          s = P(s, k([0, e.charCodeAt(n + 2)], 16));
        case 2:
          s = P(s, k([0, e.charCodeAt(n + 1)], 8));
        case 1:
          (s = C((s = P(s, [0, e.charCodeAt(n)])), c)),
            (a = P(a, (s = C((s = S(s, 31)), d))));
      }
      return (
        (a = x((a = P(a, [0, e.length])), (o = P(o, [0, e.length])))),
        (o = x(o, a)),
        (a = x((a = E(a)), (o = E(o)))),
        (o = x(o, a)),
        ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) +
          ("00000000" + (a[1] >>> 0).toString(16)).slice(-8) +
          ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) +
          ("00000000" + (o[1] >>> 0).toString(16)).slice(-8)
      );
    })(
      (function (e) {
        for (var t = "", n = 0, i = Object.keys(e).sort(); n < i.length; n++) {
          var r = i[n],
            a = e[r],
            o = a.error ? "error" : JSON.stringify(a.value);
          t += (t ? "|" : "") + r.replace(/([:|\\])/g, "\\$1") + ":" + o;
        }
        return t;
      })(e)
    );
  }
  function ve(e) {
    return (
      void 0 === e && (e = 50),
      (function (e, t) {
        void 0 === t && (t = 1 / 0);
        var n = window.requestIdleCallback;
        return n
          ? new Promise(function (e) {
              return n.call(
                window,
                function () {
                  return e();
                },
                { timeout: t }
              );
            })
          : y(Math.min(e, t));
      })(e, 2 * e)
    );
  }
  function _e(e, t) {
    var n = Date.now();
    return {
      get: function (i) {
        return f(this, void 0, void 0, function () {
          var r, a, o;
          return g(this, function (s) {
            switch (s.label) {
              case 0:
                return (r = Date.now()), [4, e()];
              case 1:
                return (
                  (a = s.sent()),
                  (o = (function (e) {
                    var t;
                    return {
                      get visitorId() {
                        return void 0 === t && (t = ge(this.components)), t;
                      },
                      set visitorId(e) {
                        t = e;
                      },
                      confidence: me(e),
                      components: e,
                      version: _,
                    };
                  })(a)),
                  (t || (null == i ? void 0 : i.debug)) &&
                    console.log(
                      "Copy the text below to get the debug data:\n\n```\nversion: " +
                        o.version +
                        "\nuserAgent: " +
                        navigator.userAgent +
                        "\ntimeBetweenLoadAndGet: " +
                        (r - n) +
                        "\nvisitorId: " +
                        o.visitorId +
                        "\ncomponents: " +
                        fe(a) +
                        "\n```"
                    ),
                  [2, o]
                );
            }
          });
        });
      },
    };
  }
  var ye = {
      load: function (e) {
        var t = void 0 === e ? {} : e,
          n = t.delayFallback,
          i = t.debug,
          r = t.monitoring,
          a = void 0 === r || r;
        return f(this, void 0, void 0, function () {
          return g(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  a &&
                    (function () {
                      if (!(window.__fpjs_d_m || Math.random() >= 0.001))
                        try {
                          var e = new XMLHttpRequest();
                          e.open(
                            "get",
                            "https://m1.openfpcdn.io/fingerprintjs/v3.3.3/npm-monitoring",
                            !0
                          ),
                            e.send();
                        } catch (t) {
                          console.error(t);
                        }
                    })(),
                  [4, ve(n)]
                );
              case 1:
                return e.sent(), [2, _e(O(pe, { debug: i }, []), i)];
            }
          });
        });
      },
      hashComponents: ge,
      componentsToDebugString: fe,
    },
    be = ((e) => ((e.INFO = "info"), (e.ERROR = "error"), e))(be || {}),
    we = ((e) => ((e.EVENT = "event"), (e.COLLECT = "collect"), e))(we || {}),
    xe = ((e) => ((e.GET = "GET"), (e.POST = "POST"), e))(xe || {});
  class Ce {
    constructor(e, t) {
      __publicField(this, "DEFAULT_XHR_OPTIONS", {
        body: "",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }),
        __publicField(this, "baseURL"),
        __publicField(this, "instanceOptions"),
        (this.baseURL = e),
        (this.instanceOptions = t);
    }
    async get(e, t) {
      return await this.request(xe.GET, e, t);
    }
    async post(e, t) {
      return await this.request(xe.POST, e, t);
    }
    async request(e, t, n) {
      const i = await this.makeXHR(e, this.fullUrl(t), n);
      return await this.parse(i);
    }
    fullUrl(e) {
      return `${this.baseURL}/${e}`.replace(/([^:]\/)\/+/g, "$1");
    }
    parse(e) {
      try {
        return Promise.resolve(JSON.parse(e));
      } catch (t) {
        return Promise.resolve(e);
      }
    }
    makeXHR(e, t, n) {
      var i;
      const r = __spreadProps(
          __spreadValues(
            __spreadValues(
              __spreadValues({}, this.DEFAULT_XHR_OPTIONS),
              this.instanceOptions
            ),
            n
          ),
          {
            headers: __spreadValues(
              __spreadValues({}, this.DEFAULT_XHR_OPTIONS.headers),
              null == (i = this.instanceOptions) ? void 0 : i.headers
            ),
          }
        ),
        a = new XMLHttpRequest();
      a.open(e, t);
      for (const o in r.headers) a.setRequestHeader(o, r.headers[o]);
      return (
        a.send(JSON.stringify(r.body)),
        new Promise((e, t) => {
          (a.onload = function () {
            this.status >= 200 && this.status < 300
              ? e(this.response)
              : t({
                  status: this.status,
                  statusText: this.statusText,
                  body: JSON.parse(this.response),
                });
          }),
            (a.onerror = function () {
              t({
                status: this.status,
                statusText: this.statusText,
                body: this.response ? JSON.parse(this.response) : "",
              });
            });
        })
      );
    }
  }
  const Se = {
    APP_URL: "https://youcanpay.com",
    TRANSLATION_BRIDGE: "remote",
    TRANSLATIONS_BASE_URL: "https://youcanpay.com/languages",
    ASSETS_URL: "https://youcanpay.com/ycpay-js",
    LOGS_URL: "https://log.youcanpay.com/log",
    INTEGRATION_SCRIPT_URL: "https://youcanpay.com/js/ycpay.js",
    LOGS_BUFFER_SIZE: parseInt("10"),
    PAYMENT_ENDPOINT: "pay",
    FINGERPRINTJS_API_KEY: "pTruii0PtW2j3xYwuAM6",
    YCP_FEATURE_REQUIRE_EMAIL: !0,
  };
  ye.load();
  const ke = class {
    constructor() {
      __publicField(this, "inactivityFallback"),
        __publicField(this, "httpService"),
        __publicField(this, "buffer", []),
        __publicField(this, "MAX_BUFFER_CAPACITY", Se.LOGS_BUFFER_SIZE),
        (this.httpService = new Ce(Se.LOGS_URL)),
        (this.inactivityFallback = null);
    }
    info(e) {
      this.logger(be.INFO, we.EVENT, e);
    }
    error(e, t) {
      const n = u(e);
      (t.error_message = n.message),
        (t.error_trace = n.trace),
        this.logger(be.ERROR, we.EVENT, t);
    }
    collect(e) {
      this.logger(be.INFO, we.COLLECT, e);
    }
    async logger(e, t, n) {}
    static getInstance() {
      return (
        void 0 === this._instance && (this._instance = new ke()), this._instance
      );
    }
  };
  let Pe = ke;
  __publicField(Pe, "_instance");
  const Ee = Pe.getInstance(),
    Te = (e) => {
      const t = null;
      if ("undefined" == typeof performance) return t;
      try {
        const n = performance.getEntriesByType("resource");
        if (void 0 === n || 0 === n.length) return t;
        const i = Le(n, e);
        return null === i ? t : i[0].responseEnd - i[0].startTime;
      } catch (n) {
        return (
          Ee.collect({
            key: h.FATAL_ERROR,
            value: "_resource_load_time_",
            extra: { error: u(n) },
          }),
          null
        );
      }
    },
    Ae = () => {
      if ("undefined" == typeof performance) return [];
      try {
        const e = performance.getEntriesByType("resource");
        if (void 0 === e || 0 === e.length) return [];
        const t = Le(e, "script");
        return null === t
          ? []
          : t.map((e) => ({
              name: e.name,
              loadTime: e.responseEnd - e.startTime,
            }));
      } catch (e) {
        return (
          Ee.collect({
            key: h.FATAL_ERROR,
            value: "_neighbour_scripts_",
            extra: { error: u(e) },
          }),
          []
        );
      }
    },
    Le = (e, t) => {
      const n = e.filter(
        (e) => -1 !== e.name.indexOf(t) || e.initiatorType === t
      );
      return 0 === n.length ? null : n;
    },
    Fe = () => {
      const e = navigator.connection;
      return void 0 === e
        ? null
        : { downlink: e.rtt, effectiveType: e.effectiveType, rtt: e.rtt };
    },
    Re = () => {
      const e = navigator.deviceMemory;
      return void 0 === e ? null : e;
    },
    Ie = () => {
      const e = navigator.hardwareConcurrency;
      return void 0 === e ? null : e;
    },
    Oe = (e, t) => {
      const n = Object.values(e).filter((n) => n === e[t]);
      return n.length > 0 ? n[0] : null;
    };
  var Ne = ((e) => (
      (e.CREDIT_CARD = "CreditCard"),
      (e.CASH_PLUS = "CashPlus"),
      (e.WALLET = "Wallet"),
      e
    ))(Ne || {}),
    Me = ((e) => (
      (e[(e.UNVALIDATED = 0)] = "UNVALIDATED"),
      (e[(e.IN_PROGRESS = 1)] = "IN_PROGRESS"),
      (e[(e.VALIDATED = 2)] = "VALIDATED"),
      e
    ))(Me || {}),
    De = ((e) => (
      (e.CANCELLED = "cancelled"),
      (e.SUCCESS = "success"),
      (e.ERROR = "error"),
      e
    ))(De || {});
  class Ue extends Ce {
    constructor(e = !1) {
      super(`${Se.APP_URL}${e ? "/sandbox" : ""}/api`, {
        headers: { "x-preferred-locale": YCPay.options.locale },
      }),
        __publicField(this, "isSandbox"),
        (this.isSandbox = e);
    }
  }
  const { getAccountConfig: Ve } = new (class {
    constructor() {
      __publicField(this, "ACCOUNT_CONFIG_ENDPOINT", "get-account-configs"),
        __publicField(this, "config", null),
        __publicField(this, "getAccountConfig", async (e, t) => {
          const n = new Ue(t);
          return new Promise((t, i) => {
            null != this.config && t(this.config),
              n
                .get(`${this.ACCOUNT_CONFIG_ENDPOINT}/${e}`)
                .then((e) => {
                  (this.config = e), t(e);
                })
                .catch((e) => i(e));
          });
        });
    }
  })();
  var $e =
      "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {},
    ze = function (e, t, n, i, r, a, o, s, l, c) {
      var d = this;
      (d.numeralDecimalMark = e || "."),
        (d.numeralIntegerScale = t > 0 ? t : 0),
        (d.numeralDecimalScale = n >= 0 ? n : 2),
        (d.numeralThousandsGroupStyle = i || ze.groupStyle.thousand),
        (d.numeralPositiveOnly = !!r),
        (d.stripLeadingZeroes = !1 !== a),
        (d.prefix = o || "" === o ? o : ""),
        (d.signBeforePrefix = !!s),
        (d.tailPrefix = !!l),
        (d.delimiter = c || "" === c ? c : ","),
        (d.delimiterRE = c ? new RegExp("\\" + c, "g") : "");
    };
  (ze.groupStyle = {
    thousand: "thousand",
    lakh: "lakh",
    wan: "wan",
    none: "none",
  }),
    (ze.prototype = {
      getRawValue: function (e) {
        return e
          .replace(this.delimiterRE, "")
          .replace(this.numeralDecimalMark, ".");
      },
      format: function (e) {
        var t,
          n,
          i,
          r,
          a = this,
          o = "";
        switch (
          ((e = e
            .replace(/[A-Za-z]/g, "")
            .replace(a.numeralDecimalMark, "M")
            .replace(/[^\dM-]/g, "")
            .replace(/^\-/, "N")
            .replace(/\-/g, "")
            .replace("N", a.numeralPositiveOnly ? "" : "-")
            .replace("M", a.numeralDecimalMark)),
          a.stripLeadingZeroes && (e = e.replace(/^(-)?0+(?=\d)/, "$1")),
          (n = "-" === e.slice(0, 1) ? "-" : ""),
          (i =
            void 0 !== a.prefix
              ? a.signBeforePrefix
                ? n + a.prefix
                : a.prefix + n
              : n),
          (r = e),
          e.indexOf(a.numeralDecimalMark) >= 0 &&
            ((r = (t = e.split(a.numeralDecimalMark))[0]),
            (o = a.numeralDecimalMark + t[1].slice(0, a.numeralDecimalScale))),
          "-" === n && (r = r.slice(1)),
          a.numeralIntegerScale > 0 && (r = r.slice(0, a.numeralIntegerScale)),
          a.numeralThousandsGroupStyle)
        ) {
          case ze.groupStyle.lakh:
            r = r.replace(/(\d)(?=(\d\d)+\d$)/g, "$1" + a.delimiter);
            break;
          case ze.groupStyle.wan:
            r = r.replace(/(\d)(?=(\d{4})+$)/g, "$1" + a.delimiter);
            break;
          case ze.groupStyle.thousand:
            r = r.replace(/(\d)(?=(\d{3})+$)/g, "$1" + a.delimiter);
        }
        return a.tailPrefix
          ? n +
              r.toString() +
              (a.numeralDecimalScale > 0 ? o.toString() : "") +
              a.prefix
          : i + r.toString() + (a.numeralDecimalScale > 0 ? o.toString() : "");
      },
    });
  var Be = ze,
    je = function (e, t, n) {
      var i = this;
      (i.date = []),
        (i.blocks = []),
        (i.datePattern = e),
        (i.dateMin = t
          .split("-")
          .reverse()
          .map(function (e) {
            return parseInt(e, 10);
          })),
        2 === i.dateMin.length && i.dateMin.unshift(0),
        (i.dateMax = n
          .split("-")
          .reverse()
          .map(function (e) {
            return parseInt(e, 10);
          })),
        2 === i.dateMax.length && i.dateMax.unshift(0),
        i.initBlocks();
    };
  je.prototype = {
    initBlocks: function () {
      var e = this;
      e.datePattern.forEach(function (t) {
        "Y" === t ? e.blocks.push(4) : e.blocks.push(2);
      });
    },
    getISOFormatDate: function () {
      var e = this,
        t = e.date;
      return t[2]
        ? t[2] + "-" + e.addLeadingZero(t[1]) + "-" + e.addLeadingZero(t[0])
        : "";
    },
    getBlocks: function () {
      return this.blocks;
    },
    getValidatedDate: function (e) {
      var t = this,
        n = "";
      return (
        (e = e.replace(/[^\d]/g, "")),
        t.blocks.forEach(function (i, r) {
          if (e.length > 0) {
            var a = e.slice(0, i),
              o = a.slice(0, 1),
              s = e.slice(i);
            switch (t.datePattern[r]) {
              case "d":
                "00" === a
                  ? (a = "01")
                  : parseInt(o, 10) > 3
                  ? (a = "0" + o)
                  : parseInt(a, 10) > 31 && (a = "31");
                break;
              case "m":
                "00" === a
                  ? (a = "01")
                  : parseInt(o, 10) > 1
                  ? (a = "0" + o)
                  : parseInt(a, 10) > 12 && (a = "12");
            }
            (n += a), (e = s);
          }
        }),
        this.getFixedDateString(n)
      );
    },
    getFixedDateString: function (e) {
      var t,
        n,
        i,
        r = this,
        a = r.datePattern,
        o = [],
        s = 0,
        l = 0,
        c = 0,
        d = 0,
        u = 0,
        h = 0,
        p = !1;
      return (
        4 === e.length &&
          "y" !== a[0].toLowerCase() &&
          "y" !== a[1].toLowerCase() &&
          ((u = 2 - (d = "d" === a[0] ? 0 : 2)),
          (t = parseInt(e.slice(d, d + 2), 10)),
          (n = parseInt(e.slice(u, u + 2), 10)),
          (o = this.getFixedDate(t, n, 0))),
        8 === e.length &&
          (a.forEach(function (e, t) {
            switch (e) {
              case "d":
                s = t;
                break;
              case "m":
                l = t;
                break;
              default:
                c = t;
            }
          }),
          (h = 2 * c),
          (d = s <= c ? 2 * s : 2 * s + 2),
          (u = l <= c ? 2 * l : 2 * l + 2),
          (t = parseInt(e.slice(d, d + 2), 10)),
          (n = parseInt(e.slice(u, u + 2), 10)),
          (i = parseInt(e.slice(h, h + 4), 10)),
          (p = 4 === e.slice(h, h + 4).length),
          (o = this.getFixedDate(t, n, i))),
        4 !== e.length ||
          ("y" !== a[0] && "y" !== a[1]) ||
          ((h = 2 - (u = "m" === a[0] ? 0 : 2)),
          (n = parseInt(e.slice(u, u + 2), 10)),
          (i = parseInt(e.slice(h, h + 2), 10)),
          (p = 2 === e.slice(h, h + 2).length),
          (o = [0, n, i])),
        6 !== e.length ||
          ("Y" !== a[0] && "Y" !== a[1]) ||
          ((h = 2 - 0.5 * (u = "m" === a[0] ? 0 : 4)),
          (n = parseInt(e.slice(u, u + 2), 10)),
          (i = parseInt(e.slice(h, h + 4), 10)),
          (p = 4 === e.slice(h, h + 4).length),
          (o = [0, n, i])),
        (o = r.getRangeFixedDate(o)),
        (r.date = o),
        0 === o.length
          ? e
          : a.reduce(function (e, t) {
              switch (t) {
                case "d":
                  return e + (0 === o[0] ? "" : r.addLeadingZero(o[0]));
                case "m":
                  return e + (0 === o[1] ? "" : r.addLeadingZero(o[1]));
                case "y":
                  return e + (p ? r.addLeadingZeroForYear(o[2], !1) : "");
                case "Y":
                  return e + (p ? r.addLeadingZeroForYear(o[2], !0) : "");
              }
            }, "")
      );
    },
    getRangeFixedDate: function (e) {
      var t = this,
        n = t.datePattern,
        i = t.dateMin || [],
        r = t.dateMax || [];
      return !e.length ||
        (i.length < 3 && r.length < 3) ||
        (n.find(function (e) {
          return "y" === e.toLowerCase();
        }) &&
          0 === e[2])
        ? e
        : r.length &&
          (r[2] < e[2] ||
            (r[2] === e[2] && (r[1] < e[1] || (r[1] === e[1] && r[0] < e[0]))))
        ? r
        : i.length &&
          (i[2] > e[2] ||
            (i[2] === e[2] && (i[1] > e[1] || (i[1] === e[1] && i[0] > e[0]))))
        ? i
        : e;
    },
    getFixedDate: function (e, t, n) {
      return (
        (e = Math.min(e, 31)),
        (t = Math.min(t, 12)),
        (n = parseInt(n || 0, 10)),
        ((t < 7 && t % 2 == 0) || (t > 8 && t % 2 == 1)) &&
          (e = Math.min(e, 2 === t ? (this.isLeapYear(n) ? 29 : 28) : 30)),
        [e, t, n]
      );
    },
    isLeapYear: function (e) {
      return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
    },
    addLeadingZero: function (e) {
      return (e < 10 ? "0" : "") + e;
    },
    addLeadingZeroForYear: function (e, t) {
      return t
        ? (e < 10 ? "000" : e < 100 ? "00" : e < 1e3 ? "0" : "") + e
        : (e < 10 ? "0" : "") + e;
    },
  };
  var Ge = je,
    Ye = function (e, t) {
      var n = this;
      (n.time = []),
        (n.blocks = []),
        (n.timePattern = e),
        (n.timeFormat = t),
        n.initBlocks();
    };
  Ye.prototype = {
    initBlocks: function () {
      var e = this;
      e.timePattern.forEach(function () {
        e.blocks.push(2);
      });
    },
    getISOFormatTime: function () {
      var e = this,
        t = e.time;
      return t[2]
        ? e.addLeadingZero(t[0]) +
            ":" +
            e.addLeadingZero(t[1]) +
            ":" +
            e.addLeadingZero(t[2])
        : "";
    },
    getBlocks: function () {
      return this.blocks;
    },
    getTimeFormatOptions: function () {
      return "12" === String(this.timeFormat)
        ? {
            maxHourFirstDigit: 1,
            maxHours: 12,
            maxMinutesFirstDigit: 5,
            maxMinutes: 60,
          }
        : {
            maxHourFirstDigit: 2,
            maxHours: 23,
            maxMinutesFirstDigit: 5,
            maxMinutes: 60,
          };
    },
    getValidatedTime: function (e) {
      var t = this,
        n = "";
      e = e.replace(/[^\d]/g, "");
      var i = t.getTimeFormatOptions();
      return (
        t.blocks.forEach(function (r, a) {
          if (e.length > 0) {
            var o = e.slice(0, r),
              s = o.slice(0, 1),
              l = e.slice(r);
            switch (t.timePattern[a]) {
              case "h":
                parseInt(s, 10) > i.maxHourFirstDigit
                  ? (o = "0" + s)
                  : parseInt(o, 10) > i.maxHours && (o = i.maxHours + "");
                break;
              case "m":
              case "s":
                parseInt(s, 10) > i.maxMinutesFirstDigit
                  ? (o = "0" + s)
                  : parseInt(o, 10) > i.maxMinutes && (o = i.maxMinutes + "");
            }
            (n += o), (e = l);
          }
        }),
        this.getFixedTimeString(n)
      );
    },
    getFixedTimeString: function (e) {
      var t,
        n,
        i,
        r = this,
        a = r.timePattern,
        o = [],
        s = 0,
        l = 0,
        c = 0,
        d = 0,
        u = 0,
        h = 0;
      return (
        6 === e.length &&
          (a.forEach(function (e, t) {
            switch (e) {
              case "s":
                s = 2 * t;
                break;
              case "m":
                l = 2 * t;
                break;
              case "h":
                c = 2 * t;
            }
          }),
          (h = c),
          (u = l),
          (d = s),
          (t = parseInt(e.slice(d, d + 2), 10)),
          (n = parseInt(e.slice(u, u + 2), 10)),
          (i = parseInt(e.slice(h, h + 2), 10)),
          (o = this.getFixedTime(i, n, t))),
        4 === e.length &&
          r.timePattern.indexOf("s") < 0 &&
          (a.forEach(function (e, t) {
            switch (e) {
              case "m":
                l = 2 * t;
                break;
              case "h":
                c = 2 * t;
            }
          }),
          (h = c),
          (u = l),
          (t = 0),
          (n = parseInt(e.slice(u, u + 2), 10)),
          (i = parseInt(e.slice(h, h + 2), 10)),
          (o = this.getFixedTime(i, n, t))),
        (r.time = o),
        0 === o.length
          ? e
          : a.reduce(function (e, t) {
              switch (t) {
                case "s":
                  return e + r.addLeadingZero(o[2]);
                case "m":
                  return e + r.addLeadingZero(o[1]);
                case "h":
                  return e + r.addLeadingZero(o[0]);
              }
            }, "")
      );
    },
    getFixedTime: function (e, t, n) {
      return (
        (n = Math.min(parseInt(n || 0, 10), 60)),
        (t = Math.min(t, 60)),
        [(e = Math.min(e, 60)), t, n]
      );
    },
    addLeadingZero: function (e) {
      return (e < 10 ? "0" : "") + e;
    },
  };
  var He = Ye,
    We = function (e, t) {
      var n = this;
      (n.delimiter = t || "" === t ? t : " "),
        (n.delimiterRE = t ? new RegExp("\\" + t, "g") : ""),
        (n.formatter = e);
    };
  We.prototype = {
    setFormatter: function (e) {
      this.formatter = e;
    },
    format: function (e) {
      var t = this;
      t.formatter.clear();
      for (
        var n,
          i = "",
          r = !1,
          a = 0,
          o = (e = (e = (e = e.replace(/[^\d+]/g, ""))
            .replace(/^\+/, "B")
            .replace(/\+/g, "")
            .replace("B", "+")).replace(t.delimiterRE, "")).length;
        a < o;
        a++
      )
        (n = t.formatter.inputDigit(e.charAt(a))),
          /[\s()-]/g.test(n) ? ((i = n), (r = !0)) : r || (i = n);
      return (i = (i = i.replace(/[()]/g, "")).replace(/[\s-]/g, t.delimiter));
    },
  };
  var qe = We,
    Ze = {
      blocks: {
        uatp: [4, 5, 6],
        amex: [4, 6, 5],
        diners: [4, 6, 4],
        discover: [4, 4, 4, 4],
        mastercard: [4, 4, 4, 4],
        dankort: [4, 4, 4, 4],
        instapayment: [4, 4, 4, 4],
        jcb15: [4, 6, 5],
        jcb: [4, 4, 4, 4],
        maestro: [4, 4, 4, 4],
        visa: [4, 4, 4, 4],
        mir: [4, 4, 4, 4],
        unionPay: [4, 4, 4, 4],
        general: [4, 4, 4, 4],
      },
      re: {
        uatp: /^(?!1800)1\d{0,14}/,
        amex: /^3[47]\d{0,13}/,
        discover: /^(?:6011|65\d{0,2}|64[4-9]\d?)\d{0,12}/,
        diners: /^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/,
        mastercard: /^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/,
        dankort: /^(5019|4175|4571)\d{0,12}/,
        instapayment: /^63[7-9]\d{0,13}/,
        jcb15: /^(?:2131|1800)\d{0,11}/,
        jcb: /^(?:35\d{0,2})\d{0,12}/,
        maestro: /^(?:5[0678]\d{0,2}|6304|67\d{0,2})\d{0,12}/,
        mir: /^220[0-4]\d{0,12}/,
        visa: /^4\d{0,15}/,
        unionPay: /^(62|81)\d{0,14}/,
      },
      getStrictBlocks: function (e) {
        var t = e.reduce(function (e, t) {
          return e + t;
        }, 0);
        return e.concat(19 - t);
      },
      getInfo: function (e, t) {
        var n = Ze.blocks,
          i = Ze.re;
        for (var r in ((t = !!t), i))
          if (i[r].test(e)) {
            var a = n[r];
            return { type: r, blocks: t ? this.getStrictBlocks(a) : a };
          }
        return {
          type: "unknown",
          blocks: t ? this.getStrictBlocks(n.general) : n.general,
        };
      },
    },
    Ke = Ze,
    Je = {
      noop: function () {},
      strip: function (e, t) {
        return e.replace(t, "");
      },
      getPostDelimiter: function (e, t, n) {
        if (0 === n.length) return e.slice(-t.length) === t ? t : "";
        var i = "";
        return (
          n.forEach(function (t) {
            e.slice(-t.length) === t && (i = t);
          }),
          i
        );
      },
      getDelimiterREByDelimiter: function (e) {
        return new RegExp(e.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), "g");
      },
      getNextCursorPosition: function (e, t, n, i, r) {
        return t.length === e
          ? n.length
          : e + this.getPositionOffset(e, t, n, i, r);
      },
      getPositionOffset: function (e, t, n, i, r) {
        var a, o, s;
        return (
          (a = this.stripDelimiters(t.slice(0, e), i, r)),
          (o = this.stripDelimiters(n.slice(0, e), i, r)),
          0 !== (s = a.length - o.length) ? s / Math.abs(s) : 0
        );
      },
      stripDelimiters: function (e, t, n) {
        var i = this;
        if (0 === n.length) {
          var r = t ? i.getDelimiterREByDelimiter(t) : "";
          return e.replace(r, "");
        }
        return (
          n.forEach(function (t) {
            t.split("").forEach(function (t) {
              e = e.replace(i.getDelimiterREByDelimiter(t), "");
            });
          }),
          e
        );
      },
      headStr: function (e, t) {
        return e.slice(0, t);
      },
      getMaxLength: function (e) {
        return e.reduce(function (e, t) {
          return e + t;
        }, 0);
      },
      getPrefixStrippedValue: function (e, t, n, i, r, a, o, s, l) {
        if (0 === n) return e;
        if (e === t && "" !== e) return "";
        if (l && "-" == e.slice(0, 1)) {
          var c = "-" == i.slice(0, 1) ? i.slice(1) : i;
          return (
            "-" +
            this.getPrefixStrippedValue(e.slice(1), t, n, c, r, a, o, s, l)
          );
        }
        if (i.slice(0, n) !== t && !s) return o && !i && e ? e : "";
        if (i.slice(-n) !== t && s) return o && !i && e ? e : "";
        var d = this.stripDelimiters(i, r, a);
        return e.slice(0, n) === t || s
          ? e.slice(-n) !== t && s
            ? d.slice(0, -n - 1)
            : s
            ? e.slice(0, -n)
            : e.slice(n)
          : d.slice(n);
      },
      getFirstDiffIndex: function (e, t) {
        for (var n = 0; e.charAt(n) === t.charAt(n); )
          if ("" === e.charAt(n++)) return -1;
        return n;
      },
      getFormattedValue: function (e, t, n, i, r, a) {
        var o = "",
          s = r.length > 0,
          l = "";
        return 0 === n
          ? e
          : (t.forEach(function (t, c) {
              if (e.length > 0) {
                var d = e.slice(0, t),
                  u = e.slice(t);
                (l = s ? r[a ? c - 1 : c] || l : i),
                  a
                    ? (c > 0 && (o += l), (o += d))
                    : ((o += d), d.length === t && c < n - 1 && (o += l)),
                  (e = u);
              }
            }),
            o);
      },
      fixPrefixCursor: function (e, t, n, i) {
        if (e) {
          var r = e.value,
            a = n || i[0] || " ";
          if (e.setSelectionRange && t && !(t.length + a.length <= r.length)) {
            var o = 2 * r.length;
            setTimeout(function () {
              e.setSelectionRange(o, o);
            }, 1);
          }
        }
      },
      checkFullSelection: function (e) {
        try {
          return (
            (window.getSelection() || document.getSelection() || {}).toString()
              .length === e.length
          );
        } catch (t) {}
        return !1;
      },
      setSelection: function (e, t, n) {
        if (e === this.getActiveElement(n) && !(e && e.value.length <= t))
          if (e.createTextRange) {
            var i = e.createTextRange();
            i.move("character", t), i.select();
          } else
            try {
              e.setSelectionRange(t, t);
            } catch (r) {
              console.warn("The input element type does not support selection");
            }
      },
      getActiveElement: function (e) {
        var t = e.activeElement;
        return t && t.shadowRoot ? this.getActiveElement(t.shadowRoot) : t;
      },
      isAndroid: function () {
        return navigator && /android/i.test(navigator.userAgent);
      },
      isAndroidBackspaceKeydown: function (e, t) {
        return !!(this.isAndroid() && e && t) && t === e.slice(0, -1);
      },
    },
    Xe = {
      assign: function (e, t) {
        return (
          (t = t || {}),
          ((e = e || {}).creditCard = !!t.creditCard),
          (e.creditCardStrictMode = !!t.creditCardStrictMode),
          (e.creditCardType = ""),
          (e.onCreditCardTypeChanged =
            t.onCreditCardTypeChanged || function () {}),
          (e.phone = !!t.phone),
          (e.phoneRegionCode = t.phoneRegionCode || "AU"),
          (e.phoneFormatter = {}),
          (e.time = !!t.time),
          (e.timePattern = t.timePattern || ["h", "m", "s"]),
          (e.timeFormat = t.timeFormat || "24"),
          (e.timeFormatter = {}),
          (e.date = !!t.date),
          (e.datePattern = t.datePattern || ["d", "m", "Y"]),
          (e.dateMin = t.dateMin || ""),
          (e.dateMax = t.dateMax || ""),
          (e.dateFormatter = {}),
          (e.numeral = !!t.numeral),
          (e.numeralIntegerScale =
            t.numeralIntegerScale > 0 ? t.numeralIntegerScale : 0),
          (e.numeralDecimalScale =
            t.numeralDecimalScale >= 0 ? t.numeralDecimalScale : 2),
          (e.numeralDecimalMark = t.numeralDecimalMark || "."),
          (e.numeralThousandsGroupStyle =
            t.numeralThousandsGroupStyle || "thousand"),
          (e.numeralPositiveOnly = !!t.numeralPositiveOnly),
          (e.stripLeadingZeroes = !1 !== t.stripLeadingZeroes),
          (e.signBeforePrefix = !!t.signBeforePrefix),
          (e.tailPrefix = !!t.tailPrefix),
          (e.swapHiddenInput = !!t.swapHiddenInput),
          (e.numericOnly = e.creditCard || e.date || !!t.numericOnly),
          (e.uppercase = !!t.uppercase),
          (e.lowercase = !!t.lowercase),
          (e.prefix = e.creditCard || e.date ? "" : t.prefix || ""),
          (e.noImmediatePrefix = !!t.noImmediatePrefix),
          (e.prefixLength = e.prefix.length),
          (e.rawValueTrimPrefix = !!t.rawValueTrimPrefix),
          (e.copyDelimiter = !!t.copyDelimiter),
          (e.initValue =
            void 0 !== t.initValue && null !== t.initValue
              ? t.initValue.toString()
              : ""),
          (e.delimiter =
            t.delimiter || "" === t.delimiter
              ? t.delimiter
              : t.date
              ? "/"
              : t.time
              ? ":"
              : t.numeral
              ? ","
              : (t.phone, " ")),
          (e.delimiterLength = e.delimiter.length),
          (e.delimiterLazyShow = !!t.delimiterLazyShow),
          (e.delimiters = t.delimiters || []),
          (e.blocks = t.blocks || []),
          (e.blocksLength = e.blocks.length),
          (e.root = "object" == typeof $e && $e ? $e : window),
          (e.document = t.document || e.root.document),
          (e.maxLength = 0),
          (e.backspace = !1),
          (e.result = ""),
          (e.onValueChanged = t.onValueChanged || function () {}),
          e
        );
      },
    },
    Qe = function (e, t) {
      var n = this,
        i = !1;
      if (
        ("string" == typeof e
          ? ((n.element = document.querySelector(e)),
            (i = document.querySelectorAll(e).length > 1))
          : void 0 !== e.length && e.length > 0
          ? ((n.element = e[0]), (i = e.length > 1))
          : (n.element = e),
        !n.element)
      )
        throw new Error("[cleave.js] Please check the element");
      if (i)
        try {
          console.warn(
            "[cleave.js] Multiple input fields matched, cleave.js will only take the first one."
          );
        } catch (r) {}
      (t.initValue = n.element.value),
        (n.properties = Qe.DefaultProperties.assign({}, t)),
        n.init();
    };
  (Qe.prototype = {
    init: function () {
      var e = this,
        t = e.properties;
      t.numeral ||
      t.phone ||
      t.creditCard ||
      t.time ||
      t.date ||
      0 !== t.blocksLength ||
      t.prefix
        ? ((t.maxLength = Qe.Util.getMaxLength(t.blocks)),
          (e.isAndroid = Qe.Util.isAndroid()),
          (e.lastInputValue = ""),
          (e.isBackward = ""),
          (e.onChangeListener = e.onChange.bind(e)),
          (e.onKeyDownListener = e.onKeyDown.bind(e)),
          (e.onFocusListener = e.onFocus.bind(e)),
          (e.onCutListener = e.onCut.bind(e)),
          (e.onCopyListener = e.onCopy.bind(e)),
          e.initSwapHiddenInput(),
          e.element.addEventListener("input", e.onChangeListener),
          e.element.addEventListener("keydown", e.onKeyDownListener),
          e.element.addEventListener("focus", e.onFocusListener),
          e.element.addEventListener("cut", e.onCutListener),
          e.element.addEventListener("copy", e.onCopyListener),
          e.initPhoneFormatter(),
          e.initDateFormatter(),
          e.initTimeFormatter(),
          e.initNumeralFormatter(),
          (t.initValue || (t.prefix && !t.noImmediatePrefix)) &&
            e.onInput(t.initValue))
        : e.onInput(t.initValue);
    },
    initSwapHiddenInput: function () {
      var e = this;
      if (e.properties.swapHiddenInput) {
        var t = e.element.cloneNode(!0);
        e.element.parentNode.insertBefore(t, e.element),
          (e.elementSwapHidden = e.element),
          (e.elementSwapHidden.type = "hidden"),
          (e.element = t),
          (e.element.id = "");
      }
    },
    initNumeralFormatter: function () {
      var e = this.properties;
      e.numeral &&
        (e.numeralFormatter = new Qe.NumeralFormatter(
          e.numeralDecimalMark,
          e.numeralIntegerScale,
          e.numeralDecimalScale,
          e.numeralThousandsGroupStyle,
          e.numeralPositiveOnly,
          e.stripLeadingZeroes,
          e.prefix,
          e.signBeforePrefix,
          e.tailPrefix,
          e.delimiter
        ));
    },
    initTimeFormatter: function () {
      var e = this.properties;
      e.time &&
        ((e.timeFormatter = new Qe.TimeFormatter(e.timePattern, e.timeFormat)),
        (e.blocks = e.timeFormatter.getBlocks()),
        (e.blocksLength = e.blocks.length),
        (e.maxLength = Qe.Util.getMaxLength(e.blocks)));
    },
    initDateFormatter: function () {
      var e = this.properties;
      e.date &&
        ((e.dateFormatter = new Qe.DateFormatter(
          e.datePattern,
          e.dateMin,
          e.dateMax
        )),
        (e.blocks = e.dateFormatter.getBlocks()),
        (e.blocksLength = e.blocks.length),
        (e.maxLength = Qe.Util.getMaxLength(e.blocks)));
    },
    initPhoneFormatter: function () {
      var e = this.properties;
      if (e.phone)
        try {
          e.phoneFormatter = new Qe.PhoneFormatter(
            new e.root.Cleave.AsYouTypeFormatter(e.phoneRegionCode),
            e.delimiter
          );
        } catch (t) {
          throw new Error(
            "[cleave.js] Please include phone-type-formatter.{country}.js lib"
          );
        }
    },
    onKeyDown: function (e) {
      var t = this,
        n = e.which || e.keyCode;
      (t.lastInputValue = t.element.value), (t.isBackward = 8 === n);
    },
    onChange: function (e) {
      var t = this,
        n = t.properties,
        i = Qe.Util;
      t.isBackward = t.isBackward || "deleteContentBackward" === e.inputType;
      var r = i.getPostDelimiter(t.lastInputValue, n.delimiter, n.delimiters);
      t.isBackward && r
        ? (n.postDelimiterBackspace = r)
        : (n.postDelimiterBackspace = !1),
        this.onInput(this.element.value);
    },
    onFocus: function () {
      var e = this,
        t = e.properties;
      (e.lastInputValue = e.element.value),
        t.prefix &&
          t.noImmediatePrefix &&
          !e.element.value &&
          this.onInput(t.prefix),
        Qe.Util.fixPrefixCursor(e.element, t.prefix, t.delimiter, t.delimiters);
    },
    onCut: function (e) {
      Qe.Util.checkFullSelection(this.element.value) &&
        (this.copyClipboardData(e), this.onInput(""));
    },
    onCopy: function (e) {
      Qe.Util.checkFullSelection(this.element.value) &&
        this.copyClipboardData(e);
    },
    copyClipboardData: function (e) {
      var t = this.properties,
        n = Qe.Util,
        i = this.element.value,
        r = "";
      r = t.copyDelimiter ? i : n.stripDelimiters(i, t.delimiter, t.delimiters);
      try {
        e.clipboardData
          ? e.clipboardData.setData("Text", r)
          : window.clipboardData.setData("Text", r),
          e.preventDefault();
      } catch (a) {}
    },
    onInput: function (e) {
      var t = this,
        n = t.properties,
        i = Qe.Util,
        r = i.getPostDelimiter(e, n.delimiter, n.delimiters);
      return (
        n.numeral ||
          !n.postDelimiterBackspace ||
          r ||
          (e = i.headStr(e, e.length - n.postDelimiterBackspace.length)),
        n.phone
          ? (!n.prefix || (n.noImmediatePrefix && !e.length)
              ? (n.result = n.phoneFormatter.format(e))
              : (n.result =
                  n.prefix + n.phoneFormatter.format(e).slice(n.prefix.length)),
            void t.updateValueState())
          : n.numeral
          ? (n.prefix && n.noImmediatePrefix && 0 === e.length
              ? (n.result = "")
              : (n.result = n.numeralFormatter.format(e)),
            void t.updateValueState())
          : (n.date && (e = n.dateFormatter.getValidatedDate(e)),
            n.time && (e = n.timeFormatter.getValidatedTime(e)),
            (e = i.stripDelimiters(e, n.delimiter, n.delimiters)),
            (e = i.getPrefixStrippedValue(
              e,
              n.prefix,
              n.prefixLength,
              n.result,
              n.delimiter,
              n.delimiters,
              n.noImmediatePrefix,
              n.tailPrefix,
              n.signBeforePrefix
            )),
            (e = n.numericOnly ? i.strip(e, /[^\d]/g) : e),
            (e = n.uppercase ? e.toUpperCase() : e),
            (e = n.lowercase ? e.toLowerCase() : e),
            n.prefix &&
            (n.tailPrefix ? (e += n.prefix) : (e = n.prefix + e),
            0 === n.blocksLength)
              ? ((n.result = e), void t.updateValueState())
              : (n.creditCard && t.updateCreditCardPropsByValue(e),
                (e = i.headStr(e, n.maxLength)),
                (n.result = i.getFormattedValue(
                  e,
                  n.blocks,
                  n.blocksLength,
                  n.delimiter,
                  n.delimiters,
                  n.delimiterLazyShow
                )),
                void t.updateValueState()))
      );
    },
    updateCreditCardPropsByValue: function (e) {
      var t,
        n = this.properties,
        i = Qe.Util;
      i.headStr(n.result, 4) !== i.headStr(e, 4) &&
        ((t = Qe.CreditCardDetector.getInfo(e, n.creditCardStrictMode)),
        (n.blocks = t.blocks),
        (n.blocksLength = n.blocks.length),
        (n.maxLength = i.getMaxLength(n.blocks)),
        n.creditCardType !== t.type &&
          ((n.creditCardType = t.type),
          n.onCreditCardTypeChanged.call(this, n.creditCardType)));
    },
    updateValueState: function () {
      var e = this,
        t = Qe.Util,
        n = e.properties;
      if (e.element) {
        var i = e.element.selectionEnd,
          r = e.element.value,
          a = n.result;
        (i = t.getNextCursorPosition(i, r, a, n.delimiter, n.delimiters)),
          e.isAndroid
            ? window.setTimeout(function () {
                (e.element.value = a),
                  t.setSelection(e.element, i, n.document, !1),
                  e.callOnValueChanged();
              }, 1)
            : ((e.element.value = a),
              n.swapHiddenInput &&
                (e.elementSwapHidden.value = e.getRawValue()),
              t.setSelection(e.element, i, n.document, !1),
              e.callOnValueChanged());
      }
    },
    callOnValueChanged: function () {
      var e = this,
        t = e.properties;
      t.onValueChanged.call(e, {
        target: {
          name: e.element.name,
          value: t.result,
          rawValue: e.getRawValue(),
        },
      });
    },
    setPhoneRegionCode: function (e) {
      var t = this;
      (t.properties.phoneRegionCode = e), t.initPhoneFormatter(), t.onChange();
    },
    setRawValue: function (e) {
      var t = this,
        n = t.properties;
      (e = null != e ? e.toString() : ""),
        n.numeral && (e = e.replace(".", n.numeralDecimalMark)),
        (n.postDelimiterBackspace = !1),
        (t.element.value = e),
        t.onInput(e);
    },
    getRawValue: function () {
      var e = this.properties,
        t = Qe.Util,
        n = this.element.value;
      return (
        e.rawValueTrimPrefix &&
          (n = t.getPrefixStrippedValue(
            n,
            e.prefix,
            e.prefixLength,
            e.result,
            e.delimiter,
            e.delimiters,
            e.noImmediatePrefix,
            e.tailPrefix,
            e.signBeforePrefix
          )),
        (n = e.numeral
          ? e.numeralFormatter.getRawValue(n)
          : t.stripDelimiters(n, e.delimiter, e.delimiters))
      );
    },
    getISOFormatDate: function () {
      var e = this.properties;
      return e.date ? e.dateFormatter.getISOFormatDate() : "";
    },
    getISOFormatTime: function () {
      var e = this.properties;
      return e.time ? e.timeFormatter.getISOFormatTime() : "";
    },
    getFormattedValue: function () {
      return this.element.value;
    },
    destroy: function () {
      var e = this;
      e.element.removeEventListener("input", e.onChangeListener),
        e.element.removeEventListener("keydown", e.onKeyDownListener),
        e.element.removeEventListener("focus", e.onFocusListener),
        e.element.removeEventListener("cut", e.onCutListener),
        e.element.removeEventListener("copy", e.onCopyListener);
    },
    toString: function () {
      return "[Cleave Object]";
    },
  }),
    (Qe.NumeralFormatter = Be),
    (Qe.DateFormatter = Ge),
    (Qe.TimeFormatter = He),
    (Qe.PhoneFormatter = qe),
    (Qe.CreditCardDetector = Ke),
    (Qe.Util = Je),
    (Qe.DefaultProperties = Xe),
    (("object" == typeof $e && $e ? $e : window).Cleave = Qe);
  var et = Qe;
  const tt = new WeakMap(),
    nt = (e) => "function" == typeof e && tt.has(e),
    it =
      "undefined" != typeof window &&
      null != window.customElements &&
      void 0 !== window.customElements.polyfillWrapFlushCallback,
    rt = (e, t, n = null) => {
      for (; t !== n; ) {
        const n = t.nextSibling;
        e.removeChild(t), (t = n);
      }
    },
    at = {},
    ot = {},
    st = `{{lit-${String(Math.random()).slice(2)}}}`,
    lt = `\x3c!--${st}--\x3e`,
    ct = new RegExp(`${st}|${lt}`),
    dt = "$lit$";
  class ut {
    constructor(e, t) {
      (this.parts = []), (this.element = t);
      const n = [],
        i = [],
        r = document.createTreeWalker(t.content, 133, null, !1);
      let a = 0,
        o = -1,
        s = 0;
      const {
        strings: l,
        values: { length: c },
      } = e;
      for (; s < c; ) {
        const e = r.nextNode();
        if (null !== e) {
          if ((o++, 1 === e.nodeType)) {
            if (e.hasAttributes()) {
              const t = e.attributes,
                { length: n } = t;
              let i = 0;
              for (let e = 0; e < n; e++) ht(t[e].name, dt) && i++;
              for (; i-- > 0; ) {
                const t = l[s],
                  n = ft.exec(t)[2],
                  i = n.toLowerCase() + dt,
                  r = e.getAttribute(i);
                e.removeAttribute(i);
                const a = r.split(ct);
                this.parts.push({
                  type: "attribute",
                  index: o,
                  name: n,
                  strings: a,
                }),
                  (s += a.length - 1);
              }
            }
            "TEMPLATE" === e.tagName &&
              (i.push(e), (r.currentNode = e.content));
          } else if (3 === e.nodeType) {
            const t = e.data;
            if (t.indexOf(st) >= 0) {
              const i = e.parentNode,
                r = t.split(ct),
                a = r.length - 1;
              for (let t = 0; t < a; t++) {
                let n,
                  a = r[t];
                if ("" === a) n = mt();
                else {
                  const e = ft.exec(a);
                  null !== e &&
                    ht(e[2], dt) &&
                    (a =
                      a.slice(0, e.index) +
                      e[1] +
                      e[2].slice(0, -dt.length) +
                      e[3]),
                    (n = document.createTextNode(a));
                }
                i.insertBefore(n, e),
                  this.parts.push({ type: "node", index: ++o });
              }
              "" === r[a]
                ? (i.insertBefore(mt(), e), n.push(e))
                : (e.data = r[a]),
                (s += a);
            }
          } else if (8 === e.nodeType)
            if (e.data === st) {
              const t = e.parentNode;
              (null !== e.previousSibling && o !== a) ||
                (o++, t.insertBefore(mt(), e)),
                (a = o),
                this.parts.push({ type: "node", index: o }),
                null === e.nextSibling ? (e.data = "") : (n.push(e), o--),
                s++;
            } else {
              let t = -1;
              for (; -1 !== (t = e.data.indexOf(st, t + 1)); )
                this.parts.push({ type: "node", index: -1 }), s++;
            }
        } else r.currentNode = i.pop();
      }
      for (const d of n) d.parentNode.removeChild(d);
    }
  }
  const ht = (e, t) => {
      const n = e.length - t.length;
      return n >= 0 && e.slice(n) === t;
    },
    pt = (e) => -1 !== e.index,
    mt = () => document.createComment(""),
    ft =
      /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
  class gt {
    constructor(e, t, n) {
      (this.__parts = []),
        (this.template = e),
        (this.processor = t),
        (this.options = n);
    }
    update(e) {
      let t = 0;
      for (const n of this.__parts) void 0 !== n && n.setValue(e[t]), t++;
      for (const n of this.__parts) void 0 !== n && n.commit();
    }
    _clone() {
      const e = it
          ? this.template.element.content.cloneNode(!0)
          : document.importNode(this.template.element.content, !0),
        t = [],
        n = this.template.parts,
        i = document.createTreeWalker(e, 133, null, !1);
      let r,
        a = 0,
        o = 0,
        s = i.nextNode();
      for (; a < n.length; )
        if (((r = n[a]), pt(r))) {
          for (; o < r.index; )
            o++,
              "TEMPLATE" === s.nodeName &&
                (t.push(s), (i.currentNode = s.content)),
              null === (s = i.nextNode()) &&
                ((i.currentNode = t.pop()), (s = i.nextNode()));
          if ("node" === r.type) {
            const e = this.processor.handleTextExpression(this.options);
            e.insertAfterNode(s.previousSibling), this.__parts.push(e);
          } else
            this.__parts.push(
              ...this.processor.handleAttributeExpressions(
                s,
                r.name,
                r.strings,
                this.options
              )
            );
          a++;
        } else this.__parts.push(void 0), a++;
      return it && (document.adoptNode(e), customElements.upgrade(e)), e;
    }
  }
  const vt =
      window.trustedTypes &&
      trustedTypes.createPolicy("lit-html", { createHTML: (e) => e }),
    _t = ` ${st} `;
  class yt {
    constructor(e, t, n, i) {
      (this.strings = e),
        (this.values = t),
        (this.type = n),
        (this.processor = i);
    }
    getHTML() {
      const e = this.strings.length - 1;
      let t = "",
        n = !1;
      for (let i = 0; i < e; i++) {
        const e = this.strings[i],
          r = e.lastIndexOf("\x3c!--");
        n = (r > -1 || n) && -1 === e.indexOf("--\x3e", r + 1);
        const a = ft.exec(e);
        t +=
          null === a
            ? e + (n ? _t : lt)
            : e.substr(0, a.index) + a[1] + a[2] + dt + a[3] + st;
      }
      return (t += this.strings[e]), t;
    }
    getTemplateElement() {
      const e = document.createElement("template");
      let t = this.getHTML();
      return void 0 !== vt && (t = vt.createHTML(t)), (e.innerHTML = t), e;
    }
  }
  const bt = (e) =>
      null === e || !("object" == typeof e || "function" == typeof e),
    wt = (e) => Array.isArray(e) || !(!e || !e[Symbol.iterator]);
  class xt {
    constructor(e, t, n) {
      (this.dirty = !0),
        (this.element = e),
        (this.name = t),
        (this.strings = n),
        (this.parts = []);
      for (let i = 0; i < n.length - 1; i++) this.parts[i] = this._createPart();
    }
    _createPart() {
      return new Ct(this);
    }
    _getValue() {
      const e = this.strings,
        t = e.length - 1,
        n = this.parts;
      if (1 === t && "" === e[0] && "" === e[1]) {
        const e = n[0].value;
        if ("symbol" == typeof e) return String(e);
        if ("string" == typeof e || !wt(e)) return e;
      }
      let i = "";
      for (let r = 0; r < t; r++) {
        i += e[r];
        const t = n[r];
        if (void 0 !== t) {
          const e = t.value;
          if (bt(e) || !wt(e)) i += "string" == typeof e ? e : String(e);
          else for (const t of e) i += "string" == typeof t ? t : String(t);
        }
      }
      return (i += e[t]), i;
    }
    commit() {
      this.dirty &&
        ((this.dirty = !1),
        this.element.setAttribute(this.name, this._getValue()));
    }
  }
  class Ct {
    constructor(e) {
      (this.value = void 0), (this.committer = e);
    }
    setValue(e) {
      e === at ||
        (bt(e) && e === this.value) ||
        ((this.value = e), nt(e) || (this.committer.dirty = !0));
    }
    commit() {
      for (; nt(this.value); ) {
        const e = this.value;
        (this.value = at), e(this);
      }
      this.value !== at && this.committer.commit();
    }
  }
  class St {
    constructor(e) {
      (this.value = void 0), (this.__pendingValue = void 0), (this.options = e);
    }
    appendInto(e) {
      (this.startNode = e.appendChild(mt())),
        (this.endNode = e.appendChild(mt()));
    }
    insertAfterNode(e) {
      (this.startNode = e), (this.endNode = e.nextSibling);
    }
    appendIntoPart(e) {
      e.__insert((this.startNode = mt())), e.__insert((this.endNode = mt()));
    }
    insertAfterPart(e) {
      e.__insert((this.startNode = mt())),
        (this.endNode = e.endNode),
        (e.endNode = this.startNode);
    }
    setValue(e) {
      this.__pendingValue = e;
    }
    commit() {
      if (null === this.startNode.parentNode) return;
      for (; nt(this.__pendingValue); ) {
        const e = this.__pendingValue;
        (this.__pendingValue = at), e(this);
      }
      const e = this.__pendingValue;
      e !== at &&
        (bt(e)
          ? e !== this.value && this.__commitText(e)
          : e instanceof yt
          ? this.__commitTemplateResult(e)
          : e instanceof Node
          ? this.__commitNode(e)
          : wt(e)
          ? this.__commitIterable(e)
          : e === ot
          ? ((this.value = ot), this.clear())
          : this.__commitText(e));
    }
    __insert(e) {
      this.endNode.parentNode.insertBefore(e, this.endNode);
    }
    __commitNode(e) {
      this.value !== e && (this.clear(), this.__insert(e), (this.value = e));
    }
    __commitText(e) {
      const t = this.startNode.nextSibling,
        n = "string" == typeof (e = null == e ? "" : e) ? e : String(e);
      t === this.endNode.previousSibling && 3 === t.nodeType
        ? (t.data = n)
        : this.__commitNode(document.createTextNode(n)),
        (this.value = e);
    }
    __commitTemplateResult(e) {
      const t = this.options.templateFactory(e);
      if (this.value instanceof gt && this.value.template === t)
        this.value.update(e.values);
      else {
        const n = new gt(t, e.processor, this.options),
          i = n._clone();
        n.update(e.values), this.__commitNode(i), (this.value = n);
      }
    }
    __commitIterable(e) {
      Array.isArray(this.value) || ((this.value = []), this.clear());
      const t = this.value;
      let n,
        i = 0;
      for (const r of e)
        (n = t[i]),
          void 0 === n &&
            ((n = new St(this.options)),
            t.push(n),
            0 === i ? n.appendIntoPart(this) : n.insertAfterPart(t[i - 1])),
          n.setValue(r),
          n.commit(),
          i++;
      i < t.length && ((t.length = i), this.clear(n && n.endNode));
    }
    clear(e = this.startNode) {
      rt(this.startNode.parentNode, e.nextSibling, this.endNode);
    }
  }
  class kt {
    constructor(e, t, n) {
      if (
        ((this.value = void 0),
        (this.__pendingValue = void 0),
        2 !== n.length || "" !== n[0] || "" !== n[1])
      )
        throw new Error(
          "Boolean attributes can only contain a single expression"
        );
      (this.element = e), (this.name = t), (this.strings = n);
    }
    setValue(e) {
      this.__pendingValue = e;
    }
    commit() {
      for (; nt(this.__pendingValue); ) {
        const e = this.__pendingValue;
        (this.__pendingValue = at), e(this);
      }
      if (this.__pendingValue === at) return;
      const e = !!this.__pendingValue;
      this.value !== e &&
        (e
          ? this.element.setAttribute(this.name, "")
          : this.element.removeAttribute(this.name),
        (this.value = e)),
        (this.__pendingValue = at);
    }
  }
  class Pt extends xt {
    constructor(e, t, n) {
      super(e, t, n),
        (this.single = 2 === n.length && "" === n[0] && "" === n[1]);
    }
    _createPart() {
      return new Et(this);
    }
    _getValue() {
      return this.single ? this.parts[0].value : super._getValue();
    }
    commit() {
      this.dirty &&
        ((this.dirty = !1), (this.element[this.name] = this._getValue()));
    }
  }
  class Et extends Ct {}
  let Tt = !1;
  (() => {
    try {
      const e = {
        get capture() {
          return (Tt = !0), !1;
        },
      };
      window.addEventListener("test", e, e),
        window.removeEventListener("test", e, e);
    } catch (e) {}
  })();
  class At {
    constructor(e, t, n) {
      (this.value = void 0),
        (this.__pendingValue = void 0),
        (this.element = e),
        (this.eventName = t),
        (this.eventContext = n),
        (this.__boundHandleEvent = (e) => this.handleEvent(e));
    }
    setValue(e) {
      this.__pendingValue = e;
    }
    commit() {
      for (; nt(this.__pendingValue); ) {
        const e = this.__pendingValue;
        (this.__pendingValue = at), e(this);
      }
      if (this.__pendingValue === at) return;
      const e = this.__pendingValue,
        t = this.value,
        n =
          null == e ||
          (null != t &&
            (e.capture !== t.capture ||
              e.once !== t.once ||
              e.passive !== t.passive)),
        i = null != e && (null == t || n);
      n &&
        this.element.removeEventListener(
          this.eventName,
          this.__boundHandleEvent,
          this.__options
        ),
        i &&
          ((this.__options = Lt(e)),
          this.element.addEventListener(
            this.eventName,
            this.__boundHandleEvent,
            this.__options
          )),
        (this.value = e),
        (this.__pendingValue = at);
    }
    handleEvent(e) {
      "function" == typeof this.value
        ? this.value.call(this.eventContext || this.element, e)
        : this.value.handleEvent(e);
    }
  }
  const Lt = (e) =>
    e &&
    (Tt ? { capture: e.capture, passive: e.passive, once: e.once } : e.capture);
  const Ft = new (class {
    handleAttributeExpressions(e, t, n, i) {
      const r = t[0];
      if ("." === r) {
        return new Pt(e, t.slice(1), n).parts;
      }
      if ("@" === r) return [new At(e, t.slice(1), i.eventContext)];
      if ("?" === r) return [new kt(e, t.slice(1), n)];
      return new xt(e, t, n).parts;
    }
    handleTextExpression(e) {
      return new St(e);
    }
  })();
  function Rt(e) {
    let t = It.get(e.type);
    void 0 === t &&
      ((t = { stringsArray: new WeakMap(), keyString: new Map() }),
      It.set(e.type, t));
    let n = t.stringsArray.get(e.strings);
    if (void 0 !== n) return n;
    const i = e.strings.join(st);
    return (
      (n = t.keyString.get(i)),
      void 0 === n &&
        ((n = new ut(e, e.getTemplateElement())), t.keyString.set(i, n)),
      t.stringsArray.set(e.strings, n),
      n
    );
  }
  const It = new Map(),
    Ot = new WeakMap(),
    Nt = (e, t, n) => {
      let i = Ot.get(t);
      void 0 === i &&
        (rt(t, t.firstChild),
        Ot.set(t, (i = new St(Object.assign({ templateFactory: Rt }, n)))),
        i.appendInto(t)),
        i.setValue(e),
        i.commit();
    };
  "undefined" != typeof window &&
    (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.4.1");
  const Mt = (e, ...t) => new yt(e, t, "html", Ft),
    Dt = (e) => {
      const t = document.querySelector(e);
      return null === t ? null : t;
    };
  class Ut {
    constructor(e) {
      __publicField(this, "CLASS_YCP_ELEMENT", "ycp-element"),
        __publicField(this, "mounted", !1),
        __publicField(this, "eventBus"),
        __publicField(this, "element"),
        __publicField(this, "shadowElement"),
        __publicField(this, "styleElement"),
        __publicField(this, "template"),
        __publicField(this, "containerSelector", null),
        (this.eventBus = e);
    }
    mount(e) {
      var t, n, i;
      const r =
        null == (t = Dt(YCPay.options.formContainer)) ? void 0 : t.shadowRoot;
      this.containerSelector = e;
      const a = r && null != (n = r.querySelector(e)) ? n : Dt(e);
      if (null === a)
        throw (
          (s("Component container is invalid"),
          new Error(`unable to find element ${a}`))
        );
      this.shadowElement =
        null != (i = a.shadowRoot) ? i : a.attachShadow({ mode: "open" });
      const o = document.createElement("div");
      (this.element = o), Nt(this.template(this), o), (this.mounted = !0);
      const c = document.createElement("style");
      return (
        (this.styleElement = c),
        this.shadowElement.appendChild(o),
        this.shadowElement.appendChild(c),
        (this.styleElement.textContent =
          this.getSelectedTheme() + YCPay.options.customCSS),
        l(),
        this.onMounted(o, c)
      );
    }
    getSelectedTheme() {
      return "";
    }
    onMounted(...e) {}
    onUnmounted(...e) {}
    unmount() {
      if (!1 === this.mounted) throw Error("element is not mounted");
      if (void 0 === this.element)
        throw Error("could not find container, perhaps it is not mounted?");
      this.element.remove(),
        (this.element = void 0),
        (this.mounted = !1),
        this.onUnmounted();
    }
    isMounted() {
      return this.mounted;
    }
  }
  class Vt extends Ut {
    constructor(e, t) {
      super(t),
        __publicField(this, "config", Se),
        __publicField(this, "apiService"),
        __publicField(this, "loggerService"),
        __publicField(this, "value", ""),
        __publicField(this, "options", { isSandbox: !1, isWebView: !1 }),
        (this.options = __spreadValues(__spreadValues({}, this.options), e)),
        (this.apiService = new Ue(e.isSandbox)),
        (this.loggerService = Pe.getInstance());
    }
    getValue() {
      return this.value;
    }
    setValue(e) {
      this.value = e;
    }
    $(e) {
      return this.shadowElement.querySelector(e);
    }
    onMounted(...e) {
      var t;
      super.onMounted(e),
        null == (t = this.element) ||
          t.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
    }
  }
  class $t {
    constructor() {
      __publicField(this, "_items"), (this._items = []);
    }
    get items() {
      return this._items;
    }
    add(e) {
      this._items.push(e);
    }
  }
  var zt = ((e) => ((e.local = "local"), (e.remote = "remote"), e))(zt || {});
  class Bt {
    constructor(e, t, n, i = !1) {
      __publicField(this, "_locale"),
        __publicField(this, "_name"),
        __publicField(this, "_keys"),
        __publicField(this, "_isDefault"),
        (this._locale = e),
        (this._name = t),
        (this._keys = n),
        (this._isDefault = i);
    }
    get locale() {
      return this._locale;
    }
    get name() {
      return this._name;
    }
    get keys() {
      return this._keys;
    }
    get isDefault() {
      return this._isDefault;
    }
    set isDefault(e) {
      this._isDefault = e;
    }
  }
  class jt {
    async load(e) {
      try {
        let t;
        switch (e) {
          case "ar":
            t = await Promise.resolve().then(function () {
              return Gn;
            });
            break;
          case "fr":
            t = await Promise.resolve().then(function () {
              return Zn;
            });
            break;
          default:
            t = await Promise.resolve().then(function () {
              return ei;
            });
        }
        return new Bt(e, e, t);
      } catch (t) {
        return null;
      }
    }
  }
  class Gt {
    constructor() {
      __publicField(this, "httpService"),
        (this.httpService = new Ce(Se.TRANSLATIONS_BASE_URL));
    }
    async load(e) {
      if (!1 === ["en", "ar", "fr"].includes(e))
        throw new Error("locale not supported");
      let t;
      try {
        const n = await this.httpService.get(`translation-${e}.json`);
        return (t = new Bt(e, e, n)), t;
      } catch (n) {
        return null;
      }
    }
  }
  class Yt {
    constructor() {
      __publicField(this, "_bridge"), (this._bridge = this.initBridge());
    }
    get bridge() {
      return this._bridge;
    }
    async loadTranslation(e) {
      try {
        return this.bridge === zt.local
          ? await this.loadLocaleTranslations(e)
          : await this.loadRemoteTranslations(e);
      } catch (t) {
        return null;
      }
    }
    async loadLocaleTranslations(e) {
      const t = new jt();
      return await t.load(e);
    }
    async loadRemoteTranslations(e) {
      const t = new Gt();
      return await t.load(e);
    }
    initBridge() {
      const e = Se.TRANSLATION_BRIDGE;
      return !1 === ((t = e), ["local", "remote"].some((e) => e === t))
        ? Yt.getDefaultBridge()
        : e;
      var t;
    }
    static getDefaultBridge() {
      return zt.remote;
    }
  }
  class Ht {
    parse(e, t) {
      return e.replace(/{{([^{}]*)}}/g, (e, n) => {
        const i = t[n];
        return "string" == typeof i ? i : e;
      });
    }
  }
  const {
      translate: Wt,
      getAvailableLocales: qt,
      getDefaultLocale: Zt,
      loadTranslations: Kt,
    } = new (class {
      constructor() {
        __publicField(
          this,
          "BROWSER_LOCALE",
          navigator.language.substring(0, 2)
        ),
          __publicField(this, "locale", "en"),
          __publicField(this, "translations"),
          __publicField(this, "translationLoader"),
          __publicField(this, "mustacheParser"),
          __publicField(this, "loggerService"),
          __publicField(this, "loadTranslations", async (e) => {
            if (
              ((this.locale = this.initLocale(e)),
              this.translations instanceof $t)
            )
              return;
            const t = new $t(),
              n = await this.translationLoader.loadTranslation(this.locale);
            null !== n &&
              ((n.isDefault = !0), t.add(n), (this.translations = t));
          }),
          __publicField(this, "getLocale", () => this.locale),
          __publicField(this, "setLocale", (e) => {
            this.locale = this.initLocale(e);
          }),
          __publicField(this, "translate", (e, t = {}, n = "") => {
            let i = this.getTranslationByLocale(this.getLocale());
            if (
              (this.getLocale() !== this.locale &&
                (i = this.getTranslationByLocale(this.locale)),
              void 0 === i)
            )
              return (
                this.loggerService.collect({
                  key: h.TRANSLATION_KEY_NOT_FOUND,
                  value: e,
                }),
                this.getTranslationFallback(e, n)
              );
            const r = ((e, t) => {
              const n = t.split(".");
              if (0 === n.length) return null;
              let i = e[n[0]];
              for (let r = 1; r < n.length; r++) {
                const e = n[r];
                if (void 0 === i[e]) return null;
                i = i[e];
              }
              return i;
            })(i.keys, e);
            return "string" != typeof r ? e : this.mustacheParser.parse(r, t);
          }),
          __publicField(this, "initLocale", (e = null) => {
            const t = this.getAvailableLocales();
            return null !== e && !0 === t.includes(e.toLowerCase())
              ? e
              : !0 === t.includes(this.BROWSER_LOCALE.toLowerCase())
              ? this.BROWSER_LOCALE
              : this.getDefaultLocale();
          }),
          __publicField(this, "getAvailableLocales", () => ["en", "ar", "fr"]),
          __publicField(this, "getDefaultLocale", () => "en"),
          __publicField(this, "getTranslationByLocale", (e) => {
            var t;
            return null == (t = this.translations)
              ? void 0
              : t.items.find((t) => t.locale === e);
          }),
          __publicField(this, "getTranslationFallback", (e, t) =>
            "" !== t ? t : e
          ),
          (this.translationLoader = new Yt()),
          (this.mustacheParser = new Ht()),
          (this.loggerService = Pe.getInstance());
      }
    })(),
    Jt = (e) => {
      var t, n, i;
      return Mt`
    <div class="main-container" data-gateway="${e.id}" dir="${
        "ar" === YCPay.locale ? "rtl" : "ltr"
      }">
      <form class="creditCard-form">
        ${
          YCPay.options.fields.email || Se.YCP_FEATURE_REQUIRE_EMAIL
            ? Mt`
              <div class="creditCard-textField-container">
                <img
                  draggable="false"
                  src="${Se.ASSETS_URL}/icons/creditcard/form/mail.svg"
                  class="icon"
                  alt="Customer e-mail"
                />
                <input
                  placeholder=${Wt(
                    "gateway.credit-card.form.placeholder.email"
                  )}
                  type="text"
                  .value=${
                    null !=
                    (n = null == (t = e.getValue().customer) ? void 0 : t.email)
                      ? n
                      : ""
                  }
                  @change=${(t) =>
                    e.updateValue("customer.email", t.target.value.trim())}
                  @input=${(t) =>
                    e.updateValue("customer.email", t.target.value.trim())}
                  class="textField"
                  data-card-input="email"
                  @focus=${(t) =>
                    e.inputInteractionLog("customer.email", p.FOCUS)}
                />
              </div>
              <hr />
            `
            : ot
        }
        <div class="creditCard-textField-container">
          <img
            draggable="false"
            src="${Se.ASSETS_URL}/icons/creditcard/form/person.svg"
            class="icon"
            alt="Card holder name"
          />
          <input
            placeholder=${Wt(
              "gateway.credit-card.form.placeholder.card-holder-name"
            )}
            type="text"
            .value=${e.getValue().card_holder_name}
            @change=${(t) => e.updateValue("card_holder_name", t.target.value)}
            @input=${(t) => e.updateValue("card_holder_name", t.target.value)}
            class="textField"
            data-card-input="card_holder_name"
            @focus=${(t) => e.inputInteractionLog("card_holder_name", p.FOCUS)}
          />
        </div>
        <div class="creditCard-textField-container">
          <img draggable="false" src="${
            Se.ASSETS_URL
          }/icons/creditcard/form/card.svg" class="icon" alt="name" />
          <input
            placeholder=${Wt(
              "gateway.credit-card.form.placeholder.card-number"
            )}
            type="tel"
            .value=${e.getValue().credit_card}
            @change=${(t) => e.updateValue("credit_card ", t.target.value)}
            @input=${(t) => e.updateValue("credit_card", t.target.value)}
            class="textField inputs__bin"
            data-card-input="credit_card"
            @focus=${(t) => e.inputInteractionLog("credit_card", p.FOCUS)}
          />
        </div>
        <div class="form-row">
          <label class="creditCard-textField-container">
            <img
              draggable="false"
              src="${Se.ASSETS_URL}/icons/creditcard/form/calendar.svg"
              class="icon"
              alt="Expiration date"
            />
            <input
              placeholder=${Wt(
                "gateway.credit-card.form.placeholder.card-expiration"
              )}
              type="tel"
              .value=${e.getValue().expire_date}
              @change=${(t) => e.updateValue("expire_date", t.target.value)}
              @input=${(t) => e.updateValue("expire_date", t.target.value)}
              class="textField inputs__date"
              data-card-input="expire_date"
              @focus=${(t) => e.inputInteractionLog("expire_date", p.FOCUS)}
            />
          </label>
          <label class="creditCard-textField-container cvv-textField-container">
            <img
              draggable="false"
              src="${Se.ASSETS_URL}/icons/creditcard/form/cvc.svg"
              @click="${(t) => e.$("#cvv-pop-over").classList.toggle("hidden")}"
              class="icon"
              alt="CVC"
            />
            <input
              type="tel"
              pattern="/^-?\\d+\\.?\\d*$/"
              placeholder=${Wt("gateway.credit-card.form.placeholder.cvc")}
              .value=${e.getValue().cvv}
              @change=${(t) => e.updateValue("cvv", t.target.value)}
              @input=${(t) => e.updateValue("cvv", t.target.value)}
              @focusout="${(t) => e.$("#cvv-pop-over").classList.add("hidden")}"
              class="textField inputs__cvc"
              data-card-input="cvv"
              @focus=${(t) => e.inputInteractionLog("cvv", p.FOCUS)}
            />
            <div id="cvv-pop-over" class="hidden">
              <img draggable="false" src="${
                Se.ASSETS_URL
              }/images/creditcard/cvv.jpg" alt="CVV" />
            </div>
          </label>
        </div>
        <div class="creditCard-footer">
          <img
            draggable="false"
            src="${Se.APP_URL}/images/YCPay/supports-logo.png"
            class="security"
            alt="Security"
          />
          <div dir="ltr" class="brand">
            <span class="text">${Wt("gateway.selector.by")}</span>
            <a href="${Se.APP_URL}" target="_blank">
              <img src="${
                Se.APP_URL
              }/images/ycpay-logo.svg" class="logo" alt="YouCan Pay logo" />
            </a>
          </div>
        </div>
        ${
          (null == (i = YCPay.accountConfig) ? void 0 : i.helpCenterEnabled)
            ? Mt`
              <div dir="ltr" class="help-center">
                <span class="text">${Wt("help-center.need-help")}</span>
                <a href="${Se.APP_URL}/help-center?ref=${
                window.location.href
              }" target="_blank">${Wt("help-center.page")}</a>
              </div>
            `
            : ot
        }
        ${
          e.options.isSandbox
            ? Mt`<span class="is-sandbox-active">Test Mode</span>`
            : ot
        }
      </form>
    </div>
  `;
    };
  var Xt = (() =>
    "/*!\n * Copyright (C) - YouCan - All Rights Reserved\n * Unauthorized copying of this file, via any medium is strictly prohibited\n * Proprietary and confidential\n */.creditcard-selector{align-items:center;background:#151415;background:linear-gradient(95.84deg,#25366d -37.46%,#3887c6 113.3%);color:#ededed;display:flex;justify-content:center}.creditcard-selector img{color:red;height:19.2px}.creditcard-selector p{font-size:16px;font-style:normal;font-weight:600;line-height:21px}\n")();
  const Qt = () => Mt`
    <style>
      ${Xt}
    </style>
    <div class="creditcard-selector gateway-selector__button">
      <img src="${Se.ASSETS_URL}/icons/creditcard/card.svg" alt="Card icon" />
      <p>${Wt("gateway.credit-card.selector")}</p>
    </div>
  `;
  var en = (() =>
    "body,html{font-family:Poppins,sans-serif}/*!\n * Copyright (C) - YouCan - All Rights Reserved\n * Unauthorized copying of this file, via any medium is strictly prohibited\n * Proprietary and confidential\n */#credit_card_child_window{align-items:center;display:flex;height:100vh;justify-content:center;width:100vw}#credit_card_child_window .content{align-items:center;display:flex;flex-direction:column;justify-content:center;margin:0 auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}#credit_card_child_window .content .logo{margin-bottom:12px;width:110px}#credit_card_child_window .content .loading_box{align-items:center;background-color:#fff;border-radius:8px;box-sizing:border-box;display:flex;justify-content:center;margin-left:auto;margin-right:auto;padding:10px 34px;width:100%}#credit_card_child_window .content .loading_box .loader{-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite;height:24px;margin-right:10px;width:24px}@-webkit-keyframes spin{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(1turn)}}#credit_card_child_window .content .loading_box .text{color:#25366d;font-size:12px;font-weight:500}#credit_card_child_window .content .banner{align-items:center;-webkit-animation:pulse 2s infinite;animation:pulse 2s infinite;background-color:#fff4f4;border-radius:8px;box-shadow:0 0 #000;box-sizing:border-box;display:flex;margin-top:12px;min-width:230px;padding:14px 24px;width:100%}#credit_card_child_window .content .banner .icon{fill:currentColor;color:#d82c0d;height:30px;margin-right:10px;width:30px}#credit_card_child_window .content .banner .text{color:#a4210a;font-size:24px;font-weight:500}@-webkit-keyframes pulse{0%{box-shadow:0 0 #a4210ab3}70%{box-shadow:0 0 0 6px transparent}to{box-shadow:0 0 0 0 transparent}}@keyframes pulse{0%{box-shadow:0 0 #a4210ab3}70%{box-shadow:0 0 0 6px transparent}to{box-shadow:0 0 0 0 transparent}}#credit_card_child_window[dir=rtl] .content .loading_box .loader{margin-left:10px;margin-right:0}#credit_card_child_window[dir=rtl] .content .banner .icon{margin-left:6px;margin-right:0}#credit_card_child_window[dir=rtl] *{font-family:Tajawal,sans-serif}#credit_card_child_window *{font-family:Poppins,sans-serif}\n")();
  const tn = () =>
    `\n    <!DOCTYPE html>\n    <html lang="en">\n      <head>\n        <meta charset="UTF-8" />\n        <meta\n          name="viewport"\n          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"\n        />\n        <meta http-equiv="X-UA-Compatible" content="ie=edge" />\n        <title>${Wt(
      "gateway.credit-card.3ds.processing"
    )}...</title>\n        <style>\n          ${en}\n        </style>\n      </head>\n      <body id="credit_card_child_window" dir="${
      "ar" === YCPay.locale ? "rtl" : "ltr"
    }">\n        <div class="content">\n          <a href="${
      Se.APP_URL
    }" target="_blank">\n            <img src="${
      Se.APP_URL
    }/images/ycpay-logo.svg" draggable="false" class="logo" alt="YouCan Pay logo" />\n          </a>\n          <div class="loading_box">\n            <img\n              src="${
      Se.ASSETS_URL
    }/icons/common/loader.svg"\n              alt="${Wt(
      "gateway.credit-card.3ds.processing"
    )}"\n              draggable="false"\n              class="loader"\n            />\n            <span class="text">${Wt(
      "gateway.credit-card.3ds.processing"
    )}...</span>\n          </div>\n          <div class="banner">\n            <img\n              src="${
      Se.ASSETS_URL
    }/icons/common/x-circle.svg"\n              alt="${Wt(
      "gateway.credit-card.3ds.do_not_refresh"
    )}"\n              draggable="false"\n              class="icon"\n            />\n            <span class="text">${Wt(
      "gateway.credit-card.3ds.do_not_refresh"
    )}</span>\n          </div>\n        </div>\n      </body>\n    </html>\n  `;
  var nn = (() =>
    ".modal-container{align-items:center;display:flex;justify-content:center;position:fixed}.modal-container,.overlay{height:100%;top:0;width:100%;z-index:1}.overlay{background:rgba(0,0,0,.5);position:absolute}.modal{background:#f9fafe;border-radius:4px;max-width:11rem;padding:2rem;position:relative;text-align:center;width:100%;z-index:2}.modal-header{color:#1a1a1ade;margin:0 auto 1rem;width:4rem}.modal-heading,.modal-paragraph{margin:0 0 1rem}.button{border:none;border-radius:4px;cursor:pointer;font-weight:700;padding:10px 17px}.primary-button{background:#aa2e66;color:#fff}.primary-button:focus,.primary-button:hover{background:#5a1836}.secondary-button{background:transparent;color:#ec4352}\n")();
  class rn {
    constructor(e, t) {
      __publicField(this, "mount", (e) => {
        const t = document.querySelector(e);
        if (!t) throw `could not find element ${e}`;
        (this.containerSelector = e),
          (this.shadow = t.attachShadow({ mode: "open" }));
        const n = document.createElement("div"),
          i = document.createElement("style");
        Nt(this.template(this.style, this.setValue), n),
          this.shadow.appendChild(i),
          this.applyTheme(i),
          this.shadow.appendChild(n);
      }),
        __publicField(this, "unmount", () => {
          const e = document.querySelector(this.containerSelector),
            t = e.parentElement,
            n = document.createElement("div");
          t.insertBefore(n, e), (n.outerHTML = e.outerHTML), t.removeChild(e);
        }),
        (this.modalOpened = e),
        (this.eventTarget = t),
        (this.template = () => {
          if (this.modalOpened)
            return Mt`
          <div class="modal-container">
            <div class="overlay"></div>
            <div class="modal">
              <div class="modal-header">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="shield-alt"
                  class="svg-inline--fa fa-shield-alt fa-w-16"
                  role="img"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"
                  />
                </svg>
              </div>
              <div class="modal-body">
                <h4 class="modal-heading">Purchase Authorization</h4>
                <p class="modal-paragraph">are you sure you want to continue ?</p>
              </div>
              <div class="modal-actions">
                <button class="button primary-button" @click=${() =>
                  this.authorize()}>Authorize</button>
                <button class="button secondary-button" @click=${() =>
                  this.decline()}>Decline</button>
              </div>
            </div>
          </div>
        `;
        });
    }
    applyTheme(e) {
      e.textContent = nn;
    }
    setModalOpenedState(e) {
      (this.modalOpened = e),
        this.unmount(),
        this.mount(this.containerSelector);
    }
    authorize() {
      this.eventTarget.dispatchEvent(
        new CustomEvent("action", { detail: "authorized" })
      ),
        (this.modalOpened = !1);
    }
    decline() {
      this.eventTarget.dispatchEvent(
        new CustomEvent("action", { detail: "declined" })
      ),
        (this.modalOpened = !1);
    }
  }
  var an = (() =>
    "body,html{font-family:Poppins,sans-serif}/*!\n * Copyright (C) - YouCan - All Rights Reserved\n * Unauthorized copying of this file, via any medium is strictly prohibited\n * Proprietary and confidential\n */.main-container{background-color:#fff;border:1px solid #dcdfe1;border-radius:10px;box-shadow:0 1px 2px #0000000d,0 1px 5px #0000000d;box-sizing:border-box;direction:ltr;display:flex;flex-direction:column;margin:auto;max-width:654px;padding:16px;width:100%}.main-container hr{border-radius:9999px;opacity:.5;width:90%}.main-container .form-header{align-items:center;display:flex;justify-content:space-between}.main-container .form-header .back_button{align-items:center;background:none;border:none;color:#111827;cursor:pointer;display:flex}.main-container .form-header .back_button .icon{fill:currentColor;height:20px;margin-right:6px;width:20px}.main-container .form-header .back_button .text{color:inherit;font-size:16px;font-weight:500;margin:0}.main-container .form-header .back_button:hover .text{text-decoration:underline}.main-container .form-header .header-title{color:#111827;font-size:16px;font-weight:500;margin:0}.main-container .creditCard-form{width:100%}.main-container .creditCard-form .creditCard-textField-container{align-items:center;border:1px solid #dcdfe1;border-radius:6px;box-shadow:0 1px 2px #9096a71a;display:flex;height:48px;position:relative;width:100%}.main-container .creditCard-form .creditCard-textField-container .icon{cursor:text;height:20px;left:16px;pointer-events:none;position:absolute;width:20px}.main-container .creditCard-form .creditCard-textField-container .textField{background:#fff;border:none;border-radius:6px;color:#414757;font-size:16px;font-weight:400;height:100%;outline-color:#458fff;outline-offset:2px;padding:0 16px 0 44px;width:100%}.main-container .creditCard-form .creditCard-textField-container .textField::-moz-placeholder{color:#707585}.main-container .creditCard-form .creditCard-textField-container .textField:-ms-input-placeholder{color:#707585}.main-container .creditCard-form .creditCard-textField-container .textField::placeholder{color:#707585}.main-container .creditCard-form .creditCard-textField-container.cvv-textField-container .icon{pointer-events:all}.main-container .creditCard-form .creditCard-textField-container.cvv-textField-container #cvv-pop-over{background-color:#fff;border-radius:6px;box-shadow:0 1px 2px #0000000d,0 1px 5px #0000000d;display:block;left:50%;padding:10px;position:absolute;top:54px;transform:translate(-50%)}.main-container .creditCard-form .creditCard-textField-container.cvv-textField-container #cvv-pop-over img{width:280px}.main-container .creditCard-form .creditCard-textField-container.cvv-textField-container #cvv-pop-over.hidden{display:none}.main-container .creditCard-form .creditCard-textField-container.validation-error{border-color:#d82c0d!important}.main-container .creditCard-form .creditCard-textField-container.validation-error .label{color:#d82c0d;font-size:11px;font-weight:500;position:absolute;top:46px}.main-container .creditCard-form .form-row{display:flex}.main-container .creditCard-form .form-row>*~*{margin-left:24px}.main-container .creditCard-form .creditCard-footer{align-items:flex-start;display:flex;justify-content:space-between}.main-container .creditCard-form .creditCard-footer .security{height:38px}.main-container .creditCard-form .creditCard-footer .brand{align-items:flex-start;display:flex}.main-container .creditCard-form .creditCard-footer .brand .text{color:#414757;font-size:10.5px;font-style:italic;font-weight:400;line-height:16px}.main-container .creditCard-form .creditCard-footer .brand .logo{height:27px;margin-left:4px;margin-right:4px}.main-container .creditCard-form .help-center{border-top:1px solid #ededed;color:#414757;font-size:15px;margin-bottom:5px;margin-top:10px;padding-left:6px;padding-top:17px;width:100%}.main-container .creditCard-form .help-center .text,.main-container .creditCard-form .help-center a{color:#414757;font-size:13px;font-weight:400;line-height:16px}.main-container .creditCard-form .help-center a{color:#458fff;text-decoration:none}.main-container .creditCard-form>*~*{margin-top:24px}.main-container .is-sandbox-active{align-items:center;background:#f8c53c;border-radius:4px;color:#161101;display:flex;flex-direction:row;font-size:10px;font-style:normal;font-weight:500;height:22.4px;line-height:15px;margin-top:8px;padding:4px 6px;width:64px}.main-container[dir=rtl]{direction:rtl}.main-container[dir=rtl] .form-header,.main-container[dir=rtl] .form-header .back_button{flex-direction:row-reverse}.main-container[dir=rtl] .creditCard-form .creditCard-textField-container .icon{left:0;right:16px}.main-container[dir=rtl] .creditCard-form .creditCard-textField-container .textField{direction:ltr;padding:0 44px 0 16px;text-align:right}.main-container[dir=rtl] .creditCard-form .form-row{display:flex}.main-container[dir=rtl] .creditCard-form .form-row>*~*{margin-left:0;margin-right:24px}.main-container[dir=rtl] .creditCard-form .creditCard-footer{direction:ltr}.main-container[dir=rtl] *{font-family:Tajawal,sans-serif}.main-container>*~*{margin-top:30px}.main-container *{box-sizing:border-box;font-family:Poppins,sans-serif}@media screen and (max-width:640px){.main-container[dir=rtl] .creditCard-form .form-row{flex-direction:column}.main-container[dir=rtl] .creditCard-form .form-row>*~*{margin:24px 0 0}.main-container .creditCard-form .form-row{flex-direction:column}.main-container .creditCard-form .form-row>*~*{margin:24px 0 0}.main-container .creditCard-form .creditCard-footer{flex-direction:column}.main-container .creditCard-form .creditCard-footer .brand{align-self:flex-end}}\n")();
  const { addCrossHostEventListener: on } = new (class {
    constructor() {
      __publicField(this, "listenerMap", {}),
        __publicField(this, "addCrossHostEventListener", (e, t) => {
          if (Object.prototype.hasOwnProperty.call(this.listenerMap, e))
            throw Error(`listener already attached for window ${e}`);
          window.addEventListener("message", (e) => {
            t(e);
          }),
            (this.listenerMap[e] = t);
        });
    }
  })();
  var sn = ((e) => (
      (e.RENDER_COMPONENT = "render-component"),
      (e.PAY = "pay"),
      (e.RETURN_FROM_3DS = "return-from-3ds"),
      (e.REDIRECT_TO_3DS = "redirect-to-3ds"),
      (e.REDIRECT_TO_GATEWAYS_SELECTOR = "redirect-to-gateways-selector"),
      (e.WINDOW_CLOSED = "window-closed"),
      e
    ))(sn || {}),
    ln = ((e) => (
      (e.GATEWAYS_SELECTOR = "gateways_selector"),
      (e.GATEWAY_FORM = "gateway_form"),
      (e.CASHPLUS = "cashplus"),
      (e.CREDIT_CARD = "credit_card"),
      (e.WALLET = "wallet"),
      (e.GENERAL = "general"),
      e
    ))(ln || {}),
    cn = ((e) => (
      (e.START = "start"), (e.FINISH = "finish"), (e.ERROR = "error"), e
    ))(cn || {});
  class dn extends Vt {
    constructor(e, t) {
      super(e, t),
        __publicField(this, "childWindowContent", tn),
        __publicField(this, "SANDBOX_CALLBACK_ENDPOINT", "callback"),
        __publicField(this, "PAYMENT_ENDPOINT", this.config.PAYMENT_ENDPOINT),
        __publicField(this, "template", Jt),
        __publicField(this, "sandbox3DSModal"),
        __publicField(this, "eventTarget"),
        __publicField(this, "value", {
          customer: { email: "" },
          card_holder_name: "",
          credit_card: "",
          expire_date: "",
          cvv: "",
        }),
        __publicField(this, "name", Wt("gateway.credit-card.name")),
        __publicField(
          this,
          "image",
          `${this.config.APP_URL}/images/YCPay/icon-credit-card.svg`
        ),
        __publicField(this, "id", Ne.CREDIT_CARD),
        __publicField(this, "selector", Qt),
        __publicField(this, "updateValue", (e, t) => {
          const n = ((e, t, n) => (
            Object(e) !== e ||
              (Array.isArray(t) || (t = t.toString().match(/[^.[\]]+/g) || []),
              (t
                .slice(0, -1)
                .reduce(
                  (e, n, i) =>
                    Object(
                      e[n] == e[n]
                        ? e[n]
                        : (e[n] =
                            Math.abs(t[i + 1]) >> 0 == +t[i + 1] ? [] : {})
                    ),
                  e
                )[t[t.length - 1]] = n)),
            e
          ))(this.value, e, t);
          this.setValue(n);
        }),
        __publicField(this, "validation", {
          scope: this,
          errors: [
            {
              name: "card_holder_name",
              errorMessage: null,
              validate: (e) =>
                !0 === /\d/.test(e)
                  ? Wt("gateway.credit-card.form.validation.only_characters")
                  : e.length > 255
                  ? Wt("gateway.credit-card.form.validation.max_255")
                  : null,
            },
            { name: "credit_card", errorMessage: null, validate: () => null },
            {
              name: "email",
              errorMessage: null,
              validate: (e) =>
                !1 === /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(e)
                  ? Wt("gateway.credit-card.form.validation.invalid_email")
                  : null,
            },
            {
              name: "expire_date",
              errorMessage: null,
              validate: (e) =>
                !1 === /^\d{2}\/\d{2}$/.test(e)
                  ? Wt("gateway.credit-card.form.validation.invalid_date")
                  : null,
            },
            {
              name: "cvv",
              errorMessage: null,
              validate: (e) =>
                !1 === /^\d{3,4}$/.test(e)
                  ? Wt("gateway.credit-card.form.validation.invalid_cvv")
                  : null,
            },
          ],
          get: function (e) {
            let t = null;
            return (
              this.errors.forEach((n) => {
                n.name === e && (t = n);
              }),
              t
            );
          },
          isValid: function () {
            return void 0 === this.errors.find((e) => null !== e.errorMessage);
          },
          mutate: function (e, t) {
            const n = this.get(e);
            null !== n && (n.errorMessage = t);
          },
          displayErrors: function () {
            this.errors.forEach((e) => {
              var t;
              if (null === e.errorMessage) return;
              const n = this.get(e.name);
              if (null === n) return;
              const i =
                null == (t = this.scope.shadowElement)
                  ? void 0
                  : t.querySelector(`[data-card-input="${n.name}"]`);
              if (null === i) return;
              i.parentElement.classList.add("validation-error");
              const r = document.createElement("span");
              r.setAttribute("class", "label"),
                (r.innerText = e.errorMessage),
                i.after(r);
            });
          },
          purgeErrors: function () {
            var e;
            this.errors.forEach((e) => {
              e.errorMessage = null;
            }),
              null == (e = this.scope.shadowElement) ||
                e.querySelectorAll("[data-card-input]").forEach((e) => {
                  e.parentElement.classList.remove("validation-error");
                  const t = e.parentElement.querySelector(".label");
                  null !== t && t.remove();
                });
          },
        });
    }
    pay(e, t) {
      let n;
      this.loggerService.info({
        event_name: sn.PAY,
        event_category: ln.CREDIT_CARD,
        key: cn.START,
        value: { token: t },
      });
      let i = null;
      return (
        !1 === this.options.isSandbox &&
          ((n = "w_" + Date.now() + Math.floor(1e5 * Math.random()).toString()),
          (i = !0 == !this.options.isWebView ? window.open("", n) : null),
          null !== i && i.document.write(this.childWindowContent())),
        new Promise((r, a) => {
          const o = this.getValue();
          on(n, (e) => {
            if (!0 === e.data.success)
              return (
                this.loggerService.info({
                  event_name: sn.RETURN_FROM_3DS,
                  event_category: ln.CREDIT_CARD,
                  key: cn.FINISH,
                  value: e.data,
                }),
                r(e.data)
              );
            if (!1 === e.data.success) {
              const t =
                e.data.message || "there was an error processing this request";
              this.loggerService.error(new Error(t), {
                event_name: sn.RETURN_FROM_3DS,
                event_category: ln.CREDIT_CARD,
                key: cn.ERROR,
                value: e.data,
              }),
                a(t);
            }
          }),
            this.apiService
              .post(this.PAYMENT_ENDPOINT, {
                body: __spreadProps(
                  __spreadValues({ token_id: t, pub_key: e }, o),
                  { referrer_url: window.location.href }
                ),
              })
              .then((e) =>
                !0 === e.success
                  ? (null !== i && i.close(),
                    this.loggerService.info({
                      event_name: sn.PAY,
                      event_category: ln.CREDIT_CARD,
                      key: cn.FINISH,
                      value: e,
                    }),
                    r(e))
                  : !0 === this.options.isSandbox
                  ? (this.sandbox3DSModal.setModalOpenedState(!0),
                    void this.eventTarget.addEventListener(
                      "action",
                      (t) => {
                        this.apiService
                          .post(this.SANDBOX_CALLBACK_ENDPOINT, {
                            body: {
                              transaction_id: e.transaction_id,
                              is_valid_3ds_check: "authorized" === t.detail,
                            },
                          })
                          .then((e) => {
                            if (!0 === e.success) return r(e);
                            a(e);
                          })
                          .catch((e) => {
                            a(e);
                          })
                          .finally(() => {
                            this.sandbox3DSModal.setModalOpenedState(!1);
                          });
                      },
                      !1
                    ))
                  : (this.loggerService.info({
                      event_name: sn.REDIRECT_TO_3DS,
                      event_category: ln.CREDIT_CARD,
                      key: cn.START,
                      value: e,
                    }),
                    void (function (e, t) {
                      if (null !== t)
                        try {
                          t.location.href = e;
                        } catch (n) {
                          window.location.href = e;
                        }
                      else window.location.href = e;
                    })(e.redirect_url, i))
              )
              .catch((e) => {
                !1 === this.options.isSandbox
                  ? setTimeout(() => {
                      null !== i && i.close(), a(e);
                    }, 2e3)
                  : a(e);
              });
        })
      );
    }
    render(e) {
      return this.mount(e);
    }
    onMounted(e) {
      super.onMounted(),
        !0 === this.options.isSandbox && this.prepareSandboxModal(),
        new et(e.querySelector(".inputs__bin"), { creditCard: !0 }),
        new et(e.querySelector(".inputs__date"), {
          date: !0,
          datePattern: ["m", "y"],
        }),
        new et(e.querySelector(".inputs__cvc"), {
          blocks: [4],
          numericOnly: !0,
        });
    }
    onUnmounted() {
      var e;
      null == (e = this.sandbox3DSModal) || e.unmount();
    }
    getSelectedTheme() {
      return an;
    }
    prepareSandboxModal() {
      (this.eventTarget = new EventTarget()),
        (this.sandbox3DSModal = new rn(!1, this.eventTarget)),
        (window.sandbox3DSModal = this.sandbox3DSModal);
      const e = document.querySelector("body"),
        t = document.createElement("div");
      (t.id = "ycp-3ds-modal"),
        e.appendChild(t),
        this.sandbox3DSModal.mount(`#${t.id}`);
    }
    validate() {
      this.validation.purgeErrors();
      const e = this.getValue();
      Object.keys(e).forEach((t) => {
        var n;
        if ("" === e[t])
          return void this.validation.mutate(
            t,
            Wt("gateway.credit-card.form.validation.no_empty")
          );
        const i =
          null == (n = this.validation.get(t)) ? void 0 : n.validate(e[t]);
        null != i && this.validation.mutate(t, i);
      });
      const t = !1 === this.validation.isValid(),
        n = !1 === this.validateEmail();
      return (!t && !n) || (this.validation.displayErrors(), !1);
    }
    validateEmail() {
      var e, t, n;
      if (!1 === this.config.YCP_FEATURE_REQUIRE_EMAIL) return !0;
      const i = this.getValue();
      if ("" === (null == (e = i.customer) ? void 0 : e.email))
        return (
          this.validation.mutate(
            "email",
            Wt("gateway.credit-card.form.validation.no_empty")
          ),
          !1
        );
      const r =
        null == (n = this.validation.get("email"))
          ? void 0
          : n.validate(null == (t = i.customer) ? void 0 : t.email);
      return null == r || (this.validation.mutate("email", r), !1);
    }
    inputInteractionLog(e, t) {
      this.loggerService.collect({
        key: h.INPUT_INTERACTION,
        value: e,
        extra: o({ input: { interaction: t } }),
      });
    }
  }
  const un = (e) => {
    let t = [
      {
        image:
          "https://seller-area.youcan.shop/store-admin/images/settings/cashplus/step1.svg",
        contents: Wt("gateway.cash-plus.form.guide.step-1.description"),
        label: Wt("gateway.cash-plus.form.guide.step-1.label"),
      },
      {
        image:
          "https://seller-area.youcan.shop/store-admin/images/settings/cashplus/step2.svg",
        contents: Wt("gateway.cash-plus.form.guide.step-2.description"),
        label: Wt("gateway.cash-plus.form.guide.step-2.label"),
      },
      {
        image:
          "https://seller-area.youcan.shop/store-admin/images/settings/cashplus/step3.svg",
        contents: Wt("gateway.cash-plus.form.guide.step-3.description"),
        label: Wt("gateway.cash-plus.form.guide.step-3.label"),
      },
      {
        image:
          "https://seller-area.youcan.shop/store-admin/images/settings/cashplus/step4.svg",
        contents: Wt("gateway.cash-plus.form.guide.step-4.description"),
        label: Wt("gateway.cash-plus.form.guide.step-4.label"),
      },
    ];
    return Mt`
    <div class="main-container" data-gateway="${e.id}" dir="${
      "ar" === YCPay.locale ? "rtl" : "ltr"
    }">
      <div class="cashPlus-illustrations">
        <div id="cashPlus-illustrations" class="illustrations">
          ${t.map(
            ({ contents: e, image: t }) => Mt`
              <article class="cashPlus-illustration">
                <img src="${t}" class="image" alt="CashPlus guide" />
                <p class="text">${e}</p>
              </article>
            `
          )}
        </div>
        <div id="cashPlus-illustrations-pagination" class="pagination">
          ${t.map(
            ({ label: e }, t) => Mt`
                <div class="indicator ${0 === t ? "active" : ot}">
                  ${0 !== t ? Mt` <div class="line"></div>` : ot}
                  <div class="dot">
                    <span class="label-number">${t + 1}</span>
                    <span class="label-text">${e}</span>
                  </div>
                </div>
              `
          )}
        </div>
        <div class="navigation">
          <button @click="${() =>
            e.navigate(
              -1
            )}" id="previous-button" class="navigation-button previous-button">
            <img src="${
              Se.ASSETS_URL
            }/icons/common/chevron-left.svg" alt="Previous step" class="icon" />
          </button>
          <button @click="${() =>
            e.navigate(
              1
            )}" id="next-button" class="navigation-button next-button">
            <img src="${
              Se.ASSETS_URL
            }/icons/common/chevron-left.svg" alt="Next step" class="icon" />
          </button>
        </div>
      </div>
      <div id="loading_tag" class="cashPlus_loading_box hidden">
        <img src="${
          Se.ASSETS_URL
        }/icons/common/loader.svg" alt="Generating code" class="loader" />
        <span class="text">${Wt(
          "gateway.cash-plus.form.generating-code"
        )}</span>
      </div>
      <div id="token-container" class="cashPlus_token_container hidden">
        <label class="label">${Wt("gateway.cash-plus.form.your-code")}</label>
        <div class="cashPlus_input_container">
          <input type="text" id="token_id" readonly value="${
            e.token
          }" class="textField" />
          <button @click=${() =>
            e.copyTokenId()} id="continue_button" class="button">
            ${Wt("common.copy")}
          </button>
        </div>
        <div id="cashplus-success-message" class="success-message hidden">
          <img src="${
            Se.ASSETS_URL
          }/icons/cashplus/badge-check.svg" alt="Token copied successfully" class="icon" />
          <span class="text">${Wt("gateway.cash-plus.form.copy-success")}</span>
        </div>
      </div>
    </div>
  `;
  };
  var hn = (() =>
    "/*!\n * Copyright (C) - YouCan - All Rights Reserved\n * Unauthorized copying of this file, via any medium is strictly prohibited\n * Proprietary and confidential\n */.cashplus-selector{align-items:center;background-size:contain;display:flex;justify-content:center;position:relative}.cashplus-selector img{height:17px}.cashplus-selector p{color:#fff;font-size:16px;font-style:normal;font-weight:600;line-height:21px}.cashplus-selector p span{color:#ffc700}\n")();
  const pn = () => Mt`
    <style>
      ${hn}
    </style>
    <div
      class="cashplus-selector gateway-selector__button"
      style="
          background-image:
            url('${Se.ASSETS_URL}/images/cashplus/selector-bg.png'),
            linear-gradient(272.37deg, #066570 -10.89%, #23adb9 176.23%);
          "
    >
      <img src="${
        Se.ASSETS_URL
      }/icons/cashplus/cashplus.svg" alt="CashPlus logo" />
      <p>
        ${Wt("gateway.cash-plus.selector.cash")}
        <span>${Wt("gateway.cash-plus.selector.plus")}</span>
      </p>
    </div>
  `;
  var mn = (() =>
    "body,html{font-family:Poppins,sans-serif}/*!\n * Copyright (C) - YouCan - All Rights Reserved\n * Unauthorized copying of this file, via any medium is strictly prohibited\n * Proprietary and confidential\n */.main-container{background-color:#fff;border:1px solid #dcdfe1;border-radius:8px;box-shadow:0 1px 2px #0000000d,0 1px 5px #0000000d;box-sizing:border-box;direction:ltr;display:flex;flex-direction:column;margin:auto;max-width:654px;padding:16px;width:100%}.main-container .form-header{align-items:center;display:flex;justify-content:space-between}.main-container .form-header .back_button{align-items:center;background:none;border:none;color:#111827;cursor:pointer;display:flex}.main-container .form-header .back_button .icon{fill:currentColor;height:20px;margin-right:6px;width:20px}.main-container .form-header .back_button .text{color:inherit;font-size:16px;font-weight:500;margin:0}.main-container .form-header .back_button:hover .text{text-decoration:underline}.main-container .form-header .header-title{color:#111827;font-size:16px;font-weight:500;margin:0}.main-container .cashPlus-illustrations{display:flex;flex-direction:column;justify-content:center;position:relative;width:100%}.main-container .cashPlus-illustrations .illustrations{-ms-overflow-style:none;align-items:flex-start;display:flex;flex:1;overflow-x:scroll;padding:4px 0;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;scrollbar-width:none}.main-container .cashPlus-illustrations .illustrations .cashPlus-illustration{align-items:center;display:flex;flex-direction:column;flex-shrink:0;padding:0 16px;scroll-snap-align:center;width:100%}.main-container .cashPlus-illustrations .illustrations .cashPlus-illustration .image{height:215px;margin-bottom:14px}.main-container .cashPlus-illustrations .illustrations .cashPlus-illustration .text{color:#111827;font-size:16px;font-weight:400;margin:0;text-align:center}.main-container .cashPlus-illustrations .illustrations::-webkit-scrollbar{height:0;width:0}.main-container .cashPlus-illustrations .pagination{align-items:center;display:flex;margin:18px auto 0;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.main-container .cashPlus-illustrations .pagination .indicator{align-items:center;display:flex}.main-container .cashPlus-illustrations .pagination .indicator .dot{align-items:center;background:#ecf4ff none;border:1px solid #98c1ff;border-radius:9999px;color:#25366d;cursor:pointer;display:flex;font-size:10px;font-weight:600;height:22px;justify-content:center;padding:0 9px;width:22px}.main-container .cashPlus-illustrations .pagination .indicator .dot .label-text{display:none}.main-container .cashPlus-illustrations .pagination .indicator .line{background-color:#98c1ff;height:1px;width:20px}.main-container .cashPlus-illustrations .pagination .indicator.active .dot{background-color:#004fc7;border-color:#004fc7;color:#fff;width:unset}.main-container .cashPlus-illustrations .pagination .indicator.active .dot .label-text{display:inline-block}.main-container .cashPlus-illustrations .pagination .indicator.active .dot .label-number{display:none}.main-container .cashPlus-illustrations .navigation{display:flex;justify-content:space-between;left:0;position:absolute;top:107.5px;width:100%}.main-container .cashPlus-illustrations .navigation .navigation-button{background:rgba(17,24,39,.1);border:none;border-radius:9999px;cursor:pointer;display:flex;height:-webkit-min-content;height:-moz-min-content;height:min-content;outline-color:#458fff;outline-offset:2px;padding:4px;transition:background .15s ease-in-out}.main-container .cashPlus-illustrations .navigation .navigation-button .icon{height:24px;width:24px}.main-container .cashPlus-illustrations .navigation .navigation-button:hover{background:rgba(17,24,39,.15)}.main-container .cashPlus-illustrations .navigation .navigation-button.next-button .icon{transform:rotateY(180deg)}.main-container .cashPlus_loading_box{align-items:center;border:1px solid #e5e7eb;border-radius:8px;display:flex;margin-left:auto;margin-right:auto;padding:10px 14px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.main-container .cashPlus_loading_box .loader{-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite;height:24px;margin-right:10px;width:24px}@-webkit-keyframes spin{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.main-container .cashPlus_loading_box .text{color:#25366d;font-size:12px;font-weight:500}.main-container .cashPlus_token_container{display:flex;flex-direction:column;width:100%}.main-container .cashPlus_token_container .label{color:#111827;font-size:16px;font-weight:500;margin-bottom:8px}.main-container .cashPlus_token_container .cashPlus_input_container{align-items:center;display:flex;width:100%}.main-container .cashPlus_token_container .cashPlus_input_container .textField{background:#fff;border:1px solid #dcdfe1;border-radius:8px;box-shadow:0 1px 2px #9096a71a;color:#414757;flex:1;font-size:16px;font-weight:400;height:44px;outline-color:#458fff;outline-offset:2px;padding:12px 16px;width:100%}.main-container .cashPlus_token_container .cashPlus_input_container .button{align-items:center;background:#004fc7;border:none;border-radius:6px;color:#fff;cursor:pointer;display:flex;font-size:16px;font-weight:500;height:44px;justify-content:center;outline-color:#458fff;outline-offset:2px;padding:12px 18px;text-transform:uppercase;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.main-container .cashPlus_token_container .cashPlus_input_container .button.copied{cursor:default;text-transform:capitalize}.main-container .cashPlus_token_container .cashPlus_input_container .button:not(.copied){-webkit-animation:pulse 2s infinite;animation:pulse 2s infinite;box-shadow:0 0 #000}@-webkit-keyframes pulse{0%{box-shadow:0 0 #004fc7b3}70%{box-shadow:0 0 0 6px transparent}to{box-shadow:0 0 0 0 transparent}}@keyframes pulse{0%{box-shadow:0 0 #004fc7b3}70%{box-shadow:0 0 0 6px transparent}to{box-shadow:0 0 0 0 transparent}}.main-container .cashPlus_token_container .cashPlus_input_container>*~*{margin-left:8px}.main-container .cashPlus_token_container .success-message{align-items:center;background-color:#e9fbf2;border-radius:8px;display:flex;margin-top:12px;padding:8px;width:100%}.main-container .cashPlus_token_container .success-message .icon{fill:currentColor;color:#469b76;height:18px;margin-right:6px;width:18px}.main-container .cashPlus_token_container .success-message .text{color:#275944;font-size:12px;font-weight:500}.main-container .hidden{display:none!important}.main-container[dir=rtl]{direction:rtl}.main-container[dir=rtl] .form-header,.main-container[dir=rtl] .form-header .back_button{flex-direction:row-reverse}.main-container[dir=rtl] .cashPlus-illustrations .pagination .indicator .dot .label-number,.main-container[dir=rtl] .cashPlus-illustrations .pagination .indicator .dot .label-text{margin-top:3px}.main-container[dir=rtl] .cashPlus-illustrations .navigation .navigation-button.next-button .icon{transform:rotateY(0)}.main-container[dir=rtl] .cashPlus-illustrations .navigation .navigation-button.previous-button .icon{transform:rotateY(180deg)}.main-container[dir=rtl] .cashPlus_token_container .cashPlus_input_container>*~*{margin-left:0;margin-right:8px}.main-container[dir=rtl] .cashPlus_token_container .success-message .icon{margin-left:6px;margin-right:0}.main-container[dir=rtl] .cashPlus_loading_box .loader{margin-left:10px;margin-right:0}.main-container[dir=rtl] *{font-family:Tajawal,sans-serif}.main-container>*~*{margin-top:30px}.main-container *{box-sizing:border-box;font-family:Poppins,sans-serif}@media screen and (max-width:640px){.main-container .cashPlus_token_container .cashPlus_input_container{flex-direction:column}.main-container .cashPlus_token_container .cashPlus_input_container .button,.main-container .cashPlus_token_container .cashPlus_input_container .textField{width:100%}.main-container .cashPlus_token_container .cashPlus_input_container>*~*{margin-left:0;margin-right:0;margin-top:8px}}\n")();
  class fn extends Vt {
    constructor(e, t) {
      super(e, t),
        __publicField(this, "CASHPLUS_INIT_ENDPOINT", "cashplus/init"),
        __publicField(this, "CASHPLUS_PAYMENT_TIMEOUT", 10),
        __publicField(this, "scrollBehaviour", {
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        }),
        __publicField(this, "id", Ne.CASH_PLUS),
        __publicField(this, "name", Wt("gateway.cash-plus.name")),
        __publicField(
          this,
          "image",
          `${this.config.APP_URL}/images/YCPay/ic-cashplus.svg`
        ),
        __publicField(this, "selector", pn),
        __publicField(this, "template", un),
        __publicField(this, "token", null),
        this.setValue({ state: Me.UNVALIDATED, intervalId: 0, timeoutId: 0 });
    }
    render(e) {
      return this.mount(e);
    }
    pay(e, t) {
      return (
        this.loggerService.info({
          event_name: sn.PAY,
          event_category: ln.CASHPLUS,
          key: cn.START,
          value: { token: t },
        }),
        this.eventBus.dispatchEvent(
          new CustomEvent("toggleCashPlusFormLoading")
        ),
        new Promise((n, i) => {
          this.apiService
            .post(this.CASHPLUS_INIT_ENDPOINT, {
              body: { token_id: t, pub_key: e },
            })
            .then((e) => {
              this.eventBus.dispatchEvent(
                new CustomEvent("tokenGenerated", {
                  detail: { token: e.token },
                })
              ),
                this.eventBus.addEventListener("FinishCashPlusPayment", () =>
                  void 0 !== typeof e.transaction_id
                    ? (this.loggerService.info({
                        event_name: sn.PAY,
                        event_category: ln.CASHPLUS,
                        key: cn.FINISH,
                        value: __spreadValues({}, e),
                      }),
                      n(e))
                    : i("transaction_id not found")
                );
            })
            .catch((e) => {
              this.loggerService.error(e, {
                event_name: sn.PAY,
                event_category: ln.CASHPLUS,
                key: cn.ERROR,
                value: { token: t },
              }),
                i(e);
            })
            .finally(() => {
              this.eventBus.dispatchEvent(
                new CustomEvent("toggleCashPlusFormLoading")
              );
            });
        })
      );
    }
    finishCashPlusPayment() {
      this.eventBus.dispatchEvent(new CustomEvent("FinishCashPlusPayment"));
    }
    onMounted(...e) {
      super.onMounted(),
        this.eventBus.addEventListener("tokenGenerated", (e) => {
          var t, n;
          const i = e.detail;
          (this.token = i.token),
            (this.shadowElement.querySelector("#token_id").value = this.token),
            null == (t = this.shadowElement.querySelector("#loading_tag")) ||
              t.classList.toggle("hidden"),
            null ==
              (n = this.shadowElement.querySelector("#token-container")) ||
              n.classList.toggle("hidden"),
            this.setContinueButtonState(
              null !== this.token && "" !== this.token
            );
        }),
        this.eventBus.addEventListener("toggleCashPlusFormLoading", () => {
          this.shadowElement
            .querySelector("#loading_tag")
            .classList.toggle("hidden");
        }),
        this.initCarousel();
    }
    onUnmounted(...e) {
      const t = this.getValue();
      clearTimeout(t.timeoutId);
    }
    getSelectedTheme() {
      return mn;
    }
    setContinueButtonState(e = !1) {
      const t = this.shadowElement.querySelector("#continue_button");
      (t.disabled = !e),
        (t.hidden = !e),
        (this.shadowElement.querySelector("#loading_tag").style.display =
          "none");
    }
    async copyTokenId() {
      this.loggerService.collect({
        key: h.INPUT_INTERACTION,
        value: "cashplus-copy-token",
        extra: o({ input: { interaction: p.CLICK } }),
      });
      const e = this.shadowElement.querySelector("#continue_button"),
        t = this.getValue();
      if (t.state === Me.VALIDATED) return;
      if (t.state === Me.IN_PROGRESS)
        return clearTimeout(t.timeoutId), void (await this.validateToken(e));
      let n = this.CASHPLUS_PAYMENT_TIMEOUT;
      (t.intervalId = setInterval(() => {
        (e.innerHTML = `\n        ${Wt("common.continue")}... ${(
          n - 1
        ).toString()}\n      `),
          n--;
      }, 1e3)),
        (t.state = Me.IN_PROGRESS),
        (t.timeoutId = setTimeout(
          async () => await this.validateToken(e),
          1e3 * this.CASHPLUS_PAYMENT_TIMEOUT
        )),
        this.setValue(t);
    }
    async validateToken(e) {
      const t = this.getValue();
      clearInterval(t.intervalId),
        (e.innerHTML = Wt("common.copied")),
        e.classList.add("copied"),
        this.finishCashPlusPayment(),
        (t.state = Me.VALIDATED),
        this.shadowElement
          .querySelector("#cashplus-success-message")
          .classList.remove("hidden"),
        this.setValue(t);
      try {
        !0 === /Mobi/i.test(window.navigator.userAgent)
          ? await navigator.share({ text: this.token })
          : await navigator.clipboard.writeText(this.token);
      } catch (n) {
        await navigator.clipboard.writeText(this.token);
      }
      this.loggerService.collect({
        key: h.CASHPLUS_COPY_TOKEN,
        value: this.token,
      });
    }
    initCarousel() {
      const e = this.shadowElement.querySelector("#cashPlus-illustrations"),
        t = this.shadowElement.querySelectorAll(
          "#cashPlus-illustrations-pagination .indicator"
        );
      if (null !== e) {
        e.addEventListener("scroll", () => {
          const n = e.children[0].offsetWidth,
            i = Math.round(Math.abs(e.scrollLeft) / n);
          for (let e = 0; e < t.length; e++)
            t[e].classList.remove("active"),
              e === i && t[e].classList.add("active");
        });
        for (let n = 0; n < t.length; n++)
          t[n].addEventListener("click", () => {
            e.children[n].scrollIntoView(this.scrollBehaviour);
          });
      }
    }
    navigate(e) {
      const t = this.shadowElement.querySelectorAll(
        "#cashPlus-illustrations-pagination .indicator"
      );
      let n = 0;
      for (let i = 1; i < t.length; i++)
        if (!0 === t[i].classList.contains("active")) {
          n = i;
          break;
        }
      (n += e),
        n < 0 ? (n = t.length - 1) : n > t.length - 1 && (n = 0),
        this.loggerService.collect({
          key: h.CASHPLUS_NAVIGATE_CAROUSEL,
          value: n + 1,
        }),
        this.shadowElement
          .querySelectorAll("#cashPlus-illustrations .cashPlus-illustration")
          [n].scrollIntoView(this.scrollBehaviour);
    }
    validate() {
      return !0;
    }
  }
  var gn = (() =>
      "body,html{font-family:Poppins,sans-serif}/*!\n * Copyright (C) - YouCan - All Rights Reserved\n * Unauthorized copying of this file, via any medium is strictly prohibited\n * Proprietary and confidential\n */.main-container{background-color:#fff;border:1px solid #dcdfe1;border-radius:10px;box-shadow:0 1px 2px #0000000d,0 1px 5px #0000000d;box-sizing:border-box;direction:ltr;display:flex;flex-direction:column;margin:auto;max-width:654px;padding:16px;width:100%}.main-container .form-header{align-items:center;display:flex;justify-content:space-between}.main-container .form-header .back_button{align-items:center;background:none;border:none;color:#111827;cursor:pointer;display:flex}.main-container .form-header .back_button .icon{fill:currentColor;height:20px;margin-right:6px;width:20px}.main-container .form-header .back_button .text{color:inherit;font-size:16px;font-weight:500;margin:0}.main-container .form-header .back_button:hover .text{text-decoration:underline}.main-container .form-header .header-title{color:#111827;font-size:16px;font-weight:500;margin:0}.main-container .success-message{align-items:center;background-color:#e9fbf2;border-radius:8px;display:flex;margin-top:12px;padding:8px;width:100%}.main-container .success-message .icon{fill:currentColor;color:#469b76;height:18px;margin-right:6px;width:18px}.main-container .success-message .text{color:#275944;font-size:12px;font-weight:500}.main-container .youcanpay-wallet_loading_box{align-items:center;border:1px solid #e5e7eb;border-radius:8px;display:flex;margin-left:auto;margin-right:auto;padding:10px 14px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.main-container .youcanpay-wallet_loading_box .loader{-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite;height:24px;margin-right:10px;width:24px}@-webkit-keyframes spin{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.main-container .youcanpay-wallet_loading_box .text{color:#25366d;font-size:12px;font-weight:500}.main-container #wallet-prompt-message{align-items:center;border-radius:8px;display:flex;margin-top:12px;padding:8px;width:100%}.main-container #wallet-prompt-message .text{color:#1f2937;font-size:16px;font-weight:500;text-align:center;width:100%}.main-container .hidden{display:none!important}.main-container[dir=rtl]{direction:rtl}.main-container[dir=rtl] .form-header,.main-container[dir=rtl] .form-header .back_button{flex-direction:row-reverse}.main-container[dir=rtl] .youcanpay-wallet_loading_box .loader{margin-left:10px;margin-right:0}.main-container[dir=rtl] *{font-family:Tajawal,sans-serif}.main-container>*~*{margin-top:30px}.main-container *{box-sizing:border-box;font-family:Poppins,sans-serif}\n")(),
    vn = (() =>
      "/*!\n * Copyright (C) - YouCan - All Rights Reserved\n * Unauthorized copying of this file, via any medium is strictly prohibited\n * Proprietary and confidential\n */.youcanpay-wallet-selector{align-items:center;background-color:#4b83fc;display:flex;justify-content:center;position:relative}.youcanpay-wallet-selector p{color:#fff;font-size:16px;font-style:normal;font-weight:600;line-height:21px}\n")();
  const _n = () => Mt`
    <style>
      ${vn}
    </style>
    <div class="youcanpay-wallet-selector gateway-selector__button">
      <p>${Wt("gateway.wallet.selector")}</p>
    </div>
  `,
    yn = (e) => Mt``;
  var bn = ((e) => (
    (e.ON_OPEN = "_onOpen"),
    (e.ON_CLOSED = "_onClosed"),
    (e.ON_INTERRUPT = "_onInterrupt"),
    e
  ))(bn || {});
  class wn {
    constructor(i = "", r = {}) {
      __publicField(this, "DEFAULT_FEATURE_MAP", {
        width: null,
        height: null,
        left: null,
        top: null,
        menubar: !1,
        toolbar: !1,
        location: !0,
        status: !0,
        resizable: !0,
        scrollbars: !0,
      }),
        __publicField(this, "_destination"),
        __publicField(this, "_name"),
        __publicField(this, "_window", null),
        __publicField(this, "_timer"),
        __publicField(this, "_features", this.DEFAULT_FEATURE_MAP),
        __publicField(this, e, null),
        __publicField(this, t, null),
        __publicField(this, n, null),
        (this._destination = i || ""),
        (this._name = "_blank"),
        (this._timer = null),
        (this._window = null),
        this.initializeFeatures(r);
    }
    get window() {
      return this._window;
    }
    spawn() {
      return (
        (this._window = window.open(
          this._destination,
          this._name,
          this.getFeatureString()
        )),
        this._window && !1 === this._window.closed
          ? (this._window.moveTo(this._features.left, this._features.top),
            this._window.focus,
            window.addEventListener("unload", () => {
              this.destroy();
            }),
            "function" == typeof this._onOpen && this._onOpen(this),
            this.awaitClosing())
          : "function" == typeof this._onInterrupt && this._onInterrupt(this),
        this
      );
    }
    destroy() {
      return (
        this._window && !1 === this._window.closed && this._window.close(), this
      );
    }
    resetTimer() {
      window.clearInterval(this._timer), (this._timer = null);
    }
    awaitClosing() {
      "function" == typeof this._onClosed &&
        (this.resetTimer(),
        (this._timer = window.setInterval(() => {
          (this._window && !0 !== this._window.closed) ||
            (this.resetTimer(), this._onClosed(this));
        }, 500)));
    }
    setCallback(e, t) {
      return (this[e] = t), this;
    }
    onOpened(e) {
      return this.setCallback(bn.ON_OPEN, e);
    }
    onClosed(e) {
      return this.setCallback(bn.ON_CLOSED, e);
    }
    onInterrupted(e) {
      return this.setCallback(bn.ON_INTERRUPT, e);
    }
    initializeFeatures(e) {
      e.name
        ? ((this._name = e.name), delete e.name)
        : (this._name =
            "w_" + Date.now() + Math.floor(1e5 * Math.random()).toString());
      for (const t in e)
        t in this._features != !1 &&
          ("boolean" == typeof e[t]
            ? (this._features[t] = e[t] ? 1 : 0)
            : (this._features[t] = e[t]));
      return (
        null === this._features.width &&
          (this._features.width = window.screen.availWidth / 2),
        null === this._features.height &&
          (this._features.width = window.screen.availHeight / 2),
        null === this._features.left &&
          (this._features.left =
            (window.screen.availWidth - this._features.width) / 2),
        null === this._features.right &&
          (this._features.right =
            (window.screen.availWidth - this._features.height) / 2),
        this
      );
    }
    getFeatureString() {
      const e = [];
      for (const t in this._features)
        Object.prototype.hasOwnProperty.call(this._features, t) &&
          null !== this._features[t] &&
          e.push(`${t}=${this._features[t]}`);
      return e.join(",");
    }
  }
  (e = bn.ON_OPEN), (t = bn.ON_CLOSED), (n = bn.ON_INTERRUPT);
  class xn extends Vt {
    constructor(e, t) {
      super(e, t),
        __publicField(this, "WALLET_PAYMENT_URL", "wallet/pay"),
        __publicField(this, "template", yn),
        __publicField(this, "id", Ne.WALLET),
        __publicField(this, "name", Wt("gateway.youcan-pay-wallet.name")),
        __publicField(this, "image", ""),
        __publicField(this, "selector", _n),
        __publicField(this, "token", null);
    }
    render(e) {
      return this.mount(e);
    }
    pay(e, t) {
      return (
        this.loggerService.info({
          event_name: sn.PAY,
          event_category: ln.WALLET,
          key: cn.START,
          value: { token: t },
        }),
        !0 === this.options.isSandbox
          ? Promise.reject()
          : new Promise((n, i) => {
              new wn(
                `${this.config.APP_URL}/${this.WALLET_PAYMENT_URL}?lang=${YCPay.locale}&token_id=${t}&pub_key=${e}`,
                { width: 640, height: 800 }
              )
                .onOpened((e) => {
                  on(e.window.name, ({ origin: t, data: r }) => {
                    if (t === this.config.APP_URL)
                      switch (r.action) {
                        case De.SUCCESS:
                          return (
                            e.destroy(),
                            this.loggerService.info({
                              event_name: sn.PAY,
                              event_category: ln.WALLET,
                              key: cn.FINISH,
                              value: r,
                            }),
                            n(r)
                          );
                        case De.ERROR:
                          return (
                            e.destroy(),
                            this.loggerService.error(new Error(r.body), {
                              event_name: sn.PAY,
                              event_category: ln.WALLET,
                              key: cn.ERROR,
                              value: r,
                            }),
                            i(r)
                          );
                        case De.CANCELLED:
                          e.destroy();
                      }
                  });
                })
                .spawn();
            })
      );
    }
    getSelectedTheme() {
      return gn;
    }
    validate() {
      return !0;
    }
    onMounted(...e) {
      return super.onMounted(e), this.pay(YCPay.publicKey, YCPay.options.token);
    }
  }
  const Cn = (e) => {
    const t = [];
    for (let n = 0; n < e.gateways.length; n++) {
      const i = e.gateways[n];
      t.push(Mt`
      <div @click=${() => e.selectGateway(i.id)}>${i.selector()}</div>
    `);
    }
    return Mt`
    <div class="gateway-selector" dir="${
      "ar" === YCPay.locale ? "rtl" : "ltr"
    }">
      <div class="gateway-selector__gateways">${t}</div>
      <div id="gateway-form"></div>
      <div dir="ltr" class="gateway-selector__footer">
        ${
          e.options.isSandbox
            ? Mt` <label class="gateway-selector__footer__test">Test Mode</label> `
            : ot
        }
        <div dir="ltr" class="gateway-selector__footer__brand">
          ${Wt("gateway.selector.by")}
          <a href="${Se.APP_URL}" target="_blank">
            <img src="${Se.APP_URL}/images/ycpay-logo.svg" />
          </a>
        </div>
      </div>
    </div>
  `;
  };
  var Sn = (() =>
    "body,html{font-family:Poppins,sans-serif}/*!\n * Copyright (C) - YouCan - All Rights Reserved\n * Unauthorized copying of this file, via any medium is strictly prohibited\n * Proprietary and confidential\n */.gateway-selector{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:#fff;border:1px solid #dcdfe1;border-radius:8px;box-sizing:border-box;direction:ltr;margin:auto;max-width:512px;padding:20px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.gateway-selector *{margin:0;padding:0}.gateway-selector__footer{color:#697386;display:grid;font-size:12px;grid-template-columns:1fr 1fr;margin-top:12px;width:100%}.gateway-selector__footer__brand{align-items:flex-start;color:#414757;display:flex;font-size:10.5px;font-style:italic;font-weight:400;grid-column:2;justify-self:end;line-height:16px}.gateway-selector__footer__brand img{height:27px;margin-left:4px;margin-right:4px}.gateway-selector__footer__test{align-items:center;background:#f8c53c;border-radius:4px;color:#161101;display:flex;flex-direction:row;font-size:10px;font-style:normal;font-weight:500;height:22.4px;line-height:15px;padding:4px 6px;width:64px}.gateway-selector__gateways>*~*{margin-top:8px}.gateway-selector__button{border:none;border-radius:6px;cursor:pointer;height:46px}.gateway-selector__button>*~*{margin-left:8px;margin-right:8px}.gateway-selector[dir=rtl]{direction:rtl}.gateway-selector[dir=rtl] *{font-family:Tajawal,sans-serif}.gateway-selector *{box-sizing:border-box;font-family:Poppins,sans-serif}#gateway-form{margin-top:16px}\n")();
  class kn extends Vt {
    constructor(e, t, n) {
      super(n, t),
        __publicField(this, "_gateways", []),
        __publicField(this, "template", Cn),
        (this._gateways = e);
    }
    get gateways() {
      return this._gateways;
    }
    getSelectedTheme() {
      return Sn;
    }
    selectGateway(e) {
      this.eventBus.dispatchEvent(
        new CustomEvent("GatewaySelected", {
          detail: { selectedGateway: e, container: "#gateway-form" },
        })
      );
    }
    render(e) {
      return this.mount(e);
    }
    onMounted(...e) {}
  }
  const Pn = {
      [Ne.CREDIT_CARD]: {
        instantiate: (e, t) => new dn(e, t),
        check: (e) => !0 === e.acceptsCreditCards,
      },
      [Ne.CASH_PLUS]: {
        instantiate: (e, t) => new fn(e, t),
        check: (e) =>
          !0 === e.acceptsCashPlus && !0 === e.cashPlusTransactionEnabled,
      },
      [Ne.WALLET]: {
        instantiate: (e, t) => new xn(e, t),
        check: (e) =>
          !0 === e.acceptsYouCanPayWallet && !0 === e.walletTransactionEnabled,
      },
    },
    En = (e, t, n = null) => {
      const i = Tn(YCPay.accountConfig, e);
      if (0 === i.length) return null;
      if (1 === i.length) {
        const e = An(i[0]);
        if (void 0 === e) throw Error("selected gateway is invalid");
        return e.instantiate(t, n);
      }
      const r = [];
      return (
        i.forEach((e) => {
          const i = An(e);
          void 0 !== i && r.push(i.instantiate(t, n));
        }),
        new kn(r, n, t)
      );
    },
    Tn = (e, t = []) => {
      let n = [];
      for (const i in Ne) {
        const t = Oe(Ne, i),
          r = An(t);
        void 0 !== r && !0 === r.check(e) && n.push(t);
      }
      return t.length > 0 && (n = n.filter((e) => -1 !== t.indexOf(e))), n;
    },
    An = (e) => Pn[e],
    Ln = (e) => Mt`
    <div class="loading_box">
      <img src="${Se.ASSETS_URL}/icons/common/loader.svg" alt="Loading" class="loader" draggable="false" />
    </div>
  `;
  var Fn = (() =>
    "/*!\n * Copyright (C) - YouCan - All Rights Reserved\n * Unauthorized copying of this file, via any medium is strictly prohibited\n * Proprietary and confidential\n */.loading_box{align-items:center;border:1px solid #e5e7eb;border-radius:8px;display:flex;margin:6px auto;padding:10px 14px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.loading_box .loader{-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite;height:24px;width:24px}@-webkit-keyframes spin{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(1turn)}}\n")();
  class Rn extends Ut {
    constructor(e) {
      super(e), __publicField(this, "template", Ln);
    }
    getSelectedTheme() {
      return Fn;
    }
  }
  const In = async (e) => {
      const t = await ((e) => {
          const t = e.map((e) =>
            Promise.resolve(e).then(
              (e) => ({ status: "fulfilled", value: e }),
              (e) => ({ status: "rejected", reason: e })
            )
          );
          return Promise.all(t);
        })(e),
        n = ((e) => e.filter((e) => "fulfilled" === e.status))(t),
        i = ((e) => e.filter((e) => "rejected" === e.status))(t);
      return [n, i];
    },
    On = (e) => Mt` <div class="main_container">Service unavailable</div> `;
  var Nn = (() => "")();
  class Mn extends Ut {
    constructor(e) {
      super(e), __publicField(this, "template", On);
    }
    getSelectedTheme() {
      return Nn;
    }
  }
  var Dn = (() =>
    '@import"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap";@import"https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap";/*!\n * Copyright (C) - YouCan - All Rights Reserved\n * Unauthorized copying of this file, via any medium is strictly prohibited\n * Proprietary and confidential\n */\n')();
  const Un = class {
    constructor(e, t) {
      __publicField(this, "logger"),
        __publicField(this, "eventBus", new EventTarget()),
        __publicField(this, "enabledGateways", []),
        __publicField(this, "selectedGateway", null),
        __publicField(this, "loadedLogUserInteractions", !1);
      try {
        (t.isSandbox = ((e) => {
          const t = e && e.toString().toLowerCase().trim();
          return "true" == t || "1" == t;
        })(t.isSandbox)),
          (Un.options = __spreadValues(__spreadValues({}, Un.options), t)),
          c(Un.options.errorContainer),
          (this.logger = Pe.getInstance()),
          this.getFormContainer();
      } catch (n) {
        throw (s(n.message), n);
      }
      Un.publicKey = e;
      try {
        (Dt(
          Un.options.formContainer
        ).innerHTML = `\n        <style>\n          ${Dn}\n        </style>\n      `),
          this.logger.collect({
            key: h.INITIATE_INTEGRATION,
            value: e,
            extra: o(
              __spreadProps(__spreadValues({}, t), {
                screen: { width: screen.width, height: screen.height },
              })
            ),
          }),
          void 0 === t.locale ||
            qt().includes(t.locale.toLowerCase()) ||
            this.logger.collect({ key: h.UNSUPPORTED_LOCALE, value: t.locale });
      } catch (n) {
        throw (
          (this.logger.collect({
            key: h.FATAL_ERROR,
            value: "_constructor_",
            extra: o({ error: u(n) }),
          }),
          n)
        );
      }
      this.onGatewaySelected();
    }
    async renderAvailableGateways(e = [], t = "default") {
      try {
        this.logger.info({
          event_name: sn.RENDER_COMPONENT,
          event_category: ln.GATEWAYS_SELECTOR,
          key: cn.START,
          value: e.join(" "),
        }),
          await this.ensureRemoteResourcesAreLoaded(),
          (this.enabledGateways = e);
        const n = En(
          e,
          {
            theme: t,
            isSandbox: Un.options.isSandbox,
            isWebView: this.isWebview(),
            locale: Un.options.locale,
          },
          this.eventBus
        );
        return null === n
          ? void s(Wt("errors.general.no-available-gateways"))
          : (n instanceof kn || (this.selectedGateway = n),
            n.render(Un.options.formContainer),
            this.logger.info({
              event_name: sn.RENDER_COMPONENT,
              event_category: ln.GATEWAYS_SELECTOR,
              key: cn.FINISH,
              value: e.join(" "),
              extra: {
                is_gateways_selector: n instanceof kn,
                account_config: Un.accountConfig,
              },
            }),
            this.logUserInteractions(),
            n);
      } catch (n) {
        s(n),
          this.logger.error(n, {
            event_name: sn.RENDER_COMPONENT,
            event_category: ln.GATEWAYS_SELECTOR,
            key: cn.ERROR,
            value: e.join(" "),
          });
      }
    }
    renderCashPlusForm(e = "default") {
      this.renderForm(Un.options.formContainer, Ne.CASH_PLUS, e);
    }
    renderCreditCardForm(e = "default") {
      this.renderForm(Un.options.formContainer, Ne.CREDIT_CARD, e);
    }
    renderWalletForm(e = "default") {
      this.renderForm(Un.options.formContainer, Ne.WALLET, e);
    }
    setToken(e) {
      Un.options.token = e;
    }
    async renderForm(e, t, n = "default", i = !1) {
      try {
        this.logger.info({
          event_name: sn.RENDER_COMPONENT,
          event_category: ln.GATEWAY_FORM,
          key: cn.START,
          value: t,
        }),
          await this.ensureRemoteResourcesAreLoaded();
        const r = ((e, t, n) => En([e], t, n))(
          t,
          {
            theme: n,
            locale: Un.options.locale,
            isBackButtonVisible: i,
            isSandbox: Un.options.isSandbox,
            isWebView: this.isWebview(),
          },
          this.eventBus
        );
        if (null === r) {
          const e = "Requested gateway is invalid";
          return (
            s(e),
            void this.logger.error(new Error(e), {
              event_name: sn.RENDER_COMPONENT,
              event_category: ln.GATEWAY_FORM,
              key: cn.ERROR,
              value: t,
            })
          );
        }
        return (
          r.render(e),
          (this.selectedGateway = r),
          this.logger.info({
            event_name: sn.RENDER_COMPONENT,
            event_category: ln.GATEWAY_FORM,
            key: cn.FINISH,
            value: t,
          }),
          this.logUserInteractions(),
          r
        );
      } catch (r) {
        s(r),
          this.logger.error(r, {
            event_name: sn.RENDER_COMPONENT,
            event_category: ln.GATEWAY_FORM,
            key: cn.ERROR,
            value: t,
          });
      }
    }
    reset(e = "default") {
      null !== this.selectedGateway &&
        !1 !== this.selectedGateway.isMounted() &&
        (this.selectedGateway.unmount(),
        this.renderAvailableGateways(this.enabledGateways, e));
    }
    async pay(e = null) {
      return (
        l(),
        null !== e && this.setToken(e),
        new Promise(async (e, t) => {
          if (
            null !== this.selectedGateway &&
            !0 === this.selectedGateway.isMounted()
          ) {
            if (!1 === this.selectedGateway.validate())
              return t(Wt("gateway.credit-card.form.validation.error"));
            const i = {
              gateway: this.selectedGateway.id,
              response: {},
              errorMessage: null,
            };
            try {
              (i.response = await this.selectedGateway.pay(
                Un.publicKey,
                Un.options.token
              )),
                e(i);
            } catch (n) {
              (i.response = n), (i.errorMessage = d(n)), s(i), t(i);
            }
          } else {
            const e = Wt("errors.general.no-selected-gateway");
            s(e), t(e);
          }
        })
      );
    }
    isWebview() {
      const e = "standalone" in window.navigator && window.navigator.standalone,
        t = window.navigator.userAgent,
        n = /safari/.test(t.toLowerCase()),
        i = /iphone|ipod|ipad/.test(t.toLowerCase());
      if (this.shouldUseRedirection()) return !0;
      if (i) {
        if (!e && !n) return !0;
      } else if (t.includes("wv")) return !0;
      return !1;
    }
    shouldUseRedirection() {
      const e = window.navigator.userAgent,
        t = new RegExp(
          "FB.{0,300};(FBAV)/(\\d+)(?:\\.(\\d+)|)(?:\\.(\\d+)|)"
        ).test(e),
        n = new RegExp(
          "Mozilla.{1,200}Mobile.{1,100}(Instagram).(\\d+)\\.(\\d+)\\.(\\d+)"
        ).test(e),
        i = e.includes("Snapchat"),
        r = new RegExp(
          "(Twitter for (?:iPhone|iPad)|TwitterAndroid)(?:\\/(\\d+)\\.(\\d+)|)"
        ).test(e);
      return t || n || i || r;
    }
    onGatewaySelected() {
      this.eventBus.addEventListener("GatewaySelected", (e) => {
        var t;
        null == (t = this.selectedGateway) || t.unmount();
        const n = e.detail;
        return this.renderForm(n.container, n.selectedGateway, "", !0);
      });
    }
    async ensureRemoteResourcesAreLoaded() {
      const e = new Rn(this.eventBus);
      e.mount(Un.options.formContainer);
      try {
        const [t, n] = await In([
          Ve(Un.publicKey, Un.options.isSandbox),
          Kt(Un.options.locale),
        ]);
        if ((e.unmount(), 0 !== n.length)) return this.handleServerErrors(n);
        const [i, r] = t;
        Un.accountConfig = i.value;
      } catch (t) {
        throw (e.isMounted() && e.unmount(), t);
      }
    }
    handleServerErrors(e) {
      const [t, n] =
        ((i = (e) => e.reason.status >= 500 && e.reason.status < 600),
        e.reduce(
          ([e, t], n) => (i(n) ? [[...e, n], t] : [e, [...t, n]]),
          [[], []]
        ));
      var i;
      if (0 !== t.length) {
        new Mn(this.eventBus).mount(Un.options.formContainer);
      }
      if (0 !== n.length) {
        const e = new Error(d(n[0].reason));
        throw (
          (this.logger.collect({
            key: h.ACCOUNT_NOT_FOUND,
            value: "_empty_",
            extra: { error: u(e) },
          }),
          n[0].reason.body)
        );
      }
    }
    getFormContainer() {
      const e = Dt(Un.options.formContainer);
      if (null === e) throw new Error("Form container not found");
      return e;
    }
    logUserInteractions() {
      if (!0 === this.loadedLogUserInteractions) return;
      this.loadedLogUserInteractions = !0;
      const e = this.getFormContainer().shadowRoot;
      if (null === e)
        return void this.logger.collect({
          key: h.BAD_FORM_CONTAINER,
          value: Un.options.formContainer,
          extra: { cause: "logUserInteractions()" },
        });
      (() => {
        e.addEventListener("paste", () => {
          var t, n, i, r;
          if (
            (null ==
            (n =
              null == (t = null == e ? void 0 : e.activeElement)
                ? void 0
                : t.shadowRoot)
              ? void 0
              : n.querySelector("[data-gateway]")
            ).dataset.gateway !== Ne.CREDIT_CARD
          )
            return;
          const a =
            null ==
            (r =
              null == (i = null == e ? void 0 : e.activeElement)
                ? void 0
                : i.shadowRoot)
              ? void 0
              : r.activeElement;
          this.logger.collect({
            key: h.INPUT_INTERACTION,
            value: a.dataset.cardInput,
            extra: o({ input: { interaction: p.PASTE } }),
          });
        });
      })();
    }
  };
  let Vn = Un;
  __publicField(Vn, "publicKey", ""),
    __publicField(Vn, "version", "2.0.9"),
    __publicField(Vn, "options", {
      locale: "en",
      token: null,
      formContainer: "",
      isSandbox: !1,
      customCSS: null,
      errorContainer: void 0,
      integrator: "individual",
      fields: {},
    }),
    __publicField(Vn, "accountConfig", null),
    (function () {
      var e;
      try {
        null != window && (window.YCPay = Vn);
        Pe.getInstance().collect({
          key: h.SCRIPT_LOAD_TIME,
          value: null != (e = Te(Se.INTEGRATION_SCRIPT_URL)) ? e : -1,
          extra: o({
            network: Fe(),
            ram: Re(),
            cpu_cores: Ie(),
            scripts: Ae(),
          }),
        });
      } catch (t) {
        Pe.getInstance().collect({
          key: h.FATAL_ERROR,
          value: "_global_",
          extra: { error: u(t) },
        });
      }
    })();
  const $n = {
      general: {
        "no-selected-gateway":
          "Ø§Ù„Ø±Ø¬Ø§Ø¡ ØªØ­Ø¯ÙŠØ¯ Ø·Ø±ÙŠÙ‚Ø© Ø§Ù„Ø¯ÙØ¹ Ù‚Ø¨Ù„ Ø§Ù„Ù…ØªØ§Ø¨Ø¹Ø©.",
        "no-available-gateways":
          "Ù„Ø§ ØªÙˆØ¬Ø¯ Ø¨ÙˆØ§Ø¨Ø§Øª Ù…ØªØ§Ø­Ø© Ù„Ù‡Ø°Ø§ Ø§Ù„Ø­Ø³Ø§Ø¨ ØŒ ÙŠØ±Ø¬Ù‰ ØªØ´ØºÙŠÙ„ Ø¨ÙˆØ§Ø¨Ø© Ø§Ù„Ø¯ÙØ¹ Ù…Ù† Ù„ÙˆØ­Ø© Ø§Ù„ØªØ­ÙƒÙ… Ø§Ù„Ø®Ø§ØµØ© Ø¨Ùƒ.",
        "payments-inactive":
          "Ù„Ø§ ÙŠÙ…ÙƒÙ† Ù…Ø¹Ø§Ù„Ø¬Ø© Ø£ÙŠ Ù…Ø¯ÙÙˆØ¹Ø§Øª Ø£Ø®Ø±Ù‰. Ø¥Ø°Ø§ Ø§Ø³ØªÙ…Ø±Øª Ù‡Ø°Ù‡ Ø§Ù„Ù…Ø´ÙƒÙ„Ø© ØŒ ÙŠØ±Ø¬Ù‰ Ø§Ù„Ø§ØªØµØ§Ù„ Ø¨Ø§Ù„ØªØ§Ø¬Ø± Ù…Ø¨Ø§Ø´Ø±Ø©.",
      },
    },
    zn = {
      "credit-card": {
        name: "Ø¨Ø·Ø§Ù‚Ø© Ø§Ù„Ø¥Ø¦ØªÙ…Ø§Ù†",
        selector: "Ø¨Ø·Ø§Ù‚Ø© Ø§Ù„Ø¥Ø¦ØªÙ…Ø§Ù†",
        form: {
          placeholder: {
            "card-holder-name":
              " Ø§Ø³Ù… ØµØ§Ø­Ø¨ Ø§Ù„Ø¨Ø·Ø§Ù‚Ø© Ø§Ù„Ø¨Ù†ÙƒÙŠØ©",
            "card-number": "Ø±Ù‚Ù… Ø§Ù„Ø¨Ø·Ø§Ù‚Ø© Ø§Ù„Ø¨Ù†ÙƒÙŠØ©",
            "card-expiration": "Ø§Ù„Ø´Ù‡Ø±/ Ø§Ù„Ø³Ù†Ø©",
            cvc: "Ø±Ù…Ø² Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ø§Ù„Ø¨Ø·Ø§Ù‚Ø© CVC",
            email: "Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ",
          },
          validation: {
            error:
              "Ø®Ø·Ø£ Ø£Ø«Ù†Ø§Ø¡ Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† ØµØ­Ø© Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª",
            no_empty: "Ù„Ø§ ÙŠÙ…ÙƒÙ† Ø£Ù† ÙŠÙƒÙˆÙ† Ø§Ù„Ø­Ù‚Ù„ ÙØ§Ø±ØºÙ‹Ø§",
            only_characters:
              "ÙŠÙ…ÙƒÙ† Ø£Ù† ÙŠØ­ØªÙˆÙŠ Ù‡Ø°Ø§ Ø§Ù„Ø­Ù‚Ù„ Ø¹Ù„Ù‰ Ø£Ø­Ø±Ù ÙÙ‚Ø·",
            max_255:
              "Ù„Ø§ ÙŠÙ…ÙƒÙ† Ø£Ù† ÙŠØªØ¬Ø§ÙˆØ² Ù‡Ø°Ø§ Ø§Ù„Ø­Ù‚Ù„ 255 Ø­Ø±ÙÙ‹Ø§",
            invalid_date:
              "ØªØ§Ø±ÙŠØ® Ø§Ù†ØªÙ‡Ø§Ø¡ ØµÙ„Ø§Ø­ÙŠØ© ØºÙŠØ± ØµØ§Ù„Ø­",
            invalid_cvv: "CVV ØºÙŠØ± ØµØ§Ù„Ø­",
            invalid_email: "Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ ØºÙŠØ± ØµØ§Ù„Ø­",
          },
        },
        "3ds": {
          processing: "Ù…Ø¹Ø§Ù„Ø¬Ø© Ø§Ù„Ø¯ÙØ¹",
          do_not_refresh: "Ø§Ù„Ù…Ø±Ø¬Ùˆ Ø¹Ø¯Ù… ØªØ­Ø¯ÙŠØ« Ù‡Ø°Ù‡ Ø§Ù„ØµÙØ­Ø©",
        },
      },
      "cash-plus": {
        name: "ÙƒØ§Ø´ Ø¨Ù„ÙˆØ³",
        selector: { cash: "ÙƒØ§Ø´", plus: "Ø¨Ù„ÙˆØ³" },
        form: {
          guide: {
            "step-1": {
              description:
                'Ø§Ù†Ù‚Ø± Ø¹Ù„Ù‰ "Ø¯ÙØ¹" ÙˆØ§Ø­ØµÙ„ Ø¹Ù„Ù‰ Ø§Ù„Ø±Ù…Ø² Ø§Ù„Ø®Ø§Øµ Ø¨Ùƒ',
              label: "Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø±Ù…Ø²",
            },
            "step-2": {
              description:
                "Ø§Ø°Ù‡Ø¨ Ø¥Ù„Ù‰ Ø£Ù‚Ø±Ø¨ ÙˆÙƒØ§Ù„Ø© ÙƒØ§Ø´ Ø¨Ù„ÙˆØ³ ÙˆØ§Ø¯ÙØ¹ Ø³Ø¹Ø± Ø§Ù„Ù…Ù†ØªØ¬",
              label: "ØªÙ‚Ø¯ÙŠÙ… ÙƒÙˆØ¯",
            },
            "step-3": {
              description:
                "ÙŠØ­Ø¯Ø¯ ÙˆÙƒÙŠÙ„ ÙƒØ§Ø´ Ø¨Ù„ÙˆØ³ Ø§Ù„Ù…Ø¹Ø§Ù…Ù„Ø© Ø¹Ù„Ù‰ Ø£Ù†Ù‡Ø§ Ù†Ø§Ø¬Ø­Ø©",
              label: "Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† ØµØ­Ø© Ø§Ù„Ø¯ÙØ¹",
            },
            "step-4": {
              description:
                "ÙŠØªÙ„Ù‚Ù‰ Ø§Ù„Ø¨Ø§Ø¦Ø¹ Ø§Ù„Ù…Ø§Ù„ØŒ ÙˆÙŠØªÙ… Ø´Ø­Ù† Ø§Ù„Ù…Ù†ØªØ¬",
              label: "Ø¥Ø¶Ø§ÙØ© Ø§Ù„Ø±ØµÙŠØ¯",
            },
          },
          "generating-code":
            "Ø¬Ø§Ø±ÙŠ Ø¥Ù†Ø´Ø§Ø¡ Ø§Ù„ÙƒÙˆØ¯ Ø§Ù„Ø®Ø§Øµ Ø¨Ùƒ ...",
          "your-code":
            "ÙŠØ±Ø¬Ù‰ Ø§Ù„Ø¶ØºØ· Ø¹Ù„Ù‰ Ø²Ø± Ø§Ù„Ù†Ø³Ø® Ù„Ø­ÙØ¸ Ø§Ù„Ø±Ù…Ø² Ø§Ù„Ø®Ø§Øµ Ø¨Ùƒ:",
          "copy-success":
            "ØªÙˆØ¬Ù‘Ù‡ Ø¥Ù„Ù‰ Ø£Ù‚Ø±Ø¨ ÙˆÙƒØ§Ù„Ø© ÙƒØ§Ø´ Ø¨Ù„ÙˆØ³ Ù„Ù„Ø¯ÙØ¹.",
        },
      },
      wallet: {
        name: "YouCan Pay Wallet",
        selector: "YouCan Pay Wallet",
        form: {
          "click-on-pay": "Ø§Ù†Ù‚Ø± Ø¹Ù„Ù‰ Ø²Ø± Ø§Ù„Ø¯ÙØ¹ Ù„Ù„Ù…ØªØ§Ø¨Ø¹Ø©",
          progress: "Ø¬Ø§Ø±ÙŠ Ø§Ù„Ø¯ÙØ¹ ØŒ Ù„Ø§ ØªÙ‚Ù… Ø¨Ø§Ù„ØªØ­Ø¯ÙŠØ«.",
          success: "ØªÙ…Øª Ù…Ø¹Ø§Ù„Ø¬Ø© Ø§Ù„Ø¯ÙØ¹ Ø¨Ù†Ø¬Ø§Ø­.",
        },
      },
      selector: { by: "by" },
    },
    Bn = {
      back: "Ø±Ø¬ÙˆØ¹",
      continue: "Ø§Ø³ØªÙ…Ø±",
      copy: "Ù†Ø³Ø®",
      copied: "ØªÙ… Ø§Ù„Ù†Ø³Ø®",
      "payment-cancelled": "ØªÙ… Ø¥Ù„ØºØ§Ø¡ Ø§Ù„Ø¯ÙØ¹",
    };
  var jn = {
      errors: $n,
      gateway: zn,
      "help-center": {
        "need-help": "ØªØ­ØªØ§Ø¬ Ù…Ø³Ø§Ø¹Ø¯Ø©ØŸ Ù‚Ù… Ø¨Ø²ÙŠØ§Ø±Ø©",
        page: "Ù…Ø±ÙƒØ² Ø§Ù„Ù…Ø³Ø§Ø¹Ø¯Ø© Ø§Ù„Ø®Ø§Øµ Ø¨Ù†Ø§",
      },
      common: Bn,
    },
    Gn = Object.freeze(
      Object.defineProperty(
        { __proto__: null, errors: $n, gateway: zn, common: Bn, default: jn },
        Symbol.toStringTag,
        { value: "Module" }
      )
    );
  const Yn = {
      general: {
        "no-selected-gateway":
          "Veuillez sÃ©lectionner un mode de paiement avant de poursuivre.",
        "no-available-gateways":
          "Il n'y a pas de passerelles disponibles pour ce compte, veuillez activer une passerelle de paiement depuis votre tableau de bord YouCan Pay.",
        "payments-inactive":
          "Impossible de traiter d'autres paiements. Si ce problÃ¨me persiste, veuillez contacter le marchand.",
      },
    },
    Hn = {
      "credit-card": {
        name: "Carte Bancaire",
        selector: "Carte Bancaire",
        form: {
          placeholder: {
            "card-holder-name": "Nom du propriÃ©taire",
            "card-number": "NumÃ©ro de la carte",
            "card-expiration": "MM/AA",
            cvc: "CVC",
            email: "E-mail",
          },
          validation: {
            error: "Erreur lors de la validation des donnÃ©es",
            no_empty: "Le champ ne peut pas Ãªtre vide",
            only_characters: "Ce champ ne peut contenir que des lettres",
            max_255: "Ce champ ne peut pas dÃ©passer 255 lettres",
            invalid_date: "Date d'expiration non valide",
            invalid_cvv: "CVV invalide",
            invalid_email: "Email invalide",
          },
        },
        "3ds": {
          processing: "Traitement du paiement",
          do_not_refresh: "Veuillez vous abstenir de rafraÃ®chir cette page",
        },
      },
      "cash-plus": {
        name: "CashPlus",
        selector: { cash: "CASH", plus: "PLUS" },
        form: {
          guide: {
            "step-1": {
              description: "Cliquez sur â€œPayerâ€œ et obtenez votre code",
              label: "Obtenir votre code",
            },
            "step-2": {
              description:
                "Rendez-vous Ã  l'agence CashPlus la plus proche et payez le produit",
              label: "Fournissez le code",
            },
            "step-3": {
              description: "L'agent marque la transaction comme rÃ©ussie",
              label: "Le paiement est validÃ©",
            },
            "step-4": {
              description:
                "Le vendeur reÃ§oit le paiement, le produit est expÃ©diÃ©",
              label: "Solde ajoutÃ©",
            },
          },
          "generating-code": "GÃ©nÃ©ration de votre code...",
          "your-code":
            "Veuillez appuyer sur le bouton de copie pour enregistrer votre code:",
          "copy-success":
            "Rendez-vous dans l'agence CashPlus la plus proche pour payer.",
        },
      },
      wallet: {
        name: "YouCan Pay Wallet",
        selector: "YouCan Pay Wallet",
        form: {
          "click-on-pay": "Cliquez sur le bouton payer pour continuer.",
          progress: "Paiement en cours, nâ€™actualisez pas la page.",
          success: "Paiement traitÃ© avec succÃ¨s.",
        },
      },
      selector: { by: "by" },
    },
    Wn = {
      back: "Retour",
      continue: "Continuer",
      copy: "Copier",
      copied: "CopiÃ©",
      "payment-cancelled": "Le paiement a Ã©tÃ© annulÃ©.",
    };
  var qn = {
      errors: Yn,
      gateway: Hn,
      "help-center": {
        "need-help": "Besoin d'aide? Visitez notre",
        page: "centre d'aide.",
      },
      common: Wn,
    },
    Zn = Object.freeze(
      Object.defineProperty(
        { __proto__: null, errors: Yn, gateway: Hn, common: Wn, default: qn },
        Symbol.toStringTag,
        { value: "Module" }
      )
    );
  const Kn = {
      general: {
        "no-selected-gateway":
          "Please select a payment method before proceeding.",
        "no-available-gateways":
          "There are no available gateways for this account, please activate a payment gateway from your YouCan Pay dashboard.",
        "payments-inactive":
          "Unable to process any more payments. If this problem persists, please contact the merchant.",
      },
    },
    Jn = {
      "credit-card": {
        name: "Credit Card",
        selector: "Debit or Credit Card",
        form: {
          placeholder: {
            "card-holder-name": "Card Holder Name",
            "card-number": "Card Number",
            "card-expiration": "MM/YY",
            cvc: "CVC",
            "credit-card": "Credit Card",
            email: "E-mail",
          },
          validation: {
            error: "Error while validating data",
            no_empty: "Field can't be empty",
            only_characters: "This field can only have letters",
            max_255: "This field can't exceed 255 letters",
            invalid_date: "Invalid expiration date",
            invalid_cvv: "Invalid CVV",
            invalid_email: "The email is invalid",
          },
        },
        "3ds": {
          processing: "Processing payment",
          do_not_refresh: "Please do not refresh this page",
        },
      },
      "cash-plus": {
        name: "CashPlus",
        selector: { cash: "CASH", plus: "PLUS" },
        form: {
          guide: {
            "step-1": {
              description: "Click on â€œPayâ€ and get your code",
              label: "Get code",
            },
            "step-2": {
              description:
                "Head to the nearest CashPlus agency and pay the product",
              label: "Provide code",
            },
            "step-3": {
              description: "Agent marks the transaction as successful",
              label: "Payment is validated",
            },
            "step-4": {
              description: "Seller receives the payment, product shipped",
              label: "Balance added",
            },
          },
          "generating-code": "Generating your code...",
          "your-code": "Please press the copy button to save your code: ",
          "copy-success": "Head over to the nearest CashPlus agency to pay",
        },
      },
      wallet: {
        name: "YouCan Pay Wallet",
        selector: "YouCan Pay Wallet",
        form: {
          "click-on-pay": "Click on pay button to proceed",
          progress: "Payment in progress, do not refresh.",
          success: "Payment processed successfully.",
        },
      },
      selector: { by: "by" },
    },
    Xn = {
      back: "Back",
      continue: "Continue",
      copy: "Copy",
      copied: "Copied",
      "payment-cancelled": "The payment has been cancelled.",
    };
  var Qn = {
      errors: Kn,
      gateway: Jn,
      "help-center": {
        "need-help": "Need help? Visit our",
        page: "Help Center.",
      },
      common: Xn,
    },
    ei = Object.freeze(
      Object.defineProperty(
        { __proto__: null, errors: Kn, gateway: Jn, common: Xn, default: Qn },
        Symbol.toStringTag,
        { value: "Module" }
      )
    );
});
