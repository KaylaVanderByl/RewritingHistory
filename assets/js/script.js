! function(e) {
    function t(n) {
        if (r[n]) return r[n].exports;
        var o = r[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }
    var r = {};
    return t.m = e, t.c = r, t.i = function(e) {
        return e
    }, t.d = function(e, r, n) {
        t.o(e, r) || Object.defineProperty(e, r, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, t.n = function(e) {
        var r = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(r, "a", r), r
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 1)
}([function(e, t, r) {
    "use strict";

    function n(e) {
        var t = e.querySelectorAll("figure"),
            r = !0,
            n = !1,
            o = void 0;
        try {
            for (var c, s = function() {
                    var e = c.value;
                    e.classList.contains("is-loaded") || setTimeout(function() {
                        var t = new createjs.LoadQueue,
                            r = e.querySelector("span");
                        e.querySelector("img");
                        t.loadFile(e.dataset.src), t.addEventListener("fileprogress", function(t) {
                            e.classList.add("is-loading"), r.style.transform = "scaleY(" + t.loaded + ") translateX(-50%)"
                        }), t.addEventListener("fileload", function(t) {
                            e.classList.remove("is-loading"), r.style.transform = "scaleY(1) translateX(-50%)", e.innerHTML = "", e.appendChild(t.result), e.classList.add("is-loaded")
                        })
                    }, 500)
                }, i = t[Symbol.iterator](); !(r = (c = i.next()).done); r = !0) s()
        } catch (e) {
            n = !0, o = e
        } finally {
            try {
                !r && i.return && i.return()
            } finally {
                if (n) throw o
            }
        }
    }

    function o(e) {
        window.innerWidth > 600 && (y.getAttribute("style") ? y.removeAttribute("style") : y.style.transform = "translate3d(-" + c(e) + "px, 0, 0)")
    }

    function c(e) {
        var t = e.offsetLeft;
        return t > window.innerWidth / 2 ? t - y.offsetLeft - (window.innerWidth - y.offsetWidth) : t - y.offsetLeft
    }

    function s(e) {
        var t = m.querySelectorAll("figure").length + m.querySelectorAll("video").length,
            r = m.querySelector(".drawer__media-container"),
            n = r.dataset.current;
        i(), e ? n < t - 1 ? n++ : n = 0 : 0 == n ? n = t - 1 : n--, r.dataset.current = n, r.style.transform = "translate3d(-" + r.offsetWidth * n + "px, 0, 0)"
    }

    function i() {
        if (v) {
            var e = m.querySelectorAll("video"),
                t = !0,
                r = !1,
                n = void 0;
            try {
                for (var o, c = e[Symbol.iterator](); !(t = (o = c.next()).done); t = !0) {
                    o.value.pause()
                }
            } catch (e) {
                r = !0, n = e
            } finally {
                try {
                    !t && c.return && c.return()
                } finally {
                    if (r) throw n
                }
            }
        }
    }
    var l = document.querySelectorAll(".project"),
        a = {
            projects: document.querySelector(".drawer--projects"),
            news: document.querySelector(".drawer--news"),
            contact: document.querySelector(".drawer--contact")
        },
        d = {
            news: document.getElementById("toggleNews"),
            contact: document.getElementById("toggleContact"),
            works: document.getElementById("toggleWorks")
        },
        u = document.querySelectorAll(".closer"),
        f = document.querySelectorAll(".controls"),
        y = document.querySelector(".projects"),
        v = void 0,
        m = void 0,
        p = !0,
        L = !1,
        g = void 0;
    try {
        for (var w, S = function() {
                var e = w.value;
                e.addEventListener("click", function() {
                    v = e, m = a.projects.querySelector(".drawer__content--" + v.dataset.slug), v.classList.add("is-active"), a.projects.classList.add("is-open"), o(e), a.projects.querySelector(".is-current") && a.projects.querySelector(".is-current").classList.remove("is-current"), m.classList.add("is-current"), m.scrollTop = 0, document.body.classList.add("drawer-open"), n(m)
                })
            }, h = l[Symbol.iterator](); !(p = (w = h.next()).done); p = !0) S()
    } catch (e) {
        L = !0, g = e
    } finally {
        try {
            !p && h.return && h.return()
        } finally {
            if (L) throw g
        }
    }
    var q = !0,
        b = !1,
        x = void 0;
    try {
        for (var j, E = u[Symbol.iterator](); !(q = (j = E.next()).done); q = !0) {
            j.value.addEventListener("click", function() {
                v && v.classList.remove("is-active"), a.projects.classList.remove("is-open"), a.contact.classList.remove("is-open"), a.news.classList.remove("is-open"), document.body.classList.remove("drawer-open"), y.removeAttribute("style"), i()
            })
        }
    } catch (e) {
        b = !0, x = e
    } finally {
        try {
            !q && E.return && E.return()
        } finally {
            if (b) throw x
        }
    }
    var k = !0,
        _ = !1,
        A = void 0;
    try {
        for (var W, B = f[Symbol.iterator](); !(k = (W = B.next()).done); k = !0) {
            var I = W.value;
            I.querySelector(".controls__right").addEventListener("click", function() {
                s(!0)
            }), I.querySelector(".controls__left").addEventListener("click", function() {
                s(!1)
            })
        }
    } catch (e) {
        _ = !0, A = e
    } finally {
        try {
            !k && B.return && B.return()
        } finally {
            if (_) throw A
        }
    }
    d.works.addEventListener("click", function() {
        document.body.classList.toggle("peek")
    }), d.news.addEventListener("click", function() {
        document.body.classList.toggle("drawer-open"), a.news.classList.toggle("is-open")
    }), d.contact.addEventListener("click", function() {
        document.body.classList.toggle("drawer-open"), a.contact.classList.toggle("is-open")
    })
}, function(e, t, r) {
    e.exports = r(0)
}]);
