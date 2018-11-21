!function(t, e) {"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.scrollSpy = e() : t.scrollSpy = e()
}(window, function() {
  return function(t) {
    var e = {};

    function o(r) {
      if (e[r]) return e[r].exports;
      var n = e[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return t[r].call(n.exports, n, n.exports, o), n.l = !0, n.exports
    }
    return o.m = t, o.c = e, o.d = function(t, e, r) {
      o.o(t, e) || Object.defineProperty(t, e, {
        configurable: !1,
        enumerable: !0,
        get: r
      })
    }, o.r = function(t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      })
    }, o.n = function(t) {
      var e = t && t.__esModule ? function() {
        return t.default
      } : function() {
        return t
      };
      return o.d(e, "a", e), e
    }, o.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "", o(o.s = 1)
  }([function(t, e, o) {
    "use strict";
    o.r(e), o.d(e, "ScrollSpy", function() {
      return r
    });
    class r {
      constructor(t, e = {}) {
        if (!t) throw new Error("First argument is query selector to your navigation.");
        if ("object" != typeof e) throw new Error("Second argument must be instance of Object.");
        this.menuList = t instanceof HTMLElement ? t : document.querySelector(t), this.options = Object.assign({}, {
          offset: 0,
          menuActiveTarget: "li > a",
          sectionClass: ".scrollspy",
          activeClass: "active"
        }, e), this.sections = document.querySelectorAll(this.options.sectionClass)
      }
      onScroll() {
        this.sections.forEach(t => {
          const e = document.documentElement.scrollTop || document.body.scrollTop;
          if (t.offsetTop <= e + this.options.offset) {
            const e = t.getAttribute("id"),
              o = this.menuList.querySelector(`[data-scrollspy="#${e}"]`);
            if (!o) return;
            this.removeCurrentActive(), this.setActive(o)
          }
        })
      }
      setActive(t) {
        t.setAttribute("data-active", "true"), t.classList.add(this.options.activeClass)
      }
      removeCurrentActive() {
        this.menuList.querySelectorAll(this.options.menuActiveTarget).forEach(t => {
          t.setAttribute("data-active", "false"), t.classList.remove(this.options.activeClass)
        })
      }
    }
  }, function(t, e, o) {
    t.exports = ((t, e = {}) => {
      const {
        ScrollSpy: r
      } = o(0), n = new r(t, e);
      return window.onload = n.onScroll(), window.addEventListener("scroll", () => n.onScroll()), n
    })
  }])
});
