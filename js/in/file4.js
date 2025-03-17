(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nYehN9pv7Lyp"], {
    "0068": function(e, t, i) {
        "use strict";
        function a(e) {
            return Object.prototype.toString.call(e)
        }
        function r(e) {
            return "[object String]" === a(e)
        }
        var n = Object.prototype.hasOwnProperty;
        function o(e, t) {
            return n.call(e, t)
        }
        function s(e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return t.forEach((function(t) {
                if (t) {
                    if ("object" !== typeof t)
                        throw new TypeError(t + "must be object");
                    Object.keys(t).forEach((function(i) {
                        e[i] = t[i]
                    }
                    ))
                }
            }
            )),
            e
        }
        function l(e, t, i) {
            return [].concat(e.slice(0, t), i, e.slice(t + 1))
        }
        function d(e) {
            return !(e >= 55296 && e <= 57343) && (!(e >= 64976 && e <= 65007) && (65535 !== (65535 & e) && 65534 !== (65535 & e) && (!(e >= 0 && e <= 8) && (11 !== e && (!(e >= 14 && e <= 31) && (!(e >= 127 && e <= 159) && !(e > 1114111)))))))
        }
        function c(e) {
            if (e > 65535) {
                e -= 65536;
                var t = 55296 + (e >> 10)
                  , i = 56320 + (1023 & e);
                return String.fromCharCode(t, i)
            }
            return String.fromCharCode(e)
        }
        var p = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g
          , u = /&([a-z#][a-z0-9]{1,31});/gi
          , m = new RegExp(p.source + "|" + u.source,"gi")
          , h = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i
          , _ = i("bd68");
        function g(e, t) {
            var i = 0;
            return o(_, t) ? _[t] : 35 === t.charCodeAt(0) && h.test(t) && (i = "x" === t[1].toLowerCase() ? parseInt(t.slice(2), 16) : parseInt(t.slice(1), 10),
            d(i)) ? c(i) : e
        }
        function f(e) {
            return e.indexOf("\\") < 0 ? e : e.replace(p, "$1")
        }
        function b(e) {
            return e.indexOf("\\") < 0 && e.indexOf("&") < 0 ? e : e.replace(m, (function(e, t, i) {
                return t || g(e, i)
            }
            ))
        }
        var v = /[&<>"]/
          , y = /[&<>"]/g
          , w = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;"
        };
        function C(e) {
            return w[e]
        }
        function k(e) {
            return v.test(e) ? e.replace(y, C) : e
        }
        var A = /[.?*+^$[\]\\(){}|-]/g;
        function S(e) {
            return e.replace(A, "\\$&")
        }
        function x(e) {
            switch (e) {
            case 9:
            case 32:
                return !0
            }
            return !1
        }
        function T(e) {
            if (e >= 8192 && e <= 8202)
                return !0;
            switch (e) {
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 32:
            case 160:
            case 5760:
            case 8239:
            case 8287:
            case 12288:
                return !0
            }
            return !1
        }
        var D = i("7ca0");
        function j(e) {
            return D.test(e)
        }
        function P(e) {
            switch (e) {
            case 33:
            case 34:
            case 35:
            case 36:
            case 37:
            case 38:
            case 39:
            case 40:
            case 41:
            case 42:
            case 43:
            case 44:
            case 45:
            case 46:
            case 47:
            case 58:
            case 59:
            case 60:
            case 61:
            case 62:
            case 63:
            case 64:
            case 91:
            case 92:
            case 93:
            case 94:
            case 95:
            case 96:
            case 123:
            case 124:
            case 125:
            case 126:
                return !0;
            default:
                return !1
            }
        }
        function z(e) {
            return e = e.trim().replace(/\s+/g, " "),
            "Ṿ" === "ẞ".toLowerCase() && (e = e.replace(/ẞ/g, "ß")),
            e.toLowerCase().toUpperCase()
        }
        t.lib = {},
        t.lib.mdurl = i("d8a6"),
        t.lib.ucmicro = i("d5d1"),
        t.assign = s,
        t.isString = r,
        t.has = o,
        t.unescapeMd = f,
        t.unescapeAll = b,
        t.isValidEntityCode = d,
        t.fromCodePoint = c,
        t.escapeHtml = k,
        t.arrayReplaceAt = l,
        t.isSpace = x,
        t.isWhiteSpace = T,
        t.isMdAsciiPunct = P,
        t.isPunctChar = j,
        t.escapeRE = S,
        t.normalizeReference = z
    },
    "054f": function(e, t, i) {
        "use strict";
        i.r(t);
        var a = function() {
            var e = this
              , t = e._self._c;
            return t("div", [t("div", {
                staticClass: "content"
            }, [t("router-link", {
                staticClass: "badge badge-primary sticky-button",
                attrs: {
                    to: "/blog"
                }
            }, [t("em", {
                staticClass: "font-icon icon-arrow-left"
            }), e._v(" " + e._s(e.text.returnBtn) + " ")]), t("div", {
                staticClass: "pb - 3"
            }, [t("header", {
                staticClass: "header-post"
            }, [t("h1", {
                staticClass: "title title--h1"
            }, [e._v(e._s(e.blog.title))]), t("p", [e._v(e._s(e.monthDayYearFormat(e.blog.publishedAt)))]), t("div", {
                staticClass: "caption-post"
            }, [t("p", [e._v(" " + e._s(e.blog.meta.description) + " ")])]), t("div", {
                staticClass: "header-post__image-wrap"
            }, [t("img", {
                staticClass: "cover lazyload",
                attrs: {
                    src: e.getImageUrl(this.blog.thumbnail, "medium"),
                    alt: e.getImageAlt(this.blog.thumbnail)
                }
            })]), e.blog.series ? t("p", {
                staticClass: "box__border series__part"
            }, [e._v(" " + e._s(e.text.partOfSeries) + " "), t("router-link", {
                attrs: {
                    to: "/series/" + e.blog.series.slug
                }
            }, [e._v(" " + e._s(e.blog.series.title) + " ")]), e._v(" series ")], 1) : e._e()]), t("div", {
                staticClass: "caption-post"
            }, [t("vue-markdown", {
                attrs: {
                    source: e.blog.content
                }
            })], 1), e._m(0)]), t("div", {
                staticClass: "box-inner box-inner--rounded"
            }, [t("h2", {
                staticClass: "title title--h3"
            }, [t("DisqusCount", {
                attrs: {
                    shortname: "adityacprtm",
                    identifier: e.pageConfig.identifier
                }
            })], 1), t("Disqus", {
                attrs: {
                    pageConfig: e.pageConfig,
                    shortname: "adityacprtm",
                    lang: "Id_ID"
                }
            })], 1)], 1)])
        }
          , r = [function() {
            var e = this
              , t = e._self._c;
            return t("footer", {
                staticClass: "footer-post"
            }, [t("a", {
                staticClass: "footer-post__share",
                attrs: {
                    href: "https://www.github.com/adityacprtm",
                    target: "_blank",
                    rel: "noopener"
                }
            }, [t("em", {
                staticClass: "font-icon icon-github"
            }), e._v(" "), t("span", [e._v("Github")])]), t("a", {
                staticClass: "footer-post__share",
                attrs: {
                    href: "https://www.twitter.com/adityacprtm",
                    target: "_blank",
                    rel: "noopener"
                }
            }, [t("em", {
                staticClass: "font-icon icon-twitter"
            }), e._v(" "), t("span", [e._v("Twitter")])]), t("a", {
                staticClass: "footer-post__share",
                attrs: {
                    href: "https://www.linkedin.com/in/adityacprtm",
                    target: "_blank",
                    rel: "noopener"
                }
            }, [t("em", {
                staticClass: "font-icon icon-linkedin"
            }), e._v(" "), t("span", [e._v("Linkedin")])])])
        }
        ]
          , n = i("5d9b")
          , o = i("d301")
          , s = i("7507")
          , l = "Disqus shortname is required. (To resolve this, go to: https://ktquez.github.io/vue-disqus/setup.html#installation)"
          , d = ["api_key", "author_s3", "category_id", "identifier", "integration", "language", "remote_auth_s3", "slug", "title", "url"]
          , c = ["name", "button", "icon", "url", "logout", "width", "height"]
          , p = ["afterRender", "onInit", "onIdentify", "beforeComment", "onNewComment", "onPaginate", "onReady", "preData", "preInit", "preReset"]
          , u = function(e) {
            return requestAnimationFrame((function() {
                return requestAnimationFrame(e)
            }
            ))
        };
        function m(e, t, i, a, r, n, o, s, l, d) {
            "boolean" != typeof o && (l = s,
            s = o,
            o = !1);
            var c, p = "function" == typeof i ? i.options : i;
            if (e && e.render && (p.render = e.render,
            p.staticRenderFns = e.staticRenderFns,
            p._compiled = !0,
            r && (p.functional = !0)),
            a && (p._scopeId = a),
            n ? (c = function(e) {
                (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
                t && t.call(this, l(e)),
                e && e._registeredComponents && e._registeredComponents.add(n)
            }
            ,
            p._ssrRegister = c) : t && (c = o ? function(e) {
                t.call(this, d(e, this.$root.$options.shadowRoot))
            }
            : function(e) {
                t.call(this, s(e))
            }
            ),
            c)
                if (p.functional) {
                    var u = p.render;
                    p.render = function(e, t) {
                        return c.call(t),
                        u(e, t)
                    }
                } else {
                    var m = p.beforeCreate;
                    p.beforeCreate = m ? [].concat(m, c) : [c]
                }
            return i
        }
        var h = m({
            render: function() {
                var e = this.$createElement;
                return (this._self._c || e)("div", {
                    staticStyle: {
                        "min-height": "200px"
                    },
                    attrs: {
                        id: "disqus_thread"
                    }
                })
            },
            staticRenderFns: []
        }, void 0, {
            name: "Disqus",
            props: {
                shortname: String,
                pageConfig: {
                    type: Object,
                    validator: function(e) {
                        return Object.keys(e).every((function(e) {
                            return d.includes(e)
                        }
                        ))
                    }
                },
                ssoConfig: {
                    type: Object,
                    validator: function(e) {
                        return Object.keys(e).every((function(e) {
                            return c.includes(e)
                        }
                        ))
                    }
                },
                lang: {
                    type: String,
                    default: "en"
                },
                lazy: {
                    type: Boolean,
                    default: !0
                },
                lazyConfig: {
                    type: Object,
                    default: function() {
                        return {
                            root: null,
                            rootMargin: "300px",
                            threshold: .5
                        }
                    }
                }
            },
            data: function() {
                return {
                    observer: null
                }
            },
            computed: {
                getShortname: function() {
                    var e = this.shortname ? this.shortname : this.$disqus ? this.$disqus.shortname : null;
                    if (!e)
                        throw new Error(l);
                    return e
                }
            },
            watch: {
                lang: function() {
                    this.reset()
                }
            },
            mounted: function() {
                if (this.lazy)
                    return this.observerDisqus();
                this.init()
            },
            methods: {
                init: function() {
                    var e = this;
                    if (this.$disqus && (this.$disqus.reset = this.reset),
                    window.DISQUS)
                        return this.reset();
                    var t = this.setBaseConfig;
                    window.disqus_config = function() {
                        t(this)
                    }
                    ,
                    this.loadEmbedScript(),
                    this.$route && this.$watch("$route.path", (function() {
                        return e.reset()
                    }
                    ))
                },
                reset: function(e) {
                    void 0 === e && (e = window.DISQUS);
                    var t = this.setBaseConfig;
                    e.reset({
                        reload: !0,
                        config: function() {
                            t(this)
                        }
                    })
                },
                observerDisqus: function() {
                    if ("IntersectionObserver"in window)
                        return this.observer = new IntersectionObserver(this.handleObserver,this.lazyConfig),
                        this.observer.observe(this.$el);
                    this.init()
                },
                handleObserver: function(e) {
                    var t = this;
                    e.forEach((function(e) {
                        e.isIntersecting && (t.observer.disconnect(),
                        t.init())
                    }
                    ))
                },
                loadEmbedScript: function() {
                    var e = document
                      , t = e.createElement("script");
                    t.setAttribute("id", "embed-disqus"),
                    t.setAttribute("data-timestamp", +new Date),
                    t.type = "text/javascript",
                    t.async = !0,
                    t.src = "//" + this.getShortname + ".disqus.com/embed.js",
                    (e.head || e.body).appendChild(t)
                },
                setBaseConfig: function(e) {
                    this.setPageConfig(e),
                    this.cbDisqus(e),
                    this.ssoConfig && Object.keys(this.ssoConfig).length && Object.assign(e.sso, this.ssoConfig),
                    e.language = this.lang
                },
                setPageConfig: function(e) {
                    var t = {
                        url: document.baseURI,
                        identifier: this.$route ? this.$route.path : window.location.pathname
                    };
                    Object.assign(e.page, t),
                    this.pageConfig && Object.keys(this.pageConfig).length && Object.assign(e.page, this.pageConfig)
                },
                cbDisqus: function(e) {
                    var t = this;
                    p.forEach((function(i) {
                        e.callbacks[i] = [function(e) {
                            t.$emit(i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().replace("on-", ""), e)
                        }
                        ]
                    }
                    ))
                }
            }
        }, void 0, !1, void 0, !1, void 0, void 0, void 0)
          , _ = m({
            render: function() {
                var e = this.$createElement;
                return (this._self._c || e)(this.tag, {
                    tag: "component",
                    staticClass: "disqus-comment-count",
                    attrs: {
                        href: this.getHref,
                        "data-disqus-url": this.getUrl,
                        "data-disqus-identifier": this.identifier
                    }
                })
            },
            staticRenderFns: []
        }, void 0, {
            name: "DisqusCount",
            inheritAttrs: !1,
            props: {
                url: String,
                shortname: String,
                identifier: {
                    type: String,
                    required: !0
                },
                tag: {
                    type: String,
                    default: "span"
                }
            },
            mounted: function() {
                this.init()
            },
            computed: {
                getHref: function() {
                    return "a" === this.tag ? this.url + "#disqus_thread" : null
                },
                getUrl: function() {
                    return "span" === this.tag ? this.url : null
                },
                getShortname: function() {
                    var e = this.shortname ? this.shortname : this.$disqus ? this.$disqus.shortname : null;
                    if (!e)
                        throw new Error(l);
                    return e
                }
            },
            methods: {
                init: function() {
                    var e = this;
                    if ("DISQUSWIDGETS"in window)
                        return u((function() {
                            return e.reset()
                        }
                        ));
                    this.loadCountScript(),
                    this.$route && this.$watch("$route.path", (function() {
                        return u((function() {
                            return e.reset()
                        }
                        ))
                    }
                    ))
                },
                reset: function(e) {
                    void 0 === e && (e = window.DISQUSWIDGETS),
                    e.getCount({
                        reset: !0
                    })
                },
                loadCountScript: function() {
                    if (!document.getElementById("dsq-count-scr")) {
                        var e = document
                          , t = e.createElement("script");
                        t.async = !0,
                        t.id = "dsq-count-scr",
                        t.src = "//" + this.getShortname + ".disqus.com/count.js",
                        (e.head || e.body).appendChild(t)
                    }
                }
            }
        }, void 0, !1, void 0, !1, void 0, void 0, void 0);
        function g(e, t) {
            void 0 === t && (t = {}),
            e.component("Disqus", h),
            e.component("DisqusCount", _),
            e.prototype.$disqus = {
                shortname: t.shortname || null,
                reset: null
            }
        }
        "undefined" != typeof window && void 0 !== window.Vue && window.Vue.use(g);
        var f = i("e211")
          , b = {
            name: "BlogDetail",
            mixins: [o["a"], s["a"]],
            components: {
                VueMarkdown: n["a"],
                Disqus: h,
                DisqusCount: _
            },
            data() {
                return {
                    blog: {},
                    isLoading: !0,
                    pageConfig: {
                        identifier: this.$route.path
                    },
                    text: {
                        returnBtn: "Return to Blog List",
                        partOfSeries: "This blog is part of"
                    }
                }
            },
            created() {
                this.getBlogDetail()
            },
            methods: {
                getBlogDetail() {
                    this.blog = f.data.filter(e=>e.slug === this.$route.params.slug)[0]
                }
            },
            metaInfo() {
                return {
                    title: this.blog.meta ? this.blog.meta.title + " | Blog | Adityacprtm" : "Blog | Adityacprtm | DevOps - SRE - Cloud Engineer",
                    meta: [{
                        vmid: "description",
                        name: "description",
                        content: this.blog.meta ? this.blog.meta.description : "Get to know Aditya Chamim Pratama."
                    }, {
                        vmid: "twitter:title",
                        property: "twitter:title",
                        content: this.blog.meta ? this.blog.meta.title + " | Blog | Adityacprtm" : "Adityacprtm | DevOps - SRE - Cloud Engineer"
                    }, {
                        vmid: "twitter:description",
                        property: "twitter:description",
                        content: this.blog.meta ? this.blog.meta.description : "Get to know Aditya Chamim Pratama."
                    }, {
                        vmid: "twitter:image",
                        property: "twitter:image",
                        content: this.getImageUrl(this.blog.image)
                    }, {
                        vmid: "og:title",
                        property: "og:title",
                        content: this.blog.meta ? this.blog.meta.title + " | Blog | Adityacprtm" : "Adityacprtm | DevOps - SRE - Cloud Engineer"
                    }, {
                        vmid: "og:description",
                        property: "og:description",
                        content: this.blog.meta ? this.blog.meta.description : "Get to know Aditya Chamim Pratama."
                    }, {
                        vmid: "og:image",
                        property: "og:image",
                        content: this.getImageUrl(this.blog.image)
                    }]
                }
            }
        }
          , v = b
          , y = i("2877")
          , w = Object(y["a"])(v, a, r, !1, null, null, null);
        t["default"] = w.exports
    },
    "06bd": function(e) {
        e.exports = JSON.parse('{"data":[{"id":1,"name":"Certifications"},{"id":2,"name":"Project"},{"id":3,"name":"Badge"}],"meta":{"pagination":{"page":1,"pageSize":25,"pageCount":1,"total":3}}}')
    },
    "0758": function(e, t, i) {
        "use strict";
        var a = i("0068").isSpace;
        e.exports = function(e, t, i, r) {
            var n, o, s, l, d = e.bMarks[t] + e.tShift[t], c = e.eMarks[t];
            if (e.sCount[t] - e.blkIndent >= 4)
                return !1;
            if (n = e.src.charCodeAt(d),
            35 !== n || d >= c)
                return !1;
            o = 1,
            n = e.src.charCodeAt(++d);
            while (35 === n && d < c && o <= 6)
                o++,
                n = e.src.charCodeAt(++d);
            return !(o > 6 || d < c && !a(n)) && (r || (c = e.skipSpacesBack(c, d),
            s = e.skipCharsBack(c, 35, d),
            s > d && a(e.src.charCodeAt(s - 1)) && (c = s),
            e.line = t + 1,
            l = e.push("heading_open", "h" + String(o), 1),
            l.markup = "########".slice(0, o),
            l.map = [t, e.line],
            l = e.push("inline", "", 0),
            l.content = e.src.slice(d, c).trim(),
            l.map = [t, e.line],
            l.children = [],
            l = e.push("heading_close", "h" + String(o), -1),
            l.markup = "########".slice(0, o)),
            !0)
        }
    },
    "08ae": function(e, t, i) {
        "use strict";
        var a = i("0068")
          , r = i("565b")
          , n = i("7cc2")
          , o = i("a915")
          , s = i("7696")
          , l = i("4cb4")
          , d = i("fbcd")
          , c = i("d8a6")
          , p = i("9d88")
          , u = {
            default: i("8a31"),
            zero: i("1caa"),
            commonmark: i("428d")
        }
          , m = /^(vbscript|javascript|file|data):/
          , h = /^data:image\/(gif|png|jpeg|webp);/;
        function _(e) {
            var t = e.trim().toLowerCase();
            return !m.test(t) || !!h.test(t)
        }
        var g = ["http:", "https:", "mailto:"];
        function f(e) {
            var t = c.parse(e, !0);
            if (t.hostname && (!t.protocol || g.indexOf(t.protocol) >= 0))
                try {
                    t.hostname = p.toASCII(t.hostname)
                } catch (i) {}
            return c.encode(c.format(t))
        }
        function b(e) {
            var t = c.parse(e, !0);
            if (t.hostname && (!t.protocol || g.indexOf(t.protocol) >= 0))
                try {
                    t.hostname = p.toUnicode(t.hostname)
                } catch (i) {}
            return c.decode(c.format(t), c.decode.defaultChars + "%")
        }
        function v(e, t) {
            if (!(this instanceof v))
                return new v(e,t);
            t || a.isString(e) || (t = e || {},
            e = "default"),
            this.inline = new l,
            this.block = new s,
            this.core = new o,
            this.renderer = new n,
            this.linkify = new d,
            this.validateLink = _,
            this.normalizeLink = f,
            this.normalizeLinkText = b,
            this.utils = a,
            this.helpers = a.assign({}, r),
            this.options = {},
            this.configure(e),
            t && this.set(t)
        }
        v.prototype.set = function(e) {
            return a.assign(this.options, e),
            this
        }
        ,
        v.prototype.configure = function(e) {
            var t, i = this;
            if (a.isString(e) && (t = e,
            e = u[t],
            !e))
                throw new Error('Wrong `markdown-it` preset "' + t + '", check name');
            if (!e)
                throw new Error("Wrong `markdown-it` preset, can't be empty");
            return e.options && i.set(e.options),
            e.components && Object.keys(e.components).forEach((function(t) {
                e.components[t].rules && i[t].ruler.enableOnly(e.components[t].rules),
                e.components[t].rules2 && i[t].ruler2.enableOnly(e.components[t].rules2)
            }
            )),
            this
        }
        ,
        v.prototype.enable = function(e, t) {
            var i = [];
            Array.isArray(e) || (e = [e]),
            ["core", "block", "inline"].forEach((function(t) {
                i = i.concat(this[t].ruler.enable(e, !0))
            }
            ), this),
            i = i.concat(this.inline.ruler2.enable(e, !0));
            var a = e.filter((function(e) {
                return i.indexOf(e) < 0
            }
            ));
            if (a.length && !t)
                throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + a);
            return this
        }
        ,
        v.prototype.disable = function(e, t) {
            var i = [];
            Array.isArray(e) || (e = [e]),
            ["core", "block", "inline"].forEach((function(t) {
                i = i.concat(this[t].ruler.disable(e, !0))
            }
            ), this),
            i = i.concat(this.inline.ruler2.disable(e, !0));
            var a = e.filter((function(e) {
                return i.indexOf(e) < 0
            }
            ));
            if (a.length && !t)
                throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + a);
            return this
        }
        ,
        v.prototype.use = function(e) {
            var t = [this].concat(Array.prototype.slice.call(arguments, 1));
            return e.apply(e, t),
            this
        }
        ,
        v.prototype.parse = function(e, t) {
            if ("string" !== typeof e)
                throw new Error("Input data should be a String");
            var i = new this.core.State(e,this,t);
            return this.core.process(i),
            i.tokens
        }
        ,
        v.prototype.render = function(e, t) {
            return t = t || {},
            this.renderer.render(this.parse(e, t), this.options, t)
        }
        ,
        v.prototype.parseInline = function(e, t) {
            var i = new this.core.State(e,this,t);
            return i.inlineMode = !0,
            this.core.process(i),
            i.tokens
        }
        ,
        v.prototype.renderInline = function(e, t) {
            return t = t || {},
            this.renderer.render(this.parseInline(e, t), this.options, t)
        }
        ,
        e.exports = v
    },
    "096b": function(e, t, i) {
        "use strict";
        function a(e, t, i) {
            this.type = e,
            this.tag = t,
            this.attrs = null,
            this.map = null,
            this.nesting = i,
            this.level = 0,
            this.children = null,
            this.content = "",
            this.markup = "",
            this.info = "",
            this.meta = null,
            this.block = !1,
            this.hidden = !1
        }
        a.prototype.attrIndex = function(e) {
            var t, i, a;
            if (!this.attrs)
                return -1;
            for (t = this.attrs,
            i = 0,
            a = t.length; i < a; i++)
                if (t[i][0] === e)
                    return i;
            return -1
        }
        ,
        a.prototype.attrPush = function(e) {
            this.attrs ? this.attrs.push(e) : this.attrs = [e]
        }
        ,
        a.prototype.attrSet = function(e, t) {
            var i = this.attrIndex(e)
              , a = [e, t];
            i < 0 ? this.attrPush(a) : this.attrs[i] = a
        }
        ,
        a.prototype.attrGet = function(e) {
            var t = this.attrIndex(e)
              , i = null;
            return t >= 0 && (i = this.attrs[t][1]),
            i
        }
        ,
        a.prototype.attrJoin = function(e, t) {
            var i = this.attrIndex(e);
            i < 0 ? this.attrPush([e, t]) : this.attrs[i][1] = this.attrs[i][1] + " " + t
        }
        ,
        e.exports = a
    },
    "097b": function(e, t, i) {
        "use strict";
        var a = i("096b")
          , r = i("0068").isWhiteSpace
          , n = i("0068").isPunctChar
          , o = i("0068").isMdAsciiPunct;
        function s(e, t, i, a) {
            this.src = e,
            this.env = i,
            this.md = t,
            this.tokens = a,
            this.tokens_meta = Array(a.length),
            this.pos = 0,
            this.posMax = this.src.length,
            this.level = 0,
            this.pending = "",
            this.pendingLevel = 0,
            this.cache = {},
            this.delimiters = [],
            this._prev_delimiters = [],
            this.backticks = {},
            this.backticksScanned = !1
        }
        s.prototype.pushPending = function() {
            var e = new a("text","",0);
            return e.content = this.pending,
            e.level = this.pendingLevel,
            this.tokens.push(e),
            this.pending = "",
            e
        }
        ,
        s.prototype.push = function(e, t, i) {
            this.pending && this.pushPending();
            var r = new a(e,t,i)
              , n = null;
            return i < 0 && (this.level--,
            this.delimiters = this._prev_delimiters.pop()),
            r.level = this.level,
            i > 0 && (this.level++,
            this._prev_delimiters.push(this.delimiters),
            this.delimiters = [],
            n = {
                delimiters: this.delimiters
            }),
            this.pendingLevel = this.level,
            this.tokens.push(r),
            this.tokens_meta.push(n),
            r
        }
        ,
        s.prototype.scanDelims = function(e, t) {
            var i, a, s, l, d, c, p, u, m, h = e, _ = !0, g = !0, f = this.posMax, b = this.src.charCodeAt(e);
            i = e > 0 ? this.src.charCodeAt(e - 1) : 32;
            while (h < f && this.src.charCodeAt(h) === b)
                h++;
            return s = h - e,
            a = h < f ? this.src.charCodeAt(h) : 32,
            p = o(i) || n(String.fromCharCode(i)),
            m = o(a) || n(String.fromCharCode(a)),
            c = r(i),
            u = r(a),
            u ? _ = !1 : m && (c || p || (_ = !1)),
            c ? g = !1 : p && (u || m || (g = !1)),
            t ? (l = _,
            d = g) : (l = _ && (!g || p),
            d = g && (!_ || m)),
            {
                can_open: l,
                can_close: d,
                length: s
            }
        }
        ,
        s.prototype.Token = a,
        e.exports = s
    },
    "199e": function(e, t, i) {
        "use strict";
        e.exports = function(e, t, i) {
            var a, r, n, o, s, l, d, c, p, u, m = t + 1, h = e.md.block.ruler.getRules("paragraph");
            if (e.sCount[t] - e.blkIndent >= 4)
                return !1;
            for (u = e.parentType,
            e.parentType = "paragraph"; m < i && !e.isEmpty(m); m++)
                if (!(e.sCount[m] - e.blkIndent > 3)) {
                    if (e.sCount[m] >= e.blkIndent && (l = e.bMarks[m] + e.tShift[m],
                    d = e.eMarks[m],
                    l < d && (p = e.src.charCodeAt(l),
                    (45 === p || 61 === p) && (l = e.skipChars(l, p),
                    l = e.skipSpaces(l),
                    l >= d)))) {
                        c = 61 === p ? 1 : 2;
                        break
                    }
                    if (!(e.sCount[m] < 0)) {
                        for (r = !1,
                        n = 0,
                        o = h.length; n < o; n++)
                            if (h[n](e, m, i, !0)) {
                                r = !0;
                                break
                            }
                        if (r)
                            break
                    }
                }
            return !!c && (a = e.getLines(t, m, e.blkIndent, !1).trim(),
            e.line = m + 1,
            s = e.push("heading_open", "h" + String(c), 1),
            s.markup = String.fromCharCode(p),
            s.map = [t, e.line],
            s = e.push("inline", "", 0),
            s.content = a,
            s.map = [t, e.line - 1],
            s.children = [],
            s = e.push("heading_close", "h" + String(c), -1),
            s.markup = String.fromCharCode(p),
            e.parentType = u,
            !0)
        }
    },
    "1ba2": function(e, t, i) {
        "use strict";
        i.r(t);
        var a = function() {
            var e = this
              , t = e._self._c;
            return t("div", [t("div", {
                staticClass: "pb-2"
            }, [t("h1", {
                staticClass: "title title--h1 first-title title__separate"
            }, [e._v(" " + e._s(this.heading.resume) + " ")])]), t("div", {
                staticClass: "row"
            }, [t("div", {
                staticClass: "col"
            }, [t("h2", {
                staticClass: "title title--h3"
            }, [t("img", {
                staticClass: "title-icon",
                attrs: {
                    src: i("e979"),
                    alt: "experience"
                }
            }), e._v(" " + e._s(this.heading.experience) + " ")]), t("div", {
                staticClass: "timeline"
            }, e._l(e.experiences.data, (function(i) {
                return t("article", {
                    key: i.id,
                    staticClass: "timeline__item"
                }, [t("h5", {
                    staticClass: "title title--h5 timeline__title"
                }, [e._v(" " + e._s(i.institution) + " "), t("small", [e._v(" " + e._s(e.text.asExperience) + " ")]), e._v(" " + e._s(i.position) + " ")]), t("span", {
                    staticClass: "timeline__period"
                }, [e._v(" " + e._s(e.monthYearFormat(i.startDate)) + " - " + e._s(i.endDate ? e.monthYearFormat(i.endDate) : "Present") + " ")]), t("p", {
                    staticClass: "timeline__description"
                }, [i.location ? t("span", {
                    staticStyle: {
                        "white-space": "pre-wrap"
                    }
                }, [e._v(e._s(i.description) + " "), t("br")]) : e._e(), e._v(" " + e._s(i.location) + " ")])])
            }
            )), 0)])]), t("div", {
                staticClass: "row mt-4"
            }, [t("div", {
                staticClass: "col-sm"
            }, [t("h2", {
                staticClass: "title title--h3"
            }, [t("img", {
                staticClass: "title-icon",
                attrs: {
                    src: i("3db3"),
                    alt: "education"
                }
            }), e._v(" " + e._s(this.heading.education) + " ")]), t("div", {
                staticClass: "timeline"
            }, e._l(e.educationFormal.data, (function(i) {
                return t("article", {
                    key: i.id,
                    staticClass: "timeline__item"
                }, [t("h5", {
                    staticClass: "title title--h5 timeline__title"
                }, [e._v(" " + e._s(i.institution) + " ")]), t("span", {
                    staticClass: "timeline__period"
                }, [e._v(" " + e._s(e.monthYearFormat(i.startDate)) + " - " + e._s(i.endDate ? e.monthYearFormat(i.endDate) : "Present") + " ")]), t("p", {
                    staticClass: "timeline__description"
                }, [i.description ? t("span", {
                    staticStyle: {
                        "white-space": "pre-wrap"
                    }
                }, [e._v(e._s(i.description) + " "), t("br")]) : e._e(), e._v(" " + e._s(i.location) + " ")])])
            }
            )), 0)]), t("div", {
                class: e.isMobile() ? "col-sm mt-4" : "col-sm"
            }, [t("h2", {
                staticClass: "title title--h3"
            }, [t("img", {
                staticClass: "title-icon",
                attrs: {
                    src: i("3db3"),
                    alt: "education"
                }
            }), e._v(" " + e._s(this.heading.education2) + " ")]), t("div", {
                staticClass: "timeline"
            }, e._l(e.educationNonformal.data, (function(i) {
                return t("article", {
                    key: i.id,
                    staticClass: "timeline__item"
                }, [t("h5", {
                    staticClass: "title title--h5 timeline__title"
                }, [e._v(" " + e._s(i.institution) + " ")]), t("span", {
                    staticClass: "timeline__period"
                }, [e._v(" " + e._s(e.monthYearFormat(i.startDate)) + " - " + e._s(i.endDate ? e.monthYearFormat(i.endDate) : "Present") + " ( " + e._s(i.hours) + " Hours) ")]), t("p", {
                    staticClass: "timeline__description"
                }, [i.description ? t("span", {
                    staticStyle: {
                        "white-space": "pre-wrap"
                    }
                }, [e._v(e._s(i.description) + " "), t("br")]) : e._e(), e._v(" " + e._s(i.location) + " ")])])
            }
            )), 0)])]), t("div", {
                staticClass: "row mt-4"
            }, [t("div", {
                staticClass: "col-12"
            }, [t("h2", {
                staticClass: "title title--h3"
            }, [e._v(e._s(this.heading.skills))]), t("div", {
                staticClass: "box box__border"
            }, [t("div", e._l(e.skills.data, (function(i) {
                return t("div", {
                    key: i.id,
                    staticClass: "progress"
                }, [t("div", {
                    staticClass: "progress-bar",
                    style: "width: " + e.getSkillValue(i.level) + "%; z-index: 2;",
                    attrs: {
                        role: "progressbar",
                        "aria-valuemin": "0",
                        "aria-valuemax": "100"
                    }
                }, [t("div", {
                    staticClass: "progress-text"
                }, [t("span", [e._v(" " + e._s(i.title) + " ")]), t("span", [e._v(" " + e._s(e.isMobile() ? "" : i.level) + " ")])])]), t("div", {
                    staticClass: "progress-text"
                }, [t("span", [e._v(" " + e._s(i.title) + " ")])])])
            }
            )), 0)])])]), t("div", {
                staticClass: "row mt-4"
            }, [t("div", {
                staticClass: "col-12"
            }, [t("h2", {
                staticClass: "title title--h3"
            }, [e._v(e._s(this.heading.code_skills))]), t("div", {
                staticClass: "box box__border"
            }, [t("div", e._l(e.codeSkills.data, (function(i) {
                return t("div", {
                    key: i.id,
                    staticClass: "progress"
                }, [t("div", {
                    staticClass: "progress-bar",
                    style: "width: " + e.getSkillValue(i.level) + "%; z-index: 2;",
                    attrs: {
                        role: "progressbar",
                        "aria-valuemin": "0",
                        "aria-valuemax": "100"
                    }
                }, [t("div", {
                    staticClass: "progress-text"
                }, [t("span", [e._v(" " + e._s(i.title) + " ")]), t("span", [e._v(" " + e._s(e.isMobile() ? "" : i.level) + " ")])])]), t("div", {
                    staticClass: "progress-text"
                }, [t("span", [e._v(" " + e._s(i.title) + " ")])])])
            }
            )), 0)])])])])
        }
          , r = []
          , n = i("d301")
          , o = i("5075")
          , s = i("f916")
          , l = i("dafc")
          , d = i("7f44")
          , c = i("df6d")
          , p = i("9184")
          , u = {
            name: "Resume",
            mixins: [n["a"], o["a"]],
            data() {
                return {
                    page: {
                        meta: {
                            title: "Resume | Adityacprtm | DevOps - SRE - Cloud Engineer",
                            description: "Check out some info on my Resume to get to know me more deeply. Resume Adityacprtm."
                        }
                    },
                    educationFormal: {
                        data: l.data
                    },
                    educationNonformal: {
                        data: d.data
                    },
                    experiences: {
                        data: s.data
                    },
                    skills: {
                        data: c.data
                    },
                    codeSkills: {
                        data: p.data
                    },
                    heading: {
                        resume: "Resume",
                        education: "Education",
                        education2: "Nonformal Education",
                        experience: "Experience",
                        skills: "Skills",
                        code_skills: "Code Skills"
                    },
                    text: {
                        asExperience: "as"
                    }
                }
            },
            created() {},
            methods: {
                getSkillValue: function(e) {
                    return "Beginner" == e ? 33 : "Intermediate" == e ? 66 : 100
                }
            },
            metaInfo() {
                return {
                    title: this.page.meta ? this.page.meta.title : "Resume | Adityacprtm | DevOps - SRE - Cloud Engineer",
                    meta: [{
                        vmid: "description",
                        name: "description",
                        content: this.page.meta ? this.page.meta.description : "Get to know Aditya Chamim Pratama more deeply with Resume."
                    }, {
                        vmid: "twitter:title",
                        name: "twitter:title",
                        content: this.page.meta ? this.page.meta.title : "Resume | Adityacprtm | DevOps - SRE - Cloud Engineer"
                    }, {
                        vmid: "twitter:description",
                        name: "twitter:description",
                        content: this.page.meta ? this.page.meta.description : "Get to know Aditya Chamim Pratama more deeply with Resume."
                    }, {
                        vmid: "og:title",
                        property: "og:title",
                        content: this.page.meta ? this.page.meta.title : "Resume | Adityacprtm | DevOps - SRE - Cloud Engineer"
                    }, {
                        vmid: "og:description",
                        property: "og:description",
                        content: this.page.meta ? this.page.meta.description : "Get to know Aditya Chamim Pratama more deeply with Resume."
                    }]
                }
            }
        }
          , m = u
          , h = i("2877")
          , _ = Object(h["a"])(m, a, r, !1, null, null, null);
        t["default"] = _.exports
    },
    "1caa": function(e, t, i) {
        "use strict";
        e.exports = {
            options: {
                html: !1,
                xhtmlOut: !1,
                breaks: !1,
                langPrefix: "language-",
                linkify: !1,
                typographer: !1,
                quotes: "“”‘’",
                highlight: null,
                maxNesting: 20
            },
            components: {
                core: {
                    rules: ["normalize", "block", "inline"]
                },
                block: {
                    rules: ["paragraph"]
                },
                inline: {
                    rules: ["text"],
                    rules2: ["balance_pairs", "text_collapse"]
                }
            }
        }
    },
    "1ce8": function(e, t, i) {
        "use strict";
        var a = null;
        function r(e) {
            return a || (a = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
                return setTimeout(e, 16)
            }
            ).bind(window)),
            a(e)
        }
        var n = null;
        function o(e) {
            n || (n = (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function(e) {
                clearTimeout(e)
            }
            ).bind(window)),
            n(e)
        }
        function s(e) {
            var t = document.createElement("style");
            return t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)),
            (document.querySelector("head") || document.body).appendChild(t),
            t
        }
        function l(e, t) {
            void 0 === t && (t = {});
            var i = document.createElement(e);
            return Object.keys(t).forEach((function(e) {
                i[e] = t[e]
            }
            )),
            i
        }
        function d(e, t, i) {
            var a = window.getComputedStyle(e, i || null) || {
                display: "none"
            };
            return a[t]
        }
        function c(e) {
            if (!document.documentElement.contains(e))
                return {
                    detached: !0,
                    rendered: !1
                };
            var t = e;
            while (t !== document) {
                if ("none" === d(t, "display"))
                    return {
                        detached: !1,
                        rendered: !1
                    };
                t = t.parentNode
            }
            return {
                detached: !1,
                rendered: !0
            }
        }
        var p = '.resize-triggers{visibility:hidden;opacity:0;pointer-events:none}.resize-contract-trigger,.resize-contract-trigger:before,.resize-expand-trigger,.resize-triggers{content:"";position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden}.resize-contract-trigger,.resize-expand-trigger{background:#eee;overflow:auto}.resize-contract-trigger:before{width:200%;height:200%}'
          , u = 0
          , m = null;
        function h(e, t) {
            e.__resize_mutation_handler__ || (e.__resize_mutation_handler__ = f.bind(e));
            var i = e.__resize_listeners__;
            if (!i)
                if (e.__resize_listeners__ = [],
                window.ResizeObserver) {
                    var a = e.offsetWidth
                      , r = e.offsetHeight
                      , n = new ResizeObserver((function() {
                        (e.__resize_observer_triggered__ || (e.__resize_observer_triggered__ = !0,
                        e.offsetWidth !== a || e.offsetHeight !== r)) && v(e)
                    }
                    ))
                      , o = c(e)
                      , l = o.detached
                      , d = o.rendered;
                    e.__resize_observer_triggered__ = !1 === l && !1 === d,
                    e.__resize_observer__ = n,
                    n.observe(e)
                } else if (e.attachEvent && e.addEventListener)
                    e.__resize_legacy_resize_handler__ = function() {
                        v(e)
                    }
                    ,
                    e.attachEvent("onresize", e.__resize_legacy_resize_handler__),
                    document.addEventListener("DOMSubtreeModified", e.__resize_mutation_handler__);
                else if (u || (m = s(p)),
                y(e),
                e.__resize_rendered__ = c(e).rendered,
                window.MutationObserver) {
                    var h = new MutationObserver(e.__resize_mutation_handler__);
                    h.observe(document, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    }),
                    e.__resize_mutation_observer__ = h
                }
            e.__resize_listeners__.push(t),
            u++
        }
        function _(e, t) {
            var i = e.__resize_listeners__;
            if (i) {
                if (t && i.splice(i.indexOf(t), 1),
                !i.length || !t) {
                    if (e.detachEvent && e.removeEventListener)
                        return e.detachEvent("onresize", e.__resize_legacy_resize_handler__),
                        void document.removeEventListener("DOMSubtreeModified", e.__resize_mutation_handler__);
                    e.__resize_observer__ ? (e.__resize_observer__.unobserve(e),
                    e.__resize_observer__.disconnect(),
                    e.__resize_observer__ = null) : (e.__resize_mutation_observer__ && (e.__resize_mutation_observer__.disconnect(),
                    e.__resize_mutation_observer__ = null),
                    e.removeEventListener("scroll", b),
                    e.removeChild(e.__resize_triggers__.triggers),
                    e.__resize_triggers__ = null),
                    e.__resize_listeners__ = null
                }
                !--u && m && m.parentNode.removeChild(m)
            }
        }
        function g(e) {
            var t = e.__resize_last__
              , i = t.width
              , a = t.height
              , r = e.offsetWidth
              , n = e.offsetHeight;
            return r !== i || n !== a ? {
                width: r,
                height: n
            } : null
        }
        function f() {
            var e = c(this)
              , t = e.rendered
              , i = e.detached;
            t !== this.__resize_rendered__ && (!i && this.__resize_triggers__ && (w(this),
            this.addEventListener("scroll", b, !0)),
            this.__resize_rendered__ = t,
            v(this))
        }
        function b() {
            var e = this;
            w(this),
            this.__resize_raf__ && o(this.__resize_raf__),
            this.__resize_raf__ = r((function() {
                var t = g(e);
                t && (e.__resize_last__ = t,
                v(e))
            }
            ))
        }
        function v(e) {
            e && e.__resize_listeners__ && e.__resize_listeners__.forEach((function(t) {
                t.call(e, e)
            }
            ))
        }
        function y(e) {
            var t = d(e, "position");
            t && "static" !== t || (e.style.position = "relative"),
            e.__resize_old_position__ = t,
            e.__resize_last__ = {};
            var i = l("div", {
                className: "resize-triggers"
            })
              , a = l("div", {
                className: "resize-expand-trigger"
            })
              , r = l("div")
              , n = l("div", {
                className: "resize-contract-trigger"
            });
            a.appendChild(r),
            i.appendChild(a),
            i.appendChild(n),
            e.appendChild(i),
            e.__resize_triggers__ = {
                triggers: i,
                expand: a,
                expandChild: r,
                contract: n
            },
            w(e),
            e.addEventListener("scroll", b, !0),
            e.__resize_last__ = {
                width: e.offsetWidth,
                height: e.offsetHeight
            }
        }
        function w(e) {
            var t = e.__resize_triggers__
              , i = t.expand
              , a = t.expandChild
              , r = t.contract
              , n = r.scrollWidth
              , o = r.scrollHeight
              , s = i.offsetWidth
              , l = i.offsetHeight
              , d = i.scrollWidth
              , c = i.scrollHeight;
            r.scrollLeft = n,
            r.scrollTop = o,
            a.style.width = s + 1 + "px",
            a.style.height = l + 1 + "px",
            i.scrollLeft = d,
            i.scrollTop = c
        }
        var C = {
            name: "vue-clamp",
            props: {
                tag: {
                    type: String,
                    default: "div"
                },
                autoresize: {
                    type: Boolean,
                    default: !1
                },
                maxLines: Number,
                maxHeight: [String, Number],
                ellipsis: {
                    type: String,
                    default: "…"
                },
                location: {
                    type: String,
                    default: "end",
                    validator: function(e) {
                        return -1 !== ["start", "middle", "end"].indexOf(e)
                    }
                },
                expanded: Boolean
            },
            data: function() {
                return {
                    offset: null,
                    text: this.getText(),
                    localExpanded: !!this.expanded
                }
            },
            computed: {
                clampedText: function() {
                    if ("start" === this.location)
                        return this.ellipsis + (this.text.slice(-this.offset) || "").trim();
                    if ("middle" === this.location) {
                        var e = Math.floor(this.offset / 2);
                        return (this.text.slice(0, e) || "").trim() + this.ellipsis + (this.text.slice(-e) || "").trim()
                    }
                    return (this.text.slice(0, this.offset) || "").trim() + this.ellipsis
                },
                isClamped: function() {
                    return !!this.text && this.offset !== this.text.length
                },
                realText: function() {
                    return this.isClamped ? this.clampedText : this.text
                },
                realMaxHeight: function() {
                    if (this.localExpanded)
                        return null;
                    var e = this.maxHeight;
                    return e ? "number" == typeof e ? e + "px" : e : null
                }
            },
            watch: {
                expanded: function(e) {
                    this.localExpanded = e
                },
                localExpanded: function(e) {
                    e ? this.clampAt(this.text.length) : this.update(),
                    this.expanded !== e && this.$emit("update:expanded", e)
                },
                isClamped: {
                    handler: function(e) {
                        var t = this;
                        this.$nextTick((function() {
                            return t.$emit("clampchange", e)
                        }
                        ))
                    },
                    immediate: !0
                }
            },
            mounted: function() {
                this.init(),
                this.$watch((function(e) {
                    return [e.maxLines, e.maxHeight, e.ellipsis, e.isClamped, e.location].join()
                }
                ), this.update),
                this.$watch((function(e) {
                    return [e.tag, e.text, e.autoresize].join()
                }
                ), this.init)
            },
            updated: function() {
                this.text = this.getText(),
                this.applyChange()
            },
            beforeDestroy: function() {
                this.cleanUp()
            },
            methods: {
                init: function() {
                    var e = this;
                    this.$slots.default && (this.offset = this.text.length,
                    this.cleanUp(),
                    this.autoresize && (h(this.$el, this.update),
                    this.unregisterResizeCallback = function() {
                        _(e.$el, e.update)
                    }
                    ),
                    this.update())
                },
                update: function() {
                    this.localExpanded || (this.applyChange(),
                    (this.isOverflow() || this.isClamped) && this.search())
                },
                expand: function() {
                    this.localExpanded = !0
                },
                collapse: function() {
                    this.localExpanded = !1
                },
                toggle: function() {
                    this.localExpanded = !this.localExpanded
                },
                getLines: function() {
                    return Object.keys(Array.prototype.slice.call(this.$refs.content.getClientRects()).reduce((function(e, t) {
                        var i = t.top + "/" + t.bottom;
                        return e[i] || (e[i] = !0),
                        e
                    }
                    ), {})).length
                },
                isOverflow: function() {
                    return !(!this.maxLines && !this.maxHeight) && (!!(this.maxLines && this.getLines() > this.maxLines) || !!(this.maxHeight && this.$el.scrollHeight > this.$el.offsetHeight))
                },
                getText: function() {
                    var e = (this.$slots.default || []).filter((function(e) {
                        return !e.tag && !e.isComment
                    }
                    ))[0];
                    return e ? e.text.trim() : ""
                },
                moveEdge: function(e) {
                    this.clampAt(this.offset + e)
                },
                clampAt: function(e) {
                    this.offset = e,
                    this.applyChange()
                },
                applyChange: function() {
                    this.$refs.text.textContent = this.realText
                },
                stepToFit: function() {
                    this.fill(),
                    this.clamp()
                },
                fill: function() {
                    for (; (!this.isOverflow() || this.getLines() < 2) && this.offset < this.text.length; )
                        this.moveEdge(1)
                },
                clamp: function() {
                    for (; this.isOverflow() && this.getLines() > 1 && this.offset > 0; )
                        this.moveEdge(-1)
                },
                search: function() {
                    for (var e = [], t = arguments.length; t--; )
                        e[t] = arguments[t];
                    var i = e[0];
                    void 0 === i && (i = 0);
                    var a = e[1];
                    if (void 0 === a && (a = this.offset),
                    a - i <= 3)
                        this.stepToFit();
                    else {
                        var r = Math.floor((a + i) / 2);
                        this.clampAt(r),
                        this.isOverflow() ? this.search(i, r) : this.search(r, a)
                    }
                },
                cleanUp: function() {
                    this.unregisterResizeCallback && this.unregisterResizeCallback()
                }
            },
            render: function(e) {
                var t = [e("span", this.$isServer ? {} : {
                    ref: "text",
                    attrs: {
                        "aria-label": this.text.trim()
                    }
                }, this.$isServer ? this.text : this.realText)]
                  , i = {
                    expand: this.expand,
                    collapse: this.collapse,
                    toggle: this.toggle,
                    clamped: this.isClamped,
                    expanded: this.localExpanded
                }
                  , a = this.$scopedSlots.before ? this.$scopedSlots.before(i) : this.$slots.before;
                a && t.unshift.apply(t, Array.isArray(a) ? a : [a]);
                var r = this.$scopedSlots.after ? this.$scopedSlots.after(i) : this.$slots.after;
                r && t.push.apply(t, Array.isArray(r) ? r : [r]);
                var n = [e("span", {
                    style: {
                        boxShadow: "transparent 0 0"
                    },
                    ref: "content"
                }, t)];
                return e(this.tag, {
                    style: {
                        maxHeight: this.realMaxHeight,
                        overflow: "hidden"
                    }
                }, n)
            }
        };
        t["a"] = C
    },
    2085: function(e, t, i) {
        "use strict";
        e.exports = function(e) {
            var t, i, a = 0, r = e.tokens, n = e.tokens.length;
            for (t = i = 0; t < n; t++)
                r[t].nesting < 0 && a--,
                r[t].level = a,
                r[t].nesting > 0 && a++,
                "text" === r[t].type && t + 1 < n && "text" === r[t + 1].type ? r[t + 1].content = r[t].content + r[t + 1].content : (t !== i && (r[i] = r[t]),
                i++);
            t !== i && (r.length = i)
        }
    },
    2436: function(e) {
        e.exports = JSON.parse('{"data":[{"id":1,"title":"Transletin","url":"https://www.transletin.com/","image":{"id":6,"name":"transletin.png","alternativeText":"transletin","caption":"transletin","width":200,"height":93,"formats":null,"hash":"transletin_7f9030f7c5","ext":".png","mime":"image/png","size":1.15,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659200804/production/transletin_7f9030f7c5.png","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/transletin_7f9030f7c5","resource_type":"image"},"createdAt":"2022-07-30T17:06:44.700Z","updatedAt":"2022-07-30T17:06:44.700Z"}},{"id":2,"title":"Buangdisini","url":"https://buangdisini.com/","image":{"id":49,"name":"buangdisini.png","alternativeText":"buangdisini","caption":null,"width":200,"height":93,"formats":null,"hash":"buangdisini_c38e1804bb","ext":".png","mime":"image/png","size":1.52,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1677380583/production/buangdisini_c38e1804bb.png","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/buangdisini_c38e1804bb","resource_type":"image"},"createdAt":"2023-02-26T03:03:03.737Z","updatedAt":"2023-02-26T03:03:03.737Z"}}],"meta":{"pagination":{"page":1,"pageSize":25,"pageCount":1,"total":2}}}')
    },
    "28ec": function(e, t, i) {
        "use strict";
        var a = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/
          , r = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;
        e.exports = function(e, t) {
            var i, n, o, s, l, d, c = e.pos;
            if (60 !== e.src.charCodeAt(c))
                return !1;
            for (l = e.pos,
            d = e.posMax; ; ) {
                if (++c >= d)
                    return !1;
                if (s = e.src.charCodeAt(c),
                60 === s)
                    return !1;
                if (62 === s)
                    break
            }
            return i = e.src.slice(l + 1, c),
            r.test(i) ? (n = e.md.normalizeLink(i),
            !!e.md.validateLink(n) && (t || (o = e.push("link_open", "a", 1),
            o.attrs = [["href", n]],
            o.markup = "autolink",
            o.info = "auto",
            o = e.push("text", "", 0),
            o.content = e.md.normalizeLinkText(i),
            o = e.push("link_close", "a", -1),
            o.markup = "autolink",
            o.info = "auto"),
            e.pos += i.length + 2,
            !0)) : !!a.test(i) && (n = e.md.normalizeLink("mailto:" + i),
            !!e.md.validateLink(n) && (t || (o = e.push("link_open", "a", 1),
            o.attrs = [["href", n]],
            o.markup = "autolink",
            o.info = "auto",
            o = e.push("text", "", 0),
            o.content = e.md.normalizeLinkText(i),
            o = e.push("link_close", "a", -1),
            o.markup = "autolink",
            o.info = "auto"),
            e.pos += i.length + 2,
            !0))
        }
    },
    "318b": function(e) {
        e.exports = JSON.parse('{"data":[{"id":1,"title":"Packages that I use to build my Personal Blog with Laravel","slug":"packages-that-i-use-to-build-my-personal-blog-with-laravel","createdAt":"2022-08-03T05:20:57.469Z","updatedAt":"2022-08-03T05:21:05.608Z","publishedAt":"2022-08-03T05:21:05.605Z"},{"id":2,"title":"Building my personal portfolio with Vue.js, Strapi and MongoDB","slug":"building-my-personal-portfolio-with-vue-js-strapi-and-mongo-db","createdAt":"2022-08-03T05:21:15.725Z","updatedAt":"2022-08-03T05:21:17.838Z","publishedAt":"2022-08-03T05:21:17.835Z"},{"id":3,"title":"AWS Projects","slug":"aws-projects","createdAt":"2023-10-01T03:19:12.822Z","updatedAt":"2023-10-01T03:29:00.492Z","publishedAt":"2023-10-01T03:29:00.488Z"}],"meta":{"pagination":{"page":1,"pageSize":25,"pageCount":1,"total":3}}}')
    },
    "32d4": function(e, t, i) {
        "use strict";
        i.r(t);
        var a = function() {
            var e = this
              , t = e._self._c;
            return t("div", [t("div", {
                staticClass: "content"
            }, [t("div", {
                staticClass: "section mt-0"
            }, [t("h1", {
                staticClass: "title title--h1 title__separate"
            }, [e._v("Blog Series")]), t("router-link", {
                staticClass: "badge badge-primary mb-4",
                attrs: {
                    to: "/series"
                }
            }, [t("em", {
                staticClass: "font-icon icon-arrow-left"
            }), e._v(" " + e._s(e.text.returnBtn) + " ")]), t("h3", {
                staticClass: "title title--h3 text-center"
            }, [e._v(e._s(e.series.title))]), t("br")], 1), t("div", {
                staticClass: "news-grid section"
            }, [e.series.length ? e._e() : t("div", {
                staticStyle: {
                    margin: "auto"
                }
            }, [t("p", [e._v("Oops! This series is coming soon!")])]), e._l(e.series, (function(i, a) {
                return t("article", {
                    key: i.id,
                    staticClass: "news-item box"
                }, [t("div", {
                    staticClass: "news-item__image-wrap overlay overlay--45"
                }, [t("div", {
                    staticClass: "news-item__date"
                }, [e._v(" " + e._s(e.dayFormat(i.publishedAt)) + " "), t("span", [e._v(" " + e._s(e.monthFormat(i.publishedAt)) + " ")])]), t("div", {
                    staticClass: "news-item__part"
                }, [t("span", [e._v(" " + e._s(e.text.part) + " ")]), e._v(" " + e._s(a + 1) + " ")]), t("router-link", {
                    staticClass: "news-item__link",
                    attrs: {
                        to: "/blog/" + i.slug
                    }
                }), t("img", {
                    staticClass: "cover lazyload",
                    attrs: {
                        src: i.thumbnail ? i.thumbnail.formats.small ? i.thumbnail.formats.small.url : i.thumbnail.url : "/static/social.jpg",
                        alt: i.thumbnail ? i.thumbnail.alternativeText ? i.thumbnail.alternativeText : i.title : "Adityacprtm"
                    }
                })], 1), t("div", {
                    staticClass: "news-item__caption"
                }, [t("h3", {
                    staticClass: "title title--h4"
                }, [t("v-clamp", {
                    attrs: {
                        autoresize: "",
                        "max-lines": 2
                    }
                }, [e._v(" " + e._s(i.title) + " ")])], 1), t("v-clamp", {
                    attrs: {
                        autoresize: "",
                        tag: "p",
                        "max-lines": 2
                    }
                }, [e._v(" " + e._s(i.meta.description) + " ")])], 1)])
            }
            ))], 2)])])
        }
          , r = []
          , n = i("1ce8")
          , o = i("d301")
          , s = i("e211")
          , l = {
            name: "SeriesList",
            mixins: [o["a"]],
            components: {
                VClamp: n["a"]
            },
            data() {
                return {
                    series: {},
                    text: {
                        returnBtn: "Return to Series List",
                        part: "Part"
                    }
                }
            },
            created() {
                this.getBlogSeries()
            },
            methods: {
                getBlogSeries() {
                    this.series = s.data.filter(e=>null != e.series && e.series.slug === this.$route.params.slug)
                }
            },
            metaInfo() {
                return {
                    title: this.series.title ? this.series.title : "Blog Series | Adityacprtm | DevOps - SRE - Cloud Engineer",
                    meta: [{
                        vmid: "description",
                        name: "description",
                        content: this.series.title ? this.series.title : "Blog Series by Adityacprtm."
                    }, {
                        vmid: "twitter:title",
                        name: "twitter:title",
                        content: this.series.title ? this.series.title : "Blog Series | Adityacprtm | DevOps - SRE - Cloud Engineer"
                    }, {
                        vmid: "twitter:description",
                        name: "twitter:description",
                        content: this.series.title ? this.series.title : "Blog Series by Adityacprtm."
                    }, {
                        vmid: "og:title",
                        property: "og:title",
                        content: this.series.title ? this.series.title : "Blog | Adityacprtm | DevOps - SRE - Cloud Engineer"
                    }, {
                        vmid: "og:description",
                        property: "og:description",
                        content: this.series.title ? this.series.title : "Blog Series by Adityacprtm."
                    }]
                }
            }
        }
          , d = l
          , c = i("2877")
          , p = Object(c["a"])(d, a, r, !1, null, null, null);
        t["default"] = p.exports
    },
    3408: function(e, t, i) {
        "use strict";
        e.exports = function(e) {
            var t;
            e.inlineMode ? (t = new e.Token("inline","",0),
            t.content = e.src,
            t.map = [0, 1],
            t.children = [],
            e.tokens.push(t)) : e.md.block.parse(e.src, e.md, e.env, e.tokens)
        }
    },
    "3db3": function(e, t, i) {
        e.exports = i.p + "img/icon-education.cc7f0741.svg"
    },
    "3fb9": function(e, t, i) {
        "use strict";
        var a = function() {
            var e = this
              , t = e._self._c;
            return t("div", [t("div", {
                staticClass: "row text-center"
            }, [t("div", {
                staticClass: "col"
            }, [t("p", {
                staticClass: "title title--h3"
            }, [e._v(e._s(e.title))]), t("p", [e.msg ? t("span", {
                staticClass: "with-errors"
            }, [e._v(e._s(e.msg)), t("br")]) : e._e(), "404" == e.code ? t("span", [e._v(" " + e._s(e.text.first) + " "), t("router-link", {
                attrs: {
                    to: "/contact"
                }
            }, [e._v(e._s(e.text.second))]), e._v(". ")], 1) : t("span", [e._v(" " + e._s(e.text.third) + " "), t("a", {
                attrs: {
                    href: "mailto:aditya@adityacprtm.dev"
                }
            }, [e._v("aditya@adityacprtm.dev")])]), t("br"), e._v(" " + e._s(e.text.fourth) + " ")])])])])
        }
          , r = []
          , n = {
            name: "Error",
            props: {
                title: String,
                msg: String,
                code: String
            },
            data() {
                return {
                    text: {
                        first: "Looking for something you didn't find? Contact me",
                        second: "here",
                        third: "Please notify me by email at",
                        fourth: "Or find one of the other contact methods listed to reach me that way."
                    }
                }
            }
        }
          , o = n
          , s = i("2877")
          , l = Object(s["a"])(o, a, r, !1, null, null, null);
        t["a"] = l.exports
    },
    4236: function(e, t, i) {
        "use strict";
        var a = i("0068").isSpace;
        e.exports = function(e, t) {
            var i, r, n, o = e.pos;
            if (10 !== e.src.charCodeAt(o))
                return !1;
            if (i = e.pending.length - 1,
            r = e.posMax,
            !t)
                if (i >= 0 && 32 === e.pending.charCodeAt(i))
                    if (i >= 1 && 32 === e.pending.charCodeAt(i - 1)) {
                        n = i - 1;
                        while (n >= 1 && 32 === e.pending.charCodeAt(n - 1))
                            n--;
                        e.pending = e.pending.slice(0, n),
                        e.push("hardbreak", "br", 0)
                    } else
                        e.pending = e.pending.slice(0, -1),
                        e.push("softbreak", "br", 0);
                else
                    e.push("softbreak", "br", 0);
            o++;
            while (o < r && a(e.src.charCodeAt(o)))
                o++;
            return e.pos = o,
            !0
        }
    },
    "428d": function(e, t, i) {
        "use strict";
        e.exports = {
            options: {
                html: !0,
                xhtmlOut: !0,
                breaks: !1,
                langPrefix: "language-",
                linkify: !1,
                typographer: !1,
                quotes: "“”‘’",
                highlight: null,
                maxNesting: 20
            },
            components: {
                core: {
                    rules: ["normalize", "block", "inline"]
                },
                block: {
                    rules: ["blockquote", "code", "fence", "heading", "hr", "html_block", "lheading", "list", "reference", "paragraph"]
                },
                inline: {
                    rules: ["autolink", "backticks", "emphasis", "entity", "escape", "html_inline", "image", "link", "newline", "text"],
                    rules2: ["balance_pairs", "emphasis", "text_collapse"]
                }
            }
        }
    },
    "43e0": function(e, t, i) {
        "use strict";
        e.exports = function(e) {
            var t = "";
            return t += e.protocol || "",
            t += e.slashes ? "//" : "",
            t += e.auth ? e.auth + "@" : "",
            e.hostname && -1 !== e.hostname.indexOf(":") ? t += "[" + e.hostname + "]" : t += e.hostname || "",
            t += e.port ? ":" + e.port : "",
            t += e.pathname || "",
            t += e.search || "",
            t += e.hash || "",
            t
        }
    },
    "44a8": function(e, t, i) {
        "use strict";
        e.exports = function(e, t) {
            var i, a, r, n, o, s, l = t + 1, d = e.md.block.ruler.getRules("paragraph"), c = e.lineMax;
            for (s = e.parentType,
            e.parentType = "paragraph"; l < c && !e.isEmpty(l); l++)
                if (!(e.sCount[l] - e.blkIndent > 3) && !(e.sCount[l] < 0)) {
                    for (a = !1,
                    r = 0,
                    n = d.length; r < n; r++)
                        if (d[r](e, l, c, !0)) {
                            a = !0;
                            break
                        }
                    if (a)
                        break
                }
            return i = e.getLines(t, l, e.blkIndent, !1).trim(),
            e.line = l,
            o = e.push("paragraph_open", "p", 1),
            o.map = [t, e.line],
            o = e.push("inline", "", 0),
            o.content = i,
            o.map = [t, e.line],
            o.children = [],
            o = e.push("paragraph_close", "p", -1),
            e.parentType = s,
            !0
        }
    },
    4883: function(e, t, i) {
        "use strict";
        function a() {
            this.__rules__ = [],
            this.__cache__ = null
        }
        a.prototype.__find__ = function(e) {
            for (var t = 0; t < this.__rules__.length; t++)
                if (this.__rules__[t].name === e)
                    return t;
            return -1
        }
        ,
        a.prototype.__compile__ = function() {
            var e = this
              , t = [""];
            e.__rules__.forEach((function(e) {
                e.enabled && e.alt.forEach((function(e) {
                    t.indexOf(e) < 0 && t.push(e)
                }
                ))
            }
            )),
            e.__cache__ = {},
            t.forEach((function(t) {
                e.__cache__[t] = [],
                e.__rules__.forEach((function(i) {
                    i.enabled && (t && i.alt.indexOf(t) < 0 || e.__cache__[t].push(i.fn))
                }
                ))
            }
            ))
        }
        ,
        a.prototype.at = function(e, t, i) {
            var a = this.__find__(e)
              , r = i || {};
            if (-1 === a)
                throw new Error("Parser rule not found: " + e);
            this.__rules__[a].fn = t,
            this.__rules__[a].alt = r.alt || [],
            this.__cache__ = null
        }
        ,
        a.prototype.before = function(e, t, i, a) {
            var r = this.__find__(e)
              , n = a || {};
            if (-1 === r)
                throw new Error("Parser rule not found: " + e);
            this.__rules__.splice(r, 0, {
                name: t,
                enabled: !0,
                fn: i,
                alt: n.alt || []
            }),
            this.__cache__ = null
        }
        ,
        a.prototype.after = function(e, t, i, a) {
            var r = this.__find__(e)
              , n = a || {};
            if (-1 === r)
                throw new Error("Parser rule not found: " + e);
            this.__rules__.splice(r + 1, 0, {
                name: t,
                enabled: !0,
                fn: i,
                alt: n.alt || []
            }),
            this.__cache__ = null
        }
        ,
        a.prototype.push = function(e, t, i) {
            var a = i || {};
            this.__rules__.push({
                name: e,
                enabled: !0,
                fn: t,
                alt: a.alt || []
            }),
            this.__cache__ = null
        }
        ,
        a.prototype.enable = function(e, t) {
            Array.isArray(e) || (e = [e]);
            var i = [];
            return e.forEach((function(e) {
                var a = this.__find__(e);
                if (a < 0) {
                    if (t)
                        return;
                    throw new Error("Rules manager: invalid rule name " + e)
                }
                this.__rules__[a].enabled = !0,
                i.push(e)
            }
            ), this),
            this.__cache__ = null,
            i
        }
        ,
        a.prototype.enableOnly = function(e, t) {
            Array.isArray(e) || (e = [e]),
            this.__rules__.forEach((function(e) {
                e.enabled = !1
            }
            )),
            this.enable(e, t)
        }
        ,
        a.prototype.disable = function(e, t) {
            Array.isArray(e) || (e = [e]);
            var i = [];
            return e.forEach((function(e) {
                var a = this.__find__(e);
                if (a < 0) {
                    if (t)
                        return;
                    throw new Error("Rules manager: invalid rule name " + e)
                }
                this.__rules__[a].enabled = !1,
                i.push(e)
            }
            ), this),
            this.__cache__ = null,
            i
        }
        ,
        a.prototype.getRules = function(e) {
            return null === this.__cache__ && this.__compile__(),
            this.__cache__[e] || []
        }
        ,
        e.exports = a
    },
    "4a94": function(e, t, i) {
        "use strict";
        e.exports = function(e, t) {
            var i, a, r, n, o, s, l, d, c = e.pos, p = e.src.charCodeAt(c);
            if (96 !== p)
                return !1;
            i = c,
            c++,
            a = e.posMax;
            while (c < a && 96 === e.src.charCodeAt(c))
                c++;
            if (r = e.src.slice(i, c),
            l = r.length,
            e.backticksScanned && (e.backticks[l] || 0) <= i)
                return t || (e.pending += r),
                e.pos += l,
                !0;
            o = s = c;
            while (-1 !== (o = e.src.indexOf("`", s))) {
                s = o + 1;
                while (s < a && 96 === e.src.charCodeAt(s))
                    s++;
                if (d = s - o,
                d === l)
                    return t || (n = e.push("code_inline", "code", 0),
                    n.markup = r,
                    n.content = e.src.slice(c, o).replace(/\n/g, " ").replace(/^ (.+) $/, "$1")),
                    e.pos = s,
                    !0;
                e.backticks[d] = o
            }
            return e.backticksScanned = !0,
            t || (e.pending += r),
            e.pos += l,
            !0
        }
    },
    "4b3e": function(e, t, i) {
        "use strict";
        var a = i("0068").isSpace;
        function r(e, t) {
            var i, r, n, o;
            return r = e.bMarks[t] + e.tShift[t],
            n = e.eMarks[t],
            i = e.src.charCodeAt(r++),
            42 !== i && 45 !== i && 43 !== i || r < n && (o = e.src.charCodeAt(r),
            !a(o)) ? -1 : r
        }
        function n(e, t) {
            var i, r = e.bMarks[t] + e.tShift[t], n = r, o = e.eMarks[t];
            if (n + 1 >= o)
                return -1;
            if (i = e.src.charCodeAt(n++),
            i < 48 || i > 57)
                return -1;
            for (; ; ) {
                if (n >= o)
                    return -1;
                if (i = e.src.charCodeAt(n++),
                !(i >= 48 && i <= 57)) {
                    if (41 === i || 46 === i)
                        break;
                    return -1
                }
                if (n - r >= 10)
                    return -1
            }
            return n < o && (i = e.src.charCodeAt(n),
            !a(i)) ? -1 : n
        }
        function o(e, t) {
            var i, a, r = e.level + 2;
            for (i = t + 2,
            a = e.tokens.length - 2; i < a; i++)
                e.tokens[i].level === r && "paragraph_open" === e.tokens[i].type && (e.tokens[i + 2].hidden = !0,
                e.tokens[i].hidden = !0,
                i += 2)
        }
        e.exports = function(e, t, i, a) {
            var s, l, d, c, p, u, m, h, _, g, f, b, v, y, w, C, k, A, S, x, T, D, j, P, z, E, I, L, M = !1, N = !0;
            if (e.sCount[t] - e.blkIndent >= 4)
                return !1;
            if (e.listIndent >= 0 && e.sCount[t] - e.listIndent >= 4 && e.sCount[t] < e.blkIndent)
                return !1;
            if (a && "paragraph" === e.parentType && e.sCount[t] >= e.blkIndent && (M = !0),
            (j = n(e, t)) >= 0) {
                if (m = !0,
                z = e.bMarks[t] + e.tShift[t],
                v = Number(e.src.slice(z, j - 1)),
                M && 1 !== v)
                    return !1
            } else {
                if (!((j = r(e, t)) >= 0))
                    return !1;
                m = !1
            }
            if (M && e.skipSpaces(j) >= e.eMarks[t])
                return !1;
            if (b = e.src.charCodeAt(j - 1),
            a)
                return !0;
            f = e.tokens.length,
            m ? (L = e.push("ordered_list_open", "ol", 1),
            1 !== v && (L.attrs = [["start", v]])) : L = e.push("bullet_list_open", "ul", 1),
            L.map = g = [t, 0],
            L.markup = String.fromCharCode(b),
            w = t,
            P = !1,
            I = e.md.block.ruler.getRules("list"),
            A = e.parentType,
            e.parentType = "list";
            while (w < i) {
                D = j,
                y = e.eMarks[w],
                u = C = e.sCount[w] + j - (e.bMarks[t] + e.tShift[t]);
                while (D < y) {
                    if (s = e.src.charCodeAt(D),
                    9 === s)
                        C += 4 - (C + e.bsCount[w]) % 4;
                    else {
                        if (32 !== s)
                            break;
                        C++
                    }
                    D++
                }
                if (l = D,
                p = l >= y ? 1 : C - u,
                p > 4 && (p = 1),
                c = u + p,
                L = e.push("list_item_open", "li", 1),
                L.markup = String.fromCharCode(b),
                L.map = h = [t, 0],
                m && (L.info = e.src.slice(z, j - 1)),
                T = e.tight,
                x = e.tShift[t],
                S = e.sCount[t],
                k = e.listIndent,
                e.listIndent = e.blkIndent,
                e.blkIndent = c,
                e.tight = !0,
                e.tShift[t] = l - e.bMarks[t],
                e.sCount[t] = C,
                l >= y && e.isEmpty(t + 1) ? e.line = Math.min(e.line + 2, i) : e.md.block.tokenize(e, t, i, !0),
                e.tight && !P || (N = !1),
                P = e.line - t > 1 && e.isEmpty(e.line - 1),
                e.blkIndent = e.listIndent,
                e.listIndent = k,
                e.tShift[t] = x,
                e.sCount[t] = S,
                e.tight = T,
                L = e.push("list_item_close", "li", -1),
                L.markup = String.fromCharCode(b),
                w = t = e.line,
                h[1] = w,
                l = e.bMarks[t],
                w >= i)
                    break;
                if (e.sCount[w] < e.blkIndent)
                    break;
                if (e.sCount[t] - e.blkIndent >= 4)
                    break;
                for (E = !1,
                d = 0,
                _ = I.length; d < _; d++)
                    if (I[d](e, w, i, !0)) {
                        E = !0;
                        break
                    }
                if (E)
                    break;
                if (m) {
                    if (j = n(e, w),
                    j < 0)
                        break;
                    z = e.bMarks[w] + e.tShift[w]
                } else if (j = r(e, w),
                j < 0)
                    break;
                if (b !== e.src.charCodeAt(j - 1))
                    break
            }
            return L = m ? e.push("ordered_list_close", "ol", -1) : e.push("bullet_list_close", "ul", -1),
            L.markup = String.fromCharCode(b),
            g[1] = w,
            e.line = w,
            e.parentType = A,
            N && o(e, f),
            !0
        }
    },
    "4c26": function(e, t, i) {
        "use strict";
        var a = /\r\n?|\n/g
          , r = /\0/g;
        e.exports = function(e) {
            var t;
            t = e.src.replace(a, "\n"),
            t = t.replace(r, "�"),
            e.src = t
        }
    },
    "4cb4": function(e, t, i) {
        "use strict";
        var a = i("4883")
          , r = [["text", i("baca")], ["newline", i("4236")], ["escape", i("6e00")], ["backticks", i("4a94")], ["strikethrough", i("922c").tokenize], ["emphasis", i("c8a9").tokenize], ["link", i("cd0f")], ["image", i("932d")], ["autolink", i("28ec")], ["html_inline", i("c2d8")], ["entity", i("5b54")]]
          , n = [["balance_pairs", i("838d")], ["strikethrough", i("922c").postProcess], ["emphasis", i("c8a9").postProcess], ["text_collapse", i("2085")]];
        function o() {
            var e;
            for (this.ruler = new a,
            e = 0; e < r.length; e++)
                this.ruler.push(r[e][0], r[e][1]);
            for (this.ruler2 = new a,
            e = 0; e < n.length; e++)
                this.ruler2.push(n[e][0], n[e][1])
        }
        o.prototype.skipToken = function(e) {
            var t, i, a = e.pos, r = this.ruler.getRules(""), n = r.length, o = e.md.options.maxNesting, s = e.cache;
            if ("undefined" === typeof s[a]) {
                if (e.level < o) {
                    for (i = 0; i < n; i++)
                        if (e.level++,
                        t = r[i](e, !0),
                        e.level--,
                        t)
                            break
                } else
                    e.pos = e.posMax;
                t || e.pos++,
                s[a] = e.pos
            } else
                e.pos = s[a]
        }
        ,
        o.prototype.tokenize = function(e) {
            var t, i, a = this.ruler.getRules(""), r = a.length, n = e.posMax, o = e.md.options.maxNesting;
            while (e.pos < n) {
                if (e.level < o)
                    for (i = 0; i < r; i++)
                        if (t = a[i](e, !1),
                        t)
                            break;
                if (t) {
                    if (e.pos >= n)
                        break
                } else
                    e.pending += e.src[e.pos++]
            }
            e.pending && e.pushPending()
        }
        ,
        o.prototype.parse = function(e, t, i, a) {
            var r, n, o, s = new this.State(e,t,i,a);
            for (this.tokenize(s),
            n = this.ruler2.getRules(""),
            o = n.length,
            r = 0; r < o; r++)
                n[r](s)
        }
        ,
        o.prototype.State = i("097b"),
        e.exports = o
    },
    "4fc2": function(e, t) {
        e.exports = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/
    },
    5075: function(e, t, i) {
        "use strict";
        i.d(t, "a", (function() {
            return a
        }
        ));
        const a = {
            methods: {
                isMobile() {
                    return !!/Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                }
            }
        }
    },
    "565b": function(e, t, i) {
        "use strict";
        t.parseLinkLabel = i("df56"),
        t.parseLinkDestination = i("e4ca"),
        t.parseLinkTitle = i("7d91")
    },
    5706: function(e, t, i) {
        "use strict";
        var a = "[a-zA-Z_:][a-zA-Z0-9:._-]*"
          , r = "[^\"'=<>`\\x00-\\x20]+"
          , n = "'[^']*'"
          , o = '"[^"]*"'
          , s = "(?:" + r + "|" + n + "|" + o + ")"
          , l = "(?:\\s+" + a + "(?:\\s*=\\s*" + s + ")?)"
          , d = "<[A-Za-z][A-Za-z0-9\\-]*" + l + "*\\s*\\/?>"
          , c = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>"
          , p = "\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e"
          , u = "<[?][\\s\\S]*?[?]>"
          , m = "<![A-Z]+\\s+[^>]*>"
          , h = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>"
          , _ = new RegExp("^(?:" + d + "|" + c + "|" + p + "|" + u + "|" + m + "|" + h + ")")
          , g = new RegExp("^(?:" + d + "|" + c + ")");
        e.exports.HTML_TAG_RE = _,
        e.exports.HTML_OPEN_CLOSE_TAG_RE = g
    },
    "5b54": function(e, t, i) {
        "use strict";
        var a = i("bd68")
          , r = i("0068").has
          , n = i("0068").isValidEntityCode
          , o = i("0068").fromCodePoint
          , s = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i
          , l = /^&([a-z][a-z0-9]{1,31});/i;
        e.exports = function(e, t) {
            var i, d, c, p = e.pos, u = e.posMax;
            if (38 !== e.src.charCodeAt(p))
                return !1;
            if (p + 1 < u)
                if (i = e.src.charCodeAt(p + 1),
                35 === i) {
                    if (c = e.src.slice(p).match(s),
                    c)
                        return t || (d = "x" === c[1][0].toLowerCase() ? parseInt(c[1].slice(1), 16) : parseInt(c[1], 10),
                        e.pending += n(d) ? o(d) : o(65533)),
                        e.pos += c[0].length,
                        !0
                } else if (c = e.src.slice(p).match(l),
                c && r(a, c[1]))
                    return t || (e.pending += a[c[1]]),
                    e.pos += c[0].length,
                    !0;
            return t || (e.pending += "&"),
            e.pos++,
            !0
        }
    },
    "5b77": function(e) {
        e.exports = JSON.parse('{"data":[{"id":1,"title":"DevOps","description":"I enjoy to improve the speed and quality of delivery, automate and achieve CICD","image":{"id":2,"name":"devops_sre.svg","alternativeText":"devops_sre","caption":"devops_sre","width":512,"height":512,"formats":null,"hash":"devops_sre_b8f5ee29fa","ext":".svg","mime":"image/svg+xml","size":2.69,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659200547/production/devops_sre_b8f5ee29fa.svg","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/devops_sre_b8f5ee29fa","resource_type":"image"},"createdAt":"2022-07-30T17:02:29.607Z","updatedAt":"2022-07-30T17:02:29.607Z"}},{"id":2,"title":"Cloud Engineer","description":"I enjoy design, secure and maintenance of an organization’s cloud-based infrastructure and application","image":{"id":3,"name":"cloud_computing.svg","alternativeText":"cloud_computing","caption":"cloud_computing","width":512,"height":512,"formats":null,"hash":"cloud_computing_743c36c508","ext":".svg","mime":"image/svg+xml","size":2.84,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659200618/production/cloud_computing_743c36c508.svg","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/cloud_computing_743c36c508","resource_type":"image"},"createdAt":"2022-07-30T17:03:40.301Z","updatedAt":"2022-07-30T17:03:40.301Z"}},{"id":3,"title":"SRE","description":"I curious the processes and tools that ensure the scalability, reliability and availability of software systems","image":{"id":52,"name":"sre.png","alternativeText":"sre","caption":"sre","width":512,"height":512,"hash":"sre_550e1ee575","ext":".png","mime":"image/png","size":6.16,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1708173524/production/sre_550e1ee575.png","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/sre_550e1ee575","resource_type":"image"},"createdAt":"2024-02-17T12:38:44.798Z","updatedAt":"2024-02-17T12:38:44.798Z"}},{"id":4,"title":"Software Development","description":"I enjoy learning software development either for personal or specific purposes","image":{"id":5,"name":"web_dev.svg","alternativeText":"web_dev","caption":"web_dev","width":512,"height":512,"formats":null,"hash":"web_dev_d2d448f99d","ext":".svg","mime":"image/svg+xml","size":2.22,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659200714/production/web_dev_d2d448f99d.svg","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/web_dev_d2d448f99d","resource_type":"image"},"createdAt":"2022-07-30T17:05:16.465Z","updatedAt":"2022-07-30T17:05:16.465Z"}}],"meta":{"pagination":{"page":1,"pageSize":25,"pageCount":1,"total":4}}}')
    },
    "5d9b": function(e, t, i) {
        "use strict";
        var a = i("2b0e")
          , r = i("d4cd")
          , n = i.n(r)
          , o = a["a"].extend({
            name: "VueMarkdown",
            props: {
                source: {
                    type: String,
                    required: !0
                },
                options: {
                    type: Object,
                    required: !1
                }
            },
            data: function() {
                return {
                    md: null
                }
            },
            computed: {
                content: function() {
                    var e, t = this.source;
                    return null === (e = this.md) || void 0 === e ? void 0 : e.render(t)
                }
            },
            created: function() {
                this.md = new n.a(this.options)
            },
            render: function(e) {
                return e("div", {
                    domProps: {
                        innerHTML: this.content
                    }
                })
            }
        });
        t["a"] = o
    },
    "5fbd": function(e, t, i) {
        "use strict";
        var a = i("e1f3")
          , r = i("5706").HTML_OPEN_CLOSE_TAG_RE
          , n = [[/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0], [/^<!--/, /-->/, !0], [/^<\?/, /\?>/, !0], [/^<![A-Z]/, />/, !0], [/^<!\[CDATA\[/, /\]\]>/, !0], [new RegExp("^</?(" + a.join("|") + ")(?=(\\s|/?>|$))","i"), /^$/, !0], [new RegExp(r.source + "\\s*$"), /^$/, !1]];
        e.exports = function(e, t, i, a) {
            var r, o, s, l, d = e.bMarks[t] + e.tShift[t], c = e.eMarks[t];
            if (e.sCount[t] - e.blkIndent >= 4)
                return !1;
            if (!e.md.options.html)
                return !1;
            if (60 !== e.src.charCodeAt(d))
                return !1;
            for (l = e.src.slice(d, c),
            r = 0; r < n.length; r++)
                if (n[r][0].test(l))
                    break;
            if (r === n.length)
                return !1;
            if (a)
                return n[r][2];
            if (o = t + 1,
            !n[r][1].test(l))
                for (; o < i; o++) {
                    if (e.sCount[o] < e.blkIndent)
                        break;
                    if (d = e.bMarks[o] + e.tShift[o],
                    c = e.eMarks[o],
                    l = e.src.slice(d, c),
                    n[r][1].test(l)) {
                        0 !== l.length && o++;
                        break
                    }
                }
            return e.line = o,
            s = e.push("html_block", "", 0),
            s.map = [t, o],
            s.content = e.getLines(t, o, e.blkIndent, !0),
            !0
        }
    },
    "62e4": function(e, t) {
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}
            ,
            e.paths = [],
            e.children || (e.children = []),
            Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l
                }
            }),
            Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i
                }
            }),
            e.webpackPolyfill = 1),
            e
        }
    },
    "69ee": function(e) {
        e.exports = JSON.parse('{"data":[{"id":1,"date":"2018-10-27","description":"The domain [Adityacprtm.com](http://adityacprtm.com/) has been registered.","createdAt":"2022-07-31T01:14:26.620Z","updatedAt":"2022-07-31T01:14:28.084Z","publishedAt":"2022-07-31T01:14:28.081Z"},{"id":2,"date":"2018-10-28","description":"Website creation starts and it takes 4 days to complete a static website.","createdAt":"2022-07-31T01:15:02.533Z","updatedAt":"2022-07-31T01:15:04.224Z","publishedAt":"2022-07-31T01:15:04.221Z"},{"id":3,"date":"2018-11-01","description":"[Adityacprtm.com](http://adityacprtm.com/) officially released!","createdAt":"2022-07-31T01:16:04.162Z","updatedAt":"2022-07-31T01:16:05.862Z","publishedAt":"2022-07-31T01:16:05.860Z"},{"id":4,"date":"2019-09-02","description":"[Adityacprtm.com](http://adityacprtm.com/) is undergoing a redesign with a new design. Version 2 is still on a static website.","createdAt":"2022-07-31T01:16:26.337Z","updatedAt":"2022-07-31T01:16:27.629Z","publishedAt":"2022-07-31T01:16:27.627Z"},{"id":5,"date":"2019-10-01","description":"[Adityacprtm.com](http://adityacprtm.com/) moved house from Shared Hosting to [Serverless Website](https://dev.to/adityacprtm/cara-membangun-serverless-website-dengan-recaptcha-di-aws-339k) on AWS.","createdAt":"2022-07-31T01:16:46.202Z","updatedAt":"2022-07-31T01:16:48.611Z","publishedAt":"2022-07-31T01:16:48.609Z"},{"id":6,"date":"2020-05-30","description":"Dynamic website development started using Laravel and underwent a Version 3 redesign. It took 2 days to complete.","createdAt":"2022-07-31T01:17:07.688Z","updatedAt":"2022-07-31T01:17:09.188Z","publishedAt":"2022-07-31T01:17:09.185Z"},{"id":7,"date":"2020-06-01","description":"[Adityacprtm.com](http://adityacprtm.com) has a Custom CMS (Content Management System) which is built with laravel.","createdAt":"2022-07-31T01:18:01.121Z","updatedAt":"2022-07-31T01:18:02.611Z","publishedAt":"2022-07-31T01:18:02.609Z"},{"id":8,"date":"2020-08-10","description":"[Adityacprtm.com](http://adityacprtm.com) has a branch, namely Blog! [Blog.adityacprtm.com](http://blog.adityacprtm.com)","createdAt":"2022-07-31T01:18:21.167Z","updatedAt":"2022-07-31T01:18:23.488Z","publishedAt":"2022-07-31T01:18:23.486Z"},{"id":9,"date":"2020-08-11","description":"[Blog.adityacprtm.com](http://blog.adityacprtm.com) was built using Wordpress and took 6 days to complete.","createdAt":"2022-07-31T01:18:50.786Z","updatedAt":"2022-07-31T01:18:52.722Z","publishedAt":"2022-07-31T01:18:52.720Z"},{"id":10,"date":"2020-08-17","description":"The first article has been published on [blog.adityacprtm.com](http://blog.adityacprtm.com)!","createdAt":"2022-07-31T01:19:12.646Z","updatedAt":"2022-07-31T01:19:14.391Z","publishedAt":"2022-07-31T01:19:14.389Z"},{"id":11,"date":"2020-09-27","description":"[Adityacprtm.com](http://adityacprtm.com) support dark mode!","createdAt":"2022-07-31T01:19:44.206Z","updatedAt":"2022-07-31T01:19:45.790Z","publishedAt":"2022-07-31T01:19:45.788Z"},{"id":12,"date":"2020-09-28","description":"[Hidemail](http://hidemail.adityacprtm.com/) by Adityacprtm has been released!","createdAt":"2022-07-31T01:20:04.096Z","updatedAt":"2022-07-31T01:20:05.756Z","publishedAt":"2022-07-31T01:20:05.754Z"},{"id":13,"date":"2020-10-06","description":"[EZURL](http://ezurl.adityacprtm.com/) by Adityacprtm has been released!","createdAt":"2022-07-31T01:20:27.286Z","updatedAt":"2022-07-31T01:20:28.719Z","publishedAt":"2022-07-31T01:20:28.717Z"},{"id":14,"date":"2020-11-15","description":"[EZURL](http://ezurl.adityacprtm.com/) has undergone a redesign and has become more mobile friendly!","createdAt":"2022-07-31T01:20:59.695Z","updatedAt":"2022-07-31T01:21:01.136Z","publishedAt":"2022-07-31T01:21:01.134Z"},{"id":15,"date":"2021-01-10","description":"[Blog.adityacprtm.com](http://blog.adityacprtm.com) resigned 😭 and redirected to [dev.to/adityacprtm](https://dev.to/adityacprtm) 🎉","createdAt":"2022-07-31T01:21:18.769Z","updatedAt":"2022-07-31T01:21:20.187Z","publishedAt":"2022-07-31T01:21:20.184Z"},{"id":16,"date":"2021-02-18","description":"The domain [adityacprtm.dev](http://adityacprtm.dev) was registered","createdAt":"2022-07-31T01:21:36.915Z","updatedAt":"2022-07-31T01:21:38.464Z","publishedAt":"2022-07-31T01:21:38.462Z"},{"id":17,"date":"2021-02-20","description":"[adityacprtm.com](http://adityacprtm.com) is now [adityacprtm.dev](http://adityacprtm.dev)","createdAt":"2022-07-31T01:23:26.208Z","updatedAt":"2022-07-31T01:23:28.051Z","publishedAt":"2022-07-31T01:23:28.050Z"},{"id":18,"date":"2021-02-21","description":"[adityacprtm.dev](http://adityacprtm.dev) was built using the new Tech Stack namely Vue.js, Strapi and MongoDB. Check this out, blog series [here](https://adityacprtm.dev/series/6035c62c88be310015a90851)","createdAt":"2022-07-31T01:23:50.999Z","updatedAt":"2022-07-31T01:23:52.718Z","publishedAt":"2022-07-31T01:23:52.716Z"},{"id":19,"date":"2021-05-13","description":"[adityacprtm.dev](http://adityacprtm.dev) supports localized content in different languages, which is English and Indonesian.","createdAt":"2022-07-31T01:24:21.912Z","updatedAt":"2022-07-31T01:24:48.770Z","publishedAt":"2022-07-31T01:24:48.767Z"},{"id":20,"date":"2022-07-31","description":"The Backend version has been upgraded, localized content is not currently supported.","createdAt":"2022-07-31T01:27:29.583Z","updatedAt":"2022-07-31T01:27:31.343Z","publishedAt":"2022-07-31T01:27:31.340Z"}],"meta":{"pagination":{"page":1,"pageSize":25,"pageCount":1,"total":20}}}')
    },
    "6e00": function(e, t, i) {
        "use strict";
        for (var a = i("0068").isSpace, r = [], n = 0; n < 256; n++)
            r.push(0);
        "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach((function(e) {
            r[e.charCodeAt(0)] = 1
        }
        )),
        e.exports = function(e, t) {
            var i, n = e.pos, o = e.posMax;
            if (92 !== e.src.charCodeAt(n))
                return !1;
            if (n++,
            n < o) {
                if (i = e.src.charCodeAt(n),
                i < 256 && 0 !== r[i])
                    return t || (e.pending += e.src[n]),
                    e.pos += 2,
                    !0;
                if (10 === i) {
                    t || e.push("hardbreak", "br", 0),
                    n++;
                    while (n < o) {
                        if (i = e.src.charCodeAt(n),
                        !a(i))
                            break;
                        n++
                    }
                    return e.pos = n,
                    !0
                }
            }
            return t || (e.pending += "\\"),
            e.pos++,
            !0
        }
    },
    "6fd1": function(e, t) {
        e.exports = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/
    },
    7133: function(e, t, i) {
        "use strict";
        var a = i("096b");
        function r(e, t, i) {
            this.src = e,
            this.env = i,
            this.tokens = [],
            this.inlineMode = !1,
            this.md = t
        }
        r.prototype.Token = a,
        e.exports = r
    },
    7696: function(e, t, i) {
        "use strict";
        var a = i("4883")
          , r = [["table", i("80d3"), ["paragraph", "reference"]], ["code", i("9c12")], ["fence", i("bf2b"), ["paragraph", "reference", "blockquote", "list"]], ["blockquote", i("e80e"), ["paragraph", "reference", "blockquote", "list"]], ["hr", i("fdfe"), ["paragraph", "reference", "blockquote", "list"]], ["list", i("4b3e"), ["paragraph", "reference", "blockquote"]], ["reference", i("d670")], ["html_block", i("5fbd"), ["paragraph", "reference", "blockquote"]], ["heading", i("0758"), ["paragraph", "reference", "blockquote"]], ["lheading", i("199e")], ["paragraph", i("44a8")]];
        function n() {
            this.ruler = new a;
            for (var e = 0; e < r.length; e++)
                this.ruler.push(r[e][0], r[e][1], {
                    alt: (r[e][2] || []).slice()
                })
        }
        n.prototype.tokenize = function(e, t, i) {
            var a, r, n = this.ruler.getRules(""), o = n.length, s = t, l = !1, d = e.md.options.maxNesting;
            while (s < i) {
                if (e.line = s = e.skipEmptyLines(s),
                s >= i)
                    break;
                if (e.sCount[s] < e.blkIndent)
                    break;
                if (e.level >= d) {
                    e.line = i;
                    break
                }
                for (r = 0; r < o; r++)
                    if (a = n[r](e, s, i, !1),
                    a)
                        break;
                e.tight = !l,
                e.isEmpty(e.line - 1) && (l = !0),
                s = e.line,
                s < i && e.isEmpty(s) && (l = !0,
                s++,
                e.line = s)
            }
        }
        ,
        n.prototype.parse = function(e, t, i, a) {
            var r;
            e && (r = new this.State(e,t,i,a),
            this.tokenize(r, r.line, r.lineMax))
        }
        ,
        n.prototype.State = i("834f"),
        e.exports = n
    },
    "7bca": function(e, t, i) {
        "use strict";
        i.r(t);
        var a = function() {
            var e = this
              , t = e._self._c;
            return t("div", [e._m(0), t("div", {
                staticClass: "row"
            }, [t("div", {
                staticClass: "col-12"
            }, [t("div", {
                staticClass: "timeline"
            }, e._l(e.journeys.data, (function(i) {
                return t("article", {
                    key: i.id,
                    staticClass: "timeline__item"
                }, [t("h5", {
                    staticClass: "title title--h5 timeline__title"
                }, [e._v(" " + e._s(e.monthDayYearFormat(i.date)) + " "), t("span", {
                    staticStyle: {
                        "font-weight": "normal"
                    }
                }, [t("vue-markdown", {
                    attrs: {
                        source: i.description
                    }
                })], 1)])])
            }
            )), 0)])])])
        }
          , r = [function() {
            var e = this
              , t = e._self._c;
            return t("div", {
                staticClass: "pb-2"
            }, [t("h1", {
                staticClass: "title title--h1 first-title title__separate"
            }, [e._v("Journey")])])
        }
        ]
          , n = i("5d9b")
          , o = i("d301")
          , s = i("5075")
          , l = i("69ee")
          , d = {
            name: "Journey",
            mixins: [o["a"], s["a"]],
            data() {
                return {
                    page: {
                        meta: {
                            title: "Journey | Adityacprtm | DevOps - SRE - Cloud Engineer",
                            description: "Look at my journey in building this portfolio website. Start from hard code to dynamic website."
                        }
                    },
                    journeys: {
                        data: l.data
                    }
                }
            },
            components: {
                VueMarkdown: n["a"]
            },
            created() {},
            methods: {},
            metaInfo() {
                return {
                    title: this.page.meta ? this.page.meta.title : "Journey | Adityacprtm | DevOps - SRE - Cloud Engineer",
                    meta: [{
                        vmid: "description",
                        name: "description",
                        content: this.page.meta ? this.page.meta.description : "Get to know Aditya Chamim Pratama more deeply with Journey."
                    }, {
                        vmid: "twitter:title",
                        name: "twitter:title",
                        content: this.page.meta ? this.page.meta.title : "Journey | Adityacprtm | DevOps - SRE - Cloud Engineer"
                    }, {
                        vmid: "twitter:description",
                        name: "twitter:description",
                        content: this.page.meta ? this.page.meta.description : "Get to know Aditya Chamim Pratama more deeply with Journey."
                    }, {
                        vmid: "og:title",
                        property: "og:title",
                        content: this.page.meta ? this.page.meta.title : "Journey | Adityacprtm | DevOps - SRE - Cloud Engineer"
                    }, {
                        vmid: "og:description",
                        property: "og:description",
                        content: this.page.meta ? this.page.meta.description : "Get to know Aditya Chamim Pratama more deeply with Journey."
                    }]
                }
            }
        }
          , c = d
          , p = i("2877")
          , u = Object(p["a"])(c, a, r, !1, null, null, null);
        t["default"] = u.exports
    },
    "7ca0": function(e, t) {
        e.exports = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/
    },
    "7cc2": function(e, t, i) {
        "use strict";
        var a = i("0068").assign
          , r = i("0068").unescapeAll
          , n = i("0068").escapeHtml
          , o = {};
        function s() {
            this.rules = a({}, o)
        }
        o.code_inline = function(e, t, i, a, r) {
            var o = e[t];
            return "<code" + r.renderAttrs(o) + ">" + n(e[t].content) + "</code>"
        }
        ,
        o.code_block = function(e, t, i, a, r) {
            var o = e[t];
            return "<pre" + r.renderAttrs(o) + "><code>" + n(e[t].content) + "</code></pre>\n"
        }
        ,
        o.fence = function(e, t, i, a, o) {
            var s, l, d, c, p, u = e[t], m = u.info ? r(u.info).trim() : "", h = "", _ = "";
            return m && (d = m.split(/(\s+)/g),
            h = d[0],
            _ = d.slice(2).join("")),
            s = i.highlight && i.highlight(u.content, h, _) || n(u.content),
            0 === s.indexOf("<pre") ? s + "\n" : m ? (l = u.attrIndex("class"),
            c = u.attrs ? u.attrs.slice() : [],
            l < 0 ? c.push(["class", i.langPrefix + h]) : (c[l] = c[l].slice(),
            c[l][1] += " " + i.langPrefix + h),
            p = {
                attrs: c
            },
            "<pre><code" + o.renderAttrs(p) + ">" + s + "</code></pre>\n") : "<pre><code" + o.renderAttrs(u) + ">" + s + "</code></pre>\n"
        }
        ,
        o.image = function(e, t, i, a, r) {
            var n = e[t];
            return n.attrs[n.attrIndex("alt")][1] = r.renderInlineAsText(n.children, i, a),
            r.renderToken(e, t, i)
        }
        ,
        o.hardbreak = function(e, t, i) {
            return i.xhtmlOut ? "<br />\n" : "<br>\n"
        }
        ,
        o.softbreak = function(e, t, i) {
            return i.breaks ? i.xhtmlOut ? "<br />\n" : "<br>\n" : "\n"
        }
        ,
        o.text = function(e, t) {
            return n(e[t].content)
        }
        ,
        o.html_block = function(e, t) {
            return e[t].content
        }
        ,
        o.html_inline = function(e, t) {
            return e[t].content
        }
        ,
        s.prototype.renderAttrs = function(e) {
            var t, i, a;
            if (!e.attrs)
                return "";
            for (a = "",
            t = 0,
            i = e.attrs.length; t < i; t++)
                a += " " + n(e.attrs[t][0]) + '="' + n(e.attrs[t][1]) + '"';
            return a
        }
        ,
        s.prototype.renderToken = function(e, t, i) {
            var a, r = "", n = !1, o = e[t];
            return o.hidden ? "" : (o.block && -1 !== o.nesting && t && e[t - 1].hidden && (r += "\n"),
            r += (-1 === o.nesting ? "</" : "<") + o.tag,
            r += this.renderAttrs(o),
            0 === o.nesting && i.xhtmlOut && (r += " /"),
            o.block && (n = !0,
            1 === o.nesting && t + 1 < e.length && (a = e[t + 1],
            ("inline" === a.type || a.hidden || -1 === a.nesting && a.tag === o.tag) && (n = !1))),
            r += n ? ">\n" : ">",
            r)
        }
        ,
        s.prototype.renderInline = function(e, t, i) {
            for (var a, r = "", n = this.rules, o = 0, s = e.length; o < s; o++)
                a = e[o].type,
                "undefined" !== typeof n[a] ? r += n[a](e, o, t, i, this) : r += this.renderToken(e, o, t);
            return r
        }
        ,
        s.prototype.renderInlineAsText = function(e, t, i) {
            for (var a = "", r = 0, n = e.length; r < n; r++)
                "text" === e[r].type ? a += e[r].content : "image" === e[r].type ? a += this.renderInlineAsText(e[r].children, t, i) : "softbreak" === e[r].type && (a += "\n");
            return a
        }
        ,
        s.prototype.render = function(e, t, i) {
            var a, r, n, o = "", s = this.rules;
            for (a = 0,
            r = e.length; a < r; a++)
                n = e[a].type,
                "inline" === n ? o += this.renderInline(e[a].children, t, i) : "undefined" !== typeof s[n] ? o += s[e[a].type](e, a, t, i, this) : o += this.renderToken(e, a, t, i);
            return o
        }
        ,
        e.exports = s
    },
    "7d91": function(e, t, i) {
        "use strict";
        var a = i("0068").unescapeAll;
        e.exports = function(e, t, i) {
            var r, n, o = 0, s = t, l = {
                ok: !1,
                pos: 0,
                lines: 0,
                str: ""
            };
            if (t >= i)
                return l;
            if (n = e.charCodeAt(t),
            34 !== n && 39 !== n && 40 !== n)
                return l;
            t++,
            40 === n && (n = 41);
            while (t < i) {
                if (r = e.charCodeAt(t),
                r === n)
                    return l.pos = t + 1,
                    l.lines = o,
                    l.str = a(e.slice(s + 1, t)),
                    l.ok = !0,
                    l;
                if (40 === r && 41 === n)
                    return l;
                10 === r ? o++ : 92 === r && t + 1 < i && (t++,
                10 === e.charCodeAt(t) && o++),
                t++
            }
            return l
        }
    },
    "7f44": function(e) {
        e.exports = JSON.parse('{"data":[{"id":6,"institution":"Dicoding - AWS","location":"Online","description":"Architecting on AWS (Membangun Arsitektur Cloud di AWS) | Cloud and Back-End Developer Scholarship Program","hours":40,"startDate":"2021-07-04","endDate":"2021-07-11"},{"id":5,"institution":"Dicoding - IBM","location":"Online","description":"DevOps Praktis dengan IBM Cloud (Practical DevOps with IBM Cloud)","hours":35,"startDate":"2021-05-01","endDate":"2021-05-04"},{"id":4,"institution":"Dicoding - AWS","location":"Online","description":"Cloud Practitioner Essentials (Belajar Dasar AWS Cloud) | Knowledge refresher on the basics of AWS","hours":13,"startDate":"2021-03-29","endDate":"2021-03-30"},{"id":3,"institution":"Digitalent Scholarship 2020 by Kominfo","location":"Online","description":"CCNA Cybersecurity Operations","hours":189,"startDate":"2020-05-04","endDate":"2020-07-17"},{"id":2,"institution":"Dicoding - Azure","location":"Online","description":"Belajar Dasar-Dasar Azure Cloud | Preparation for AZ-900 certification","hours":40,"startDate":"2020-02-01","endDate":"2020-02-08"},{"id":1,"institution":"Digitalent Scholarship 2019 by Kominfo","location":"Malang, Indonesia","description":"AWS Cloud Computing Training","hours":144,"startDate":"2019-07-01","endDate":"2019-08-30"}],"meta":{"pagination":{"page":1,"pageSize":25,"pageCount":1,"total":6}}}')
    },
    "80d3": function(e, t, i) {
        "use strict";
        var a = i("0068").isSpace;
        function r(e, t) {
            var i = e.bMarks[t] + e.tShift[t]
              , a = e.eMarks[t];
            return e.src.substr(i, a - i)
        }
        function n(e) {
            var t, i = [], a = 0, r = e.length, n = !1, o = 0, s = "";
            t = e.charCodeAt(a);
            while (a < r)
                124 === t && (n ? (s += e.substring(o, a - 1),
                o = a) : (i.push(s + e.substring(o, a)),
                s = "",
                o = a + 1)),
                n = 92 === t,
                a++,
                t = e.charCodeAt(a);
            return i.push(s + e.substring(o)),
            i
        }
        e.exports = function(e, t, i, o) {
            var s, l, d, c, p, u, m, h, _, g, f, b, v, y, w, C, k, A;
            if (t + 2 > i)
                return !1;
            if (u = t + 1,
            e.sCount[u] < e.blkIndent)
                return !1;
            if (e.sCount[u] - e.blkIndent >= 4)
                return !1;
            if (d = e.bMarks[u] + e.tShift[u],
            d >= e.eMarks[u])
                return !1;
            if (k = e.src.charCodeAt(d++),
            124 !== k && 45 !== k && 58 !== k)
                return !1;
            if (d >= e.eMarks[u])
                return !1;
            if (A = e.src.charCodeAt(d++),
            124 !== A && 45 !== A && 58 !== A && !a(A))
                return !1;
            if (45 === k && a(A))
                return !1;
            while (d < e.eMarks[u]) {
                if (s = e.src.charCodeAt(d),
                124 !== s && 45 !== s && 58 !== s && !a(s))
                    return !1;
                d++
            }
            for (l = r(e, t + 1),
            m = l.split("|"),
            g = [],
            c = 0; c < m.length; c++) {
                if (f = m[c].trim(),
                !f) {
                    if (0 === c || c === m.length - 1)
                        continue;
                    return !1
                }
                if (!/^:?-+:?$/.test(f))
                    return !1;
                58 === f.charCodeAt(f.length - 1) ? g.push(58 === f.charCodeAt(0) ? "center" : "right") : 58 === f.charCodeAt(0) ? g.push("left") : g.push("")
            }
            if (l = r(e, t).trim(),
            -1 === l.indexOf("|"))
                return !1;
            if (e.sCount[t] - e.blkIndent >= 4)
                return !1;
            if (m = n(l),
            m.length && "" === m[0] && m.shift(),
            m.length && "" === m[m.length - 1] && m.pop(),
            h = m.length,
            0 === h || h !== g.length)
                return !1;
            if (o)
                return !0;
            for (y = e.parentType,
            e.parentType = "table",
            C = e.md.block.ruler.getRules("blockquote"),
            _ = e.push("table_open", "table", 1),
            _.map = b = [t, 0],
            _ = e.push("thead_open", "thead", 1),
            _.map = [t, t + 1],
            _ = e.push("tr_open", "tr", 1),
            _.map = [t, t + 1],
            c = 0; c < m.length; c++)
                _ = e.push("th_open", "th", 1),
                g[c] && (_.attrs = [["style", "text-align:" + g[c]]]),
                _ = e.push("inline", "", 0),
                _.content = m[c].trim(),
                _.children = [],
                _ = e.push("th_close", "th", -1);
            for (_ = e.push("tr_close", "tr", -1),
            _ = e.push("thead_close", "thead", -1),
            u = t + 2; u < i; u++) {
                if (e.sCount[u] < e.blkIndent)
                    break;
                for (w = !1,
                c = 0,
                p = C.length; c < p; c++)
                    if (C[c](e, u, i, !0)) {
                        w = !0;
                        break
                    }
                if (w)
                    break;
                if (l = r(e, u).trim(),
                !l)
                    break;
                if (e.sCount[u] - e.blkIndent >= 4)
                    break;
                for (m = n(l),
                m.length && "" === m[0] && m.shift(),
                m.length && "" === m[m.length - 1] && m.pop(),
                u === t + 2 && (_ = e.push("tbody_open", "tbody", 1),
                _.map = v = [t + 2, 0]),
                _ = e.push("tr_open", "tr", 1),
                _.map = [u, u + 1],
                c = 0; c < h; c++)
                    _ = e.push("td_open", "td", 1),
                    g[c] && (_.attrs = [["style", "text-align:" + g[c]]]),
                    _ = e.push("inline", "", 0),
                    _.content = m[c] ? m[c].trim() : "",
                    _.children = [],
                    _ = e.push("td_close", "td", -1);
                _ = e.push("tr_close", "tr", -1)
            }
            return v && (_ = e.push("tbody_close", "tbody", -1),
            v[1] = u),
            _ = e.push("table_close", "table", -1),
            b[1] = u,
            e.parentType = y,
            e.line = u,
            !0
        }
    },
    "834f": function(e, t, i) {
        "use strict";
        var a = i("096b")
          , r = i("0068").isSpace;
        function n(e, t, i, a) {
            var n, o, s, l, d, c, p, u;
            for (this.src = e,
            this.md = t,
            this.env = i,
            this.tokens = a,
            this.bMarks = [],
            this.eMarks = [],
            this.tShift = [],
            this.sCount = [],
            this.bsCount = [],
            this.blkIndent = 0,
            this.line = 0,
            this.lineMax = 0,
            this.tight = !1,
            this.ddIndent = -1,
            this.listIndent = -1,
            this.parentType = "root",
            this.level = 0,
            this.result = "",
            o = this.src,
            u = !1,
            s = l = c = p = 0,
            d = o.length; l < d; l++) {
                if (n = o.charCodeAt(l),
                !u) {
                    if (r(n)) {
                        c++,
                        9 === n ? p += 4 - p % 4 : p++;
                        continue
                    }
                    u = !0
                }
                10 !== n && l !== d - 1 || (10 !== n && l++,
                this.bMarks.push(s),
                this.eMarks.push(l),
                this.tShift.push(c),
                this.sCount.push(p),
                this.bsCount.push(0),
                u = !1,
                c = 0,
                p = 0,
                s = l + 1)
            }
            this.bMarks.push(o.length),
            this.eMarks.push(o.length),
            this.tShift.push(0),
            this.sCount.push(0),
            this.bsCount.push(0),
            this.lineMax = this.bMarks.length - 1
        }
        n.prototype.push = function(e, t, i) {
            var r = new a(e,t,i);
            return r.block = !0,
            i < 0 && this.level--,
            r.level = this.level,
            i > 0 && this.level++,
            this.tokens.push(r),
            r
        }
        ,
        n.prototype.isEmpty = function(e) {
            return this.bMarks[e] + this.tShift[e] >= this.eMarks[e]
        }
        ,
        n.prototype.skipEmptyLines = function(e) {
            for (var t = this.lineMax; e < t; e++)
                if (this.bMarks[e] + this.tShift[e] < this.eMarks[e])
                    break;
            return e
        }
        ,
        n.prototype.skipSpaces = function(e) {
            for (var t, i = this.src.length; e < i; e++)
                if (t = this.src.charCodeAt(e),
                !r(t))
                    break;
            return e
        }
        ,
        n.prototype.skipSpacesBack = function(e, t) {
            if (e <= t)
                return e;
            while (e > t)
                if (!r(this.src.charCodeAt(--e)))
                    return e + 1;
            return e
        }
        ,
        n.prototype.skipChars = function(e, t) {
            for (var i = this.src.length; e < i; e++)
                if (this.src.charCodeAt(e) !== t)
                    break;
            return e
        }
        ,
        n.prototype.skipCharsBack = function(e, t, i) {
            if (e <= i)
                return e;
            while (e > i)
                if (t !== this.src.charCodeAt(--e))
                    return e + 1;
            return e
        }
        ,
        n.prototype.getLines = function(e, t, i, a) {
            var n, o, s, l, d, c, p, u = e;
            if (e >= t)
                return "";
            for (c = new Array(t - e),
            n = 0; u < t; u++,
            n++) {
                o = 0,
                p = l = this.bMarks[u],
                d = u + 1 < t || a ? this.eMarks[u] + 1 : this.eMarks[u];
                while (l < d && o < i) {
                    if (s = this.src.charCodeAt(l),
                    r(s))
                        9 === s ? o += 4 - (o + this.bsCount[u]) % 4 : o++;
                    else {
                        if (!(l - p < this.tShift[u]))
                            break;
                        o++
                    }
                    l++
                }
                c[n] = o > i ? new Array(o - i + 1).join(" ") + this.src.slice(l, d) : this.src.slice(l, d)
            }
            return c.join("")
        }
        ,
        n.prototype.Token = a,
        e.exports = n
    },
    "838d": function(e, t, i) {
        "use strict";
        function a(e, t) {
            var i, a, r, n, o, s, l, d, c = {}, p = t.length;
            if (p) {
                var u = 0
                  , m = -2
                  , h = [];
                for (i = 0; i < p; i++)
                    if (r = t[i],
                    h.push(0),
                    t[u].marker === r.marker && m === r.token - 1 || (u = i),
                    m = r.token,
                    r.length = r.length || 0,
                    r.close) {
                        for (c.hasOwnProperty(r.marker) || (c[r.marker] = [-1, -1, -1, -1, -1, -1]),
                        o = c[r.marker][(r.open ? 3 : 0) + r.length % 3],
                        a = u - h[u] - 1,
                        s = a; a > o; a -= h[a] + 1)
                            if (n = t[a],
                            n.marker === r.marker && n.open && n.end < 0 && (l = !1,
                            (n.close || r.open) && (n.length + r.length) % 3 === 0 && (n.length % 3 === 0 && r.length % 3 === 0 || (l = !0)),
                            !l)) {
                                d = a > 0 && !t[a - 1].open ? h[a - 1] + 1 : 0,
                                h[i] = i - a + d,
                                h[a] = d,
                                r.open = !1,
                                n.end = i,
                                n.close = !1,
                                s = -1,
                                m = -2;
                                break
                            }
                        -1 !== s && (c[r.marker][(r.open ? 3 : 0) + (r.length || 0) % 3] = s)
                    }
            }
        }
        e.exports = function(e) {
            var t, i = e.tokens_meta, r = e.tokens_meta.length;
            for (a(e, e.delimiters),
            t = 0; t < r; t++)
                i[t] && i[t].delimiters && a(e, i[t].delimiters)
        }
    },
    "8a31": function(e, t, i) {
        "use strict";
        e.exports = {
            options: {
                html: !1,
                xhtmlOut: !1,
                breaks: !1,
                langPrefix: "language-",
                linkify: !1,
                typographer: !1,
                quotes: "“”‘’",
                highlight: null,
                maxNesting: 100
            },
            components: {
                core: {},
                block: {},
                inline: {}
            }
        }
    },
    "8cdb": function(e, t, i) {
        "use strict";
        i.r(t);
        var a = function() {
            var e = this
              , t = e._self._c;
            return t("ErrorComponent", {
                attrs: {
                    title: "404 | Not Found",
                    code: "404"
                }
            })
        }
          , r = []
          , n = i("3fb9")
          , o = {
            name: "NotFoundPage",
            components: {
                ErrorComponent: n["a"]
            }
        }
          , s = o
          , l = i("2877")
          , d = Object(l["a"])(s, a, r, !1, null, null, null);
        t["default"] = d.exports
    },
    "8f37": function(e, t, i) {
        "use strict";
        var a = {};
        function r(e) {
            var t, i, r = a[e];
            if (r)
                return r;
            for (r = a[e] = [],
            t = 0; t < 128; t++)
                i = String.fromCharCode(t),
                r.push(i);
            for (t = 0; t < e.length; t++)
                i = e.charCodeAt(t),
                r[i] = "%" + ("0" + i.toString(16).toUpperCase()).slice(-2);
            return r
        }
        function n(e, t) {
            var i;
            return "string" !== typeof t && (t = n.defaultChars),
            i = r(t),
            e.replace(/(%[a-f0-9]{2})+/gi, (function(e) {
                var t, a, r, n, o, s, l, d = "";
                for (t = 0,
                a = e.length; t < a; t += 3)
                    r = parseInt(e.slice(t + 1, t + 3), 16),
                    r < 128 ? d += i[r] : 192 === (224 & r) && t + 3 < a && (n = parseInt(e.slice(t + 4, t + 6), 16),
                    128 === (192 & n)) ? (l = r << 6 & 1984 | 63 & n,
                    d += l < 128 ? "��" : String.fromCharCode(l),
                    t += 3) : 224 === (240 & r) && t + 6 < a && (n = parseInt(e.slice(t + 4, t + 6), 16),
                    o = parseInt(e.slice(t + 7, t + 9), 16),
                    128 === (192 & n) && 128 === (192 & o)) ? (l = r << 12 & 61440 | n << 6 & 4032 | 63 & o,
                    d += l < 2048 || l >= 55296 && l <= 57343 ? "���" : String.fromCharCode(l),
                    t += 6) : 240 === (248 & r) && t + 9 < a && (n = parseInt(e.slice(t + 4, t + 6), 16),
                    o = parseInt(e.slice(t + 7, t + 9), 16),
                    s = parseInt(e.slice(t + 10, t + 12), 16),
                    128 === (192 & n) && 128 === (192 & o) && 128 === (192 & s)) ? (l = r << 18 & 1835008 | n << 12 & 258048 | o << 6 & 4032 | 63 & s,
                    l < 65536 || l > 1114111 ? d += "����" : (l -= 65536,
                    d += String.fromCharCode(55296 + (l >> 10), 56320 + (1023 & l))),
                    t += 9) : d += "�";
                return d
            }
            ))
        }
        n.defaultChars = ";/?:@&=+$,#",
        n.componentChars = "",
        e.exports = n
    },
    9184: function(e) {
        e.exports = JSON.parse('{"data":[{"id":1,"title":"Docker","level":"Intermediate"},{"id":2,"title":"Kubernetes","level":"Intermediate"},{"id":3,"title":"Jenkins","level":"Intermediate"},{"id":4,"title":"Terraform","level":"Intermediate"},{"id":5,"title":"Helm charts","level":"Intermediate"},{"id":7,"title":"Kong API Gateway","level":"Intermediate"},{"id":8,"title":"Nginx","level":"Intermediate"},{"id":6,"title":"Prometheus","level":"Intermediate"},{"id":9,"title":"Grafana","level":"Intermediate"},{"id":10,"title":"Elastic Stack","level":"Intermediate"}],"meta":{"pagination":{"page":1,"pageSize":25,"pageCount":1,"total":10}}}')
    },
    "922c": function(e, t, i) {
        "use strict";
        function a(e, t) {
            var i, a, r, n, o, s = [], l = t.length;
            for (i = 0; i < l; i++)
                r = t[i],
                126 === r.marker && -1 !== r.end && (n = t[r.end],
                o = e.tokens[r.token],
                o.type = "s_open",
                o.tag = "s",
                o.nesting = 1,
                o.markup = "~~",
                o.content = "",
                o = e.tokens[n.token],
                o.type = "s_close",
                o.tag = "s",
                o.nesting = -1,
                o.markup = "~~",
                o.content = "",
                "text" === e.tokens[n.token - 1].type && "~" === e.tokens[n.token - 1].content && s.push(n.token - 1));
            while (s.length) {
                i = s.pop(),
                a = i + 1;
                while (a < e.tokens.length && "s_close" === e.tokens[a].type)
                    a++;
                a--,
                i !== a && (o = e.tokens[a],
                e.tokens[a] = e.tokens[i],
                e.tokens[i] = o)
            }
        }
        e.exports.tokenize = function(e, t) {
            var i, a, r, n, o, s = e.pos, l = e.src.charCodeAt(s);
            if (t)
                return !1;
            if (126 !== l)
                return !1;
            if (a = e.scanDelims(e.pos, !0),
            n = a.length,
            o = String.fromCharCode(l),
            n < 2)
                return !1;
            for (n % 2 && (r = e.push("text", "", 0),
            r.content = o,
            n--),
            i = 0; i < n; i += 2)
                r = e.push("text", "", 0),
                r.content = o + o,
                e.delimiters.push({
                    marker: l,
                    length: 0,
                    token: e.tokens.length - 1,
                    end: -1,
                    open: a.can_open,
                    close: a.can_close
                });
            return e.pos += a.length,
            !0
        }
        ,
        e.exports.postProcess = function(e) {
            var t, i = e.tokens_meta, r = e.tokens_meta.length;
            for (a(e, e.delimiters),
            t = 0; t < r; t++)
                i[t] && i[t].delimiters && a(e, i[t].delimiters)
        }
    },
    "932d": function(e, t, i) {
        "use strict";
        var a = i("0068").normalizeReference
          , r = i("0068").isSpace;
        e.exports = function(e, t) {
            var i, n, o, s, l, d, c, p, u, m, h, _, g, f = "", b = e.pos, v = e.posMax;
            if (33 !== e.src.charCodeAt(e.pos))
                return !1;
            if (91 !== e.src.charCodeAt(e.pos + 1))
                return !1;
            if (d = e.pos + 2,
            l = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1),
            l < 0)
                return !1;
            if (c = l + 1,
            c < v && 40 === e.src.charCodeAt(c)) {
                for (c++; c < v; c++)
                    if (n = e.src.charCodeAt(c),
                    !r(n) && 10 !== n)
                        break;
                if (c >= v)
                    return !1;
                for (g = c,
                u = e.md.helpers.parseLinkDestination(e.src, c, e.posMax),
                u.ok && (f = e.md.normalizeLink(u.str),
                e.md.validateLink(f) ? c = u.pos : f = ""),
                g = c; c < v; c++)
                    if (n = e.src.charCodeAt(c),
                    !r(n) && 10 !== n)
                        break;
                if (u = e.md.helpers.parseLinkTitle(e.src, c, e.posMax),
                c < v && g !== c && u.ok) {
                    for (m = u.str,
                    c = u.pos; c < v; c++)
                        if (n = e.src.charCodeAt(c),
                        !r(n) && 10 !== n)
                            break
                } else
                    m = "";
                if (c >= v || 41 !== e.src.charCodeAt(c))
                    return e.pos = b,
                    !1;
                c++
            } else {
                if ("undefined" === typeof e.env.references)
                    return !1;
                if (c < v && 91 === e.src.charCodeAt(c) ? (g = c + 1,
                c = e.md.helpers.parseLinkLabel(e, c),
                c >= 0 ? s = e.src.slice(g, c++) : c = l + 1) : c = l + 1,
                s || (s = e.src.slice(d, l)),
                p = e.env.references[a(s)],
                !p)
                    return e.pos = b,
                    !1;
                f = p.href,
                m = p.title
            }
            return t || (o = e.src.slice(d, l),
            e.md.inline.parse(o, e.md, e.env, _ = []),
            h = e.push("image", "img", 0),
            h.attrs = i = [["src", f], ["alt", ""]],
            h.children = _,
            h.content = o,
            m && i.push(["title", m])),
            e.pos = c,
            e.posMax = v,
            !0
        }
    },
    9921: function(e, t, i) {
        "use strict";
        var a = i("0068").arrayReplaceAt;
        function r(e) {
            return /^<a[>\s]/i.test(e)
        }
        function n(e) {
            return /^<\/a\s*>/i.test(e)
        }
        e.exports = function(e) {
            var t, i, o, s, l, d, c, p, u, m, h, _, g, f, b, v, y, w = e.tokens;
            if (e.md.options.linkify)
                for (i = 0,
                o = w.length; i < o; i++)
                    if ("inline" === w[i].type && e.md.linkify.pretest(w[i].content))
                        for (s = w[i].children,
                        g = 0,
                        t = s.length - 1; t >= 0; t--)
                            if (d = s[t],
                            "link_close" !== d.type) {
                                if ("html_inline" === d.type && (r(d.content) && g > 0 && g--,
                                n(d.content) && g++),
                                !(g > 0) && "text" === d.type && e.md.linkify.test(d.content)) {
                                    for (u = d.content,
                                    y = e.md.linkify.match(u),
                                    c = [],
                                    _ = d.level,
                                    h = 0,
                                    p = 0; p < y.length; p++)
                                        f = y[p].url,
                                        b = e.md.normalizeLink(f),
                                        e.md.validateLink(b) && (v = y[p].text,
                                        v = y[p].schema ? "mailto:" !== y[p].schema || /^mailto:/i.test(v) ? e.md.normalizeLinkText(v) : e.md.normalizeLinkText("mailto:" + v).replace(/^mailto:/, "") : e.md.normalizeLinkText("http://" + v).replace(/^http:\/\//, ""),
                                        m = y[p].index,
                                        m > h && (l = new e.Token("text","",0),
                                        l.content = u.slice(h, m),
                                        l.level = _,
                                        c.push(l)),
                                        l = new e.Token("link_open","a",1),
                                        l.attrs = [["href", b]],
                                        l.level = _++,
                                        l.markup = "linkify",
                                        l.info = "auto",
                                        c.push(l),
                                        l = new e.Token("text","",0),
                                        l.content = v,
                                        l.level = _,
                                        c.push(l),
                                        l = new e.Token("link_close","a",-1),
                                        l.level = --_,
                                        l.markup = "linkify",
                                        l.info = "auto",
                                        c.push(l),
                                        h = y[p].lastIndex);
                                    h < u.length && (l = new e.Token("text","",0),
                                    l.content = u.slice(h),
                                    l.level = _,
                                    c.push(l)),
                                    w[i].children = s = a(s, t, c)
                                }
                            } else {
                                t--;
                                while (s[t].level !== d.level && "link_open" !== s[t].type)
                                    t--
                            }
        }
    },
    "9c12": function(e, t, i) {
        "use strict";
        e.exports = function(e, t, i) {
            var a, r, n;
            if (e.sCount[t] - e.blkIndent < 4)
                return !1;
            r = a = t + 1;
            while (a < i)
                if (e.isEmpty(a))
                    a++;
                else {
                    if (!(e.sCount[a] - e.blkIndent >= 4))
                        break;
                    a++,
                    r = a
                }
            return e.line = r,
            n = e.push("code_block", "code", 0),
            n.content = e.getLines(t, r, 4 + e.blkIndent, !1) + "\n",
            n.map = [t, e.line],
            !0
        }
    },
    "9d88": function(e, t, i) {
        (function(e, a) {
            var r;
            /*! https://mths.be/punycode v1.4.1 by @mathias */
            (function(n) {
                t && t.nodeType,
                e && e.nodeType;
                var o = "object" == typeof a && a;
                o.global !== o && o.window !== o && o.self;
                var s, l = 2147483647, d = 36, c = 1, p = 26, u = 38, m = 700, h = 72, _ = 128, g = "-", f = /^xn--/, b = /[^\x20-\x7E]/, v = /[\x2E\u3002\uFF0E\uFF61]/g, y = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                }, w = d - c, C = Math.floor, k = String.fromCharCode;
                function A(e) {
                    throw new RangeError(y[e])
                }
                function S(e, t) {
                    var i = e.length
                      , a = [];
                    while (i--)
                        a[i] = t(e[i]);
                    return a
                }
                function x(e, t) {
                    var i = e.split("@")
                      , a = "";
                    i.length > 1 && (a = i[0] + "@",
                    e = i[1]),
                    e = e.replace(v, ".");
                    var r = e.split(".")
                      , n = S(r, t).join(".");
                    return a + n
                }
                function T(e) {
                    var t, i, a = [], r = 0, n = e.length;
                    while (r < n)
                        t = e.charCodeAt(r++),
                        t >= 55296 && t <= 56319 && r < n ? (i = e.charCodeAt(r++),
                        56320 == (64512 & i) ? a.push(((1023 & t) << 10) + (1023 & i) + 65536) : (a.push(t),
                        r--)) : a.push(t);
                    return a
                }
                function D(e) {
                    return S(e, (function(e) {
                        var t = "";
                        return e > 65535 && (e -= 65536,
                        t += k(e >>> 10 & 1023 | 55296),
                        e = 56320 | 1023 & e),
                        t += k(e),
                        t
                    }
                    )).join("")
                }
                function j(e) {
                    return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : d
                }
                function P(e, t) {
                    return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
                }
                function z(e, t, i) {
                    var a = 0;
                    for (e = i ? C(e / m) : e >> 1,
                    e += C(e / t); e > w * p >> 1; a += d)
                        e = C(e / w);
                    return C(a + (w + 1) * e / (e + u))
                }
                function E(e) {
                    var t, i, a, r, n, o, s, u, m, f, b = [], v = e.length, y = 0, w = _, k = h;
                    for (i = e.lastIndexOf(g),
                    i < 0 && (i = 0),
                    a = 0; a < i; ++a)
                        e.charCodeAt(a) >= 128 && A("not-basic"),
                        b.push(e.charCodeAt(a));
                    for (r = i > 0 ? i + 1 : 0; r < v; ) {
                        for (n = y,
                        o = 1,
                        s = d; ; s += d) {
                            if (r >= v && A("invalid-input"),
                            u = j(e.charCodeAt(r++)),
                            (u >= d || u > C((l - y) / o)) && A("overflow"),
                            y += u * o,
                            m = s <= k ? c : s >= k + p ? p : s - k,
                            u < m)
                                break;
                            f = d - m,
                            o > C(l / f) && A("overflow"),
                            o *= f
                        }
                        t = b.length + 1,
                        k = z(y - n, t, 0 == n),
                        C(y / t) > l - w && A("overflow"),
                        w += C(y / t),
                        y %= t,
                        b.splice(y++, 0, w)
                    }
                    return D(b)
                }
                function I(e) {
                    var t, i, a, r, n, o, s, u, m, f, b, v, y, w, S, x = [];
                    for (e = T(e),
                    v = e.length,
                    t = _,
                    i = 0,
                    n = h,
                    o = 0; o < v; ++o)
                        b = e[o],
                        b < 128 && x.push(k(b));
                    a = r = x.length,
                    r && x.push(g);
                    while (a < v) {
                        for (s = l,
                        o = 0; o < v; ++o)
                            b = e[o],
                            b >= t && b < s && (s = b);
                        for (y = a + 1,
                        s - t > C((l - i) / y) && A("overflow"),
                        i += (s - t) * y,
                        t = s,
                        o = 0; o < v; ++o)
                            if (b = e[o],
                            b < t && ++i > l && A("overflow"),
                            b == t) {
                                for (u = i,
                                m = d; ; m += d) {
                                    if (f = m <= n ? c : m >= n + p ? p : m - n,
                                    u < f)
                                        break;
                                    S = u - f,
                                    w = d - f,
                                    x.push(k(P(f + S % w, 0))),
                                    u = C(S / w)
                                }
                                x.push(k(P(u, 0))),
                                n = z(i, y, a == r),
                                i = 0,
                                ++a
                            }
                        ++i,
                        ++t
                    }
                    return x.join("")
                }
                function L(e) {
                    return x(e, (function(e) {
                        return f.test(e) ? E(e.slice(4).toLowerCase()) : e
                    }
                    ))
                }
                function M(e) {
                    return x(e, (function(e) {
                        return b.test(e) ? "xn--" + I(e) : e
                    }
                    ))
                }
                s = {
                    version: "1.4.1",
                    ucs2: {
                        decode: T,
                        encode: D
                    },
                    decode: E,
                    encode: I,
                    toASCII: M,
                    toUnicode: L
                },
                r = function() {
                    return s
                }
                .call(t, i, t, e),
                void 0 === r || (e.exports = r)
            }
            )()
        }
        ).call(this, i("62e4")(e), i("c8ba"))
    },
    a124: function(e, t, i) {
        "use strict";
        e.exports = function(e) {
            var t, i, a, r = e.tokens;
            for (i = 0,
            a = r.length; i < a; i++)
                t = r[i],
                "inline" === t.type && e.md.inline.parse(t.content, e.md, e.env, t.children)
        }
    },
    a7bc: function(e, t) {
        e.exports = /[\0-\x1F\x7F-\x9F]/
    },
    a915: function(e, t, i) {
        "use strict";
        var a = i("4883")
          , r = [["normalize", i("4c26")], ["block", i("3408")], ["inline", i("a124")], ["linkify", i("9921")], ["replacements", i("bb4a")], ["smartquotes", i("af30")]];
        function n() {
            this.ruler = new a;
            for (var e = 0; e < r.length; e++)
                this.ruler.push(r[e][0], r[e][1])
        }
        n.prototype.process = function(e) {
            var t, i, a;
            for (a = this.ruler.getRules(""),
            t = 0,
            i = a.length; t < i; t++)
                a[t](e)
        }
        ,
        n.prototype.State = i("7133"),
        e.exports = n
    },
    aced: function(e) {
        e.exports = JSON.parse('{"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"\'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\\"","QUOT":"\\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}')
    },
    af30: function(e, t, i) {
        "use strict";
        var a = i("0068").isWhiteSpace
          , r = i("0068").isPunctChar
          , n = i("0068").isMdAsciiPunct
          , o = /['"]/
          , s = /['"]/g
          , l = "’";
        function d(e, t, i) {
            return e.substr(0, t) + i + e.substr(t + 1)
        }
        function c(e, t) {
            var i, o, c, p, u, m, h, _, g, f, b, v, y, w, C, k, A, S, x, T, D;
            for (x = [],
            i = 0; i < e.length; i++) {
                for (o = e[i],
                h = e[i].level,
                A = x.length - 1; A >= 0; A--)
                    if (x[A].level <= h)
                        break;
                if (x.length = A + 1,
                "text" === o.type) {
                    c = o.content,
                    u = 0,
                    m = c.length;
                    e: while (u < m) {
                        if (s.lastIndex = u,
                        p = s.exec(c),
                        !p)
                            break;
                        if (C = k = !0,
                        u = p.index + 1,
                        S = "'" === p[0],
                        g = 32,
                        p.index - 1 >= 0)
                            g = c.charCodeAt(p.index - 1);
                        else
                            for (A = i - 1; A >= 0; A--) {
                                if ("softbreak" === e[A].type || "hardbreak" === e[A].type)
                                    break;
                                if (e[A].content) {
                                    g = e[A].content.charCodeAt(e[A].content.length - 1);
                                    break
                                }
                            }
                        if (f = 32,
                        u < m)
                            f = c.charCodeAt(u);
                        else
                            for (A = i + 1; A < e.length; A++) {
                                if ("softbreak" === e[A].type || "hardbreak" === e[A].type)
                                    break;
                                if (e[A].content) {
                                    f = e[A].content.charCodeAt(0);
                                    break
                                }
                            }
                        if (b = n(g) || r(String.fromCharCode(g)),
                        v = n(f) || r(String.fromCharCode(f)),
                        y = a(g),
                        w = a(f),
                        w ? C = !1 : v && (y || b || (C = !1)),
                        y ? k = !1 : b && (w || v || (k = !1)),
                        34 === f && '"' === p[0] && g >= 48 && g <= 57 && (k = C = !1),
                        C && k && (C = b,
                        k = v),
                        C || k) {
                            if (k)
                                for (A = x.length - 1; A >= 0; A--) {
                                    if (_ = x[A],
                                    x[A].level < h)
                                        break;
                                    if (_.single === S && x[A].level === h) {
                                        _ = x[A],
                                        S ? (T = t.md.options.quotes[2],
                                        D = t.md.options.quotes[3]) : (T = t.md.options.quotes[0],
                                        D = t.md.options.quotes[1]),
                                        o.content = d(o.content, p.index, D),
                                        e[_.token].content = d(e[_.token].content, _.pos, T),
                                        u += D.length - 1,
                                        _.token === i && (u += T.length - 1),
                                        c = o.content,
                                        m = c.length,
                                        x.length = A;
                                        continue e
                                    }
                                }
                            C ? x.push({
                                token: i,
                                pos: p.index,
                                single: S,
                                level: h
                            }) : k && S && (o.content = d(o.content, p.index, l))
                        } else
                            S && (o.content = d(o.content, p.index, l))
                    }
                }
            }
        }
        e.exports = function(e) {
            var t;
            if (e.md.options.typographer)
                for (t = e.tokens.length - 1; t >= 0; t--)
                    "inline" === e.tokens[t].type && o.test(e.tokens[t].content) && c(e.tokens[t].children, e)
        }
    },
    b08b: function(e) {
        e.exports = JSON.parse('{"data":[{"id":1,"title":"Mini-link","descriptionHeader":null,"descriptionBody":"Full Stack MEVN - Heroku | My mini-link got suspended. Someone used it for phishing","image":{"id":7,"name":"Minilink.png","alternativeText":"Minilink","caption":"Minilink","width":2120,"height":1091,"formats":{"large":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659226428/production/large_Minilink_2e6dd04774.png","hash":"large_Minilink_2e6dd04774","mime":"image/png","name":"large_Minilink.png","path":null,"size":43.11,"width":1000,"height":515,"provider_metadata":{"public_id":"production/large_Minilink_2e6dd04774","resource_type":"image"}},"small":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659226428/production/small_Minilink_2e6dd04774.png","hash":"small_Minilink_2e6dd04774","mime":"image/png","name":"small_Minilink.png","path":null,"size":18.16,"width":500,"height":258,"provider_metadata":{"public_id":"production/small_Minilink_2e6dd04774","resource_type":"image"}},"medium":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659226428/production/medium_Minilink_2e6dd04774.png","hash":"medium_Minilink_2e6dd04774","mime":"image/png","name":"medium_Minilink.png","path":null,"size":30.47,"width":750,"height":386,"provider_metadata":{"public_id":"production/medium_Minilink_2e6dd04774","resource_type":"image"}},"thumbnail":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659226427/production/thumbnail_Minilink_2e6dd04774.png","hash":"thumbnail_Minilink_2e6dd04774","mime":"image/png","name":"thumbnail_Minilink.png","path":null,"size":7.66,"width":245,"height":126,"provider_metadata":{"public_id":"production/thumbnail_Minilink_2e6dd04774","resource_type":"image"}}},"hash":"Minilink_2e6dd04774","ext":".png","mime":"image/png","size":28.6,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659226427/production/Minilink_2e6dd04774.png","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/Minilink_2e6dd04774","resource_type":"image"},"createdAt":"2022-07-31T00:13:49.145Z","updatedAt":"2022-07-31T00:13:49.145Z"},"links":[{"id":2,"title":"Website","url":"https://link.adityacprtm.dev"},{"id":1,"title":"Github","url":"https://github.com/Adityacprtm/mini-link"}],"portfolio_category":{"id":2,"name":"Project"}},{"id":2,"title":"AWS Certified Cloud Practitioner","descriptionHeader":null,"descriptionBody":null,"image":{"id":8,"name":"AWS_Certified_Cloud_Practitioner.png","alternativeText":"AWS_Certified_Cloud_Practitioner","caption":"AWS_Certified_Cloud_Practitioner","width":600,"height":600,"formats":{"small":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659226563/production/small_AWS_Certified_Cloud_Practitioner_8e3fa901d8.png","hash":"small_AWS_Certified_Cloud_Practitioner_8e3fa901d8","mime":"image/png","name":"small_AWS_Certified_Cloud_Practitioner.png","path":null,"size":55.45,"width":500,"height":500,"provider_metadata":{"public_id":"production/small_AWS_Certified_Cloud_Practitioner_8e3fa901d8","resource_type":"image"}},"thumbnail":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659226562/production/thumbnail_AWS_Certified_Cloud_Practitioner_8e3fa901d8.png","hash":"thumbnail_AWS_Certified_Cloud_Practitioner_8e3fa901d8","mime":"image/png","name":"thumbnail_AWS_Certified_Cloud_Practitioner.png","path":null,"size":12.46,"width":156,"height":156,"provider_metadata":{"public_id":"production/thumbnail_AWS_Certified_Cloud_Practitioner_8e3fa901d8","resource_type":"image"}}},"hash":"AWS_Certified_Cloud_Practitioner_8e3fa901d8","ext":".png","mime":"image/png","size":12.74,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659226562/production/AWS_Certified_Cloud_Practitioner_8e3fa901d8.png","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/AWS_Certified_Cloud_Practitioner_8e3fa901d8","resource_type":"image"},"createdAt":"2022-07-31T00:16:03.526Z","updatedAt":"2022-07-31T00:16:03.526Z"},"links":[{"id":3,"title":"Certificate","url":"https://go.adityacprtm.dev/s5p92i"},{"id":4,"title":"Verify","url":"https://go.adityacprtm.dev/A6xoNo"}],"portfolio_category":{"id":1,"name":"Certifications"}},{"id":3,"title":"Birthday Countdown","descriptionHeader":"Tech Stack","descriptionBody":"HTML - CSS - Javascript - VueJs","image":{"id":9,"name":"My_Birthday_Countdown.png","alternativeText":"My_Birthday_Countdown.png","caption":"My_Birthday_Countdown.png","width":1435,"height":791,"formats":{"large":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659226709/production/large_My_Birthday_Countdown_9713d6f656.png","hash":"large_My_Birthday_Countdown_9713d6f656","mime":"image/png","name":"large_My_Birthday_Countdown.png","path":null,"size":53.91,"width":1000,"height":551,"provider_metadata":{"public_id":"production/large_My_Birthday_Countdown_9713d6f656","resource_type":"image"}},"small":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659226710/production/small_My_Birthday_Countdown_9713d6f656.png","hash":"small_My_Birthday_Countdown_9713d6f656","mime":"image/png","name":"small_My_Birthday_Countdown.png","path":null,"size":20.6,"width":500,"height":276,"provider_metadata":{"public_id":"production/small_My_Birthday_Countdown_9713d6f656","resource_type":"image"}},"medium":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659226710/production/medium_My_Birthday_Countdown_9713d6f656.png","hash":"medium_My_Birthday_Countdown_9713d6f656","mime":"image/png","name":"medium_My_Birthday_Countdown.png","path":null,"size":35.91,"width":750,"height":413,"provider_metadata":{"public_id":"production/medium_My_Birthday_Countdown_9713d6f656","resource_type":"image"}},"thumbnail":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659226709/production/thumbnail_My_Birthday_Countdown_9713d6f656.png","hash":"thumbnail_My_Birthday_Countdown_9713d6f656","mime":"image/png","name":"thumbnail_My_Birthday_Countdown.png","path":null,"size":7.11,"width":245,"height":135,"provider_metadata":{"public_id":"production/thumbnail_My_Birthday_Countdown_9713d6f656","resource_type":"image"}}},"hash":"My_Birthday_Countdown_9713d6f656","ext":".png","mime":"image/png","size":8.45,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659226709/production/My_Birthday_Countdown_9713d6f656.png","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/My_Birthday_Countdown_9713d6f656","resource_type":"image"},"createdAt":"2022-07-31T00:18:30.883Z","updatedAt":"2022-07-31T00:18:50.317Z"},"links":[{"id":5,"title":"Website","url":"https://bod.adityacprtm.dev"}],"portfolio_category":{"id":2,"name":"Project"}},{"id":4,"title":"CCNA Introductionto Networks","descriptionHeader":null,"descriptionBody":null,"image":{"id":10,"name":"CCNA_Introductionto_Networks.png","alternativeText":"CCNA_Introductionto_Networks.png","caption":"CCNA_Introductionto_Networks.png","width":600,"height":600,"formats":{"small":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659226815/production/small_CCNA_Introductionto_Networks_21827afc84.png","hash":"small_CCNA_Introductionto_Networks_21827afc84","mime":"image/png","name":"small_CCNA_Introductionto_Networks.png","path":null,"size":86.02,"width":500,"height":500,"provider_metadata":{"public_id":"production/small_CCNA_Introductionto_Networks_21827afc84","resource_type":"image"}},"thumbnail":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659226814/production/thumbnail_CCNA_Introductionto_Networks_21827afc84.png","hash":"thumbnail_CCNA_Introductionto_Networks_21827afc84","mime":"image/png","name":"thumbnail_CCNA_Introductionto_Networks.png","path":null,"size":15.13,"width":156,"height":156,"provider_metadata":{"public_id":"production/thumbnail_CCNA_Introductionto_Networks_21827afc84","resource_type":"image"}}},"hash":"CCNA_Introductionto_Networks_21827afc84","ext":".png","mime":"image/png","size":20.38,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659226814/production/CCNA_Introductionto_Networks_21827afc84.png","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/CCNA_Introductionto_Networks_21827afc84","resource_type":"image"},"createdAt":"2022-07-31T00:20:15.413Z","updatedAt":"2022-07-31T00:20:15.413Z"},"links":[{"id":6,"title":"Verify","url":"https://go.adityacprtm.dev/cjkuAy"}],"portfolio_category":{"id":3,"name":"Badge"}},{"id":5,"title":"Hidemail","descriptionHeader":"Tech Stack","descriptionBody":"Full Stack MEVN - Vercel - Heroku","image":{"id":11,"name":"Hidemail.png","alternativeText":"Hidemail.png","caption":"Hidemail.png","width":1575,"height":927,"formats":{"large":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659226965/production/large_Hidemail_8a727bcfbb.png","hash":"large_Hidemail_8a727bcfbb","mime":"image/png","name":"large_Hidemail.png","path":null,"size":66.38,"width":1000,"height":589,"provider_metadata":{"public_id":"production/large_Hidemail_8a727bcfbb","resource_type":"image"}},"small":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659226966/production/small_Hidemail_8a727bcfbb.png","hash":"small_Hidemail_8a727bcfbb","mime":"image/png","name":"small_Hidemail.png","path":null,"size":25.6,"width":500,"height":294,"provider_metadata":{"public_id":"production/small_Hidemail_8a727bcfbb","resource_type":"image"}},"medium":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659226966/production/medium_Hidemail_8a727bcfbb.png","hash":"medium_Hidemail_8a727bcfbb","mime":"image/png","name":"medium_Hidemail.png","path":null,"size":44.31,"width":750,"height":441,"provider_metadata":{"public_id":"production/medium_Hidemail_8a727bcfbb","resource_type":"image"}},"thumbnail":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659226965/production/thumbnail_Hidemail_8a727bcfbb.png","hash":"thumbnail_Hidemail_8a727bcfbb","mime":"image/png","name":"thumbnail_Hidemail.png","path":null,"size":10.17,"width":245,"height":144,"provider_metadata":{"public_id":"production/thumbnail_Hidemail_8a727bcfbb","resource_type":"image"}}},"hash":"Hidemail_8a727bcfbb","ext":".png","mime":"image/png","size":18.14,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659226964/production/Hidemail_8a727bcfbb.png","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/Hidemail_8a727bcfbb","resource_type":"image"},"createdAt":"2022-07-31T00:22:46.837Z","updatedAt":"2022-07-31T00:22:46.837Z"},"links":[{"id":7,"title":"Website","url":"https://hidemail.adityacprtm.dev"}],"portfolio_category":{"id":2,"name":"Project"}},{"id":6,"title":"Dicoding - Cloud Practitioner Essentials","descriptionHeader":null,"descriptionBody":"Completed the AWS Cloud Practitioner Essentials from Dicoding","image":{"id":12,"name":"Dicoding_Cloud_Practitioner_Essentials.png","alternativeText":"Dicoding_Cloud_Practitioner_Essentials.png","caption":"Dicoding_Cloud_Practitioner_Essentials.png","width":4307,"height":2631,"formats":{"large":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227097/production/large_Dicoding_Cloud_Practitioner_Essentials_a92713bde0.png","hash":"large_Dicoding_Cloud_Practitioner_Essentials_a92713bde0","mime":"image/png","name":"large_Dicoding_Cloud_Practitioner_Essentials.png","path":null,"size":205.61,"width":1000,"height":611,"provider_metadata":{"public_id":"production/large_Dicoding_Cloud_Practitioner_Essentials_a92713bde0","resource_type":"image"}},"small":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227098/production/small_Dicoding_Cloud_Practitioner_Essentials_a92713bde0.png","hash":"small_Dicoding_Cloud_Practitioner_Essentials_a92713bde0","mime":"image/png","name":"small_Dicoding_Cloud_Practitioner_Essentials.png","path":null,"size":67.85,"width":500,"height":306,"provider_metadata":{"public_id":"production/small_Dicoding_Cloud_Practitioner_Essentials_a92713bde0","resource_type":"image"}},"medium":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227097/production/medium_Dicoding_Cloud_Practitioner_Essentials_a92713bde0.png","hash":"medium_Dicoding_Cloud_Practitioner_Essentials_a92713bde0","mime":"image/png","name":"medium_Dicoding_Cloud_Practitioner_Essentials.png","path":null,"size":128.33,"width":750,"height":458,"provider_metadata":{"public_id":"production/medium_Dicoding_Cloud_Practitioner_Essentials_a92713bde0","resource_type":"image"}},"thumbnail":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227096/production/thumbnail_Dicoding_Cloud_Practitioner_Essentials_a92713bde0.png","hash":"thumbnail_Dicoding_Cloud_Practitioner_Essentials_a92713bde0","mime":"image/png","name":"thumbnail_Dicoding_Cloud_Practitioner_Essentials.png","path":null,"size":20.87,"width":245,"height":150,"provider_metadata":{"public_id":"production/thumbnail_Dicoding_Cloud_Practitioner_Essentials_a92713bde0","resource_type":"image"}}},"hash":"Dicoding_Cloud_Practitioner_Essentials_a92713bde0","ext":".png","mime":"image/png","size":680.53,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227095/production/Dicoding_Cloud_Practitioner_Essentials_a92713bde0.png","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/Dicoding_Cloud_Practitioner_Essentials_a92713bde0","resource_type":"image"},"createdAt":"2022-07-31T00:24:58.495Z","updatedAt":"2022-07-31T00:24:58.495Z"},"links":[{"id":8,"title":"Certificate","url":"https://www.dicoding.com/certificates/81P21OO8JZOY"}],"portfolio_category":{"id":1,"name":"Certifications"}},{"id":7,"title":"NPM Card (npx adityacprtm)","descriptionHeader":"Tech Stack","descriptionBody":"NodeJs - NPM - NPX","image":{"id":13,"name":"NPM_Card_npxadityacprtm.png","alternativeText":"NPM_Card_npxadityacprtm.png","caption":"NPM_Card_npxadityacprtm.png","width":1140,"height":668,"formats":{"large":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227158/production/large_NPM_Card_npxadityacprtm_6753b314d3.png","hash":"large_NPM_Card_npxadityacprtm_6753b314d3","mime":"image/png","name":"large_NPM_Card_npxadityacprtm.png","path":null,"size":107.15,"width":1000,"height":586,"provider_metadata":{"public_id":"production/large_NPM_Card_npxadityacprtm_6753b314d3","resource_type":"image"}},"small":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227159/production/small_NPM_Card_npxadityacprtm_6753b314d3.png","hash":"small_NPM_Card_npxadityacprtm_6753b314d3","mime":"image/png","name":"small_NPM_Card_npxadityacprtm.png","path":null,"size":40.09,"width":500,"height":293,"provider_metadata":{"public_id":"production/small_NPM_Card_npxadityacprtm_6753b314d3","resource_type":"image"}},"medium":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227159/production/medium_NPM_Card_npxadityacprtm_6753b314d3.png","hash":"medium_NPM_Card_npxadityacprtm_6753b314d3","mime":"image/png","name":"medium_NPM_Card_npxadityacprtm.png","path":null,"size":71.83,"width":750,"height":439,"provider_metadata":{"public_id":"production/medium_NPM_Card_npxadityacprtm_6753b314d3","resource_type":"image"}},"thumbnail":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227158/production/thumbnail_NPM_Card_npxadityacprtm_6753b314d3.png","hash":"thumbnail_NPM_Card_npxadityacprtm_6753b314d3","mime":"image/png","name":"thumbnail_NPM_Card_npxadityacprtm.png","path":null,"size":13.57,"width":245,"height":144,"provider_metadata":{"public_id":"production/thumbnail_NPM_Card_npxadityacprtm_6753b314d3","resource_type":"image"}}},"hash":"NPM_Card_npxadityacprtm_6753b314d3","ext":".png","mime":"image/png","size":17.85,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227157/production/NPM_Card_npxadityacprtm_6753b314d3.png","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/NPM_Card_npxadityacprtm_6753b314d3","resource_type":"image"},"createdAt":"2022-07-31T00:25:59.834Z","updatedAt":"2022-07-31T00:25:59.834Z"},"links":[],"portfolio_category":{"id":2,"name":"Project"}},{"id":8,"title":"Telkomsel Tech Titans League - Software Development","descriptionHeader":null,"descriptionBody":"Top 30 Super Titans in Online Challenge Telkomsel Tech Titans League - Software Development","image":{"id":14,"name":"Telkomsel_Tech_Titans_League.png","alternativeText":"Telkomsel_Tech_Titans_League.png","caption":"Telkomsel_Tech_Titans_League.png","width":694,"height":334,"formats":{"small":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227228/production/small_Telkomsel_Tech_Titans_League_fc732944af.png","hash":"small_Telkomsel_Tech_Titans_League_fc732944af","mime":"image/png","name":"small_Telkomsel_Tech_Titans_League.png","path":null,"size":55.02,"width":500,"height":241,"provider_metadata":{"public_id":"production/small_Telkomsel_Tech_Titans_League_fc732944af","resource_type":"image"}},"thumbnail":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227228/production/thumbnail_Telkomsel_Tech_Titans_League_fc732944af.png","hash":"thumbnail_Telkomsel_Tech_Titans_League_fc732944af","mime":"image/png","name":"thumbnail_Telkomsel_Tech_Titans_League.png","path":null,"size":18.31,"width":245,"height":118,"provider_metadata":{"public_id":"production/thumbnail_Telkomsel_Tech_Titans_League_fc732944af","resource_type":"image"}}},"hash":"Telkomsel_Tech_Titans_League_fc732944af","ext":".png","mime":"image/png","size":20.47,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227227/production/Telkomsel_Tech_Titans_League_fc732944af.png","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/Telkomsel_Tech_Titans_League_fc732944af","resource_type":"image"},"createdAt":"2022-07-31T00:27:08.994Z","updatedAt":"2022-07-31T00:27:08.994Z"},"links":[{"id":9,"title":"Certificate","url":"https://drive.google.com/file/d/1I3tGbHkHooT2P_7az6MQel91T0D8qXKN/view?usp=sharing"}],"portfolio_category":{"id":1,"name":"Certifications"}},{"id":9,"title":"TryHackMe Badge","descriptionHeader":null,"descriptionBody":null,"image":{"id":15,"name":"Try_Hack_Me_Badge.png","alternativeText":"Try_Hack_Me_Badge.png","caption":"Try_Hack_Me_Badge.png","width":300,"height":300,"formats":{"thumbnail":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227294/production/thumbnail_Try_Hack_Me_Badge_deb1171226.png","hash":"thumbnail_Try_Hack_Me_Badge_deb1171226","mime":"image/png","name":"thumbnail_Try_Hack_Me_Badge.png","path":null,"size":7.74,"width":156,"height":156,"provider_metadata":{"public_id":"production/thumbnail_Try_Hack_Me_Badge_deb1171226","resource_type":"image"}}},"hash":"Try_Hack_Me_Badge_deb1171226","ext":".png","mime":"image/png","size":4.78,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227294/production/Try_Hack_Me_Badge_deb1171226.png","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/Try_Hack_Me_Badge_deb1171226","resource_type":"image"},"createdAt":"2022-07-31T00:28:14.678Z","updatedAt":"2022-07-31T00:28:14.678Z"},"links":[{"id":10,"title":"Profile","url":"https://tryhackme.com/p/adityacprtm"}],"portfolio_category":{"id":3,"name":"Badge"}},{"id":10,"title":"Serverless Web App","descriptionHeader":"Tech Stack","descriptionBody":"AWS - reCAPTCHA","image":{"id":16,"name":"Serverless_Web_App.png","alternativeText":"Serverless_Web_App.png","caption":"Serverless_Web_App.png","width":1792,"height":1063,"formats":{"large":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227378/production/large_Serverless_Web_App_71e7f60bf0.png","hash":"large_Serverless_Web_App_71e7f60bf0","mime":"image/png","name":"large_Serverless_Web_App.png","path":null,"size":207.39,"width":1000,"height":593,"provider_metadata":{"public_id":"production/large_Serverless_Web_App_71e7f60bf0","resource_type":"image"}},"small":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227378/production/small_Serverless_Web_App_71e7f60bf0.png","hash":"small_Serverless_Web_App_71e7f60bf0","mime":"image/png","name":"small_Serverless_Web_App.png","path":null,"size":70.92,"width":500,"height":297,"provider_metadata":{"public_id":"production/small_Serverless_Web_App_71e7f60bf0","resource_type":"image"}},"medium":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227378/production/medium_Serverless_Web_App_71e7f60bf0.png","hash":"medium_Serverless_Web_App_71e7f60bf0","mime":"image/png","name":"medium_Serverless_Web_App.png","path":null,"size":136.23,"width":750,"height":445,"provider_metadata":{"public_id":"production/medium_Serverless_Web_App_71e7f60bf0","resource_type":"image"}},"thumbnail":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227377/production/thumbnail_Serverless_Web_App_71e7f60bf0.png","hash":"thumbnail_Serverless_Web_App_71e7f60bf0","mime":"image/png","name":"thumbnail_Serverless_Web_App.png","path":null,"size":23.07,"width":245,"height":145,"provider_metadata":{"public_id":"production/thumbnail_Serverless_Web_App_71e7f60bf0","resource_type":"image"}}},"hash":"Serverless_Web_App_71e7f60bf0","ext":".png","mime":"image/png","size":56.82,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227377/production/Serverless_Web_App_71e7f60bf0.png","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/Serverless_Web_App_71e7f60bf0","resource_type":"image"},"createdAt":"2022-07-31T00:29:39.260Z","updatedAt":"2022-07-31T00:29:39.260Z"},"links":[{"id":11,"title":"Article","url":"https://adityacprtm.dev/blog/how-to-build-a-serverless-website-with-re-captcha-on-aws"}],"portfolio_category":{"id":2,"name":"Project"}},{"id":11,"title":"ThingsBin Web and Application IoT","descriptionHeader":"Tech Stack","descriptionBody":"AWS - NodeJs","image":{"id":17,"name":"Things_Bin_Weband_Application_IoT.png","alternativeText":"Things_Bin_Weband_Application_IoT.png","caption":"Things_Bin_Weband_Application_IoT.png","width":1792,"height":1063,"formats":{"large":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227465/production/large_Things_Bin_Weband_Application_Io_T_92b28e1a26.png","hash":"large_Things_Bin_Weband_Application_Io_T_92b28e1a26","mime":"image/png","name":"large_Things_Bin_Weband_Application_IoT.png","path":null,"size":212.37,"width":1000,"height":593,"provider_metadata":{"public_id":"production/large_Things_Bin_Weband_Application_Io_T_92b28e1a26","resource_type":"image"}},"small":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227466/production/small_Things_Bin_Weband_Application_Io_T_92b28e1a26.png","hash":"small_Things_Bin_Weband_Application_Io_T_92b28e1a26","mime":"image/png","name":"small_Things_Bin_Weband_Application_IoT.png","path":null,"size":72.3,"width":500,"height":297,"provider_metadata":{"public_id":"production/small_Things_Bin_Weband_Application_Io_T_92b28e1a26","resource_type":"image"}},"medium":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227466/production/medium_Things_Bin_Weband_Application_Io_T_92b28e1a26.png","hash":"medium_Things_Bin_Weband_Application_Io_T_92b28e1a26","mime":"image/png","name":"medium_Things_Bin_Weband_Application_IoT.png","path":null,"size":139.15,"width":750,"height":445,"provider_metadata":{"public_id":"production/medium_Things_Bin_Weband_Application_Io_T_92b28e1a26","resource_type":"image"}},"thumbnail":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227464/production/thumbnail_Things_Bin_Weband_Application_Io_T_92b28e1a26.png","hash":"thumbnail_Things_Bin_Weband_Application_Io_T_92b28e1a26","mime":"image/png","name":"thumbnail_Things_Bin_Weband_Application_IoT.png","path":null,"size":23.02,"width":245,"height":145,"provider_metadata":{"public_id":"production/thumbnail_Things_Bin_Weband_Application_Io_T_92b28e1a26","resource_type":"image"}}},"hash":"Things_Bin_Weband_Application_Io_T_92b28e1a26","ext":".png","mime":"image/png","size":55.25,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227464/production/Things_Bin_Weband_Application_Io_T_92b28e1a26.png","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/Things_Bin_Weband_Application_Io_T_92b28e1a26","resource_type":"image"},"createdAt":"2022-07-31T00:31:06.810Z","updatedAt":"2022-07-31T00:31:06.810Z"},"links":[{"id":12,"title":"Github","url":"https://github.com/Adityacprtm/Things-Bin"}],"portfolio_category":{"id":2,"name":"Project"}},{"id":12,"title":"DTS 2019 - Cloud Computing","descriptionHeader":null,"descriptionBody":"Completed the AWS Cloud Computing training from Digitalent Scholarship by Kominfo","image":{"id":18,"name":"DTS_2019_Cloud_Computing.png","alternativeText":"DTS_2019_Cloud_Computing.png","caption":"DTS_2019_Cloud_Computing.png","width":1582,"height":908,"formats":{"large":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227543/production/large_DTS_2019_Cloud_Computing_daa8563100.png","hash":"large_DTS_2019_Cloud_Computing_daa8563100","mime":"image/png","name":"large_DTS_2019_Cloud_Computing.png","path":null,"size":65.58,"width":1000,"height":574,"provider_metadata":{"public_id":"production/large_DTS_2019_Cloud_Computing_daa8563100","resource_type":"image"}},"small":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227544/production/small_DTS_2019_Cloud_Computing_daa8563100.png","hash":"small_DTS_2019_Cloud_Computing_daa8563100","mime":"image/png","name":"small_DTS_2019_Cloud_Computing.png","path":null,"size":29.56,"width":500,"height":287,"provider_metadata":{"public_id":"production/small_DTS_2019_Cloud_Computing_daa8563100","resource_type":"image"}},"medium":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227543/production/medium_DTS_2019_Cloud_Computing_daa8563100.png","hash":"medium_DTS_2019_Cloud_Computing_daa8563100","mime":"image/png","name":"medium_DTS_2019_Cloud_Computing.png","path":null,"size":47,"width":750,"height":430,"provider_metadata":{"public_id":"production/medium_DTS_2019_Cloud_Computing_daa8563100","resource_type":"image"}},"thumbnail":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227543/production/thumbnail_DTS_2019_Cloud_Computing_daa8563100.png","hash":"thumbnail_DTS_2019_Cloud_Computing_daa8563100","mime":"image/png","name":"thumbnail_DTS_2019_Cloud_Computing.png","path":null,"size":14,"width":245,"height":141,"provider_metadata":{"public_id":"production/thumbnail_DTS_2019_Cloud_Computing_daa8563100","resource_type":"image"}}},"hash":"DTS_2019_Cloud_Computing_daa8563100","ext":".png","mime":"image/png","size":14.64,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227542/production/DTS_2019_Cloud_Computing_daa8563100.png","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/DTS_2019_Cloud_Computing_daa8563100","resource_type":"image"},"createdAt":"2022-07-31T00:32:24.674Z","updatedAt":"2022-07-31T00:32:24.674Z"},"links":[{"id":14,"title":"Certificate","url":"https://go.adityacprtm.dev/WaLpCh"},{"id":13,"title":"Final Project","url":"https://go.adityacprtm.dev/iQsGVa"}],"portfolio_category":{"id":1,"name":"Certifications"}},{"id":13,"title":"Transletin Webiste","descriptionHeader":"Tech Stack","descriptionBody":"Laravel - HTML - CSS - JS","image":{"id":19,"name":"Transletin_Webiste.png","alternativeText":"Transletin_Webiste.png","caption":"Transletin_Webiste.png","width":1582,"height":908,"formats":{"large":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227646/production/large_Transletin_Webiste_dc58914910.png","hash":"large_Transletin_Webiste_dc58914910","mime":"image/png","name":"large_Transletin_Webiste.png","path":null,"size":215.04,"width":1000,"height":574,"provider_metadata":{"public_id":"production/large_Transletin_Webiste_dc58914910","resource_type":"image"}},"small":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227647/production/small_Transletin_Webiste_dc58914910.png","hash":"small_Transletin_Webiste_dc58914910","mime":"image/png","name":"small_Transletin_Webiste.png","path":null,"size":70.44,"width":500,"height":287,"provider_metadata":{"public_id":"production/small_Transletin_Webiste_dc58914910","resource_type":"image"}},"medium":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227647/production/medium_Transletin_Webiste_dc58914910.png","hash":"medium_Transletin_Webiste_dc58914910","mime":"image/png","name":"medium_Transletin_Webiste.png","path":null,"size":130.53,"width":750,"height":430,"provider_metadata":{"public_id":"production/medium_Transletin_Webiste_dc58914910","resource_type":"image"}},"thumbnail":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227646/production/thumbnail_Transletin_Webiste_dc58914910.png","hash":"thumbnail_Transletin_Webiste_dc58914910","mime":"image/png","name":"thumbnail_Transletin_Webiste.png","path":null,"size":25.44,"width":245,"height":141,"provider_metadata":{"public_id":"production/thumbnail_Transletin_Webiste_dc58914910","resource_type":"image"}}},"hash":"Transletin_Webiste_dc58914910","ext":".png","mime":"image/png","size":77.61,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227646/production/Transletin_Webiste_dc58914910.png","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/Transletin_Webiste_dc58914910","resource_type":"image"},"createdAt":"2022-07-31T00:34:08.190Z","updatedAt":"2022-07-31T00:34:08.190Z"},"links":[{"id":15,"title":"Website","url":"https://www.transletin.com"}],"portfolio_category":{"id":2,"name":"Project"}},{"id":14,"title":"Cajero App","descriptionHeader":"Tech Stack","descriptionBody":"CodeIgniter - HTML - CSS - JS","image":{"id":20,"name":"Cajero_App.png","alternativeText":"Cajero_App.png","caption":"Cajero_App.png","width":1580,"height":910,"formats":{"large":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227709/production/large_Cajero_App_fb7bfe536f.png","hash":"large_Cajero_App_fb7bfe536f","mime":"image/png","name":"large_Cajero_App.png","path":null,"size":97.53,"width":1000,"height":576,"provider_metadata":{"public_id":"production/large_Cajero_App_fb7bfe536f","resource_type":"image"}},"small":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227710/production/small_Cajero_App_fb7bfe536f.png","hash":"small_Cajero_App_fb7bfe536f","mime":"image/png","name":"small_Cajero_App.png","path":null,"size":36.76,"width":500,"height":288,"provider_metadata":{"public_id":"production/small_Cajero_App_fb7bfe536f","resource_type":"image"}},"medium":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227710/production/medium_Cajero_App_fb7bfe536f.png","hash":"medium_Cajero_App_fb7bfe536f","mime":"image/png","name":"medium_Cajero_App.png","path":null,"size":64.12,"width":750,"height":432,"provider_metadata":{"public_id":"production/medium_Cajero_App_fb7bfe536f","resource_type":"image"}},"thumbnail":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227709/production/thumbnail_Cajero_App_fb7bfe536f.png","hash":"thumbnail_Cajero_App_fb7bfe536f","mime":"image/png","name":"thumbnail_Cajero_App.png","path":null,"size":14.98,"width":245,"height":141,"provider_metadata":{"public_id":"production/thumbnail_Cajero_App_fb7bfe536f","resource_type":"image"}}},"hash":"Cajero_App_fb7bfe536f","ext":".png","mime":"image/png","size":37.39,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227708/production/Cajero_App_fb7bfe536f.png","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/Cajero_App_fb7bfe536f","resource_type":"image"},"createdAt":"2022-07-31T00:35:11.089Z","updatedAt":"2022-07-31T00:35:11.089Z"},"links":[{"id":16,"title":"Github","url":"https://github.com/Adityacprtm/Cajero-App"}],"portfolio_category":{"id":2,"name":"Project"}},{"id":15,"title":"DTS 2020 - CCNA Cybersecurity Operations","descriptionHeader":null,"descriptionBody":"Completed the CCNA Cybersecurity Operations training from Digitalent Scholarship by Kominfo","image":{"id":21,"name":"DTS_2020_CCNA_Cybersecurity_Operations.png","alternativeText":"DTS_2020_CCNA_Cybersecurity_Operations.png","caption":"DTS_2020_CCNA_Cybersecurity_Operations.png","width":1582,"height":908,"formats":{"large":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227818/production/large_DTS_2020_CCNA_Cybersecurity_Operations_605585011c.png","hash":"large_DTS_2020_CCNA_Cybersecurity_Operations_605585011c","mime":"image/png","name":"large_DTS_2020_CCNA_Cybersecurity_Operations.png","path":null,"size":60.5,"width":1000,"height":574,"provider_metadata":{"public_id":"production/large_DTS_2020_CCNA_Cybersecurity_Operations_605585011c","resource_type":"image"}},"small":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227819/production/small_DTS_2020_CCNA_Cybersecurity_Operations_605585011c.png","hash":"small_DTS_2020_CCNA_Cybersecurity_Operations_605585011c","mime":"image/png","name":"small_DTS_2020_CCNA_Cybersecurity_Operations.png","path":null,"size":25.82,"width":500,"height":287,"provider_metadata":{"public_id":"production/small_DTS_2020_CCNA_Cybersecurity_Operations_605585011c","resource_type":"image"}},"medium":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227818/production/medium_DTS_2020_CCNA_Cybersecurity_Operations_605585011c.png","hash":"medium_DTS_2020_CCNA_Cybersecurity_Operations_605585011c","mime":"image/png","name":"medium_DTS_2020_CCNA_Cybersecurity_Operations.png","path":null,"size":42.97,"width":750,"height":430,"provider_metadata":{"public_id":"production/medium_DTS_2020_CCNA_Cybersecurity_Operations_605585011c","resource_type":"image"}},"thumbnail":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227818/production/thumbnail_DTS_2020_CCNA_Cybersecurity_Operations_605585011c.png","hash":"thumbnail_DTS_2020_CCNA_Cybersecurity_Operations_605585011c","mime":"image/png","name":"thumbnail_DTS_2020_CCNA_Cybersecurity_Operations.png","path":null,"size":11.92,"width":245,"height":141,"provider_metadata":{"public_id":"production/thumbnail_DTS_2020_CCNA_Cybersecurity_Operations_605585011c","resource_type":"image"}}},"hash":"DTS_2020_CCNA_Cybersecurity_Operations_605585011c","ext":".png","mime":"image/png","size":13.92,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227817/production/DTS_2020_CCNA_Cybersecurity_Operations_605585011c.png","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/DTS_2020_CCNA_Cybersecurity_Operations_605585011c","resource_type":"image"},"createdAt":"2022-07-31T00:36:59.466Z","updatedAt":"2022-07-31T00:36:59.466Z"},"links":[{"id":17,"title":"Certificate","url":"https://go.adityacprtm.dev/t1CGec"}],"portfolio_category":{"id":1,"name":"Certifications"}},{"id":16,"title":"High-Availability Network Design","descriptionHeader":"Tech Stack","descriptionBody":"GNS3 - MikroTik","image":{"id":22,"name":"High_Availability_Network_Design.png","alternativeText":"High_Availability_Network_Design.png","caption":"High_Availability_Network_Design.png","width":1006,"height":797,"formats":{"large":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227878/production/large_High_Availability_Network_Design_5bdf31f3fe.png","hash":"large_High_Availability_Network_Design_5bdf31f3fe","mime":"image/png","name":"large_High_Availability_Network_Design.png","path":null,"size":217.2,"width":1000,"height":792,"provider_metadata":{"public_id":"production/large_High_Availability_Network_Design_5bdf31f3fe","resource_type":"image"}},"small":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227879/production/small_High_Availability_Network_Design_5bdf31f3fe.png","hash":"small_High_Availability_Network_Design_5bdf31f3fe","mime":"image/png","name":"small_High_Availability_Network_Design.png","path":null,"size":81.02,"width":500,"height":396,"provider_metadata":{"public_id":"production/small_High_Availability_Network_Design_5bdf31f3fe","resource_type":"image"}},"medium":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227878/production/medium_High_Availability_Network_Design_5bdf31f3fe.png","hash":"medium_High_Availability_Network_Design_5bdf31f3fe","mime":"image/png","name":"medium_High_Availability_Network_Design.png","path":null,"size":144.65,"width":750,"height":594,"provider_metadata":{"public_id":"production/medium_High_Availability_Network_Design_5bdf31f3fe","resource_type":"image"}},"thumbnail":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227877/production/thumbnail_High_Availability_Network_Design_5bdf31f3fe.png","hash":"thumbnail_High_Availability_Network_Design_5bdf31f3fe","mime":"image/png","name":"thumbnail_High_Availability_Network_Design.png","path":null,"size":18.94,"width":197,"height":156,"provider_metadata":{"public_id":"production/thumbnail_High_Availability_Network_Design_5bdf31f3fe","resource_type":"image"}}},"hash":"High_Availability_Network_Design_5bdf31f3fe","ext":".png","mime":"image/png","size":25.73,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227877/production/High_Availability_Network_Design_5bdf31f3fe.png","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/High_Availability_Network_Design_5bdf31f3fe","resource_type":"image"},"createdAt":"2022-07-31T00:37:59.373Z","updatedAt":"2022-07-31T00:37:59.373Z"},"links":[],"portfolio_category":{"id":2,"name":"Project"}},{"id":17,"title":"Telkomsel Tech Titans League - Cyber Security","descriptionHeader":null,"descriptionBody":"Finalist Top 150 Titans in Telkomsel Tech Titans League - Cyber Security","image":{"id":14,"name":"Telkomsel_Tech_Titans_League.png","alternativeText":"Telkomsel_Tech_Titans_League.png","caption":"Telkomsel_Tech_Titans_League.png","width":694,"height":334,"formats":{"small":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227228/production/small_Telkomsel_Tech_Titans_League_fc732944af.png","hash":"small_Telkomsel_Tech_Titans_League_fc732944af","mime":"image/png","name":"small_Telkomsel_Tech_Titans_League.png","path":null,"size":55.02,"width":500,"height":241,"provider_metadata":{"public_id":"production/small_Telkomsel_Tech_Titans_League_fc732944af","resource_type":"image"}},"thumbnail":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227228/production/thumbnail_Telkomsel_Tech_Titans_League_fc732944af.png","hash":"thumbnail_Telkomsel_Tech_Titans_League_fc732944af","mime":"image/png","name":"thumbnail_Telkomsel_Tech_Titans_League.png","path":null,"size":18.31,"width":245,"height":118,"provider_metadata":{"public_id":"production/thumbnail_Telkomsel_Tech_Titans_League_fc732944af","resource_type":"image"}}},"hash":"Telkomsel_Tech_Titans_League_fc732944af","ext":".png","mime":"image/png","size":20.47,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659227227/production/Telkomsel_Tech_Titans_League_fc732944af.png","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/Telkomsel_Tech_Titans_League_fc732944af","resource_type":"image"},"createdAt":"2022-07-31T00:27:08.994Z","updatedAt":"2022-07-31T00:27:08.994Z"},"links":[{"id":18,"title":"Certificate","url":"https://drive.google.com/file/d/1ay9hK7SysyfUOzOXWDF6xzkt67kr7M5g/view?usp=sharing"}],"portfolio_category":{"id":1,"name":"Certifications"}},{"id":18,"title":"Dicoding - Belajar Dasar-Dasar Azure Cloud","descriptionHeader":null,"descriptionBody":"Completed the Belajar Dasar-Dasar Azure Cloud Class from Dicoding","image":{"id":23,"name":"Dicoding_Belajar_Dasar_Dasar_Azure_Cloud.png","alternativeText":"Dicoding_Belajar_Dasar_Dasar_Azure_Cloud.png","caption":"Dicoding_Belajar_Dasar_Dasar_Azure_Cloud.png","width":4307,"height":2631,"formats":{"large":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659228013/production/large_Dicoding_Belajar_Dasar_Dasar_Azure_Cloud_b42161b4d1.png","hash":"large_Dicoding_Belajar_Dasar_Dasar_Azure_Cloud_b42161b4d1","mime":"image/png","name":"large_Dicoding_Belajar_Dasar_Dasar_Azure_Cloud.png","path":null,"size":179.46,"width":1000,"height":611,"provider_metadata":{"public_id":"production/large_Dicoding_Belajar_Dasar_Dasar_Azure_Cloud_b42161b4d1","resource_type":"image"}},"small":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659228014/production/small_Dicoding_Belajar_Dasar_Dasar_Azure_Cloud_b42161b4d1.png","hash":"small_Dicoding_Belajar_Dasar_Dasar_Azure_Cloud_b42161b4d1","mime":"image/png","name":"small_Dicoding_Belajar_Dasar_Dasar_Azure_Cloud.png","path":null,"size":56.98,"width":500,"height":306,"provider_metadata":{"public_id":"production/small_Dicoding_Belajar_Dasar_Dasar_Azure_Cloud_b42161b4d1","resource_type":"image"}},"medium":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659228014/production/medium_Dicoding_Belajar_Dasar_Dasar_Azure_Cloud_b42161b4d1.png","hash":"medium_Dicoding_Belajar_Dasar_Dasar_Azure_Cloud_b42161b4d1","mime":"image/png","name":"medium_Dicoding_Belajar_Dasar_Dasar_Azure_Cloud.png","path":null,"size":111.21,"width":750,"height":458,"provider_metadata":{"public_id":"production/medium_Dicoding_Belajar_Dasar_Dasar_Azure_Cloud_b42161b4d1","resource_type":"image"}},"thumbnail":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659228011/production/thumbnail_Dicoding_Belajar_Dasar_Dasar_Azure_Cloud_b42161b4d1.png","hash":"thumbnail_Dicoding_Belajar_Dasar_Dasar_Azure_Cloud_b42161b4d1","mime":"image/png","name":"thumbnail_Dicoding_Belajar_Dasar_Dasar_Azure_Cloud.png","path":null,"size":18.17,"width":245,"height":150,"provider_metadata":{"public_id":"production/thumbnail_Dicoding_Belajar_Dasar_Dasar_Azure_Cloud_b42161b4d1","resource_type":"image"}}},"hash":"Dicoding_Belajar_Dasar_Dasar_Azure_Cloud_b42161b4d1","ext":".png","mime":"image/png","size":788.6,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659228010/production/Dicoding_Belajar_Dasar_Dasar_Azure_Cloud_b42161b4d1.png","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/Dicoding_Belajar_Dasar_Dasar_Azure_Cloud_b42161b4d1","resource_type":"image"},"createdAt":"2022-07-31T00:40:14.706Z","updatedAt":"2022-07-31T00:40:14.706Z"},"links":[{"id":19,"title":"Certificate","url":"https://www.dicoding.com/certificates/KERZRRN1OZYV"}],"portfolio_category":{"id":1,"name":"Certifications"}},{"id":19,"title":"Dicoding - Practical DevOps with IBM Cloud","descriptionHeader":null,"descriptionBody":"Completed the DevOps Praktis dengan IBM Cloud (Practical DevOps with IBM Cloud) class from Dicoding","image":{"id":24,"name":"Dicoding_Practical_Dev_Ops_with_IBM_Cloud.png","alternativeText":"Dicoding_Practical_Dev_Ops_with_IBM_Cloud.png","caption":"Dicoding_Practical_Dev_Ops_with_IBM_Cloud.png","width":4307,"height":2631,"formats":{"large":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659228692/production/large_Dicoding_Practical_Dev_Ops_with_IBM_Cloud_714fe07912.png","hash":"large_Dicoding_Practical_Dev_Ops_with_IBM_Cloud_714fe07912","mime":"image/png","name":"large_Dicoding_Practical_Dev_Ops_with_IBM_Cloud.png","path":null,"size":212.72,"width":1000,"height":611,"provider_metadata":{"public_id":"production/large_Dicoding_Practical_Dev_Ops_with_IBM_Cloud_714fe07912","resource_type":"image"}},"small":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659228693/production/small_Dicoding_Practical_Dev_Ops_with_IBM_Cloud_714fe07912.png","hash":"small_Dicoding_Practical_Dev_Ops_with_IBM_Cloud_714fe07912","mime":"image/png","name":"small_Dicoding_Practical_Dev_Ops_with_IBM_Cloud.png","path":null,"size":66.72,"width":500,"height":306,"provider_metadata":{"public_id":"production/small_Dicoding_Practical_Dev_Ops_with_IBM_Cloud_714fe07912","resource_type":"image"}},"medium":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659228693/production/medium_Dicoding_Practical_Dev_Ops_with_IBM_Cloud_714fe07912.png","hash":"medium_Dicoding_Practical_Dev_Ops_with_IBM_Cloud_714fe07912","mime":"image/png","name":"medium_Dicoding_Practical_Dev_Ops_with_IBM_Cloud.png","path":null,"size":129.94,"width":750,"height":458,"provider_metadata":{"public_id":"production/medium_Dicoding_Practical_Dev_Ops_with_IBM_Cloud_714fe07912","resource_type":"image"}},"thumbnail":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659228691/production/thumbnail_Dicoding_Practical_Dev_Ops_with_IBM_Cloud_714fe07912.png","hash":"thumbnail_Dicoding_Practical_Dev_Ops_with_IBM_Cloud_714fe07912","mime":"image/png","name":"thumbnail_Dicoding_Practical_Dev_Ops_with_IBM_Cloud.png","path":null,"size":21.63,"width":245,"height":150,"provider_metadata":{"public_id":"production/thumbnail_Dicoding_Practical_Dev_Ops_with_IBM_Cloud_714fe07912","resource_type":"image"}}},"hash":"Dicoding_Practical_Dev_Ops_with_IBM_Cloud_714fe07912","ext":".png","mime":"image/png","size":935.23,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659228690/production/Dicoding_Practical_Dev_Ops_with_IBM_Cloud_714fe07912.png","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/Dicoding_Practical_Dev_Ops_with_IBM_Cloud_714fe07912","resource_type":"image"},"createdAt":"2022-07-31T00:51:33.806Z","updatedAt":"2022-07-31T00:51:33.806Z"},"links":[{"id":20,"title":"Certificate","url":"https://www.dicoding.com/certificates/MRZMGJRYKZYQ"}],"portfolio_category":{"id":1,"name":"Certifications"}},{"id":20,"title":"GCP - Associate Cloud Engineer","descriptionHeader":null,"descriptionBody":null,"image":{"id":48,"name":"GCP-Associate Cloud Engineer.png","alternativeText":"GCP-Associate Cloud Engineer","caption":null,"width":520,"height":520,"formats":{"small":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1671759972/production/small_GCP_Associate_Cloud_Engineer_e755af8718.png","hash":"small_GCP_Associate_Cloud_Engineer_e755af8718","mime":"image/png","name":"small_GCP-Associate Cloud Engineer.png","path":null,"size":103.1,"width":500,"height":500,"provider_metadata":{"public_id":"production/small_GCP_Associate_Cloud_Engineer_e755af8718","resource_type":"image"}},"thumbnail":{"ext":".png","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1671759971/production/thumbnail_GCP_Associate_Cloud_Engineer_e755af8718.png","hash":"thumbnail_GCP_Associate_Cloud_Engineer_e755af8718","mime":"image/png","name":"thumbnail_GCP-Associate Cloud Engineer.png","path":null,"size":22.3,"width":156,"height":156,"provider_metadata":{"public_id":"production/thumbnail_GCP_Associate_Cloud_Engineer_e755af8718","resource_type":"image"}}},"hash":"GCP_Associate_Cloud_Engineer_e755af8718","ext":".png","mime":"image/png","size":13.69,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1671759971/production/GCP_Associate_Cloud_Engineer_e755af8718.png","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/GCP_Associate_Cloud_Engineer_e755af8718","resource_type":"image"},"createdAt":"2022-12-23T01:46:12.466Z","updatedAt":"2022-12-23T01:46:12.466Z"},"links":[{"id":22,"title":"Verify","url":"https://www.credential.net/8a153781-4fb2-41a8-81c6-27e23f3ae675"},{"id":21,"title":"Certificate","url":"https://go.adityacprtm.dev/vepbVG"}],"portfolio_category":{"id":1,"name":"Certifications"}}],"meta":{"pagination":{"page":1,"pageSize":25,"pageCount":1,"total":20}}}')
    },
    b117: function(e, t, i) {
        "use strict";
        e.exports = function(e) {
            var t = {};
            t.src_Any = i("cbc7").source,
            t.src_Cc = i("a7bc").source,
            t.src_Z = i("4fc2").source,
            t.src_P = i("7ca0").source,
            t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"),
            t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
            var a = "[><｜]";
            return t.src_pseudo_letter = "(?:(?!" + a + "|" + t.src_ZPCc + ")" + t.src_Any + ")",
            t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",
            t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?",
            t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",
            t.src_host_terminator = "(?=$|" + a + "|" + t.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))",
            t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|" + a + "|[()[\\]{}.,\"'?!\\-;]).|\\[(?:(?!" + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + '|["]).)+\\"|\\\'(?:(?!' + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-]).|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t.src_ZCc + "|[.]).|" + (e && e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + t.src_ZCc + ").|;(?!" + t.src_ZCc + ").|\\!+(?!" + t.src_ZCc + "|[!]).|\\?(?!" + t.src_ZCc + "|[?]).)+|\\/)?",
            t.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',
            t.src_xn = "xn--[a-z0-9\\-]{1,59}",
            t.src_domain_root = "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})",
            t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))",
            t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))",
            t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))",
            t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))",
            t.src_host_strict = t.src_host + t.src_host_terminator,
            t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator,
            t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator,
            t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator,
            t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator,
            t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))",
            t.tpl_email_fuzzy = "(^|" + a + '|"|\\(|' + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")",
            t.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")",
            t.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")",
            t
        }
    },
    b658: function(e) {
        e.exports = JSON.parse('{"data":{"id":1,"content":"A passionate and skilled DevOps, SRE, and Cloud Engineer with a strong background in infrastructure provisioning, automation, and monitoring. I have completed and been certified by Google Cloud for Associate Cloud Engineer and AWS for AWS Certified Cloud Practitioner. \\n\\nHave experience working with tools such as Jenkins, Terraform, and Ansible to streamline development processes and ensure efficient code deployment. Proficient in managing and monitoring cloud infrastructure services on AWS and GCP, as well as maintaining high availability in Kubernetes-based container clusters. Successfully implemented monitoring and logging tools like ELK, Grafana, and Datadog to ensure comprehensive visibility into system performance and implemented GitOps for managing infrastructure as code. My expertise also includes integrating automation testing into the CI/CD pipeline and developing scripts to automate tasks, improving efficiency and reducing manual effort. \\n\\nWith a Bachelor\'s degree in Computer Science and a strong GPA, I am committed to continuous learning and professional growth. I am seeking opportunities to leverage my skills and contribute to the success of DevOps, SRE and cloud engineering projects."},"meta":{}}')
    },
    b8fa: function(e, t, i) {
        "use strict";
        i.r(t);
        var a = function() {
            var e = this
              , t = e._self._c;
            return t("div", [t("div", {
                staticClass: "pb-2"
            }, [t("h1", {
                staticClass: "title title--h1 first-title title__separate"
            }, [e._v(" " + e._s(this.heading.contact) + " ")])]), e.contact.errorMsg ? t("ErrorComponent", {
                attrs: {
                    title: "Error while fetching data",
                    msg: e.contact.errorMsg.toString()
                }
            }) : t("div", [t("p", [e._v(" " + e._s(this.opportunity) + " "), t("strong", [e._v(e._s(e.contact.data.opportunities ? "Yes" : "No"))])]), t("h2", {
                staticClass: "title title--h3"
            }, [e._v(e._s(this.heading.contact_form))]), t("form", {
                staticClass: "contact-form",
                attrs: {
                    id: "contact-form",
                    name: "contact-form",
                    method: "post"
                },
                on: {
                    submit: e.onSubmit
                }
            }, [t("div", {
                staticClass: "row"
            }, [t("div", {
                staticClass: "form-group col-12 col-md-6",
                class: {
                    "has-error": e.errorName,
                    "has-danger": e.errorName
                }
            }, [t("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.name,
                    expression: "name"
                }],
                staticClass: "form-control",
                attrs: {
                    type: "text",
                    id: "name",
                    name: "name",
                    placeholder: e.placeholder.fullname
                },
                domProps: {
                    value: e.name
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.name = t.target.value)
                    }
                }
            }), e.errorName ? t("div", {
                staticClass: "help-block with-errors"
            }, [e._v(" " + e._s(e.errorName) + " ")]) : e._e()]), t("div", {
                staticClass: "hidden form-group col-12 col-md-6"
            }, [t("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.bot,
                    expression: "bot"
                }],
                staticClass: "form-control",
                attrs: {
                    type: "hidden",
                    id: "bot-field",
                    name: "bot-field",
                    placeholder: "Dont fill this out if you're human"
                },
                domProps: {
                    value: e.bot
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.bot = t.target.value)
                    }
                }
            })]), t("div", {
                staticClass: "form-group col-12 col-md-6",
                class: {
                    "has-error": e.errorEmail,
                    "has-danger": e.errorEmail
                }
            }, [t("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.email,
                    expression: "email"
                }],
                staticClass: "form-control",
                attrs: {
                    type: "email",
                    id: "email",
                    name: "email",
                    placeholder: e.placeholder.email
                },
                domProps: {
                    value: e.email
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.email = t.target.value)
                    }
                }
            }), e.errorEmail ? t("div", {
                staticClass: "help-block with-errors"
            }, [e._v(" " + e._s(e.errorEmail) + " ")]) : e._e()]), t("div", {
                staticClass: "form-group col-12 col-md-12",
                class: {
                    "has-error": e.errorMessage,
                    "has-danger": e.errorMessage
                }
            }, [t("textarea", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.message,
                    expression: "message"
                }],
                staticClass: "textarea form-control",
                attrs: {
                    id: "message",
                    name: "message",
                    placeholder: e.placeholder.message,
                    rows: "4"
                },
                domProps: {
                    value: e.message
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.message = t.target.value)
                    }
                }
            }), e.errorMessage ? t("div", {
                staticClass: "help-block with-errors"
            }, [e._v(" " + e._s(e.errorMessage) + " ")]) : e._e()])]), t("div", {
                staticClass: "row"
            }, [t("div", {
                staticClass: "col-12 col-md-6 order-2 order-md-1 text-center text-md-left"
            }, [e.successForm ? t("p", {
                staticClass: "with-success"
            }, [e._v(" " + e._s(e.messageForm.success) + " ")]) : e._e(), e.errorForm ? t("p", {
                staticClass: "with-errors"
            }, [e._v(" " + e._s(e.messageForm.error) + " ")]) : e._e(), e.loading ? t("p", [e._v(" " + e._s(e.messageForm.loading) + " ")]) : e._e()]), t("div", {
                staticClass: "col-12 col-md-6 order-1 order-md-2 text-right"
            }, [t("button", {
                staticClass: "btn",
                class: {
                    disabled: e.loading
                },
                attrs: {
                    type: "submit"
                }
            }, [t("em", {
                staticClass: "font-icon icon-send"
            }), e._v(" " + e._s(e.loading ? e.placeholder.sending : e.placeholder.submit) + " ")])])])])])], 1)
        }
          , r = []
          , n = i("3fb9")
          , o = {
            name: "Contact",
            components: {
                ErrorComponent: n["a"]
            },
            data() {
                return {
                    page: {
                        meta: {
                            title: "Contact | Adityacprtm | DevOps - SRE - Cloud Engineer",
                            description: "Contact me here. Either fill out the form on this page or find one of the other contact methods listed to reach me that way. Contact Adityacprtm."
                        }
                    },
                    contact: {
                        loading: !0,
                        data: {
                            opportunities: !0
                        },
                        errorMsg: ""
                    },
                    loading: !1,
                    isBot: !1,
                    bot: null,
                    name: null,
                    email: null,
                    message: null,
                    errorName: null,
                    errorEmail: null,
                    errorMessage: null,
                    successForm: !1,
                    errorForm: !1,
                    urlForm: "https://formspree.io/f/xdojdopy",
                    heading: {
                        contact: "Contact",
                        contact_form: "Contact Form"
                    },
                    opportunity: "Open for opportunities:",
                    placeholder: {
                        fullname: "Full name",
                        email: "Email address",
                        message: "Your message",
                        sending: "Sending Message...",
                        submit: "Submit"
                    },
                    messageForm: {
                        success: "Thanks! Your message has been sent.",
                        error: "Oopss! Something went wrong.",
                        loading: "If this takes forever, I am so sorry in advance. Try contacting me directly via email.😉"
                    }
                }
            },
            created() {},
            methods: {
                onSubmit(e) {
                    this.name || (this.errorName = "Please fill your name ...",
                    setTimeout(()=>{
                        this.errorName = null
                    }
                    , 5e3)),
                    null != this.bot && (this.isBot = !0),
                    this.email ? this.validateEmail(this.email) || (this.errorEmail = "Please fill your email correctly ...",
                    setTimeout(()=>{
                        this.errorEmail = null
                    }
                    , 5e3)) : (this.errorEmail = "Please fill your email ...",
                    setTimeout(()=>{
                        this.errorEmail = null
                    }
                    , 5e3)),
                    this.message || (this.errorMessage = "Please fill in the form...",
                    setTimeout(()=>{
                        this.errorMessage = null
                    }
                    , 5e3)),
                    this.errorName || this.errorEmail || this.errorMessage || this.submitMessage(),
                    e.preventDefault()
                },
                submitMessage() {
                    if (this.successForm = !1,
                    this.errorForm = !1,
                    this.loading = !0,
                    null != this.bot)
                        this.isBot = !0;
                    else {
                        const e = {
                            name: this.name,
                            email: this.email,
                            message: this.message
                        };
                        this.axios.post(this.urlForm, e).then(()=>{
                            this.successForm = !0,
                            this.errorForm = !1,
                            this.name = null,
                            this.email = null,
                            this.message = null,
                            setTimeout(()=>{
                                this.successForm = !1
                            }
                            , 5e3)
                        }
                        ).catch(()=>{
                            this.successForm = !1,
                            this.errorForm = !0,
                            setTimeout(()=>{
                                this.errorForm = !1
                            }
                            , 5e3)
                        }
                        ).finally(()=>{
                            this.loading = !1
                        }
                        )
                    }
                },
                validateEmail(e) {
                    var t = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return t.test(e)
                }
            },
            metaInfo() {
                return {
                    title: this.page.meta ? this.page.meta.title : "Contact | Adityacprtm | DevOps - SRE - Cloud Engineer",
                    meta: [{
                        vmid: "description",
                        name: "description",
                        content: this.page.meta ? this.page.meta.description : "Get to know Aditya Chamim Pratama more deeply with Contact."
                    }, {
                        vmid: "twitter:title",
                        name: "twitter:title",
                        content: this.page.meta ? this.page.meta.title : "Contact | Adityacprtm | DevOps - SRE - Cloud Engineer"
                    }, {
                        vmid: "twitter:description",
                        name: "twitter:description",
                        content: this.page.meta ? this.page.meta.description : "Get to know Aditya Chamim Pratama more deeply with Contact."
                    }, {
                        vmid: "og:title",
                        property: "og:title",
                        content: this.page.meta ? this.page.meta.title : "Contact | Adityacprtm | DevOps - SRE - Cloud Engineer"
                    }, {
                        vmid: "og:description",
                        property: "og:description",
                        content: this.page.meta ? this.page.meta.description : "Get to know Aditya Chamim Pratama more deeply with Contact."
                    }]
                }
            }
        }
          , s = o
          , l = i("2877")
          , d = Object(l["a"])(s, a, r, !1, null, null, null);
        t["default"] = d.exports
    },
    baca: function(e, t, i) {
        "use strict";
        function a(e) {
            switch (e) {
            case 10:
            case 33:
            case 35:
            case 36:
            case 37:
            case 38:
            case 42:
            case 43:
            case 45:
            case 58:
            case 60:
            case 61:
            case 62:
            case 64:
            case 91:
            case 92:
            case 93:
            case 94:
            case 95:
            case 96:
            case 123:
            case 125:
            case 126:
                return !0;
            default:
                return !1
            }
        }
        e.exports = function(e, t) {
            var i = e.pos;
            while (i < e.posMax && !a(e.src.charCodeAt(i)))
                i++;
            return i !== e.pos && (t || (e.pending += e.src.slice(e.pos, i)),
            e.pos = i,
            !0)
        }
    },
    bb4a: function(e, t, i) {
        "use strict";
        var a = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/
          , r = /\((c|tm|r|p)\)/i
          , n = /\((c|tm|r|p)\)/gi
          , o = {
            c: "©",
            r: "®",
            p: "§",
            tm: "™"
        };
        function s(e, t) {
            return o[t.toLowerCase()]
        }
        function l(e) {
            var t, i, a = 0;
            for (t = e.length - 1; t >= 0; t--)
                i = e[t],
                "text" !== i.type || a || (i.content = i.content.replace(n, s)),
                "link_open" === i.type && "auto" === i.info && a--,
                "link_close" === i.type && "auto" === i.info && a++
        }
        function d(e) {
            var t, i, r = 0;
            for (t = e.length - 1; t >= 0; t--)
                i = e[t],
                "text" !== i.type || r || a.test(i.content) && (i.content = i.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/gm, "$1—").replace(/(^|\s)--(?=\s|$)/gm, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/gm, "$1–")),
                "link_open" === i.type && "auto" === i.info && r--,
                "link_close" === i.type && "auto" === i.info && r++
        }
        e.exports = function(e) {
            var t;
            if (e.md.options.typographer)
                for (t = e.tokens.length - 1; t >= 0; t--)
                    "inline" === e.tokens[t].type && (r.test(e.tokens[t].content) && l(e.tokens[t].children),
                    a.test(e.tokens[t].content) && d(e.tokens[t].children))
        }
    },
    bd68: function(e, t, i) {
        "use strict";
        e.exports = i("aced")
    },
    bf2b: function(e, t, i) {
        "use strict";
        e.exports = function(e, t, i, a) {
            var r, n, o, s, l, d, c, p = !1, u = e.bMarks[t] + e.tShift[t], m = e.eMarks[t];
            if (e.sCount[t] - e.blkIndent >= 4)
                return !1;
            if (u + 3 > m)
                return !1;
            if (r = e.src.charCodeAt(u),
            126 !== r && 96 !== r)
                return !1;
            if (l = u,
            u = e.skipChars(u, r),
            n = u - l,
            n < 3)
                return !1;
            if (c = e.src.slice(l, u),
            o = e.src.slice(u, m),
            96 === r && o.indexOf(String.fromCharCode(r)) >= 0)
                return !1;
            if (a)
                return !0;
            for (s = t; ; ) {
                if (s++,
                s >= i)
                    break;
                if (u = l = e.bMarks[s] + e.tShift[s],
                m = e.eMarks[s],
                u < m && e.sCount[s] < e.blkIndent)
                    break;
                if (e.src.charCodeAt(u) === r && (!(e.sCount[s] - e.blkIndent >= 4) && (u = e.skipChars(u, r),
                !(u - l < n) && (u = e.skipSpaces(u),
                !(u < m))))) {
                    p = !0;
                    break
                }
            }
            return n = e.sCount[t],
            e.line = s + (p ? 1 : 0),
            d = e.push("fence", "code", 0),
            d.info = o,
            d.content = e.getLines(t + 1, s, n, !0),
            d.markup = c,
            d.map = [t, e.line],
            !0
        }
    },
    c2d8: function(e, t, i) {
        "use strict";
        var a = i("5706").HTML_TAG_RE;
        function r(e) {
            var t = 32 | e;
            return t >= 97 && t <= 122
        }
        e.exports = function(e, t) {
            var i, n, o, s, l = e.pos;
            return !!e.md.options.html && (o = e.posMax,
            !(60 !== e.src.charCodeAt(l) || l + 2 >= o) && (i = e.src.charCodeAt(l + 1),
            !(33 !== i && 63 !== i && 47 !== i && !r(i)) && (n = e.src.slice(l).match(a),
            !!n && (t || (s = e.push("html_inline", "", 0),
            s.content = e.src.slice(l, l + n[0].length)),
            e.pos += n[0].length,
            !0))))
        }
    },
    c464: function(e, t, i) {
        "use strict";
        var a = {};
        function r(e) {
            var t, i, r = a[e];
            if (r)
                return r;
            for (r = a[e] = [],
            t = 0; t < 128; t++)
                i = String.fromCharCode(t),
                /^[0-9a-z]$/i.test(i) ? r.push(i) : r.push("%" + ("0" + t.toString(16).toUpperCase()).slice(-2));
            for (t = 0; t < e.length; t++)
                r[e.charCodeAt(t)] = e[t];
            return r
        }
        function n(e, t, i) {
            var a, o, s, l, d, c = "";
            for ("string" !== typeof t && (i = t,
            t = n.defaultChars),
            "undefined" === typeof i && (i = !0),
            d = r(t),
            a = 0,
            o = e.length; a < o; a++)
                if (s = e.charCodeAt(a),
                i && 37 === s && a + 2 < o && /^[0-9a-f]{2}$/i.test(e.slice(a + 1, a + 3)))
                    c += e.slice(a, a + 3),
                    a += 2;
                else if (s < 128)
                    c += d[s];
                else if (s >= 55296 && s <= 57343) {
                    if (s >= 55296 && s <= 56319 && a + 1 < o && (l = e.charCodeAt(a + 1),
                    l >= 56320 && l <= 57343)) {
                        c += encodeURIComponent(e[a] + e[a + 1]),
                        a++;
                        continue
                    }
                    c += "%EF%BF%BD"
                } else
                    c += encodeURIComponent(e[a]);
            return c
        }
        n.defaultChars = ";/?:@&=+$,-_.!~*'()#",
        n.componentChars = "-_.!~*'()",
        e.exports = n
    },
    c8a9: function(e, t, i) {
        "use strict";
        function a(e, t) {
            var i, a, r, n, o, s, l = t.length;
            for (i = l - 1; i >= 0; i--)
                a = t[i],
                95 !== a.marker && 42 !== a.marker || -1 !== a.end && (r = t[a.end],
                s = i > 0 && t[i - 1].end === a.end + 1 && t[i - 1].marker === a.marker && t[i - 1].token === a.token - 1 && t[a.end + 1].token === r.token + 1,
                o = String.fromCharCode(a.marker),
                n = e.tokens[a.token],
                n.type = s ? "strong_open" : "em_open",
                n.tag = s ? "strong" : "em",
                n.nesting = 1,
                n.markup = s ? o + o : o,
                n.content = "",
                n = e.tokens[r.token],
                n.type = s ? "strong_close" : "em_close",
                n.tag = s ? "strong" : "em",
                n.nesting = -1,
                n.markup = s ? o + o : o,
                n.content = "",
                s && (e.tokens[t[i - 1].token].content = "",
                e.tokens[t[a.end + 1].token].content = "",
                i--))
        }
        e.exports.tokenize = function(e, t) {
            var i, a, r, n = e.pos, o = e.src.charCodeAt(n);
            if (t)
                return !1;
            if (95 !== o && 42 !== o)
                return !1;
            for (a = e.scanDelims(e.pos, 42 === o),
            i = 0; i < a.length; i++)
                r = e.push("text", "", 0),
                r.content = String.fromCharCode(o),
                e.delimiters.push({
                    marker: o,
                    length: a.length,
                    token: e.tokens.length - 1,
                    end: -1,
                    open: a.can_open,
                    close: a.can_close
                });
            return e.pos += a.length,
            !0
        }
        ,
        e.exports.postProcess = function(e) {
            var t, i = e.tokens_meta, r = e.tokens_meta.length;
            for (a(e, e.delimiters),
            t = 0; t < r; t++)
                i[t] && i[t].delimiters && a(e, i[t].delimiters)
        }
    },
    c9e5: function(e, t, i) {
        "use strict";
        i.r(t);
        var a = function() {
            var e = this
              , t = e._self._c;
            return t("div", [t("div", {
                staticClass: "pb-2"
            }, [t("h1", {
                staticClass: "title title--h1 first-title title__separate"
            }, [e._v(" " + e._s(e.heading.portfolio) + " ")])]), t("div", [t("div", {
                staticClass: "select"
            }, [t("span", {
                staticClass: "placeholder"
            }, [e._v("Select category")]), t("ul", {
                staticClass: "filter"
            }, [t("li", {
                staticClass: "filter__item"
            }, [e._v("Category")]), t("li", {
                staticClass: "filter__item active",
                attrs: {
                    "data-filter": "*"
                }
            }, [t("a", {
                staticClass: "filter__link active",
                attrs: {
                    href: "#filter"
                }
            }, [e._v(" " + e._s(e.text.allCategory) + " ")])]), e._l(e.categories, (function(i) {
                return t("li", {
                    key: i.id,
                    staticClass: "filter__item",
                    attrs: {
                        "data-filter": ".category-" + i.name
                    }
                }, [t("a", {
                    staticClass: "filter__link",
                    attrs: {
                        href: "#filter"
                    }
                }, [e._v(" " + e._s(i.name) + " ")])])
            }
            ))], 2), t("input", {
                attrs: {
                    type: "hidden",
                    name: "changemetoo"
                }
            })]), t("div", {
                staticClass: "gallery-grid-two js-grid js-filter-container"
            }, [t("div", {
                staticClass: "gutter-sizer"
            }), e._l(e.portfolios, (function(i) {
                return t("figure", {
                    key: i.id,
                    staticClass: "gallery-grid__item",
                    class: "category-" + i.portfolio_category.name
                }, [t("div", {
                    staticClass: "box-gallery-grid__item box__border"
                }, [t("div", {
                    staticClass: "gallery-grid__image-wrap"
                }, [t("div", {
                    staticClass: "portfolio-item__category"
                }, [t("span", [e._v(e._s(i.portfolio_category.name))])]), t("img", {
                    staticClass: "gallery-grid__image cover lazyload",
                    attrs: {
                        src: e.getImageUrl(i.image, "medium"),
                        alt: e.getImageAlt(i.image),
                        "data-zoom": ""
                    }
                }), i.descriptionHeader || i.descriptionBody ? t("div", {
                    staticClass: "caption"
                }, [t("div", {
                    staticClass: "blur"
                }), t("div", {
                    staticClass: "caption-text"
                }, [i.descriptionHeader ? t("h1", [e._v(" " + e._s(i.descriptionHeader) + " ")]) : e._e(), i.descriptionBody ? t("p", [e._v(" " + e._s(i.descriptionBody) + " ")]) : e._e()])]) : e._e()]), t("figcaption", {
                    staticClass: "gallery-grid__caption"
                }, [t("h4", {
                    staticClass: "title title--h4 gallery-grid__title"
                }, [e._v(" " + e._s(i.title) + " ")]), e._l(i.links, (function(i) {
                    return t("a", {
                        key: i.id,
                        staticClass: "link-btn mt-2",
                        attrs: {
                            href: "#"
                        },
                        on: {
                            click: function(t) {
                                return t.preventDefault(),
                                e.openUrl(i.url)
                            }
                        }
                    }, [e._v(" " + e._s(i.title) + " ")])
                }
                ))], 2)])])
            }
            ))], 2)])])
        }
          , r = []
          , n = i("7507")
          , o = i("06bd")
          , s = i("b08b")
          , l = {
            name: "Portfolio",
            mixins: [n["a"]],
            data() {
                return {
                    page: {
                        meta: {
                            title: "Portfolio | Adityacprtm | DevOps - SRE - Cloud Engineer",
                            description: "View some of the fun projects I have developed and certifications I have achieved. Some of the technologies used are Node.js, Laravel, Cloud and more. Portfolio Adityacprtm."
                        }
                    },
                    categories: o.data,
                    portfolios: [],
                    heading: {
                        portfolio: "Portfolio"
                    },
                    text: {
                        allCategory: "All"
                    }
                }
            },
            created() {
                this.$loadScript("/js/jquery-3.4.1.min.js").then(()=>{
                    this.$loadScript("/js/plugins.min.js").then(()=>{
                        this.$loadScript("/js/portfolio.js").then(()=>{
                            this.portfolios = this.shuffleArray(s.data)
                        }
                        )
                    }
                    )
                }
                )
            },
            methods: {
                shuffleArray: function(e) {
                    for (let t = e.length - 1; t > 0; t--) {
                        const i = Math.floor(Math.random() * t)
                          , a = e[t];
                        e[t] = e[i],
                        e[i] = a
                    }
                    return e
                }
            },
            metaInfo() {
                return {
                    title: this.page.meta ? this.page.meta.title : "Portfolio | Adityacprtm | DevOps - SRE - Cloud Engineer",
                    meta: [{
                        vmid: "description",
                        name: "description",
                        content: this.page.meta ? this.page.meta.description : "Get to know Aditya Chamim Pratama more deeply with Portfolio."
                    }, {
                        vmid: "twitter:title",
                        name: "twitter:title",
                        content: this.page.meta ? this.page.meta.title : "Portfolio | Adityacprtm | DevOps - SRE - Cloud Engineer"
                    }, {
                        vmid: "twitter:description",
                        name: "twitter:description",
                        content: this.page.meta ? this.page.meta.description : "Get to know Aditya Chamim Pratama more deeply with Portfolio."
                    }, {
                        vmid: "og:title",
                        property: "og:title",
                        content: this.page.meta ? this.page.meta.title : "Portfolio | Adityacprtm | DevOps - SRE - Cloud Engineer"
                    }, {
                        vmid: "og:description",
                        property: "og:description",
                        content: this.page.meta ? this.page.meta.description : "Get to know Aditya Chamim Pratama more deeply with Portfolio."
                    }]
                }
            }
        }
          , d = l
          , c = i("2877")
          , p = Object(c["a"])(d, a, r, !1, null, null, null);
        t["default"] = p.exports
    },
    cbc7: function(e, t) {
        e.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/
    },
    cd0f: function(e, t, i) {
        "use strict";
        var a = i("0068").normalizeReference
          , r = i("0068").isSpace;
        e.exports = function(e, t) {
            var i, n, o, s, l, d, c, p, u, m = "", h = "", _ = e.pos, g = e.posMax, f = e.pos, b = !0;
            if (91 !== e.src.charCodeAt(e.pos))
                return !1;
            if (l = e.pos + 1,
            s = e.md.helpers.parseLinkLabel(e, e.pos, !0),
            s < 0)
                return !1;
            if (d = s + 1,
            d < g && 40 === e.src.charCodeAt(d)) {
                for (b = !1,
                d++; d < g; d++)
                    if (n = e.src.charCodeAt(d),
                    !r(n) && 10 !== n)
                        break;
                if (d >= g)
                    return !1;
                if (f = d,
                c = e.md.helpers.parseLinkDestination(e.src, d, e.posMax),
                c.ok) {
                    for (m = e.md.normalizeLink(c.str),
                    e.md.validateLink(m) ? d = c.pos : m = "",
                    f = d; d < g; d++)
                        if (n = e.src.charCodeAt(d),
                        !r(n) && 10 !== n)
                            break;
                    if (c = e.md.helpers.parseLinkTitle(e.src, d, e.posMax),
                    d < g && f !== d && c.ok)
                        for (h = c.str,
                        d = c.pos; d < g; d++)
                            if (n = e.src.charCodeAt(d),
                            !r(n) && 10 !== n)
                                break
                }
                (d >= g || 41 !== e.src.charCodeAt(d)) && (b = !0),
                d++
            }
            if (b) {
                if ("undefined" === typeof e.env.references)
                    return !1;
                if (d < g && 91 === e.src.charCodeAt(d) ? (f = d + 1,
                d = e.md.helpers.parseLinkLabel(e, d),
                d >= 0 ? o = e.src.slice(f, d++) : d = s + 1) : d = s + 1,
                o || (o = e.src.slice(l, s)),
                p = e.env.references[a(o)],
                !p)
                    return e.pos = _,
                    !1;
                m = p.href,
                h = p.title
            }
            return t || (e.pos = l,
            e.posMax = s,
            u = e.push("link_open", "a", 1),
            u.attrs = i = [["href", m]],
            h && i.push(["title", h]),
            e.md.inline.tokenize(e),
            u = e.push("link_close", "a", -1)),
            e.pos = d,
            e.posMax = g,
            !0
        }
    },
    d301: function(e, t, i) {
        "use strict";
        i.d(t, "a", (function() {
            return a
        }
        ));
        const a = {
            methods: {
                monthYearFormat(e) {
                    let t = localStorage.locale_adityacprtm ? localStorage.locale_adityacprtm : "en";
                    var i = {
                        year: "numeric",
                        month: "short"
                    };
                    return new Date(e).toLocaleDateString(t, i)
                },
                dayFormat(e) {
                    let t = localStorage.locale_adityacprtm ? localStorage.locale_adityacprtm : "en";
                    var i = {
                        day: "numeric"
                    };
                    return new Date(e).toLocaleDateString(t, i)
                },
                monthFormat(e) {
                    let t = localStorage.locale_adityacprtm ? localStorage.locale_adityacprtm : "en";
                    var i = {
                        month: "short"
                    };
                    return new Date(e).toLocaleDateString(t, i)
                },
                yearFormat(e) {
                    let t = localStorage.locale_adityacprtm ? localStorage.locale_adityacprtm : "en";
                    var i = {
                        year: "numeric"
                    };
                    return new Date(e).toLocaleDateString(t, i)
                },
                monthDayYearFormat: function(e) {
                    let t = localStorage.locale_adityacprtm ? localStorage.locale_adityacprtm : "en";
                    var i = {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    };
                    return new Date(e).toLocaleDateString(t, i)
                }
            }
        }
    },
    d4cd: function(e, t, i) {
        "use strict";
        e.exports = i("08ae")
    },
    d5d1: function(e, t, i) {
        "use strict";
        t.Any = i("cbc7"),
        t.Cc = i("a7bc"),
        t.Cf = i("6fd1"),
        t.P = i("7ca0"),
        t.Z = i("4fc2")
    },
    d670: function(e, t, i) {
        "use strict";
        var a = i("0068").normalizeReference
          , r = i("0068").isSpace;
        e.exports = function(e, t, i, n) {
            var o, s, l, d, c, p, u, m, h, _, g, f, b, v, y, w, C = 0, k = e.bMarks[t] + e.tShift[t], A = e.eMarks[t], S = t + 1;
            if (e.sCount[t] - e.blkIndent >= 4)
                return !1;
            if (91 !== e.src.charCodeAt(k))
                return !1;
            while (++k < A)
                if (93 === e.src.charCodeAt(k) && 92 !== e.src.charCodeAt(k - 1)) {
                    if (k + 1 === A)
                        return !1;
                    if (58 !== e.src.charCodeAt(k + 1))
                        return !1;
                    break
                }
            for (d = e.lineMax,
            y = e.md.block.ruler.getRules("reference"),
            _ = e.parentType,
            e.parentType = "reference"; S < d && !e.isEmpty(S); S++)
                if (!(e.sCount[S] - e.blkIndent > 3) && !(e.sCount[S] < 0)) {
                    for (v = !1,
                    p = 0,
                    u = y.length; p < u; p++)
                        if (y[p](e, S, d, !0)) {
                            v = !0;
                            break
                        }
                    if (v)
                        break
                }
            for (b = e.getLines(t, S, e.blkIndent, !1).trim(),
            A = b.length,
            k = 1; k < A; k++) {
                if (o = b.charCodeAt(k),
                91 === o)
                    return !1;
                if (93 === o) {
                    h = k;
                    break
                }
                10 === o ? C++ : 92 === o && (k++,
                k < A && 10 === b.charCodeAt(k) && C++)
            }
            if (h < 0 || 58 !== b.charCodeAt(h + 1))
                return !1;
            for (k = h + 2; k < A; k++)
                if (o = b.charCodeAt(k),
                10 === o)
                    C++;
                else if (!r(o))
                    break;
            if (g = e.md.helpers.parseLinkDestination(b, k, A),
            !g.ok)
                return !1;
            if (c = e.md.normalizeLink(g.str),
            !e.md.validateLink(c))
                return !1;
            for (k = g.pos,
            C += g.lines,
            s = k,
            l = C,
            f = k; k < A; k++)
                if (o = b.charCodeAt(k),
                10 === o)
                    C++;
                else if (!r(o))
                    break;
            g = e.md.helpers.parseLinkTitle(b, k, A),
            k < A && f !== k && g.ok ? (w = g.str,
            k = g.pos,
            C += g.lines) : (w = "",
            k = s,
            C = l);
            while (k < A) {
                if (o = b.charCodeAt(k),
                !r(o))
                    break;
                k++
            }
            if (k < A && 10 !== b.charCodeAt(k) && w) {
                w = "",
                k = s,
                C = l;
                while (k < A) {
                    if (o = b.charCodeAt(k),
                    !r(o))
                        break;
                    k++
                }
            }
            return !(k < A && 10 !== b.charCodeAt(k)) && (m = a(b.slice(1, h)),
            !!m && (n || ("undefined" === typeof e.env.references && (e.env.references = {}),
            "undefined" === typeof e.env.references[m] && (e.env.references[m] = {
                title: w,
                href: c
            }),
            e.parentType = _,
            e.line = t + C + 1),
            !0))
        }
    },
    d8a6: function(e, t, i) {
        "use strict";
        e.exports.encode = i("c464"),
        e.exports.decode = i("8f37"),
        e.exports.format = i("43e0"),
        e.exports.parse = i("da5f")
    },
    da5f: function(e, t, i) {
        "use strict";
        function a() {
            this.protocol = null,
            this.slashes = null,
            this.auth = null,
            this.port = null,
            this.hostname = null,
            this.hash = null,
            this.search = null,
            this.pathname = null
        }
        var r = /^([a-z0-9.+-]+:)/i
          , n = /:[0-9]*$/
          , o = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/
          , s = ["<", ">", '"', "`", " ", "\r", "\n", "\t"]
          , l = ["{", "}", "|", "\\", "^", "`"].concat(s)
          , d = ["'"].concat(l)
          , c = ["%", "/", "?", ";", "#"].concat(d)
          , p = ["/", "?", "#"]
          , u = 255
          , m = /^[+a-z0-9A-Z_-]{0,63}$/
          , h = /^([+a-z0-9A-Z_-]{0,63})(.*)$/
          , _ = {
            javascript: !0,
            "javascript:": !0
        }
          , g = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0
        };
        function f(e, t) {
            if (e && e instanceof a)
                return e;
            var i = new a;
            return i.parse(e, t),
            i
        }
        a.prototype.parse = function(e, t) {
            var i, a, n, s, l, d = e;
            if (d = d.trim(),
            !t && 1 === e.split("#").length) {
                var f = o.exec(d);
                if (f)
                    return this.pathname = f[1],
                    f[2] && (this.search = f[2]),
                    this
            }
            var b = r.exec(d);
            if (b && (b = b[0],
            n = b.toLowerCase(),
            this.protocol = b,
            d = d.substr(b.length)),
            (t || b || d.match(/^\/\/[^@\/]+@[^@\/]+/)) && (l = "//" === d.substr(0, 2),
            !l || b && _[b] || (d = d.substr(2),
            this.slashes = !0)),
            !_[b] && (l || b && !g[b])) {
                var v, y, w = -1;
                for (i = 0; i < p.length; i++)
                    s = d.indexOf(p[i]),
                    -1 !== s && (-1 === w || s < w) && (w = s);
                for (y = -1 === w ? d.lastIndexOf("@") : d.lastIndexOf("@", w),
                -1 !== y && (v = d.slice(0, y),
                d = d.slice(y + 1),
                this.auth = v),
                w = -1,
                i = 0; i < c.length; i++)
                    s = d.indexOf(c[i]),
                    -1 !== s && (-1 === w || s < w) && (w = s);
                -1 === w && (w = d.length),
                ":" === d[w - 1] && w--;
                var C = d.slice(0, w);
                d = d.slice(w),
                this.parseHost(C),
                this.hostname = this.hostname || "";
                var k = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                if (!k) {
                    var A = this.hostname.split(/\./);
                    for (i = 0,
                    a = A.length; i < a; i++) {
                        var S = A[i];
                        if (S && !S.match(m)) {
                            for (var x = "", T = 0, D = S.length; T < D; T++)
                                S.charCodeAt(T) > 127 ? x += "x" : x += S[T];
                            if (!x.match(m)) {
                                var j = A.slice(0, i)
                                  , P = A.slice(i + 1)
                                  , z = S.match(h);
                                z && (j.push(z[1]),
                                P.unshift(z[2])),
                                P.length && (d = P.join(".") + d),
                                this.hostname = j.join(".");
                                break
                            }
                        }
                    }
                }
                this.hostname.length > u && (this.hostname = ""),
                k && (this.hostname = this.hostname.substr(1, this.hostname.length - 2))
            }
            var E = d.indexOf("#");
            -1 !== E && (this.hash = d.substr(E),
            d = d.slice(0, E));
            var I = d.indexOf("?");
            return -1 !== I && (this.search = d.substr(I),
            d = d.slice(0, I)),
            d && (this.pathname = d),
            g[n] && this.hostname && !this.pathname && (this.pathname = ""),
            this
        }
        ,
        a.prototype.parseHost = function(e) {
            var t = n.exec(e);
            t && (t = t[0],
            ":" !== t && (this.port = t.substr(1)),
            e = e.substr(0, e.length - t.length)),
            e && (this.hostname = e)
        }
        ,
        e.exports = f
    },
    dafc: function(e) {
        e.exports = JSON.parse('{"data":[{"id":3,"institution":"University of Brawijaya","location":"Malang, Indonesia","description":"Informatics Engineering focused on Network-Based Computing","level":"SMA","startDate":"2015-09-14","endDate":"2020-02-22"},{"id":2,"institution":"SMA Negeri 1 Banjarbaru","location":"Banjarbaru, Indonesia","description":"Majored in Science","level":"SMA","startDate":"2012-08-20","endDate":"2015-06-19"},{"id":1,"institution":"SMP Negeri 1 Kuranji","location":"Tanah Bumbu, Indonesia","description":null,"level":"SMP","startDate":"2009-07-14","endDate":"2012-06-22"}],"meta":{"pagination":{"page":1,"pageSize":25,"pageCount":1,"total":3}}}')
    },
    df56: function(e, t, i) {
        "use strict";
        e.exports = function(e, t, i) {
            var a, r, n, o, s = -1, l = e.posMax, d = e.pos;
            e.pos = t + 1,
            a = 1;
            while (e.pos < l) {
                if (n = e.src.charCodeAt(e.pos),
                93 === n && (a--,
                0 === a)) {
                    r = !0;
                    break
                }
                if (o = e.pos,
                e.md.inline.skipToken(e),
                91 === n)
                    if (o === e.pos - 1)
                        a++;
                    else if (i)
                        return e.pos = d,
                        -1
            }
            return r && (s = e.pos),
            e.pos = d,
            s
        }
    },
    df6d: function(e) {
        e.exports = JSON.parse('{"data":[{"id":1,"title":"Google Cloud Platform","level":"Intermediate"},{"id":2,"title":"Amazon Web Service","level":"Intermediate"},{"id":4,"title":"Linux Environment","level":"Intermediate"},{"id":3,"title":"Network Administrator","level":"Intermediate"},{"id":5,"title":"Infrastructure as Code","level":"Intermediate"},{"id":6,"title":"Automation and scripting","level":"Intermediate"},{"id":7,"title":"CICD","level":"Intermediate"},{"id":8,"title":"Git","level":"Intermediate"}],"meta":{"pagination":{"page":1,"pageSize":25,"pageCount":1,"total":8}}}')
    },
    e1f3: function(e, t, i) {
        "use strict";
        e.exports = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "section", "source", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"]
    },
    e211: function(e) {
        e.exports = JSON.parse('{"data":[{"id":16,"title":"Connecting AWS to GCP: A Comprehensive Guide to Site-to-Site VPN","slug":"connecting-aws-to-gcp-a-comprehensive-guide-to-site-to-site-vpn","content":"With the rise of multi-cloud strategies, more and more organizations are operating in environments where they deploy resources across multiple cloud providers. This trend necessitates secure and efficient communication between resources located in different cloud platforms. In this post, we\'ll walk you through setting up a Site-to-Site VPN connection between Amazon Web Services (AWS) and Google Cloud Platform (GCP), allowing resources in both clouds to communicate with each other securely over the internet.\\n\\n### What is a Site-to-Site VPN?\\n\\nA Site-to-Site Virtual Private Network (VPN) is a connection that helps in bridging two networks in different locations over the internet in a secure manner. Traffic is encrypted on one end and decrypted on the other, ensuring data confidentiality and integrity between the two sites.\\n\\n### Prerequisites:\\n\\n- Active AWS and GCP accounts\\n- Basic understanding of VPC in AWS and GCP\\n\\n### Steps to Establish a Site-to-Site VPN between AWS and GCP:\\n\\n**1. AWS Setup:**\\n\\n* **Virtual Private Gateway (VPG):**\\n    - Navigate to the VPC Dashboard.\\n    - Create a Virtual Private Gateway and attach it to the desired VPC.\\n  \\n* **Customer Gateway (CGW):**\\n    - For the IP, you\'ll need the external IP address of the GCP VPN.\\n    - Create a new Customer Gateway with the GCP VPN\'s IP.\\n  \\n* **Site-to-Site VPN Connection:**\\n    - Create a new VPN connection. Choose the previously created VPG and CGW.\\n    - Note the Tunnel details, especially the shared keys and IP addresses.\\n\\n**2. GCP Setup:**\\n\\n* **Cloud Router and VPN:**\\n    - Go to the \'Hybrid Connectivity\' section in GCP.\\n    - Create a Cloud Router.\\n    - Create a VPN, linking it to the previously created Cloud Router.\\n    - Under the \'Tunnels\' section, use the AWS Tunnel details. Ensure that IKE version, shared secrets, and traffic selectors match with AWS settings.\\n  \\n* **Firewall Rules:**\\n    - Setup firewall rules in GCP to allow ingress and egress traffic from AWS VPC IP ranges.\\n\\n**3. Verify Connectivity:**\\n\\n- Once both tunnels (AWS has two tunnels for redundancy) show as UP, test connectivity.\\n    - From AWS, ping a GCP VM\'s internal IP and vice-versa.\\n    - Monitor VPN metrics and logs in both AWS and GCP for any anomalies.\\n\\n### Benefits:\\n\\n1. **Security**: Data is encrypted end-to-end.\\n2. **Flexibility**: Resources in both AWS and GCP can communicate seamlessly.\\n3. **Cost-Effective**: Reduces the need for dedicated, physical connections.\\n\\n### Conclusion:\\n\\nConnecting AWS to GCP using a Site-to-Site VPN establishes a secure, private connection between the two cloud platforms. This guide provides a basic understanding of setting up this connection, but real-world scenarios might require additional configurations like BGP, dynamic routes, and more, depending on the architecture and requirements.\\n\\nRemember, while VPNs offer encryption and security, it\'s essential to continually monitor, patch, and update configurations to ensure optimal performance and security. Happy networking!","createdAt":"2023-10-01T03:18:55.503Z","updatedAt":"2023-10-01T03:48:46.380Z","publishedAt":"2023-10-01T03:48:46.372Z","thumbnail":{"id":51,"name":"aws-gcp-vpn-site-to-site.jpg","alternativeText":"aws-gcp-vpn-site-to-site.jpg","caption":"aws-gcp-vpn-site-to-site","width":1280,"height":720,"formats":{"large":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1696132013/production/large_aws_gcp_vpn_site_to_site_720eca1e65.jpg","hash":"large_aws_gcp_vpn_site_to_site_720eca1e65","mime":"image/jpeg","name":"large_aws-gcp-vpn-site-to-site.jpg","path":null,"size":28.43,"width":1000,"height":563,"provider_metadata":{"public_id":"production/large_aws_gcp_vpn_site_to_site_720eca1e65","resource_type":"image"}},"small":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1696132013/production/small_aws_gcp_vpn_site_to_site_720eca1e65.jpg","hash":"small_aws_gcp_vpn_site_to_site_720eca1e65","mime":"image/jpeg","name":"small_aws-gcp-vpn-site-to-site.jpg","path":null,"size":11.76,"width":500,"height":281,"provider_metadata":{"public_id":"production/small_aws_gcp_vpn_site_to_site_720eca1e65","resource_type":"image"}},"medium":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1696132013/production/medium_aws_gcp_vpn_site_to_site_720eca1e65.jpg","hash":"medium_aws_gcp_vpn_site_to_site_720eca1e65","mime":"image/jpeg","name":"medium_aws-gcp-vpn-site-to-site.jpg","path":null,"size":19.81,"width":750,"height":422,"provider_metadata":{"public_id":"production/medium_aws_gcp_vpn_site_to_site_720eca1e65","resource_type":"image"}},"thumbnail":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1696132013/production/thumbnail_aws_gcp_vpn_site_to_site_720eca1e65.jpg","hash":"thumbnail_aws_gcp_vpn_site_to_site_720eca1e65","mime":"image/jpeg","name":"thumbnail_aws-gcp-vpn-site-to-site.jpg","path":null,"size":4.47,"width":245,"height":138,"provider_metadata":{"public_id":"production/thumbnail_aws_gcp_vpn_site_to_site_720eca1e65","resource_type":"image"}}},"hash":"aws_gcp_vpn_site_to_site_720eca1e65","ext":".jpg","mime":"image/jpeg","size":38.38,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1696132013/production/aws_gcp_vpn_site_to_site_720eca1e65.jpg","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/aws_gcp_vpn_site_to_site_720eca1e65","resource_type":"image"},"createdAt":"2023-10-01T03:46:54.166Z","updatedAt":"2023-10-01T03:46:54.166Z"},"meta":{"id":16,"title":"Connecting AWS to GCP: A Comprehensive Guide to Site-to-Site VPN","description":"With the rise of multi-cloud strategies, more and more organizations are operating in environments where they deploy resources across multiple cloud providers. This trend necessitates secure and efficient communication between resources located in different cloud platforms. In this post, we\'ll walk you through setting up a Site-to-Site VPN connection between Amazon Web Services (AWS) and Google Cloud Platform (GCP), allowing resources in both clouds to communicate with each other securely over the internet."},"series":{"id":3,"title":"AWS Projects","slug":"aws-projects","createdAt":"2023-10-01T03:19:12.822Z","updatedAt":"2023-10-01T03:29:00.492Z","publishedAt":"2023-10-01T03:29:00.488Z"}},{"id":15,"title":"Docker Swarm in GCP","slug":"docker-swarm-in-gcp","content":"### Background\\n\\nContainer Orchestration automates most of the operational effort required to run workloads and services in containers. These operational efforts include deployment, management, scaling, networking, load balancing and more. Current software that provides this solution include Kubernetes, Docker Swarm, Hashicorp Nomad and others.\\n\\nI have understood and used kubernetes to production usage, this blog post represents my own learning in trying Docker Swarm.\\n\\n#### Why use Container Orchestration?\\n\\nSimply put, we can easily manage 3 containers. However, imagine if there are tens to hundreds of containers, it will be easier to run in distributed mode in this case Container Orchestration. In addition, there will be many features that can be implemented to ensure they are running, healthy and more.\\n\\n### Practice Cases\\n\\nLet\'s deploy a scenario to put things in practice. This scenario consists of several simple HTTP services running on Docker Swarm, in this case on Google Cloud Platform (GCP).\\n\\n#### **Prerequisites**\\n\\n- Docker ([here](https://docs.docker.com/engine/install/ubuntu/) to install on ubuntu)\\n- GCP Project\\n    - 2 compute engines with installed docker\\n\\n#### Architectural Overview\\n\\n![Architecture for Practice](https://res.cloudinary.com/adityacprtm/image/upload/v1660349013/production/docker_swarm_9fe7f59510.png)\\n\\nWe will try to expose a simple HTTP service so that it can be accessed by the internet. Docker host is used as a member of the *unmanaged instance group* and this instance group is the backend of the load balancer backend service.\\n\\nIn the instance group, 2 ports are addressed for each service. Load balancing will divide requests based on URL map routes to backend services.\\n\\n#### Docker Swarm\\n\\nOpen up SSH sessions on each of the nodes.\\n\\nInitialize the swarm on host manager:\\n\\n```bash\\nmanager:~$ sudo docker swarm init\\n\\n# output\\nSwarm initialized: current node (yfswsafnaarbf1c29n1uknx5b) is now a manager.\\nTo add a worker to this swarm, run the following command:\\n    docker swarm join --token <TOKEN> 10.184.0.4:2377\\nTo add a manager to this swarm, run \'docker swarm join-token manager\' and follow the instructions.\\n```\\n\\nThe output shows how to add a worker to the swarm using the token, IP and port (2377) to manage the cluster. If needed add a firewall to allow port 2377 on the node.\\n\\nCopy and run the command on the worker host:\\n\\n```bash\\nworker:~$ sudo docker swarm join --token <TOKEN> 10.184.0.4:2377\\n\\n# output\\nThis node joined a swarm as a worker.\\n```\\n\\nTo view cluster nodes:\\n\\n```bash\\nsudo docker node ls\\n```\\n\\n> to add another node/host as manager or worker, it\'s easy just to know IP and token, to display it run command `sudo docker swarm join-token manager` for manager or `sudo docker swarm join-token worker` for worker.\\n\\n#### Deploy Service\\n\\nIn the host manager, deploy 2 versions of the service app listening on ports 8080 and 8081 respectively:\\n\\n```bash\\nsudo docker service create --name my-web --replicas 2 -p 8080:8080 gcr.io/google-samples/hello-app:1.0\\n\\nsudo docker service create --name my-web-v2 --replicas 3 -p 8081:8080 gcr.io/google-samples/hello-app:2.0\\n```\\n\\nService app version 1 with 2 replicas while version 2 with 3 replicas. We can see that total 5 container have been distributed by running command `sudo docker ps`.\\n\\nTo test access to the service app:\\n\\n```bash\\n\\nwatch -tn1 curl -s localhost:8080\\n# output\\nHello, worlds!\\nVersion: 1.0.0\\nHostname: 1209918cadc0 # might change different hostname\\n\\nwatch -tn1 curl -s localhost:8081\\n# output\\nHello, worlds!\\nVersion: 2.0.0\\nHostname: 955c20a6e33a # might change different hostname\\n```\\n\\n#### Instance Group\\n\\n![docker_swarm_instance_group](https://res.cloudinary.com/adityacprtm/image/upload/v1660349076/production/docker_swarm_instance_group_5419648042.png)\\n\\nDocker host as a member of the *unmanaged instance group* and this instance group as the backend of the load balancer backend service. In the instance group, 2 ports are addressed for each service. Load balancing will divide requests based on URL map routes to backend services.\\n\\n#### Expose Public\\n\\nBefore pointing load balancing to the instance group, make sure ports 8080 and 8081 are allowed by the firewall node.\\n\\nCreate an HTTP load balancer by configuring the backend service to the instance group.\\n\\n![docker_swarm_cloud_load_balancer](https://res.cloudinary.com/adityacprtm/image/upload/v1660349142/production/docker_swarm_cloud_load_balancer_ccd35ea0eb.png)\\n\\n> IMHO, the health check load balancer mechanism is not optimal in this deployment. Pointing an HTTP check to the service app will perform a double check and not represent the health of the instance. I can suggest deploying a simple daemon on each node to check instance health.\\n\\nFinally, configure the DNS Server to point the domain to the Load balancer IP. We can do the test from the client VM or local:\\n\\n```bash\\nclient:~$ watch -tn1 curl -s https://swarm-hello-1.adityacprtm.dev\\n# output\\nHello, worlds!\\nVersion: 1.0.0\\nHostname: 1209918cadc0 # might change different hostname\\n\\nclient:~$ watch -tn1 curl -s https://swarm-hello-2.adityacprtm.dev\\n# output\\nHello, worlds!\\nVersion: 2.0.0\\nHostname: 955c20a6e33a # might change different hostname\\n```\\n\\nThat\'s it!","createdAt":"2022-08-13T00:08:21.628Z","updatedAt":"2022-08-25T13:14:57.519Z","publishedAt":"2022-08-25T13:14:57.516Z","thumbnail":{"id":47,"name":"gcp_swarm.jpg","alternativeText":"gcp_swarm.jpg","caption":"gcp_swarm.jpg","width":1280,"height":720,"formats":{"large":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1660349199/production/large_gcp_swarm_c6a70ed7ff.jpg","hash":"large_gcp_swarm_c6a70ed7ff","mime":"image/jpeg","name":"large_gcp_swarm.jpg","path":null,"size":27.05,"width":1000,"height":563,"provider_metadata":{"public_id":"production/large_gcp_swarm_c6a70ed7ff","resource_type":"image"}},"small":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1660349199/production/small_gcp_swarm_c6a70ed7ff.jpg","hash":"small_gcp_swarm_c6a70ed7ff","mime":"image/jpeg","name":"small_gcp_swarm.jpg","path":null,"size":10.4,"width":500,"height":281,"provider_metadata":{"public_id":"production/small_gcp_swarm_c6a70ed7ff","resource_type":"image"}},"medium":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1660349199/production/medium_gcp_swarm_c6a70ed7ff.jpg","hash":"medium_gcp_swarm_c6a70ed7ff","mime":"image/jpeg","name":"medium_gcp_swarm.jpg","path":null,"size":18.36,"width":750,"height":422,"provider_metadata":{"public_id":"production/medium_gcp_swarm_c6a70ed7ff","resource_type":"image"}},"thumbnail":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1660349198/production/thumbnail_gcp_swarm_c6a70ed7ff.jpg","hash":"thumbnail_gcp_swarm_c6a70ed7ff","mime":"image/jpeg","name":"thumbnail_gcp_swarm.jpg","path":null,"size":3.61,"width":245,"height":138,"provider_metadata":{"public_id":"production/thumbnail_gcp_swarm_c6a70ed7ff","resource_type":"image"}}},"hash":"gcp_swarm_c6a70ed7ff","ext":".jpg","mime":"image/jpeg","size":37.54,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1660349198/production/gcp_swarm_c6a70ed7ff.jpg","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/gcp_swarm_c6a70ed7ff","resource_type":"image"},"createdAt":"2022-08-13T00:06:40.147Z","updatedAt":"2022-08-13T00:06:40.147Z"},"meta":{"id":15,"title":"Docker Swarm in GCP","description":"This represents how the process I learned about Docker Swarm."},"series":null},{"id":14,"title":"Post Deployment: Monitoring and Error Tracking","slug":"post-deployment-monitoring-and-error-tracking","content":"### Status Monitoring with Cron Status Page\\n\\nFor status monitoring of applications built both frontend and backend, I use the `Status Pages` from [cron-job.org](https://cron-job.org). The way it works is quite simple, cron-job will hit the *end-point* which I have setup every 30 minutes. Of course this is not a *best practice* for *health check*, but it is sufficient for a project like this portfolio.\\n\\n![status-page-adityacprtm-dev](https://res.cloudinary.com/adityacprtm/image/upload/v1660348725/production/cron_job_status_page_81e904514f.png)\\n\\n> **Note:** my cron-job setup doesn\'t hit at certain times, my backend is hosted on heroku for free 😬.\\n\\n> **Update:** health check for backend and frontend is now done every 30 minutes 😎.\\n\\n### Error Tracking with Sentry\\n\\nWith Sentry we can find and fix errors in *production* quickly, get notifications when errors occur or reappear and many others.\\n\\nAt the time of writing this blog, luckily Strapi and Vue support using Sentry. It\'s quite easy to implement, just by adding plugins on each platform,\\n\\n#### Install Sentry on Strapi\\n\\nThe plugin I use is [strapi-plugin-sentry](https://www.npmjs.com/package/strapi-plugin-sentry).\\n\\nInstall the plugin with `npm install strapi-plugin-sentry`. Then, link Strapi to the Sentry project using the existing data source name (DSN) in the Sentry project. Then add DSN to our Strapi application `config/plugins.js`.\\n\\n```\\nmodule.exports = ({env}) => ({\\n  // ...\\n  sentry: {\\n    dsn: env (\'SENTRY_DSN\'),\\n  },\\n  // ...\\n});\\n```\\n\\n#### Install Sentry on Vue\\n\\nTo use Sentry in the Vue app, it is necessary to add the Vue SDK. Besides that I also use *Monitor Performance* so I need to add the following packages:\\n\\n```\\nnpm install --save @ sentry / vue @ sentry / tracing\\n```\\n\\nNext, configure the `main.js`:\\n\\n```\\nimport Vue from \\"\\"vue\\"\\";\\nimport * as Sentry from \\"\\"@ sentry / vue\\"\\";\\nimport {Integrations} from \\"\\"@ sentry / tracing\\"\\";\\n\\nif (process.env.NODE_ENV === \\"\\"production\\"\\") {\\n  Sentry.init ({\\n    Vue,\\n    dsn: \\"\\"SENTRY_DSN\\"\\",\\n    integrations: [new Integrations.BrowserTracing ()],\\n\\n    // We recommend adjusting this value in production, or using tracesSampler\\n    // for finer control\\n    tracesSampleRate: 1.0,\\n  })\\n}\\n```\\n\\nAnd then, on the Sentry dashboard:\\n\\n![sentry_adityacprtm_dev](https://res.cloudinary.com/adityacprtm/image/upload/v1660348839/production/sentry_adityacprtm_dev_b9f0d5f711.png)\\n\\nThat\'s it! This blog is the final part of [Building my personal portfolio with Vue.js, Strapi and MongoDB](https://adityacprtm.dev/series/building-my-personal-portfolio-with-vue-js-strapi-and-mongo-db) series. I hope to develop it again.\\n\\nThanks!","createdAt":"2022-08-13T00:02:03.363Z","updatedAt":"2022-08-25T13:14:49.931Z","publishedAt":"2022-08-25T13:14:49.927Z","thumbnail":{"id":43,"name":"monitoring_adityacprtm_dev.jpg","alternativeText":"monitoring_adityacprtm_dev.jpg","caption":"monitoring_adityacprtm_dev.jpg","width":1280,"height":720,"formats":{"large":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1660348915/production/large_monitoring_adityacprtm_dev_9a18391531.jpg","hash":"large_monitoring_adityacprtm_dev_9a18391531","mime":"image/jpeg","name":"large_monitoring_adityacprtm_dev.jpg","path":null,"size":20.18,"width":1000,"height":563,"provider_metadata":{"public_id":"production/large_monitoring_adityacprtm_dev_9a18391531","resource_type":"image"}},"small":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1660348915/production/small_monitoring_adityacprtm_dev_9a18391531.jpg","hash":"small_monitoring_adityacprtm_dev_9a18391531","mime":"image/jpeg","name":"small_monitoring_adityacprtm_dev.jpg","path":null,"size":8.38,"width":500,"height":281,"provider_metadata":{"public_id":"production/small_monitoring_adityacprtm_dev_9a18391531","resource_type":"image"}},"medium":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1660348915/production/medium_monitoring_adityacprtm_dev_9a18391531.jpg","hash":"medium_monitoring_adityacprtm_dev_9a18391531","mime":"image/jpeg","name":"medium_monitoring_adityacprtm_dev.jpg","path":null,"size":13.68,"width":750,"height":422,"provider_metadata":{"public_id":"production/medium_monitoring_adityacprtm_dev_9a18391531","resource_type":"image"}},"thumbnail":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1660348914/production/thumbnail_monitoring_adityacprtm_dev_9a18391531.jpg","hash":"thumbnail_monitoring_adityacprtm_dev_9a18391531","mime":"image/jpeg","name":"thumbnail_monitoring_adityacprtm_dev.jpg","path":null,"size":3.58,"width":245,"height":138,"provider_metadata":{"public_id":"production/thumbnail_monitoring_adityacprtm_dev_9a18391531","resource_type":"image"}}},"hash":"monitoring_adityacprtm_dev_9a18391531","ext":".jpg","mime":"image/jpeg","size":27.89,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1660348914/production/monitoring_adityacprtm_dev_9a18391531.jpg","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/monitoring_adityacprtm_dev_9a18391531","resource_type":"image"},"createdAt":"2022-08-13T00:01:56.148Z","updatedAt":"2022-08-13T00:01:56.148Z"},"meta":{"id":14,"title":"Post Deployment: Monitoring and Error Tracking","description":"For status monitoring of applications built both frontend and backend, I use the Status Pages from cron-job."},"series":{"id":2,"title":"Building my personal portfolio with Vue.js, Strapi and MongoDB","slug":"building-my-personal-portfolio-with-vue-js-strapi-and-mongo-db","createdAt":"2022-08-03T05:21:15.725Z","updatedAt":"2022-08-03T05:21:17.838Z","publishedAt":"2022-08-03T05:21:17.835Z"}},{"id":13,"title":"Database Setup: MongoDB","slug":"database-setup-mongo-db","content":"Strapi currently supports several databases, one of which is MongoDB. Apart from Mongodb, strapi also supports SQLite, PostgreSQL, MySQL and MariaDB. In this portfolio project, I will use MongoDB as a database.\\n\\n### MongoDB Setup\\n\\nDid you know, we can use the MongoDB service for free? Yup! [mongodb.com](https://www.mongodb.com/) offers MongoDB service for free, there is also a paid version. Visit the MongoDB website, create an account if you don\'t have one, then log in. Create New Cluster and follow the directions, making sure to select the option labeled `free tier`. In addition, we can also see the metric of the cluster or instance being used.\\n\\n![mongodb_dashboard](https://res.cloudinary.com/adityacprtm/image/upload/v1660348442/production/mongodb_dashboard_c1969f4a9c.png)\\n\\n### Strapi Configuration\\n\\nIf you are using the CLI for your Strapi installation, you will be asked at the beginning which database to use, select MongoDB. For complete steps, access [here](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations/databases/mongodb.html#mongodb-installation).\\n\\nHere I am using 2 different databases, each for development and production. In Strapi, I separate the config according to the environment, the goal is to avoid conflicts between environments.\\n\\n![config_environment](https://res.cloudinary.com/adityacprtm/image/upload/v1660348522/production/config_environment_118e1b6f46.png)\\n\\nThat\'s it!","createdAt":"2022-08-12T23:56:41.897Z","updatedAt":"2022-08-22T04:11:09.463Z","publishedAt":"2022-08-22T04:11:09.455Z","thumbnail":{"id":40,"name":"mongodb_adityacprtm_dev.jpg","alternativeText":"mongodb_adityacprtm_dev.jpg","caption":"mongodb_adityacprtm_dev.jpg","width":1280,"height":720,"formats":{"large":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1660348576/production/large_mongodb_adityacprtm_dev_f8672da9d7.jpg","hash":"large_mongodb_adityacprtm_dev_f8672da9d7","mime":"image/jpeg","name":"large_mongodb_adityacprtm_dev.jpg","path":null,"size":13.44,"width":1000,"height":563,"provider_metadata":{"public_id":"production/large_mongodb_adityacprtm_dev_f8672da9d7","resource_type":"image"}},"small":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1660348577/production/small_mongodb_adityacprtm_dev_f8672da9d7.jpg","hash":"small_mongodb_adityacprtm_dev_f8672da9d7","mime":"image/jpeg","name":"small_mongodb_adityacprtm_dev.jpg","path":null,"size":5.52,"width":500,"height":281,"provider_metadata":{"public_id":"production/small_mongodb_adityacprtm_dev_f8672da9d7","resource_type":"image"}},"medium":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1660348576/production/medium_mongodb_adityacprtm_dev_f8672da9d7.jpg","hash":"medium_mongodb_adityacprtm_dev_f8672da9d7","mime":"image/jpeg","name":"medium_mongodb_adityacprtm_dev.jpg","path":null,"size":8.99,"width":750,"height":422,"provider_metadata":{"public_id":"production/medium_mongodb_adityacprtm_dev_f8672da9d7","resource_type":"image"}},"thumbnail":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1660348576/production/thumbnail_mongodb_adityacprtm_dev_f8672da9d7.jpg","hash":"thumbnail_mongodb_adityacprtm_dev_f8672da9d7","mime":"image/jpeg","name":"thumbnail_mongodb_adityacprtm_dev.jpg","path":null,"size":2.37,"width":245,"height":138,"provider_metadata":{"public_id":"production/thumbnail_mongodb_adityacprtm_dev_f8672da9d7","resource_type":"image"}}},"hash":"mongodb_adityacprtm_dev_f8672da9d7","ext":".jpg","mime":"image/jpeg","size":18.46,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1660348575/production/mongodb_adityacprtm_dev_f8672da9d7.jpg","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/mongodb_adityacprtm_dev_f8672da9d7","resource_type":"image"},"createdAt":"2022-08-12T23:56:17.671Z","updatedAt":"2022-08-12T23:56:17.671Z"},"meta":{"id":13,"title":"Database Setup: MongoDB","description":"Strapi currently supports several databases, one of which is MongoDB. Apart from Mongodb, strapi also supports SQLite, PostgreSQL, MySQL and MariaDB. In this portfolio project, I will use MongoDB as a database."},"series":{"id":2,"title":"Building my personal portfolio with Vue.js, Strapi and MongoDB","slug":"building-my-personal-portfolio-with-vue-js-strapi-and-mongo-db","createdAt":"2022-08-03T05:21:15.725Z","updatedAt":"2022-08-03T05:21:17.838Z","publishedAt":"2022-08-03T05:21:17.835Z"}},{"id":12,"title":"Vue Setup: Design, Plugins and Deploy","slug":"vue-setup-design-plugins-and-deploy","content":"### Design\\n\\nThe display I use is the same as before, when using the Laravel Blade. Grab the code, convert it, adjust the environment from Vuejs. There are not many changes, only a little in the `.css` section and a little reformatter in the `.js` section, the rest is the same. I removed some plugins because Vue can handle them. There isn\'t much to share in this section.\\n\\n### Vue Plugins\\n\\nApart from the built-in plugins from Vue, I added a few, like `vue-clamp`, `vue-content-loader`, `vue-disqus`, `vue-infinite-loading`, `vue-markdown-render`, `vue-meta`. You can copy and paste the plugin in the search engine to find out what it is used for and how to use it, it\'s all very easy!\\n\\n![example of vue-content-loader plugins](https://res.cloudinary.com/adityacprtm/image/upload/v1660348266/production/adityacprtm_dev_gif_95f776982f.gif)\\n\\n### Deploy\\n\\nAs I mentioned [here](https://adityacprtm.dev/blog/menentuk-tech-stack-frontend), I deployed the frontend using [Netlify](https://www.netlify.com/). There isn\'t much to setup, we just need to hook up our Git project with Netlify, after that it will be handled by Netlify. For example, they will build a preview when there is a pull request and also a push event to the branch, everything can be set.\\n\\nI used a bit of config using `netlify.toml`. It doesn\'t contain much just to show the root directory for publish, headers cors, and also redirect all to index.html because this is a static Single Page Application (SPA) website.\\n\\n```\\n[build]\\npublish = \\"\\"dist\\"\\"\\n\\n[[headers]]\\n  # Define which paths this specific [[headers]] block will cover.\\n  for = \\"\\"/ *\\"\\"\\n    [headers.values]\\n    Access-Control-Allow-Origin = \\"\\"*\\"\\"\\n\\n[[redirects]]\\nfrom = \\"\\"/ *\\"\\"\\nto = \\"\\"/index.html\\"\\"\\nstatus = 200\\n```\\n\\nThat\'s it!","createdAt":"2022-08-12T23:53:01.795Z","updatedAt":"2022-08-19T09:58:24.608Z","publishedAt":"2022-08-19T09:58:24.606Z","thumbnail":{"id":33,"name":"vuejs_adityacprtm_dev.jpg","alternativeText":"vuejs_adityacprtm_dev.jpg","caption":"vuejs_adityacprtm_dev.jpg","width":1200,"height":630,"formats":{"large":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659917703/production/large_vuejs_adityacprtm_dev_234f98d764.jpg","hash":"large_vuejs_adityacprtm_dev_234f98d764","mime":"image/jpeg","name":"large_vuejs_adityacprtm_dev.jpg","path":null,"size":13.13,"width":1000,"height":525,"provider_metadata":{"public_id":"production/large_vuejs_adityacprtm_dev_234f98d764","resource_type":"image"}},"small":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659917704/production/small_vuejs_adityacprtm_dev_234f98d764.jpg","hash":"small_vuejs_adityacprtm_dev_234f98d764","mime":"image/jpeg","name":"small_vuejs_adityacprtm_dev.jpg","path":null,"size":5.25,"width":500,"height":263,"provider_metadata":{"public_id":"production/small_vuejs_adityacprtm_dev_234f98d764","resource_type":"image"}},"medium":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659917703/production/medium_vuejs_adityacprtm_dev_234f98d764.jpg","hash":"medium_vuejs_adityacprtm_dev_234f98d764","mime":"image/jpeg","name":"medium_vuejs_adityacprtm_dev.jpg","path":null,"size":9.12,"width":750,"height":394,"provider_metadata":{"public_id":"production/medium_vuejs_adityacprtm_dev_234f98d764","resource_type":"image"}},"thumbnail":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659917703/production/thumbnail_vuejs_adityacprtm_dev_234f98d764.jpg","hash":"thumbnail_vuejs_adityacprtm_dev_234f98d764","mime":"image/jpeg","name":"thumbnail_vuejs_adityacprtm_dev.jpg","path":null,"size":2.27,"width":245,"height":129,"provider_metadata":{"public_id":"production/thumbnail_vuejs_adityacprtm_dev_234f98d764","resource_type":"image"}}},"hash":"vuejs_adityacprtm_dev_234f98d764","ext":".jpg","mime":"image/jpeg","size":16.47,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659917702/production/vuejs_adityacprtm_dev_234f98d764.jpg","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/vuejs_adityacprtm_dev_234f98d764","resource_type":"image"},"createdAt":"2022-08-08T00:15:04.585Z","updatedAt":"2022-08-08T00:15:04.585Z"},"meta":{"id":12,"title":"Vue Setup: Design, Plugins dan Deploy","description":"How I setup Design, Plugin and Deploy."},"series":{"id":2,"title":"Building my personal portfolio with Vue.js, Strapi and MongoDB","slug":"building-my-personal-portfolio-with-vue-js-strapi-and-mongo-db","createdAt":"2022-08-03T05:21:15.725Z","updatedAt":"2022-08-03T05:21:17.838Z","publishedAt":"2022-08-03T05:21:17.835Z"}},{"id":11,"title":"Strapi Setup: Customize Response API","slug":"strapi-setup-customize-response-api","content":"Here I share how to customize the response from the API, by default the responses given include `id, _id, __v, createdAt, updatedAt, published_at`. But there are times when I don\'t use these fields on the frontend.\\n\\n### Hides the Default Response Fields\\n\\nTo hide unused fields, in this case `_id, __v, createdAt, updatedAt, published_at`, simply change the values as shown below:\\n\\nPath - `api -> <apiName> -> <apiName>.settings.json`\\n\\n```\\n{\\n  ...\\n  \\"\\"options\\"\\": {\\n    \\"\\"increments\\"\\": true,\\n    \\"\\"timestamps\\"\\": true,\\n    \\"\\"draftAndPublish\\"\\": false,\\n    \\"\\"privateAttributes\\"\\": [\\n      \\"\\"_id\\"\\",\\n      \\"\\"createdAt\\"\\",\\n      \\"\\"updatedAt\\"\\",\\n      \\"\\"__v\\"\\"\\n    ]\\n  },\\n  ...\\n}\\n```\\n\\n### Manipulating Response Data\\n\\nIf you want to manipulate API response data, you can do this in the `controllers` section of each API. For example I want to accept the number of `blogs` associated with `series` when making a find series request to the API.\\n\\nPath - `. / Api / series / controller / Series.js`\\n\\n```\\nconst { sanitizeEntity } = require(\\"\\"strapi-utils\\"\\");\\n\\nmodule.exports = {\\n  // Find\\n  async find(ctx) {\\n    let entities;\\n    if (ctx.query._q) {\\n      entities = await strapi.services.serie.search(ctx.query);\\n    } else {\\n      entities = await strapi.services.serie.find(ctx.query);\\n    }\\n\\n    return entities.map((entity) => {\\n      const serie = sanitizeEntity(entity, {\\n        model: strapi.models.serie,\\n      });\\n\\n      if (serie.blogs) {\\n        serie.countBlogs = serie.blogs.length;\\n      }\\n\\n      return serie;\\n    });\\n  }\\n};\\n```\\n\\nThat\'s it, a little way of customizing the API response data.","createdAt":"2022-08-12T23:49:26.986Z","updatedAt":"2022-08-19T09:58:15.461Z","publishedAt":"2022-08-19T09:58:15.457Z","thumbnail":{"id":34,"name":"strapi_adityacprtm_dev.jpg","alternativeText":"strapi_adityacprtm_dev.jpg","caption":"strapi_adityacprtm_dev.jpg","width":1200,"height":630,"formats":{"large":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659917813/production/large_strapi_adityacprtm_dev_154864850a.jpg","hash":"large_strapi_adityacprtm_dev_154864850a","mime":"image/jpeg","name":"large_strapi_adityacprtm_dev.jpg","path":null,"size":13.43,"width":1000,"height":525,"provider_metadata":{"public_id":"production/large_strapi_adityacprtm_dev_154864850a","resource_type":"image"}},"small":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659917813/production/small_strapi_adityacprtm_dev_154864850a.jpg","hash":"small_strapi_adityacprtm_dev_154864850a","mime":"image/jpeg","name":"small_strapi_adityacprtm_dev.jpg","path":null,"size":5.59,"width":500,"height":263,"provider_metadata":{"public_id":"production/small_strapi_adityacprtm_dev_154864850a","resource_type":"image"}},"medium":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659917813/production/medium_strapi_adityacprtm_dev_154864850a.jpg","hash":"medium_strapi_adityacprtm_dev_154864850a","mime":"image/jpeg","name":"medium_strapi_adityacprtm_dev.jpg","path":null,"size":9.4,"width":750,"height":394,"provider_metadata":{"public_id":"production/medium_strapi_adityacprtm_dev_154864850a","resource_type":"image"}},"thumbnail":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659917812/production/thumbnail_strapi_adityacprtm_dev_154864850a.jpg","hash":"thumbnail_strapi_adityacprtm_dev_154864850a","mime":"image/jpeg","name":"thumbnail_strapi_adityacprtm_dev.jpg","path":null,"size":2.21,"width":245,"height":129,"provider_metadata":{"public_id":"production/thumbnail_strapi_adityacprtm_dev_154864850a","resource_type":"image"}}},"hash":"strapi_adityacprtm_dev_154864850a","ext":".jpg","mime":"image/jpeg","size":16.75,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659917812/production/strapi_adityacprtm_dev_154864850a.jpg","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/strapi_adityacprtm_dev_154864850a","resource_type":"image"},"createdAt":"2022-08-08T00:16:54.196Z","updatedAt":"2022-08-08T00:16:54.196Z"},"meta":{"id":11,"title":"Strapi Setup: Customize Response API","description":"Here I share how to customize the response from the API, by default the responses given. But there are times when I don\'t use these fields on the frontend."},"series":{"id":2,"title":"Building my personal portfolio with Vue.js, Strapi and MongoDB","slug":"building-my-personal-portfolio-with-vue-js-strapi-and-mongo-db","createdAt":"2022-08-03T05:21:15.725Z","updatedAt":"2022-08-03T05:21:17.838Z","publishedAt":"2022-08-03T05:21:17.835Z"}},{"id":10,"title":"Strapi Setup: Schema, Plugins dan Deploy","slug":"strapi-setup-schema-plugins-dan-deploy","content":"Here I share some things about the schema, plugins and what I do to configure and deploy the Strapi application. Mostly I follow according to [documentation](https://strapi.io/documentation/developer-docs/latest/getting-started/introduction.html) from Strapi, but there\'s no harm in sharing.\\n\\n### Plugins\\n\\nThe first time using Strapi, it\'s very easy, without configuration we can use it. Many plugins that are often used are already installed in it such as Content Manager, API Documentation Generator, Media Library and others. Apart from that, I need email and storage of media assets such as images, additional plugins that I use might be a consideration, `strapi-provider-email-smtp` for SMTP emails and `strapi-provider-upload-cloudinary` for media storage.\\n\\n### Schema\\n\\nThe *fetch data* scheme that I use is divided into 2 parts, namely data for pages or additional data. Yes, maybe a little strange, but its work ��. The page data contains meta data such as title, description and social preview. Meanwhile, additional data means data that has many objects such as articles and others.\\n\\n![strapi v3](https://res.cloudinary.com/adityacprtm/image/upload/v1659918038/production/strapi_home_v3_f823cb304e.png)\\n\\n### Deploy\\n\\nSince Strapi is an Open Source project, I can deploy anywhere. Of course my main choice is [Heroku](https://heroku.com/), it\'s Free 脂. Behind the word free, there must be limitations, yes, heroku limits the running hours of the applications we deploy there. Also, apps that don\'t receive any traffic within 30 minutes will *sleep*, but that doesn\'t really matter to me.\\n\\nA few tips so that the application we are deploying is always running is to use `cron jobs` to hit the `end point` of our application. However, this will consume the ration of running hours in a month. This is the Execution schedule which can be considered as `30,59 7-23 * * *`, the cron will hit the `end point` every 30th and 59th minutes at 7 to 23 hours.\\n\\n![Crontab](https://res.cloudinary.com/adityacprtm/image/upload/v1659918109/production/Crontab_guru_The_cron_schedule_expression_editor_e96d170cbd.png)\\n\\nThat\'s it!","createdAt":"2022-08-08T00:23:03.680Z","updatedAt":"2022-08-17T04:51:28.850Z","publishedAt":"2022-08-17T04:51:28.846Z","thumbnail":{"id":34,"name":"strapi_adityacprtm_dev.jpg","alternativeText":"strapi_adityacprtm_dev.jpg","caption":"strapi_adityacprtm_dev.jpg","width":1200,"height":630,"formats":{"large":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659917813/production/large_strapi_adityacprtm_dev_154864850a.jpg","hash":"large_strapi_adityacprtm_dev_154864850a","mime":"image/jpeg","name":"large_strapi_adityacprtm_dev.jpg","path":null,"size":13.43,"width":1000,"height":525,"provider_metadata":{"public_id":"production/large_strapi_adityacprtm_dev_154864850a","resource_type":"image"}},"small":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659917813/production/small_strapi_adityacprtm_dev_154864850a.jpg","hash":"small_strapi_adityacprtm_dev_154864850a","mime":"image/jpeg","name":"small_strapi_adityacprtm_dev.jpg","path":null,"size":5.59,"width":500,"height":263,"provider_metadata":{"public_id":"production/small_strapi_adityacprtm_dev_154864850a","resource_type":"image"}},"medium":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659917813/production/medium_strapi_adityacprtm_dev_154864850a.jpg","hash":"medium_strapi_adityacprtm_dev_154864850a","mime":"image/jpeg","name":"medium_strapi_adityacprtm_dev.jpg","path":null,"size":9.4,"width":750,"height":394,"provider_metadata":{"public_id":"production/medium_strapi_adityacprtm_dev_154864850a","resource_type":"image"}},"thumbnail":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659917812/production/thumbnail_strapi_adityacprtm_dev_154864850a.jpg","hash":"thumbnail_strapi_adityacprtm_dev_154864850a","mime":"image/jpeg","name":"thumbnail_strapi_adityacprtm_dev.jpg","path":null,"size":2.21,"width":245,"height":129,"provider_metadata":{"public_id":"production/thumbnail_strapi_adityacprtm_dev_154864850a","resource_type":"image"}}},"hash":"strapi_adityacprtm_dev_154864850a","ext":".jpg","mime":"image/jpeg","size":16.75,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659917812/production/strapi_adityacprtm_dev_154864850a.jpg","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/strapi_adityacprtm_dev_154864850a","resource_type":"image"},"createdAt":"2022-08-08T00:16:54.196Z","updatedAt":"2022-08-08T00:16:54.196Z"},"meta":{"id":10,"title":"Strapi Setup: Schema, Plugins dan Deploy","description":"Here I share some things about the schema, plugins and what I do to configure and deploy the Strapi application. Mostly I follow according to documentation from Strapi, but there\'s no harm in sharing."},"series":{"id":2,"title":"Building my personal portfolio with Vue.js, Strapi and MongoDB","slug":"building-my-personal-portfolio-with-vue-js-strapi-and-mongo-db","createdAt":"2022-08-03T05:21:15.725Z","updatedAt":"2022-08-03T05:21:17.838Z","publishedAt":"2022-08-03T05:21:17.835Z"}},{"id":9,"title":"Determining the Tech Stack: Backend","slug":"determining-the-tech-stack-backend","content":"For the backend, of course I will use the Headless Content Management System (CMS). Prior to this, I already had a CMS that I built using Laravel. But the CMS is a traditional CMS like wordpress, joomla and others where the backend and frontend are inseparable from each other. This means that the CMS can only be used or consumed for the same frontend, in this case Laravel and Blade.\\n\\nOf course, the CMS can be changed as an API provider, but there will be a lot of configuration and I don\'t want that. So, I decided to use Headless CMS, and what I chose was [Strapi](https://strapi.io/). Why Strapi?\\n\\n1. Open-source CMS\\n2. NodeJs\\n3. Strapi\'s Documentation, Plugins and API\\n\\n![Strapi.io](https://raw.githubusercontent.com/strapi/strapi/master/public/assets/administration_panel.png)\\n\\nIn a way, even *no-coders* can use and run Strapi. Minimal configuration and easy to use, especially for building REST APIs with many features, such as image optimization.\\n\\nVisit the documentation from Strapi for more details.","createdAt":"2022-08-08T00:18:00.501Z","updatedAt":"2022-08-16T13:56:14.326Z","publishedAt":"2022-08-16T13:56:14.323Z","thumbnail":{"id":34,"name":"strapi_adityacprtm_dev.jpg","alternativeText":"strapi_adityacprtm_dev.jpg","caption":"strapi_adityacprtm_dev.jpg","width":1200,"height":630,"formats":{"large":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659917813/production/large_strapi_adityacprtm_dev_154864850a.jpg","hash":"large_strapi_adityacprtm_dev_154864850a","mime":"image/jpeg","name":"large_strapi_adityacprtm_dev.jpg","path":null,"size":13.43,"width":1000,"height":525,"provider_metadata":{"public_id":"production/large_strapi_adityacprtm_dev_154864850a","resource_type":"image"}},"small":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659917813/production/small_strapi_adityacprtm_dev_154864850a.jpg","hash":"small_strapi_adityacprtm_dev_154864850a","mime":"image/jpeg","name":"small_strapi_adityacprtm_dev.jpg","path":null,"size":5.59,"width":500,"height":263,"provider_metadata":{"public_id":"production/small_strapi_adityacprtm_dev_154864850a","resource_type":"image"}},"medium":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659917813/production/medium_strapi_adityacprtm_dev_154864850a.jpg","hash":"medium_strapi_adityacprtm_dev_154864850a","mime":"image/jpeg","name":"medium_strapi_adityacprtm_dev.jpg","path":null,"size":9.4,"width":750,"height":394,"provider_metadata":{"public_id":"production/medium_strapi_adityacprtm_dev_154864850a","resource_type":"image"}},"thumbnail":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659917812/production/thumbnail_strapi_adityacprtm_dev_154864850a.jpg","hash":"thumbnail_strapi_adityacprtm_dev_154864850a","mime":"image/jpeg","name":"thumbnail_strapi_adityacprtm_dev.jpg","path":null,"size":2.21,"width":245,"height":129,"provider_metadata":{"public_id":"production/thumbnail_strapi_adityacprtm_dev_154864850a","resource_type":"image"}}},"hash":"strapi_adityacprtm_dev_154864850a","ext":".jpg","mime":"image/jpeg","size":16.75,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659917812/production/strapi_adityacprtm_dev_154864850a.jpg","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/strapi_adityacprtm_dev_154864850a","resource_type":"image"},"createdAt":"2022-08-08T00:16:54.196Z","updatedAt":"2022-08-08T00:16:54.196Z"},"meta":{"id":9,"title":"Determining the Tech Stack: Backend","description":"I will use the Headless Content Management System (CMS). I decided to use Headless CMS, and what I chose was Strapi."},"series":{"id":2,"title":"Building my personal portfolio with Vue.js, Strapi and MongoDB","slug":"building-my-personal-portfolio-with-vue-js-strapi-and-mongo-db","createdAt":"2022-08-03T05:21:15.725Z","updatedAt":"2022-08-03T05:21:17.838Z","publishedAt":"2022-08-03T05:21:17.835Z"}},{"id":8,"title":"Determining the Tech Stack: Front End","slug":"determining-the-tech-stack-front-end","content":"This is the second part of my series on building a personal website portfolio. In this blog, I will discuss the frontend stack. The frontend is my weakest part, *lacking of knowledge* about the frontend. So, I decided to use templates and frameworks to make things easier.\\n\\n### Templates / Frameworks\\n\\nWhen I started exploring about the frontend, I thought I would use [Nuxt.js](https://nuxtjs.org/) because previous projects like [link.adityacprtm.dev](https://link.adityacprtm.dev) were built using [Vue.js](https://vuejs.org/) which is the basis of Nuxt.\\n\\nAfter a few hours of looking at documentation, samples, plugins and trying to use Nuxt.js, I decided against using it. I know Nuxt is the *next generation* of Vue, but I\'m having a hard time using it and want to finish this portfolio quickly.\\n\\nIn the end I decided to use Vue because of its easy usage and documentation for me who is *lacking of knowledge about frontend*.\\n\\n### Design / Style\\n\\nI thought the styles and designs from the previous portfolio were still cool and up-to-date, so I decided not to change the styles. Since I previously used blades from Laravel, I need to convert them a bit into my Vue.js project. Easy enough, and enough to reduce the use of js plugins and be replaced with *vue logic*.\\n\\nAt the end, for the frontend I don\'t use server side rendering (SSR) and use the API to fetch data.\\n\\n### Deploy\\n\\nSince it is client side rendering, I only need static file hosting. There are 2 options that I got, namely [Netlify](https://www.netlify.com/) and [Vercel](https://vercel.com/). Both of them provide a good experience for me personally and both have **FREE** options.\\n\\nI decided to use Netlify. Why? just like vercel, netlify also provides continuous integration and deployment pipeline. However, I focused on the Prerendering feature which is very useful for this portfolio because of client side rendering, of course.\\n\\nThats it the frontend, next blog will define the backend part.","createdAt":"2022-08-08T00:15:55.147Z","updatedAt":"2022-08-12T23:47:08.418Z","publishedAt":"2022-08-12T23:47:08.415Z","thumbnail":{"id":33,"name":"vuejs_adityacprtm_dev.jpg","alternativeText":"vuejs_adityacprtm_dev.jpg","caption":"vuejs_adityacprtm_dev.jpg","width":1200,"height":630,"formats":{"large":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659917703/production/large_vuejs_adityacprtm_dev_234f98d764.jpg","hash":"large_vuejs_adityacprtm_dev_234f98d764","mime":"image/jpeg","name":"large_vuejs_adityacprtm_dev.jpg","path":null,"size":13.13,"width":1000,"height":525,"provider_metadata":{"public_id":"production/large_vuejs_adityacprtm_dev_234f98d764","resource_type":"image"}},"small":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659917704/production/small_vuejs_adityacprtm_dev_234f98d764.jpg","hash":"small_vuejs_adityacprtm_dev_234f98d764","mime":"image/jpeg","name":"small_vuejs_adityacprtm_dev.jpg","path":null,"size":5.25,"width":500,"height":263,"provider_metadata":{"public_id":"production/small_vuejs_adityacprtm_dev_234f98d764","resource_type":"image"}},"medium":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659917703/production/medium_vuejs_adityacprtm_dev_234f98d764.jpg","hash":"medium_vuejs_adityacprtm_dev_234f98d764","mime":"image/jpeg","name":"medium_vuejs_adityacprtm_dev.jpg","path":null,"size":9.12,"width":750,"height":394,"provider_metadata":{"public_id":"production/medium_vuejs_adityacprtm_dev_234f98d764","resource_type":"image"}},"thumbnail":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659917703/production/thumbnail_vuejs_adityacprtm_dev_234f98d764.jpg","hash":"thumbnail_vuejs_adityacprtm_dev_234f98d764","mime":"image/jpeg","name":"thumbnail_vuejs_adityacprtm_dev.jpg","path":null,"size":2.27,"width":245,"height":129,"provider_metadata":{"public_id":"production/thumbnail_vuejs_adityacprtm_dev_234f98d764","resource_type":"image"}}},"hash":"vuejs_adityacprtm_dev_234f98d764","ext":".jpg","mime":"image/jpeg","size":16.47,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659917702/production/vuejs_adityacprtm_dev_234f98d764.jpg","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/vuejs_adityacprtm_dev_234f98d764","resource_type":"image"},"createdAt":"2022-08-08T00:15:04.585Z","updatedAt":"2022-08-08T00:15:04.585Z"},"meta":{"id":8,"title":"Determining the Tech Stack: Front End","description":"This is the second part of my series on building a personal website portfolio. In this blog, I will discuss the frontend stack."},"series":{"id":2,"title":"Building my personal portfolio with Vue.js, Strapi and MongoDB","slug":"building-my-personal-portfolio-with-vue-js-strapi-and-mongo-db","createdAt":"2022-08-03T05:21:15.725Z","updatedAt":"2022-08-03T05:21:17.838Z","publishedAt":"2022-08-03T05:21:17.835Z"}},{"id":7,"title":"Little Background","slug":"little-background","content":"Previously, the personal website I built was a static website, *hardcode everywhere*, look how cute the website is, for [version1](https://legacy-one.adityacprtm.dev) and for [version2](https://legacy-two.adityacprtm.dev).\\n\\n![cute](https://media.giphy.com/media/3oEjI4sFlp73fvEYgw/giphy.gif)\\n\\nAs time went by, I realized that it was quite troublesome if there was an update in it. So, I decided to create a *Content Management System* (CMS), and chose to use Laravel, even for the Frontend also use Laravel (blade).\\n\\nTo build it, it costs quite a lot to pay for a custom domain and server in the form of shared hosting.\\n\\nRealizing that the bill for personal websites was quite large, I decided to quit after 1 year using shared hosting. But I didn\'t want my portfolio or personal website to stop, so I did some research to keep costs down on my portfolio.\\n\\nThere are several *Tech Stack* options that I got to build a portfolio inexpensively for both the frontend, backend and database. This part will be in the next part.\\n\\n![work hard](https://media.giphy.com/media/mGPYIgOrNEGIqtd8FP/giphy.gif)\\n\\nSince my portfolio will showcase a wide range of skills and interests, I decided to document the process of building my portfolio on a personal website and what I do best.\\n\\nThis is the first one!","createdAt":"2022-08-08T00:13:25.706Z","updatedAt":"2022-08-12T16:08:09.470Z","publishedAt":"2022-08-12T16:08:09.466Z","thumbnail":{"id":32,"name":"social_image.jpg","alternativeText":"social_image.jpg","caption":"social_image.jpg","width":1200,"height":630,"formats":{"large":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659917506/production/large_social_image_fdedb941c8.jpg","hash":"large_social_image_fdedb941c8","mime":"image/jpeg","name":"large_social_image.jpg","path":null,"size":11.72,"width":1000,"height":525,"provider_metadata":{"public_id":"production/large_social_image_fdedb941c8","resource_type":"image"}},"small":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659917506/production/small_social_image_fdedb941c8.jpg","hash":"small_social_image_fdedb941c8","mime":"image/jpeg","name":"small_social_image.jpg","path":null,"size":4.52,"width":500,"height":263,"provider_metadata":{"public_id":"production/small_social_image_fdedb941c8","resource_type":"image"}},"medium":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659917506/production/medium_social_image_fdedb941c8.jpg","hash":"medium_social_image_fdedb941c8","mime":"image/jpeg","name":"medium_social_image.jpg","path":null,"size":8.08,"width":750,"height":394,"provider_metadata":{"public_id":"production/medium_social_image_fdedb941c8","resource_type":"image"}},"thumbnail":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659917505/production/thumbnail_social_image_fdedb941c8.jpg","hash":"thumbnail_social_image_fdedb941c8","mime":"image/jpeg","name":"thumbnail_social_image.jpg","path":null,"size":1.81,"width":245,"height":129,"provider_metadata":{"public_id":"production/thumbnail_social_image_fdedb941c8","resource_type":"image"}}},"hash":"social_image_fdedb941c8","ext":".jpg","mime":"image/jpeg","size":15.55,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659917505/production/social_image_fdedb941c8.jpg","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/social_image_fdedb941c8","resource_type":"image"},"createdAt":"2022-08-08T00:11:47.147Z","updatedAt":"2022-08-08T00:11:47.147Z"},"meta":{"id":7,"title":"Little Background","description":"A little background from my website portfolio."},"series":{"id":2,"title":"Building my personal portfolio with Vue.js, Strapi and MongoDB","slug":"building-my-personal-portfolio-with-vue-js-strapi-and-mongo-db","createdAt":"2022-08-03T05:21:15.725Z","updatedAt":"2022-08-03T05:21:17.838Z","publishedAt":"2022-08-03T05:21:17.835Z"}},{"id":6,"title":"How to Create a Laravel Tagging System","slug":"how-to-create-a-laravel-tagging-system","content":"After previously creating a [Subscription System](https://adityacprtm.dev/blog/cara-membuat-newsletter-subscribers-dengan-laravel), this is how we can create or manage an easy and free tag system with Laravel on this site before switch to Wordpress. This tagging system is needed when creating a site that contains articles or blogs. If you write a post for technology, you can create tags such as the name of the technology, type of technology, technology features, etc.\\n\\nIn this post, I will show you how to create a Laravel Tagging System using the package from [rtconner/laravel-tagging](https://github.com/rtconner/laravel-tagging). Here we assume we have a laravel project and then installed the laravel-tagging package.\\n\\n### Install Package Laravel Tagging System\\n\\nIn this step, we need to install the `rtconner/laravel-tagging` package using `composer` by running this command:\\n\\n```\\ncomposer require rtconner / laravel-tagging\\n```\\n\\n### Publish and run the migration\\n\\nThe package will autodiscover when updating composer. Then publish `tagging.php` and run the database migration with this command:\\n\\n```\\nphp artisan vendor:publish --provider=\\"\\"Conner\\\\Tagging\\\\Providers\\\\TaggingServiceProvider\\"\\"\\nphp artisan migrate\\n```\\n\\n### Setup Models\\n\\nThen prepare the models that will be used, assume models `Post.php`, by adding this line `use \\\\Conner\\\\Tagging\\\\Taggable;` into the class.\\n\\n```\\n{\\n    use \\\\Conner\\\\Tagging\\\\Taggable;\\n    protected $fillable = [\'title\',\'tags\',\'description\'];\\n}\\n```\\n\\n### Controller Setup\\n\\nIn the controller that will be used, assume `PostController.php`, in the store data section add a line to enter the tag data into the database. Adjust the code below:\\n\\n```\\n{\\n    public function store(Request $request)\\n    {\\n        $this->validate($request, [\\n            \'title\' => \'required\',\\n            \'description\' => \'required\',\\n            \'tags\' => \'required\',\\n        ]);\\n\\n        $input = $request->all();\\n        $tags = explode(\\"\\", \\"\\", $input[\'tags\']); // pecahkan string ke array tags\\n        $post = Post::create($input); // data post ke db\\n        $post->tag($tags); // data array tags ke db\\n\\n        return back()->with(\'success\',\'Post created successfully.\');\\n    }\\n}\\n```\\n\\n### Setup View\\n\\nThe layout can be customized, or you can use Bootstrap, JQuery and [Bootstrap Tags Input](https://bootstrap-tagsinput.github.io/bootstrap-tagsinput/examples/). To use Bootstrap Tags Input just add `data-role=\\"\\"tagsinput\\"\\"` to the input field which will automatically convert it to the tag input field. Customize the example below:\\n\\n```\\n<form method=\\"\\"POST\\"\\" action=\\"\\"{{ route(\'posts.store\') }}\\"\\">\\n    ...\\n    <div class=\\"\\"form-group\\"\\">\\n        <label>Tags : <span class=\\"\\"text-danger\\"\\">*</span></label>\\n        <br>\\n        <input type=\\"\\"text\\"\\" data-role=\\"\\"tagsinput\\"\\" name=\\"\\"tags\\"\\" class=\\"\\"form-control tags\\"\\">\\n        <br>\\n        @if ($errors->has(\'tags\'))\\n            <span class=\\"\\"text-danger\\"\\">{{ $errors->first(\'tags\') }}</span>\\n        @endif\\n    </div>\\n    ...\\n</form>\\n```\\n\\nTo display the tag that has been entered together with the post, you can run the following command:\\n\\n```\\n@foreach($posts as $post)\\n    ...\\n    <div class=\\"\\"post-tags mb-4\\"\\">\\n        <strong>Tags : </strong>\\n        @foreach($post->tags as $tag)\\n            <span class=\\"\\"badge badge-info\\"\\">{{$tag->name}}</span>\\n        @endforeach\\n    </div>\\n    ...\\n@endforeach\\n```\\n\\n---\\n\\nThat\'s it! The tag system using laravel is ready to use. For more information or other usage examples of this package, see the github [rtconner/laravel-tagging](https://github.com/rtconner/laravel-tagging) page.","createdAt":"2022-08-08T00:10:13.711Z","updatedAt":"2022-08-10T14:57:47.994Z","publishedAt":"2022-08-10T14:57:47.990Z","thumbnail":{"id":31,"name":"Blog_Tag_x_Laravel.jpg","alternativeText":"Blog_Tag_x_Laravel.jpg","caption":"Blog_Tag_x_Laravel.jpg","width":1280,"height":720,"formats":{"large":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659917333/production/large_Blog_Tag_x_Laravel_92ff84958d.jpg","hash":"large_Blog_Tag_x_Laravel_92ff84958d","mime":"image/jpeg","name":"large_Blog_Tag_x_Laravel.jpg","path":null,"size":28.04,"width":1000,"height":563,"provider_metadata":{"public_id":"production/large_Blog_Tag_x_Laravel_92ff84958d","resource_type":"image"}},"small":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659917334/production/small_Blog_Tag_x_Laravel_92ff84958d.jpg","hash":"small_Blog_Tag_x_Laravel_92ff84958d","mime":"image/jpeg","name":"small_Blog_Tag_x_Laravel.jpg","path":null,"size":11.56,"width":500,"height":281,"provider_metadata":{"public_id":"production/small_Blog_Tag_x_Laravel_92ff84958d","resource_type":"image"}},"medium":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659917333/production/medium_Blog_Tag_x_Laravel_92ff84958d.jpg","hash":"medium_Blog_Tag_x_Laravel_92ff84958d","mime":"image/jpeg","name":"medium_Blog_Tag_x_Laravel.jpg","path":null,"size":19.3,"width":750,"height":422,"provider_metadata":{"public_id":"production/medium_Blog_Tag_x_Laravel_92ff84958d","resource_type":"image"}},"thumbnail":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659917333/production/thumbnail_Blog_Tag_x_Laravel_92ff84958d.jpg","hash":"thumbnail_Blog_Tag_x_Laravel_92ff84958d","mime":"image/jpeg","name":"thumbnail_Blog_Tag_x_Laravel.jpg","path":null,"size":4.68,"width":245,"height":138,"provider_metadata":{"public_id":"production/thumbnail_Blog_Tag_x_Laravel_92ff84958d","resource_type":"image"}}},"hash":"Blog_Tag_x_Laravel_92ff84958d","ext":".jpg","mime":"image/jpeg","size":37.51,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659917332/production/Blog_Tag_x_Laravel_92ff84958d.jpg","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/Blog_Tag_x_Laravel_92ff84958d","resource_type":"image"},"createdAt":"2022-08-08T00:08:54.602Z","updatedAt":"2022-08-08T00:08:54.602Z"},"meta":{"id":6,"title":"How to Create a Laravel Tagging System","description":"In this post, I will show you how to create a Laravel Tagging System using the package from rtconner/laravel-tagging."},"series":{"id":1,"title":"Packages that I use to build my Personal Blog with Laravel","slug":"packages-that-i-use-to-build-my-personal-blog-with-laravel","createdAt":"2022-08-03T05:20:57.469Z","updatedAt":"2022-08-03T05:21:05.608Z","publishedAt":"2022-08-03T05:21:05.605Z"}},{"id":5,"title":"How to Create a Newsletter Subscribers with Laravel","slug":"how-to-create-a-newsletter-subscribers-with-laravel","content":"This is my way of how to create or manage an easy and free internal Subscribers Newsletter with Laravel to send email notifications to the subscriber list about new content on the blog.adityacprtm.com site before switching to wordpress.\\n\\n> **update**: the blog switches to [adityacprtm.dev/blog](adityacprtm.dev/blog) or [dev.to/adityacprtm](https://dev.to/adityacprtm)\\n\\nAnother solution is to use a Newsletter Subscription provider such as MailChimp. But if you don\'t want to use a third party to store your Subscriber data, you can create your own with laravel using the package from [mydnic/laravel-subscribers](https://github.com/mydnic/laravel-subscribers).\\n\\n### Installation\\n\\nIt is assumed that you have a laravel project ready.\\n\\nWe can use Composer to install, the packages will be installed automatically\\n\\n```\\ncomposer require mydnic/laravel-subscribers\\n```\\n\\nThen do a publish migration:\\n\\n```\\nphp artisan vendor:publish --provider=\\"\\"Mydnic\\\\Subscribers\\\\SubscribersServiceProvider\\"\\" --tag=\\"\\"subscribers-migrations\\"\\"\\n```\\n\\n### How to Use Newsletter Subscribers\\n\\nWe only need to create a form, then customize it:\\n\\n```\\n<form action=\\"\\"{{ route(\'subscribers.store\') }}\\"\\" method=\\"\\"post\\"\\">\\n    @csrf\\n    <input type=\\"\\"email\\"\\" name=\\"\\"email\\"\\">\\n    <input type=\\"\\"submit\\"\\" value=\\"\\"submit\\"\\">\\n</form>\\n@if (session(\'subscribed\'))\\n    <div class=\\"\\"alert alert-success\\"\\">\\n        {{ session(\'subscribed\') }}\\n    </div>\\n@endif\\n```\\n\\n### Unsubscribe or Delete\\n\\nJust give this link to subscribers:\\n\\n```\\n<a href=\\"\\"{{ route(\'subscribers.delete\', [\'email\' => $subscriber->email]) }}\\"\\">unsubscribe</a>\\n```\\n\\nThis line will generate a link like: `/subscribers/delete?email=email@example.com`\\n\\n---\\n\\nThat\'s it! Next, prepare a template for the email.","createdAt":"2022-08-03T05:23:39.071Z","updatedAt":"2022-08-09T05:41:29.724Z","publishedAt":"2022-08-09T05:41:29.721Z","thumbnail":{"id":30,"name":"Subscribe_x_Laravel.jpg","alternativeText":"Subscribe_x_Laravel.jpg","caption":"Subscribe_x_Laravel.jpg","width":1280,"height":720,"formats":{"large":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659504202/production/large_Subscribe_x_Laravel_2519da0b07.jpg","hash":"large_Subscribe_x_Laravel_2519da0b07","mime":"image/jpeg","name":"large_Subscribe_x_Laravel.jpg","path":null,"size":36.68,"width":1000,"height":563,"provider_metadata":{"public_id":"production/large_Subscribe_x_Laravel_2519da0b07","resource_type":"image"}},"small":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659504203/production/small_Subscribe_x_Laravel_2519da0b07.jpg","hash":"small_Subscribe_x_Laravel_2519da0b07","mime":"image/jpeg","name":"small_Subscribe_x_Laravel.jpg","path":null,"size":14.57,"width":500,"height":281,"provider_metadata":{"public_id":"production/small_Subscribe_x_Laravel_2519da0b07","resource_type":"image"}},"medium":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659504203/production/medium_Subscribe_x_Laravel_2519da0b07.jpg","hash":"medium_Subscribe_x_Laravel_2519da0b07","mime":"image/jpeg","name":"medium_Subscribe_x_Laravel.jpg","path":null,"size":25.1,"width":750,"height":422,"provider_metadata":{"public_id":"production/medium_Subscribe_x_Laravel_2519da0b07","resource_type":"image"}},"thumbnail":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659504201/production/thumbnail_Subscribe_x_Laravel_2519da0b07.jpg","hash":"thumbnail_Subscribe_x_Laravel_2519da0b07","mime":"image/jpeg","name":"thumbnail_Subscribe_x_Laravel.jpg","path":null,"size":5.72,"width":245,"height":138,"provider_metadata":{"public_id":"production/thumbnail_Subscribe_x_Laravel_2519da0b07","resource_type":"image"}}},"hash":"Subscribe_x_Laravel_2519da0b07","ext":".jpg","mime":"image/jpeg","size":50.33,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659504201/production/Subscribe_x_Laravel_2519da0b07.jpg","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/Subscribe_x_Laravel_2519da0b07","resource_type":"image"},"createdAt":"2022-08-03T05:23:23.871Z","updatedAt":"2022-08-03T05:23:23.871Z"},"meta":{"id":5,"title":"How to Create a Newsletter Subscribers with Laravel","description":"This is my way of how to create or manage an easy and free internal Subscribers Newsletter with Laravel to send email notifications to the subscriber list about new content on the blog.adityacprtm.com site before switching to wordpress."},"series":{"id":1,"title":"Packages that I use to build my Personal Blog with Laravel","slug":"packages-that-i-use-to-build-my-personal-blog-with-laravel","createdAt":"2022-08-03T05:20:57.469Z","updatedAt":"2022-08-03T05:21:05.608Z","publishedAt":"2022-08-03T05:21:05.605Z"}},{"id":4,"title":"Easy Ways to Manage Access Control List (ACL) on Linux","slug":"easy-ways-to-manage-access-control-list-acl-on-linux","content":"There are many challenges in managing Linux in a modern business environment, including that we must be able to manage who has access to information or what is commonly called the Access Control List. To do that, you can use *basic linux filesystem permissions*.\\n\\n### Review Basic Linux Permissions\\nThere are 3 types of permissions on Linux filesystems, here is a simple explanation:\\n\\n* **U** ser or user owner\\n* **G** roup or owner group\\n* **O** ther or someone other than above\\n\\nOf the three types of permissions above, each can be given 3 types of access, namely:\\n\\n* **R** ead\\n* **W** rite\\n* e **X** ecute\\n\\nFor example there is a directory containing files from the development department with the following permissions:\\n\\n```\\ndrwxrwxr-x  2 development development 6 Jan  8 15:13\\n```\\n\\nFrom the above example, the development user (owner user) can read and write to the directory. Members of the development group (or owner group) can also read and write directories, while other people or others cannot write. For the record, the above example allows other to read or view the directory contents.\\n\\n### Linux Access Control List (ACL)\\n\\nIn certain situations, basic permissions can be tricky because each file and directory can only have one user and one group owner at a time. This type of situation can be resolved by Linux Access Control Lists (ACLs).\\n\\nACLs make it possible to apply a more specific set of permissions to a file or directory without changing ownership and permissions.\\n\\n### Set ACLs\\n\\nThis section discusses using the Access Control List or ACL on Linux. This allows an easier time to set up permissions for automated tasks such as implementing web applications.\\n\\nMake sure the ACL is installed, if you haven\'t already run the command `sudo apt install acl`.\\n\\nIn this case it will show the ACL setting on the directory. These ACL permissions can be inherited by the parent directories. Setting the default ACL for a location is very effective, as it ignores the need to always reset user / group permissions after any file operation (eg creating a new file).\\n\\n#### Viewing ACLs\\n\\nTo be able to see the current ACL in a specific directory use the command `getfacl`:\\n\\n```\\n# getfacl /var/www\\n```\\n\\n#### Installing ACLs\\n\\nThe syntax for setting an ACL looks like this:\\n\\n```\\nsetfacl [option] [action/specification] file\\n```\\n\\nSet ACLs for specific users and directories:\\n\\n```\\n# setfacl -R -m u:johndoe:rwx /var/www\\n```\\n\\nSyntax description above:\\n\\n* `setfacl`: Set ACL\\n* `-R`: Recursive into files and directories\\n* `-m`: Modifying ACLs (-x for removing)\\n* `u:johndoe:rwx`: User johndoe will get `rwx` permissions\\n* `/var/www`: Gives permissions to directory `/var/www`\\n\\nSet ACLs for groups in a specific directory:\\n\\n```\\n# setfacl -R -m g:www-data:rwx /var/www\\n```\\n\\nSyntax description above:\\n\\n* `g:www-data:rwx`: Members of the `www-data` group get `rwx` permissions\\n\\n#### Removes ACLs\\n\\n```\\n# setfacl -x g:www-data /var/www\\n```\\n\\nSyntax description above:\\n\\n* `-x`: Delete ACL\'s for `g:www-data` in `/var/www`\\n\\n### Sample case\\n\\nTo better understand, below is a case example in implementing a web application. There are 2 users with different permissions. Also read how to configure the initial server for deploying web applications [here](https://adityacprtm.dev/blog/kentuk-awal-untuk-mengamanan-server-baru).\\n\\n#### Create User\\n\\nCreate the first user named jane and add it to the sudo group to be able to perform the `sudo` command.\\n\\n```\\n# adduser jane\\n# usermod -a -G sudo jane\\n```\\n\\nThe second user is named `bob`, `bob` is the user who can deploy the website and is a member of the `www-data` group.\\n\\n```\\n# adduser bob\\n# usermod -a -G www-data bob\\n```\\n\\nTo make sure the files in the web root belong to the group of `www-data`, run the command below. This is not required for ACL permissions, but is done for consistency.\\n\\n```\\n# chown -R www-data:www-data /var/www\\n```\\n\\n#### Use of ACLs\\n\\nUsers will be granted permission to `read/write/execute` files and directories using ACLs instead of basic Linux permissions.\\n\\nSee set ACL by default, this is separate from basic user/group permissions.\\n\\n```\\n# getfacl /var/www\\n```\\n\\nNext, give jane user permission to change the web files in the `/var/www` directory. Jane doesn\'t technically need this, as she can use the `sudo` command.\\n\\n```\\n# setfacl -R -m u:jane:rwx /var/www\\n```\\n\\nAbove specifies the ACL for an existing file or directory, here it will recursively (-R) set the default (-d flag) for future files or directories.\\n\\n```\\n# setfacl -Rd -m u:jane:rwx /var/www\\n```\\n\\nCheck the command above has been added successfully\\n\\n```\\n# getfacl /var/www\\n```\\n\\n> The previous two commands can be combined to set defaults and permissions: `setfacl -R -m u:jane:rwx,d:u:jane:rwx /var/www`\\n\\nNext, grant group-based permissions via ACLs to web files. This more efficient way for the user allows editing of web files, regardless of who owns the files as long as they are members of the group.\\n\\n```\\n# setfacl -R -m g:www-data:rwx /var/www\\n```\\n\\nOr use default (-d) for the future\\n\\n```\\n# setfacl -Rd -m g:www-data:rwx /var/www\\n```\\n\\nIf so, now TIAP USER who is a member of the `www-data` group can edit files in the `/var/www` directory. To make sure the ACL is checked by running the following command:\\n\\n```\\n# getfacl /var/www\\n```\\n\\nThat\'s it! We can also read articles from the Redhat website about ACL [here](https://www.redhat.com/sysadmin/linux-access-control-lists).\\n\\n---\\n\\nCredits:\\n\\n* icon: designed by [Smashicons](https://smashicons.com/) from Flaticon","createdAt":"2022-08-03T05:20:16.079Z","updatedAt":"2022-08-08T00:07:15.294Z","publishedAt":"2022-08-08T00:07:15.291Z","thumbnail":{"id":29,"name":"User_Permissions.jpg","alternativeText":"User_Permissions.jpg","caption":"User_Permissions.jpg","width":1280,"height":720,"formats":{"large":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659504007/production/large_User_Permissions_e8f405dc33.jpg","hash":"large_User_Permissions_e8f405dc33","mime":"image/jpeg","name":"large_User_Permissions.jpg","path":null,"size":19.4,"width":1000,"height":563,"provider_metadata":{"public_id":"production/large_User_Permissions_e8f405dc33","resource_type":"image"}},"small":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659504008/production/small_User_Permissions_e8f405dc33.jpg","hash":"small_User_Permissions_e8f405dc33","mime":"image/jpeg","name":"small_User_Permissions.jpg","path":null,"size":8.12,"width":500,"height":281,"provider_metadata":{"public_id":"production/small_User_Permissions_e8f405dc33","resource_type":"image"}},"medium":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659504007/production/medium_User_Permissions_e8f405dc33.jpg","hash":"medium_User_Permissions_e8f405dc33","mime":"image/jpeg","name":"medium_User_Permissions.jpg","path":null,"size":13.44,"width":750,"height":422,"provider_metadata":{"public_id":"production/medium_User_Permissions_e8f405dc33","resource_type":"image"}},"thumbnail":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659504006/production/thumbnail_User_Permissions_e8f405dc33.jpg","hash":"thumbnail_User_Permissions_e8f405dc33","mime":"image/jpeg","name":"thumbnail_User_Permissions.jpg","path":null,"size":3.3,"width":245,"height":138,"provider_metadata":{"public_id":"production/thumbnail_User_Permissions_e8f405dc33","resource_type":"image"}}},"hash":"User_Permissions_e8f405dc33","ext":".jpg","mime":"image/jpeg","size":26.01,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659504006/production/User_Permissions_e8f405dc33.jpg","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/User_Permissions_e8f405dc33","resource_type":"image"},"createdAt":"2022-08-03T05:20:08.396Z","updatedAt":"2022-08-03T05:20:08.396Z"},"meta":{"id":4,"title":"Easy Ways to Manage Access Control List (ACL) on Linux","description":"There are many challenges in managing Linux in a modern business environment, including that we must be able to manage who has access to information or what is commonly called the Access Control List. To do that, you can use basic linux filesystem permissions."},"series":null},{"id":3,"title":"Create an OpenVPN Server in Seconds","slug":"create-an-open-vpn-server-in-seconds","content":"Nowadays creating your own VPN server is not as difficult as it might seem. There are several Github repositories that will reduce the difficulty in setting up a VPN, especially the OpenVPN server. Before starting to build a VPN server, let\'s talk a little about what a VPN is and how a VPN works.\\n\\n### What is a VPN?\\n\\n[VPN](https://en.wikipedia.org/wiki/Virtual_private_network) or Virtual Private Network is a connection service that is secure (secure) and private (private) by encrypting all network traffic and changing the connection path through the VPN server and hiding data exchange that takes place.\\n\\nFor example, a VPN client never directly accesses another (web) server, everything will be requested from the VPN server and the VPN server will forward the request.\\n\\nThere is an article that can explain completely what VPN is and its functions as well as other things about VPN with easy-to-understand sentences, you can read the article [here](https://www.niagahoster.co.id/blog/apa-it-vpn).\\n\\n### Why do you need your own VPN server?\\n\\nHaving your own VPN means you have complete control and only you can read the server logs. Without realizing it, the ISP (Internet Service Provider) we use can spy on our traffic, so we need a special lane so that our traffic is not visible.\\n\\nThere are many VPN services from free to paid. We can use it, but do not rule out the possibility of our data or traffic on the VPN service being leaked. You can see in full [here](https://youtu.be/gxpX_mubz2A).\\n\\nHere are some use cases where a VPN can help:\\n\\n* Hide real IP address\\n* Surf safely on public Wi-Fi\\n* Accessing services in the VPN server network\\n\\n### VPN server hosting\\n\\nI am using an Ubuntu 20.04 LTS server hosted on AWS EC2. Before using the new server as a VPN Server, I did the initial configuration in securing the server, the steps can be read [here](https://adityacprtm.dev/blog/kentuk-awal-untuk-mengamanan-server-baru) In this particular case, we do not configure the firewall on the server but use the AWS provided Security Group.\\n\\nFor firewalls, make sure UDP port `1194` is open because that port will be used by OpenVPN. Or you can use another port and adjust it to the port during the installation stage later.\\n\\nThis tutorial can also be used on Debian, Ubuntu and CentOS.\\n\\nTo install a VPN server in seconds, I used a shell script created by [Nyr](https://github.com/Nyr) named [openvpn-install](https://github.com/Nyr/openvpn-install) .\\n\\n### OpenVPN Server installation\\n\\nDownload the shell script.\\n\\n```\\nwget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh\\n```\\n\\nAfter the download is complete, it is necessary to make `openvpn-install.sh` executable.\\n\\n```\\nchmod + x openvpn-install.sh\\n```\\n\\nThe script will ask a few questions about how we want to set up the VPN server. Press Enter to use the default (recommended) options.\\n\\nIn this experiment, I just changed the default DNS to use `1.1.1.1`.\\n\\n```\\nWelcome to this OpenVPN road warrior installer!\\n\\nI need to ask you a few questions before starting setup.\\nYou can use the default options and just press enter if you are ok with them.\\n\\nWhich protocol do you want for OpenVPN connections?\\n   1) UDP (recommended)\\n   2) TCP\\nProtocol [1]:\\n\\nWhat port do you want OpenVPN listening to?\\nPort [1194]:\\n\\nWhich DNS do you want to use with the VPN?\\n   1) Current system resolvers\\n   2) 1.1.1.1\\n   3) Google\\n   4) OpenDNS\\n   5) Verisign\\nDNS [1]: 2\\n\\nFinally, tell me a name for the client certificate.\\nClient name [client]:\\n\\nOkay, that was all I needed. We are ready to set up your OpenVPN server now.\\nPress any key to continue ...\\n```\\n\\nThen the script will install OpenVPN on the server.\\n\\n#### Get the .ovpn file from the server\\n\\nIn order to connect to the VPN server, it requires the generated `.ovpn` file. On Windows, it is recommended to use [Filezilla](https://filezilla-project.org/) or [WinSCP](https://winscp.net/eng/download.php) and log in to the server using SFTP. On macOS and Linux, you can copy files from server to machine using `scp`.\\n\\nTo copy files with `scp` run the following command:\\n\\n```\\nscp <USERNAME> @ <SERVER_IP>: / root / <CLIENT> .ovpn.\\n```\\n\\nIf the certificate or file `.ovpn` is used for a smartphone, use a secure medium of transmission. For Mac or iPhone, it is recommended to copy files using AirDrop.\\n\\nIf you must use Email, please zip the `.ovpn` file and provide a strong password for the zip file before sending it.\\n\\n#### Uses .ovpn files\\n\\nFor Windows OS, you can download the official application from [OpenVPN](https://openvpn.net/community-downloads/), on iOS and Android there is the official OpenVPN Connect application on the [App Store](https://apps.apple.com/app/openvpn-connect/id590379981) and [Google Play](https://play.google.com/store/apps/details?id=net.openvpn.openvpn), while for macOS you can use the [Tunnelblick]( https://tunnelblick.net/) application .\\n\\nHow to use it is usually the same for each OS. First have to import the `.ovpn` file and then connect to the server. If the connection is successful, check the current IP address by typing the words [what is my ip address](https://www.google.com/search?q=what+is+my+ip+address) in google and Google will show IP address.\\n\\nIf the IP address is the same as the server, it means that the VPN client and server have successfully connected.\\n\\n#### Adding a new client user\\n\\nTo add a new user simply run the script and select 1 then a name for the device that will use the client certificate. In this case, I created a user for my iPhone.\\n\\n```\\n./openvpn-install.sh\\n\\nLooks like OpenVPN is already installed.\\n\\nWhat do you want to do?\\n   1) Add a new user\\n   2) Revoke an existing user\\n   3) Remove OpenVPN\\n   4) Exit\\nSelect an option: 1\\n\\nTell me a name for the client certificate.\\nClient name: iphone\\n\\nUsing SSL: openssl OpenSSL 1.1.1 11\\n\\n...............\\n\\nWrite out database with 1 new entries\\nData Base Updated\\n\\nThe iphone client added, configuration is available at: /root/iphone.ovpn\\n```\\n\\nThat\'s it! We\'ve got our privacy protected while in cyberspace and we can congratulate ourselves for just setting up a self-hosted VPN server 脂.\\n\\n---\\n\\nCredits:\\n* icon: designed by [monkik](https://www.flaticon.com/authors/monkik) from Flaticon","createdAt":"2022-08-03T05:18:32.771Z","updatedAt":"2022-08-03T05:18:34.375Z","publishedAt":"2022-08-03T05:18:34.371Z","thumbnail":{"id":28,"name":"Membuat_Open_VPN_Server_dalam_Hitungan_Detik.jpg","alternativeText":"Membuat_Open_VPN_Server_dalam_Hitungan_Detik.jpg","caption":"Membuat_Open_VPN_Server_dalam_Hitungan_Detik.jpg","width":1280,"height":720,"formats":{"large":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659503889/production/large_Membuat_Open_VPN_Server_dalam_Hitungan_Detik_08b0310117.jpg","hash":"large_Membuat_Open_VPN_Server_dalam_Hitungan_Detik_08b0310117","mime":"image/jpeg","name":"large_Membuat_Open_VPN_Server_dalam_Hitungan_Detik.jpg","path":null,"size":13.2,"width":1000,"height":563,"provider_metadata":{"public_id":"production/large_Membuat_Open_VPN_Server_dalam_Hitungan_Detik_08b0310117","resource_type":"image"}},"small":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659503890/production/small_Membuat_Open_VPN_Server_dalam_Hitungan_Detik_08b0310117.jpg","hash":"small_Membuat_Open_VPN_Server_dalam_Hitungan_Detik_08b0310117","mime":"image/jpeg","name":"small_Membuat_Open_VPN_Server_dalam_Hitungan_Detik.jpg","path":null,"size":5.23,"width":500,"height":281,"provider_metadata":{"public_id":"production/small_Membuat_Open_VPN_Server_dalam_Hitungan_Detik_08b0310117","resource_type":"image"}},"medium":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659503889/production/medium_Membuat_Open_VPN_Server_dalam_Hitungan_Detik_08b0310117.jpg","hash":"medium_Membuat_Open_VPN_Server_dalam_Hitungan_Detik_08b0310117","mime":"image/jpeg","name":"medium_Membuat_Open_VPN_Server_dalam_Hitungan_Detik.jpg","path":null,"size":8.76,"width":750,"height":422,"provider_metadata":{"public_id":"production/medium_Membuat_Open_VPN_Server_dalam_Hitungan_Detik_08b0310117","resource_type":"image"}},"thumbnail":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659503888/production/thumbnail_Membuat_Open_VPN_Server_dalam_Hitungan_Detik_08b0310117.jpg","hash":"thumbnail_Membuat_Open_VPN_Server_dalam_Hitungan_Detik_08b0310117","mime":"image/jpeg","name":"thumbnail_Membuat_Open_VPN_Server_dalam_Hitungan_Detik.jpg","path":null,"size":2.14,"width":245,"height":138,"provider_metadata":{"public_id":"production/thumbnail_Membuat_Open_VPN_Server_dalam_Hitungan_Detik_08b0310117","resource_type":"image"}}},"hash":"Membuat_Open_VPN_Server_dalam_Hitungan_Detik_08b0310117","ext":".jpg","mime":"image/jpeg","size":17.75,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659503888/production/Membuat_Open_VPN_Server_dalam_Hitungan_Detik_08b0310117.jpg","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/Membuat_Open_VPN_Server_dalam_Hitungan_Detik_08b0310117","resource_type":"image"},"createdAt":"2022-08-03T05:18:10.317Z","updatedAt":"2022-08-03T05:18:10.317Z"},"meta":{"id":3,"title":"Create an OpenVPN Server in Seconds","description":"Nowadays creating your own VPN server is not as difficult as it might seem. There are several Github repositories that will reduce the difficulty in setting up a VPN, especially the OpenVPN server. Before starting to build a VPN server, let\'s talk a little about what a VPN is and how a VPN works."},"series":null},{"id":2,"title":"Initial Configuration To Secure New Server","slug":"initial-configuration-to-secure-new-server","content":"[Server](https://en.wikipedia.org/wiki/Server_ (computing)) or in Indonesian is called [Server](https://id.wikipedia.org/wiki/Peladen) is a computer device or program provides services for other programs or devices which are called clients. Servers can be distinguished based on their types as database servers, file servers, mail servers, web servers and others.\\n\\nOne server can serve many clients, so securing the server is important to keep server services running. This article describes the first steps you must take to secure your server, including user settings, configuring ssh and a firewall.\\n\\nIn this case, use Amazon Web Service (AWS) as the server. You can use other VPS or cloud computing providers such as Microsoft Azure, Google Cloud (GCP), Digitalocean and others. Log in to the server using the connection method according to the service used, usually as root.\\n\\n### User security configuration\\n\\nWhen you are logged in as root on the server, start by creating a new user and SSH-based access authorization for the SSH Key pair.\\n\\nCreate a new user and enter a password, other info is optional\\n\\n```\\n# adduser aditya\\n```\\n\\nLogin as a user that has been created\\n\\n```\\n# su aditya\\n```\\n\\nCreate a `.ssh` directory in the user directory if it doesn\'t already exist\\n\\n```\\n$ mkdir /home/aditya/.ssh\\n```\\n\\nCreate an authorized_keys file in the `.ssh` directory and leave the terminal tab open.\\nMake sure the permissions for the ssh 700 directory and the authorized_keys 600 file.\\n\\n```\\n$ vim .ssh/authorized_keys\\n```\\n\\nOpen a new terminal tab on the local, create a `key` with the name of the key as desired in the` .ssh` folder\\nAs a little extra, upgrade the algorithm for SSH Key using ED25519. The commonly used algorithms such as DSA or RSA have now been deprecated. You can read more info [here](https://blog.g3rt.nl/upgrade-your-ssh-keys.html).\\n\\n```\\n$ ssh-keygen -o -a 100 -t ed25519 -f id_key_myserver\\n```\\n\\nCopy the contents of the public key `id_key_myserver.pub` and paste it into the server\'s `authorized_keys` file on the terminal tab\\n\\nIf appropriate, exit the SSH server and log in as a new user using the private key `id_key_myserver`\\n\\n```\\n$ ssh -i <PATH id_rsa file> <USERNAME>@<IP SERVER>\\n$ ssh -i ~/.ssh/id_key_myserver aditya@10.10.10.10\\n```\\n\\n### Configure SSH Security\\n\\n#### Configure SSH\\n\\nWe\'ll be configuring SSH to be a little more secure by enforcing the use of SSH key-based access and ensuring that the root user cannot log in via SSH directly.\\n\\nOpen the file `/etc/ssh/sshd_config` with an editor\\n\\n```\\n$ vim /etc/ssh/sshd_config\\n```\\n\\nFind and change several fields as follows\\n\\n```\\n# Urgent\\nPermitRootLogin no\\nPasswordAuthentication no\\n\\n# Double check this section\\nPubkeyAuthentication yes\\nPermitEmptyPasswords no\\n\\n# Optional\\nAllowUsers aditya #hanya user tertentu yang diizinkan\\nAllowGroups sudo ssh #hanya group sudo dan ssh yang diizinkan\\n```\\n\\nThen restart the ssh service\\n\\n```\\n$ sudo service ssh restart\\n```\\n\\n#### Configure Fail2ban\\n\\nWe will also use `fail2ban`, which will check the `/var/log/auth.log` file for repeated SSH login failures and prohibit logins from the source (IP) of those logins, this will provide extra protection against brute-based SSH access. force.\\n\\nInstall fail2ban\\n\\n```\\n$ sudo apt-get install -y fail2ban\\n```\\n\\nMake sure the configuration in the file `/etc/fail2ban/jail.d` has an sshd configuration like this:\\n\\n```\\n[sshd]\\nenabled = true\\n```\\n\\nIf so, then fail2ban will do its job.\\n\\n### Configure Firewalls Security (Optional)\\n\\nThis section is optional, because usually cloud service providers have implemented security systems such as firewalls. For example, on AWS there is a Security Group which acts as a virtual firewall to control incoming and outgoing traffic.\\n\\nTo view firewall rules, run the command `sudo iptables -L -v`.\\n\\nWe\'ll add this to the input chain, which controls incoming (ingress) traffic:\\n\\n```\\nsudo iptables -A INPUT -i lo -j ACCEPT\\nsudo iptables -A INPUT -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT\\nsudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT\\nsudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT\\nsudo iptables -A INPUT -j DROP\\n```\\n\\nWe have added some rules above, including port 22 for SSH and port 80 for HTTP. In addition, you can also enter rules to specific locations such as the port for this HTTPS:\\n\\n```\\nsudo iptables -I INPUT 5 -p tcp --dport 443 -j ACCEPT\\n```\\n\\nFinally, we need to make these rules run on reboot:\\n\\n```\\n# Instal ini akan menyimpan aturan saat ini\\nsudo apt-get install -y netfilters-persistent\\n```\\n\\nThat\'s it! We\'ve already taken the first steps in securing our new server.\\n\\n---\\nCredit\\n* icon: designed by Pixelmeetup from Flaticon","createdAt":"2022-08-03T05:16:26.836Z","updatedAt":"2022-08-03T05:16:28.541Z","publishedAt":"2022-08-03T05:16:28.539Z","thumbnail":{"id":27,"name":"Konfigurasi_Awal_Untuk_Mengamankan_Server_Baru.jpg","alternativeText":"Konfigurasi_Awal_Untuk_Mengamankan_Server_Baru.jpg","caption":"Konfigurasi_Awal_Untuk_Mengamankan_Server_Baru.jpg","width":1280,"height":720,"formats":{"large":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659503726/production/large_Konfigurasi_Awal_Untuk_Mengamankan_Server_Baru_b1c4d92190.jpg","hash":"large_Konfigurasi_Awal_Untuk_Mengamankan_Server_Baru_b1c4d92190","mime":"image/jpeg","name":"large_Konfigurasi_Awal_Untuk_Mengamankan_Server_Baru.jpg","path":null,"size":21.96,"width":1000,"height":563,"provider_metadata":{"public_id":"production/large_Konfigurasi_Awal_Untuk_Mengamankan_Server_Baru_b1c4d92190","resource_type":"image"}},"small":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659503727/production/small_Konfigurasi_Awal_Untuk_Mengamankan_Server_Baru_b1c4d92190.jpg","hash":"small_Konfigurasi_Awal_Untuk_Mengamankan_Server_Baru_b1c4d92190","mime":"image/jpeg","name":"small_Konfigurasi_Awal_Untuk_Mengamankan_Server_Baru.jpg","path":null,"size":8.77,"width":500,"height":281,"provider_metadata":{"public_id":"production/small_Konfigurasi_Awal_Untuk_Mengamankan_Server_Baru_b1c4d92190","resource_type":"image"}},"medium":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659503727/production/medium_Konfigurasi_Awal_Untuk_Mengamankan_Server_Baru_b1c4d92190.jpg","hash":"medium_Konfigurasi_Awal_Untuk_Mengamankan_Server_Baru_b1c4d92190","mime":"image/jpeg","name":"medium_Konfigurasi_Awal_Untuk_Mengamankan_Server_Baru.jpg","path":null,"size":14.87,"width":750,"height":422,"provider_metadata":{"public_id":"production/medium_Konfigurasi_Awal_Untuk_Mengamankan_Server_Baru_b1c4d92190","resource_type":"image"}},"thumbnail":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659503726/production/thumbnail_Konfigurasi_Awal_Untuk_Mengamankan_Server_Baru_b1c4d92190.jpg","hash":"thumbnail_Konfigurasi_Awal_Untuk_Mengamankan_Server_Baru_b1c4d92190","mime":"image/jpeg","name":"thumbnail_Konfigurasi_Awal_Untuk_Mengamankan_Server_Baru.jpg","path":null,"size":3.41,"width":245,"height":138,"provider_metadata":{"public_id":"production/thumbnail_Konfigurasi_Awal_Untuk_Mengamankan_Server_Baru_b1c4d92190","resource_type":"image"}}},"hash":"Konfigurasi_Awal_Untuk_Mengamankan_Server_Baru_b1c4d92190","ext":".jpg","mime":"image/jpeg","size":29.07,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659503725/production/Konfigurasi_Awal_Untuk_Mengamankan_Server_Baru_b1c4d92190.jpg","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/Konfigurasi_Awal_Untuk_Mengamankan_Server_Baru_b1c4d92190","resource_type":"image"},"createdAt":"2022-08-03T05:15:27.889Z","updatedAt":"2022-08-03T05:15:27.889Z"},"meta":{"id":2,"title":"Initial Configuration To Secure New Server","description":"One server can serve many clients, so securing the server is important to keep server services running. This article describes the first steps you must take to secure your server, including user settings, configuring ssh and a firewall."},"series":null},{"id":1,"title":"How to Build a Serverless Website with reCAPTCHA on AWS","slug":"how-to-build-a-serverless-website-with-re-captcha-on-aws","content":"This is based on my experience hosting my personal static site ([adityacprtm.com](https://adityacprtm.com/)) on AWS. I don\'t want to run the server for just a \'Contact Us\' form. Oh, and I also need a Captcha because I don\'t want a lot of spam coming in. So I used a serverless site architecture and google recaptcha for that.\\n\\n> **update** personal site: [adityacprtm.dev](https://adityacprtm.dev)\\n\\n> **Note**: This article is a re-upload and a language translation, my original article can be seen in the link [here](https://link.medium.com/YxF2ZlXBN1).\\n\\n![How to Build a Serverless Website with reCAPTCHA on AWS](https://res.cloudinary.com/adityacprtm/image/upload/v1659227377/production/Serverless_Web_App_71e7f60bf0.png)\\n\\n### Application Architecture\\n\\nApplication architecture used:\\n\\n1. AWS Lambda\\n2. Amazon API gateway\\n3. Amazon S3\\n4. Amazon SNS\\n5. Amazon CloudFront\\n6.Amazon Route 53\\n7. AWS Certificate Manager\\n8. Google reCaptcha\\n\\n### Create Buckets on Amazon S3\\n\\n1. Open the console or access Amazon S3 [here](https://console.aws.amazon.com/s3/)\\n2. create a bucket with your domain name, for example example.com\\n3. Enough at this point, we will upload the file later\\n\\n### Create SNS Topics and Subscriptions\\n\\n1. Open SNS Console or access [here](https://console.aws.amazon.com/sns/)\\n2. Create a name for the Topic\\n3. Create a Subscription, select the ARN Topic according to what was made in point 2\\n4. Select email on the protocol type, then create a subscription\\n5. Check the registered email and verify the subscription from AWS\\n\\n### Build Serverless Back-end on AWS Lambda\\n\\n1. In the [Lambda Console](https://console.aws.amazon.com/lambda/), select the create function\\n2. Select Author from scratch\\n3. Enter the name of the Function and select Node.js for the Runtime\\n4. Then select Create function\\n\\nAt this point we will use lambda with JavaScript. Unfortunately we cannot easily load scripts into the AWS Lambda online editor which has external dependencies such as Axios. So we need to create a Node project with `package.json` like this:\\n\\n```\\n{\\n   \\"\\"name\\"\\":\\"\\"contactForm\\"\\",\\n   \\"\\"version\\"\\":\\"\\"0.0.1\\"\\",\\n   \\"\\"private\\"\\":true,\\n   \\"\\"scripts\\"\\":{},\\n   \\"\\"dependencies\\"\\":{\\n      \\"\\"aws-sdk\\"\\":\\"\\"^2.560.0\\"\\",\\n      \\"\\"axios\\"\\":\\"\\"^0.18.0\\"\\"\\n   }\\n}\\n```\\n\\nWe will use the environment variable in lambda to make things easier when there are changes to the SNS ARN Topic and the ecret Key of reCaptcha, change `index.js` as follows:\\n\\n```\\n\'use strict\';\\nconst AWS = require(\\"\\"aws-sdk\\"\\");\\nconst axios = require(\'axios\');\\nconst completeUrl = \\"\\"https://www.google.com\\"\\";\\n// verify recaptcha url\\nconst reCapUrl = \\"\\"https://www.google.com/recaptcha/api/siteverify\\"\\";\\nconst reCaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;\\n// from Amazon SNS\\nconst snsTopic = process.env.ARN_SNS_TOPIC;\\nmodule.exports.handler = async (event, context, callback) => {\\n    console.log(\\"\\"Starting ContactForm Processing for website form.\\"\\");\\n    // console.log(\\"\\"data event: \\"\\" + JSON.stringify(event));\\n    // verify the result by POSTing to google backend with secret and frontend recaptcha token as payload\\n    let verifyResult = await axios({\\n        method: \'post\',\\n        url: reCapUrl,\\n        params: {\\n            secret: reCaptchaSecret,\\n            response: event.captcha\\n        }\\n    }) // print out the result of that. Its a bit verbose though\\n    // console.log(\\"\\"verify result: \\"\\" + JSON.stringify(verifyResult.data));\\n    if (verifyResult.data.success) {\\n        let sns = new AWS.SNS();\\n        // The structure of the email\\n        let emailbody = \\"\\"Someone left a message for you.\\\\n\\\\nName\\\\t\\\\t: \\"\\" + event.name + \\"\\"\\\\nEmail\\\\t\\\\t: \\"\\" + event.email + \\"\\"\\\\nSubject\\\\t\\\\t: \\"\\" + event.subject + \\"\\"\\\\nMessage\\\\t\\\\t: \\"\\" + event.message + \\"\\"\\\\n\\\\nThanks!\\"\\";\\n        let params = {\\n            Message: emailbody,\\n            Subject: \\"\\"Contact Form: \\"\\" + event.subject,\\n            TopicArn: snsTopic\\n        };\\n        // we publish the created message to Amazon SNS now窶ｦ\\n        sns.publish(params, context.done);\\n        // now we return a HTTP 302 together with a URL to redirect the browser to success URL (we put in google.com for simplicty)\\n        callback(null, {\\n            statusCode: 302,\\n            headers: {\\n                Location: completeUrl,\\n            }\\n        });\\n        console.log(\\"\\"End of the ContactForm Process With Success\\"\\");\\n    } else {\\n        console.log(\\"\\"reCaptcha check failed. Most likely SPAM.\\"\\");\\n        callback(null, {\\n            statusCode: \'500\',\\n            body: JSON.stringify({\\n                message: \'Invalid recaptcha\'\\n            })\\n        });\\n    }\\n};\\n```\\n\\nAfter creating the project, we need to compress the folder in ZIP format for uploading to Lambda.\\n\\nWhile still in the Lambda Console in the previously created Function, upload the ZIP and set the environment variables as follows:\\n\\n![env_vars_serveless.png](https://res.cloudinary.com/adityacprtm/image/upload/v1659503370/production/env_vars_serveless_4cd22ae519.png)\\n\\nThen select Save.\\n\\n### Deploy Restful API Gateway\\n\\n1. Open the API Gateway Console or access [here](https://console.aws.amazon.com/apigateway/)\\n2. Select Create API and select REST\\n3. Select New API and enter the API Name\\n4. Select Create API\\n5. On the left navigation, select Resources under your API\\n6. From the Actions dropdown menu select Create Resource\\n7. Enter a Resource Name such as contact or prod then click Create Resource\\n8. On the newly created Resource, from the Action dropdown menu select Create Method\\n9. Select Post then checkmark\\n10. Select Lambda Function for integration type\\n11. Select the Region you are using on AWS Lambda\\n12. Enter the name of the function that was created before then Save\\n13. [Optional CORS] In the newly created resource, from the Action dropdown select Enable CORS then click enable and replacing\\n14. On the Actions dropdown menu select Deploy API, enter the Stage Name then select Deploy\\n15. Write down and save the Invoke URL which will be used later\\n\\n### Set up a serverless website\\n\\nPreviously, you could use reCAPTCHA by registering a domain name [here](https://www.google.com/recaptcha/admin).\\n\\n#### HTML\\n\\nWe are following the Google reCaptcha documentation, which means we have to enter the code below between the `<head>` and `</head>` tags.\\n\\n```\\n<script src=\\"\\"https://www.google.com/recaptcha/api.js\\"\\"><\/script>\\n```\\n\\nand enter the following code at the bottom of the form before the submit button. Don\'t forget to enter the siteKey you got after registering the domain on Google reCaptcha.\\n\\n```\\n<div class=\\"\\"g-recaptcha\\"\\" data-sitekey=\\"\\"xxxxxxxxxxxxxxxxxxx\\"\\"></div>\\n```\\n\\n#### JavaScript\\n\\nWe can use Ajax to perform asynchronous HTTP (Ajax) requests. Enter the Ajax URL with the Invoke URL we got when building the API gateway.\\n\\n### Host Static Website\\n\\n1. Back in the S3 Console, select the bucket that was created earlier\\n2. Upload your website files into a bucket\\n3. When finished, select the Properties tab\\n4. Select Static website hosting\\n5. Fill in the index and document error\\n6. Make sure Block Public access is not checked\\n7. Still on the Permissions tab, select Bucket Policy.\\nEnter the following policy document into the policy bucket editor, replacing `[YOUR_BUCKET_NAME]` with the bucket name that was created.\\n\\n```\\n{\\n   \\"\\"Version\\"\\":\\"\\"2012-10-17\\"\\",\\n   \\"\\"Statement\\"\\":[\\n      {\\n         \\"\\"Effect\\"\\":\\"\\"Allow\\"\\",\\n         \\"\\"Principal\\"\\":\\"\\"*\\"\\",\\n         \\"\\"Action\\"\\":\\"\\"s3:GetObject\\"\\",\\n         \\"\\"Resource\\"\\":\\"\\"arn:aws:s3:::[YOUR_BUCKET_NAME]/*\\"\\"\\n      }\\n   ]\\n}\\n```\\n\\n### Configure the Domain on Route 53\\n\\n1. On Amazon Route 53 we can register a new domain or make Route 53 a DNS service for an existing domain\\n2. I already have my own domain, so I made Amazon Route 53 the DNS Service for my domain\\n3. On the [Route 53 Console](https://console.aws.amazon.com/route53/home), select Create Hosted Zone.\\n4. On the Create Hosted Zone panel, enter the domain name\\n5. In the Type, leave the default on the Public Hosted Zone\\n6. Select Create.\\n\\n### Request SSL Certificate in AWS Certificate Manager\\n\\n1. Open ACM Console or access [here](https://console.aws.amazon.com/apigateway/)\\n2. select Request a Certificate\\n3. Select Request a public certificate\\n4. Add a domain name with your own domain name, for example `example.com` or `*.example.com`\\n5. We need to validate the certificate request, how to select DNS validation or email validation. Here I use DNS validation because it\'s faster and easier.\\n6. Add a CNAME on Amazon Route 53 or simply click the button below your domain to add it automatically.\\n\\n### Create a CloudFront Web Distribution\\n\\n1. Open the CloudFront console or access [here](https://console.aws.amazon.com/cloudfront/home)\\n2. Create a distribution\\n3. select Origin Domain Name with the bucket name created earlier.\\n4. Select Redirect HTTP to HTTPS\\n5. Select Yes in the Restrict Bucket Access section\\n6. In the Distribution Settings, use the Custom SSL Certificate and select the certificate that was created in ACM\\n7. Scroll and find Default Root Object, enter the default file Index.html\\n8. Leave everything else default and create distribution.\\n9. Wait until the status is Deployed, it usually takes a few minutes.\\n10. Write down the Domain name from cloudfront\\n\\n### Using Custom Domain on Route 53\\n\\n1. Return to the Route 53 Console\\n2. Select a domain that has been registered\\n3. Select Create Record Set\\n4. We will create 2 record sets\\n5. The first is `example.com` and the second is `www.example.com`\\n6. Use A record and select the created CloudFront.\\n\\nThat\'s it, we\'ve built a serverless static website with reCaptcha protection and a notification for the owner or admin if someone sends a message on the form.\\n\\n- - -\\n\\nReference:\\n1. AWS Documentations","createdAt":"2022-08-03T05:11:51.834Z","updatedAt":"2022-08-03T05:11:54.123Z","publishedAt":"2022-08-03T05:11:54.116Z","thumbnail":{"id":26,"name":"Serverless_AWS_Lambda.jpg","alternativeText":"Serverless_AWS_Lambda.jpg","caption":"Serverless_AWS_Lambda.jpg","width":1280,"height":720,"formats":{"large":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659503451/production/large_Serverless_AWS_Lambda_05e4d8a40b.jpg","hash":"large_Serverless_AWS_Lambda_05e4d8a40b","mime":"image/jpeg","name":"large_Serverless_AWS_Lambda.jpg","path":null,"size":17.29,"width":1000,"height":563,"provider_metadata":{"public_id":"production/large_Serverless_AWS_Lambda_05e4d8a40b","resource_type":"image"}},"small":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659503452/production/small_Serverless_AWS_Lambda_05e4d8a40b.jpg","hash":"small_Serverless_AWS_Lambda_05e4d8a40b","mime":"image/jpeg","name":"small_Serverless_AWS_Lambda.jpg","path":null,"size":7.16,"width":500,"height":281,"provider_metadata":{"public_id":"production/small_Serverless_AWS_Lambda_05e4d8a40b","resource_type":"image"}},"medium":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659503452/production/medium_Serverless_AWS_Lambda_05e4d8a40b.jpg","hash":"medium_Serverless_AWS_Lambda_05e4d8a40b","mime":"image/jpeg","name":"medium_Serverless_AWS_Lambda.jpg","path":null,"size":11.81,"width":750,"height":422,"provider_metadata":{"public_id":"production/medium_Serverless_AWS_Lambda_05e4d8a40b","resource_type":"image"}},"thumbnail":{"ext":".jpg","url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659503451/production/thumbnail_Serverless_AWS_Lambda_05e4d8a40b.jpg","hash":"thumbnail_Serverless_AWS_Lambda_05e4d8a40b","mime":"image/jpeg","name":"thumbnail_Serverless_AWS_Lambda.jpg","path":null,"size":2.98,"width":245,"height":138,"provider_metadata":{"public_id":"production/thumbnail_Serverless_AWS_Lambda_05e4d8a40b","resource_type":"image"}}},"hash":"Serverless_AWS_Lambda_05e4d8a40b","ext":".jpg","mime":"image/jpeg","size":23.45,"url":"https://res.cloudinary.com/adityacprtm/image/upload/v1659503451/production/Serverless_AWS_Lambda_05e4d8a40b.jpg","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"production/Serverless_AWS_Lambda_05e4d8a40b","resource_type":"image"},"createdAt":"2022-08-03T05:10:53.246Z","updatedAt":"2022-08-03T05:10:53.246Z"},"meta":{"id":1,"title":"How to Build a Serverless Website with reCAPTCHA on AWS","description":"This is based on my experience hosting my personal static site on AWS. I don\'t want to run the server for just a \'Contact Us\' form. Oh, and I also need a Captcha because I don\'t want a lot of spam coming in. So I used a serverless site architecture and google recaptcha for that."},"series":{"id":3,"title":"AWS Projects","slug":"aws-projects","createdAt":"2023-10-01T03:19:12.822Z","updatedAt":"2023-10-01T03:29:00.492Z","publishedAt":"2023-10-01T03:29:00.488Z"}}],"meta":{"pagination":{"page":1,"pageSize":25,"pageCount":1,"total":16}}}')
    },
    e4ca: function(e, t, i) {
        "use strict";
        var a = i("0068").unescapeAll;
        e.exports = function(e, t, i) {
            var r, n, o = 0, s = t, l = {
                ok: !1,
                pos: 0,
                lines: 0,
                str: ""
            };
            if (60 === e.charCodeAt(t)) {
                t++;
                while (t < i) {
                    if (r = e.charCodeAt(t),
                    10 === r)
                        return l;
                    if (60 === r)
                        return l;
                    if (62 === r)
                        return l.pos = t + 1,
                        l.str = a(e.slice(s + 1, t)),
                        l.ok = !0,
                        l;
                    92 === r && t + 1 < i ? t += 2 : t++
                }
                return l
            }
            n = 0;
            while (t < i) {
                if (r = e.charCodeAt(t),
                32 === r)
                    break;
                if (r < 32 || 127 === r)
                    break;
                if (92 === r && t + 1 < i) {
                    if (32 === e.charCodeAt(t + 1))
                        break;
                    t += 2
                } else {
                    if (40 === r && (n++,
                    n > 32))
                        return l;
                    if (41 === r) {
                        if (0 === n)
                            break;
                        n--
                    }
                    t++
                }
            }
            return s === t || 0 !== n || (l.str = a(e.slice(s, t)),
            l.lines = o,
            l.pos = t,
            l.ok = !0),
            l
        }
    },
    e80e: function(e, t, i) {
        "use strict";
        var a = i("0068").isSpace;
        e.exports = function(e, t, i, r) {
            var n, o, s, l, d, c, p, u, m, h, _, g, f, b, v, y, w, C, k, A, S = e.lineMax, x = e.bMarks[t] + e.tShift[t], T = e.eMarks[t];
            if (e.sCount[t] - e.blkIndent >= 4)
                return !1;
            if (62 !== e.src.charCodeAt(x++))
                return !1;
            if (r)
                return !0;
            l = m = e.sCount[t] + 1,
            32 === e.src.charCodeAt(x) ? (x++,
            l++,
            m++,
            n = !1,
            y = !0) : 9 === e.src.charCodeAt(x) ? (y = !0,
            (e.bsCount[t] + m) % 4 === 3 ? (x++,
            l++,
            m++,
            n = !1) : n = !0) : y = !1,
            h = [e.bMarks[t]],
            e.bMarks[t] = x;
            while (x < T) {
                if (o = e.src.charCodeAt(x),
                !a(o))
                    break;
                9 === o ? m += 4 - (m + e.bsCount[t] + (n ? 1 : 0)) % 4 : m++,
                x++
            }
            for (_ = [e.bsCount[t]],
            e.bsCount[t] = e.sCount[t] + 1 + (y ? 1 : 0),
            c = x >= T,
            b = [e.sCount[t]],
            e.sCount[t] = m - l,
            v = [e.tShift[t]],
            e.tShift[t] = x - e.bMarks[t],
            C = e.md.block.ruler.getRules("blockquote"),
            f = e.parentType,
            e.parentType = "blockquote",
            u = t + 1; u < i; u++) {
                if (A = e.sCount[u] < e.blkIndent,
                x = e.bMarks[u] + e.tShift[u],
                T = e.eMarks[u],
                x >= T)
                    break;
                if (62 !== e.src.charCodeAt(x++) || A) {
                    if (c)
                        break;
                    for (w = !1,
                    s = 0,
                    d = C.length; s < d; s++)
                        if (C[s](e, u, i, !0)) {
                            w = !0;
                            break
                        }
                    if (w) {
                        e.lineMax = u,
                        0 !== e.blkIndent && (h.push(e.bMarks[u]),
                        _.push(e.bsCount[u]),
                        v.push(e.tShift[u]),
                        b.push(e.sCount[u]),
                        e.sCount[u] -= e.blkIndent);
                        break
                    }
                    h.push(e.bMarks[u]),
                    _.push(e.bsCount[u]),
                    v.push(e.tShift[u]),
                    b.push(e.sCount[u]),
                    e.sCount[u] = -1
                } else {
                    l = m = e.sCount[u] + 1,
                    32 === e.src.charCodeAt(x) ? (x++,
                    l++,
                    m++,
                    n = !1,
                    y = !0) : 9 === e.src.charCodeAt(x) ? (y = !0,
                    (e.bsCount[u] + m) % 4 === 3 ? (x++,
                    l++,
                    m++,
                    n = !1) : n = !0) : y = !1,
                    h.push(e.bMarks[u]),
                    e.bMarks[u] = x;
                    while (x < T) {
                        if (o = e.src.charCodeAt(x),
                        !a(o))
                            break;
                        9 === o ? m += 4 - (m + e.bsCount[u] + (n ? 1 : 0)) % 4 : m++,
                        x++
                    }
                    c = x >= T,
                    _.push(e.bsCount[u]),
                    e.bsCount[u] = e.sCount[u] + 1 + (y ? 1 : 0),
                    b.push(e.sCount[u]),
                    e.sCount[u] = m - l,
                    v.push(e.tShift[u]),
                    e.tShift[u] = x - e.bMarks[u]
                }
            }
            for (g = e.blkIndent,
            e.blkIndent = 0,
            k = e.push("blockquote_open", "blockquote", 1),
            k.markup = ">",
            k.map = p = [t, 0],
            e.md.block.tokenize(e, t, u),
            k = e.push("blockquote_close", "blockquote", -1),
            k.markup = ">",
            e.lineMax = S,
            e.parentType = f,
            p[1] = e.line,
            s = 0; s < v.length; s++)
                e.bMarks[s + t] = h[s],
                e.tShift[s + t] = v[s],
                e.sCount[s + t] = b[s],
                e.bsCount[s + t] = _[s];
            return e.blkIndent = g,
            !0
        }
    },
    e979: function(e, t, i) {
        e.exports = i.p + "img/icon-experience.ec6a56a4.svg"
    },
    f431: function(e, t, i) {
        "use strict";
        i.r(t);
        var a = function() {
            var e = this
              , t = e._self._c;
            return t("div", [t("div", {
                staticClass: "content"
            }, [t("div", {
                staticClass: "section mt-0"
            }, [t("h1", {
                staticClass: "title title--h1 title__separate"
            }, [e._v(" " + e._s(this.heading.seriesList) + " ")])]), t("div", {
                staticClass: "news-grid section"
            }, e._l(e.series, (function(i) {
                return t("article", {
                    key: i.id,
                    staticClass: "news-item box"
                }, [t("div", {
                    staticClass: "news-item__caption series__caption"
                }, [t("router-link", {
                    attrs: {
                        to: "/series/" + i.slug
                    }
                }, [t("v-clamp", {
                    staticClass: "title title--h4",
                    attrs: {
                        autoresize: "",
                        "max-lines": 2,
                        tag: "h3"
                    }
                }, [e._v(" " + e._s(i.title) + " ")])], 1), t("v-clamp", {
                    attrs: {
                        autoresize: "",
                        tag: "p",
                        "max-lines": 2
                    }
                }, [e._v(" last update: " + e._s(e.monthDayYearFormat(i.updatedAt)) + " ")])], 1)])
            }
            )), 0)])])
        }
          , r = []
          , n = i("1ce8")
          , o = i("d301")
          , s = i("318b")
          , l = {
            name: "Series",
            mixins: [o["a"]],
            components: {
                VClamp: n["a"]
            },
            data() {
                return {
                    series: s.data,
                    seriesMeta: {},
                    isLoading: !0,
                    errorFetch: "",
                    heading: {
                        seriesList: "Series List"
                    },
                    text: {
                        partSeries: "Part Series"
                    }
                }
            },
            created() {},
            methods: {},
            metaInfo() {
                return {
                    title: "Blog Series | Adityacprtm | DevOps - SRE - Cloud Engineer",
                    meta: [{
                        vmid: "description",
                        name: "description",
                        content: "Get to know Aditya Chamim Pratama posts."
                    }, {
                        vmid: "twitter:title",
                        name: "twitter:title",
                        content: "Blog Series | Adityacprtm | DevOps - SRE - Cloud Engineer"
                    }, {
                        vmid: "twitter:description",
                        name: "twitter:description",
                        content: "Get to know Aditya Chamim Pratama posts."
                    }, {
                        vmid: "og:title",
                        property: "og:title",
                        content: "Blog Series | Adityacprtm | DevOps - SRE - Cloud Engineer"
                    }, {
                        vmid: "og:description",
                        property: "og:description",
                        content: "Get to know Aditya Chamim Pratama posts."
                    }]
                }
            }
        }
          , d = l
          , c = i("2877")
          , p = Object(c["a"])(d, a, r, !1, null, null, null);
        t["default"] = p.exports
    },
    f820: function(e, t, i) {
        "use strict";
        i.r(t);
        var a = function() {
            var e = this
              , t = e._self._c;
            return t("div", [t("div", {
                staticClass: "pb-0 pb-sm-2"
            }, [t("h1", {
                staticClass: "title title--h1 first-title title__separate"
            }, [e._v(" " + e._s(this.heading.aboutme) + " ")]), t("span", {
                staticStyle: {
                    "white-space": "pre-wrap"
                }
            }, [e._v(e._s(this.about.data.content))])]), t("div", {
                staticClass: "mt-4"
            }, [t("h2", {
                staticClass: "title title--h3"
            }, [e._v(e._s(this.heading.scope))]), t("div", {
                staticClass: "row"
            }, e._l(e.scopes.data, (function(i) {
                return t("div", {
                    key: i.id,
                    staticClass: "col-12 col-lg-6"
                }, [t("div", {
                    staticClass: "case-item"
                }, [i.image ? t("img", {
                    attrs: {
                        src: i.image.url,
                        alt: i.image.alternativeText,
                        width: "40",
                        height: "40"
                    }
                }) : e._e(), t("div", {
                    staticClass: "mt-3"
                }, [t("h3", {
                    staticClass: "title title--h4"
                }, [e._v(e._s(i.title))]), t("p", {
                    staticClass: "case-item__caption"
                }, [e._v(" " + e._s(i.description) + " ")])])])])
            }
            )), 0)]), t("div", {
                staticClass: "mt-4"
            }, [t("h2", {
                staticClass: "title title--h3"
            }, [e._v(e._s(this.heading.client))]), t("div", {
                staticClass: "swiper-container js-carousel-clients"
            }, [t("div", {
                staticClass: "swiper-wrapper"
            }, e._l(e.clients.data, (function(i) {
                return t("div", {
                    key: i.id
                }, [i.image ? t("img", {
                    attrs: {
                        width: "200",
                        height: "93",
                        src: e.getImageUrl(i.image),
                        alt: e.getImageAlt(i.image)
                    }
                }) : e._e()])
            }
            )), 0)])])])
        }
          , r = []
          , n = i("5075")
          , o = i("7507")
          , s = i("b658")
          , l = i("5b77")
          , d = i("2436")
          , c = {
            name: "About",
            mixins: [n["a"], o["a"]],
            data() {
                return {
                    page: {
                        meta: {
                            title: "Adityacprtm | DevOps - SRE - Cloud Engineer",
                            description: "Get to know me, Aditya Chamim Pratama. An enthusiastic newbie, DevOps - SRE - Cloud Engineer."
                        }
                    },
                    about: {
                        data: s.data
                    },
                    scopes: {
                        data: l.data
                    },
                    clients: {
                        data: d.data
                    },
                    heading: {
                        aboutme: "About Me",
                        scope: "What I'm Doing",
                        client: "Clients"
                    }
                }
            },
            created() {},
            methods: {},
            metaInfo() {
                return {
                    title: this.page.meta ? this.page.meta.title : "Adityacprtm | DevOps - SRE - Cloud Engineer",
                    meta: [{
                        vmid: "description",
                        name: "description",
                        content: this.page.meta ? this.page.meta.description : "Get to know Aditya Chamim Pratama."
                    }, {
                        vmid: "twitter:title",
                        name: "twitter:title",
                        content: this.page.meta ? this.page.meta.title : "Adityacprtm | DevOps - SRE - Cloud Engineer"
                    }, {
                        vmid: "twitter:description",
                        name: "twitter:description",
                        content: this.page.meta ? this.page.meta.description : "Get to know Aditya Chamim Pratama."
                    }, {
                        vmid: "og:title",
                        property: "og:title",
                        content: this.page.meta ? this.page.meta.title : "Adityacprtm | DevOps - SRE - Cloud Engineer"
                    }, {
                        vmid: "og:description",
                        property: "og:description",
                        content: this.page.meta ? this.page.meta.description : "Get to know Aditya Chamim Pratama."
                    }]
                }
            }
        }
          , p = c
          , u = i("2877")
          , m = Object(u["a"])(p, a, r, !1, null, null, null);
        t["default"] = m.exports
    },
    f916: function(e) {
        e.exports = JSON.parse('{"data":[{"id":3,"institution":"Lion Parcel","position":"Site Reliability Engineer (SRE)","location":"Jakarta, Indonesia","description":"- Provide technical support and assistance to developers, addressing their problems and needs, ensuring smooth development processes.\\n- Utilize JIRA for project management and issue tracking, ensuring efficient collaboration and task management.\\n- Develop and maintain an automated CI/CD pipeline using Jenkins, enabling seamless code deployment for every release.\\n- Create and maintain deployment processes for mobile apps on Android and iOS platforms, ensuring efficient and reliable distribution.\\n- Provision infrastructure, servers, and services using Terraform, enabling scalable and consistent deployment and management.\\n- Set up and monitoring, tracing, and logging tools such as ELK, Grafana, and Datadog, ensuring comprehensive visibility into system performance and issues.\\n- Implement monitoring alerts for services, databases, and logs, reducing the occurrence of errors in production environments.\\n- Manage and monitor a Kubernetes-based container cluster, ensuring high availability with a 99.9% uptime.\\n- Actively manage, improve, and monitor cloud infrastructure services on AWS and GCP, including backups, patches, and scaling.\\n- Administer GitHub repositories and permissions, including branching and tagging, ensuring efficient version control and collaboration.\\n- Develop and maintain scripts to automate tasks, improving efficiency and reducing manual effort.\\n- Integrate automation testing into the CI/CD pipeline, ensuring the quality and reliability of software releases.\\n- Scale Jenkins agents in Kubernetes to increase the number of executors, optimizing build and deployment processes for Go and Node.js projects.\\n- Implement a single dashboard monitoring solution using Prometheus, Thanos, and Grafana, providing a centralized view of system metrics.\\n- Successfully involved in the migration from GCP to AWS, minimizing downtime and ensuring a smooth transition.\\n- Import existing infrastructure to Terraform and implementing GitOps for managing and automating IaC.","startDate":"2021-01-04","endDate":null},{"id":4,"institution":"BuangDisini","position":"DevOps / Cloud Engineer","location":"Remote","description":"- Provisioned and managed infrastructure using Terraform and Ansible, ensuring efficient and reliable deployment of resources.\\n- Created CI/CD automation for code deployment using Github Actions, streamlining the development and release process.\\n- Implemented container management and monitoring using Portainer, enhancing visibility and control over containerized applications.\\n- Integrated various tools and systems, improving collaboration and efficiency across the development and operations teams.\\n- Conducted troubleshooting and root cause analysis, swiftly identifying and resolving issues to minimize downtime and optimize system performance.\\n- Maintained clear and concise documentation of infrastructure configurations and processes, facilitating ease of understanding and knowledge transfer.","startDate":"2022-05-18","endDate":"2022-11-30"},{"id":5,"institution":"Transletin","position":"Full-stack Developer","location":"Remote","description":"- Web-based application development using Laravel to help the translation service business process\\n- Redesign website interface with custom Content Management System.","startDate":"2020-05-01","endDate":"2020-06-30"},{"id":1,"institution":"Laboratory Learning FILKOM UB","position":"Practicum Assistant","location":"Malang, Indonesia","description":"- Coordinate with lecturers and laboratory staff regarding the details of the Computer Network course. \\n- Helping to organize practical classroom teaching effectively.","startDate":"2017-09-03","endDate":"2019-05-19"},{"id":2,"institution":"NOC FIA UB","position":"Network Engineer Intern","location":"Malang, Indonesia","description":"- Working on project to design network with a high level availability based on MikroTik","startDate":"2018-07-01","endDate":"2018-09-02"}],"meta":{"pagination":{"page":1,"pageSize":25,"pageCount":1,"total":5}}}')
    },
    fbcd: function(e, t, i) {
        "use strict";
        function a(e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return t.forEach((function(t) {
                t && Object.keys(t).forEach((function(i) {
                    e[i] = t[i]
                }
                ))
            }
            )),
            e
        }
        function r(e) {
            return Object.prototype.toString.call(e)
        }
        function n(e) {
            return "[object String]" === r(e)
        }
        function o(e) {
            return "[object Object]" === r(e)
        }
        function s(e) {
            return "[object RegExp]" === r(e)
        }
        function l(e) {
            return "[object Function]" === r(e)
        }
        function d(e) {
            return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
        }
        var c = {
            fuzzyLink: !0,
            fuzzyEmail: !0,
            fuzzyIP: !1
        };
        function p(e) {
            return Object.keys(e || {}).reduce((function(e, t) {
                return e || c.hasOwnProperty(t)
            }
            ), !1)
        }
        var u = {
            "http:": {
                validate: function(e, t, i) {
                    var a = e.slice(t);
                    return i.re.http || (i.re.http = new RegExp("^\\/\\/" + i.re.src_auth + i.re.src_host_port_strict + i.re.src_path,"i")),
                    i.re.http.test(a) ? a.match(i.re.http)[0].length : 0
                }
            },
            "https:": "http:",
            "ftp:": "http:",
            "//": {
                validate: function(e, t, i) {
                    var a = e.slice(t);
                    return i.re.no_http || (i.re.no_http = new RegExp("^" + i.re.src_auth + "(?:localhost|(?:(?:" + i.re.src_domain + ")\\.)+" + i.re.src_domain_root + ")" + i.re.src_port + i.re.src_host_terminator + i.re.src_path,"i")),
                    i.re.no_http.test(a) ? t >= 3 && ":" === e[t - 3] || t >= 3 && "/" === e[t - 3] ? 0 : a.match(i.re.no_http)[0].length : 0
                }
            },
            "mailto:": {
                validate: function(e, t, i) {
                    var a = e.slice(t);
                    return i.re.mailto || (i.re.mailto = new RegExp("^" + i.re.src_email_name + "@" + i.re.src_host_strict,"i")),
                    i.re.mailto.test(a) ? a.match(i.re.mailto)[0].length : 0
                }
            }
        }
          , m = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]"
          , h = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
        function _(e) {
            e.__index__ = -1,
            e.__text_cache__ = ""
        }
        function g(e) {
            return function(t, i) {
                var a = t.slice(i);
                return e.test(a) ? a.match(e)[0].length : 0
            }
        }
        function f() {
            return function(e, t) {
                t.normalize(e)
            }
        }
        function b(e) {
            var t = e.re = i("b117")(e.__opts__)
              , a = e.__tlds__.slice();
            function r(e) {
                return e.replace("%TLDS%", t.src_tlds)
            }
            e.onCompile(),
            e.__tlds_replaced__ || a.push(m),
            a.push(t.src_xn),
            t.src_tlds = a.join("|"),
            t.email_fuzzy = RegExp(r(t.tpl_email_fuzzy), "i"),
            t.link_fuzzy = RegExp(r(t.tpl_link_fuzzy), "i"),
            t.link_no_ip_fuzzy = RegExp(r(t.tpl_link_no_ip_fuzzy), "i"),
            t.host_fuzzy_test = RegExp(r(t.tpl_host_fuzzy_test), "i");
            var c = [];
            function p(e, t) {
                throw new Error('(LinkifyIt) Invalid schema "' + e + '": ' + t)
            }
            e.__compiled__ = {},
            Object.keys(e.__schemas__).forEach((function(t) {
                var i = e.__schemas__[t];
                if (null !== i) {
                    var a = {
                        validate: null,
                        link: null
                    };
                    if (e.__compiled__[t] = a,
                    o(i))
                        return s(i.validate) ? a.validate = g(i.validate) : l(i.validate) ? a.validate = i.validate : p(t, i),
                        void (l(i.normalize) ? a.normalize = i.normalize : i.normalize ? p(t, i) : a.normalize = f());
                    n(i) ? c.push(t) : p(t, i)
                }
            }
            )),
            c.forEach((function(t) {
                e.__compiled__[e.__schemas__[t]] && (e.__compiled__[t].validate = e.__compiled__[e.__schemas__[t]].validate,
                e.__compiled__[t].normalize = e.__compiled__[e.__schemas__[t]].normalize)
            }
            )),
            e.__compiled__[""] = {
                validate: null,
                normalize: f()
            };
            var u = Object.keys(e.__compiled__).filter((function(t) {
                return t.length > 0 && e.__compiled__[t]
            }
            )).map(d).join("|");
            e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + u + ")", "i"),
            e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + u + ")", "ig"),
            e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i"),
            _(e)
        }
        function v(e, t) {
            var i = e.__index__
              , a = e.__last_index__
              , r = e.__text_cache__.slice(i, a);
            this.schema = e.__schema__.toLowerCase(),
            this.index = i + t,
            this.lastIndex = a + t,
            this.raw = r,
            this.text = r,
            this.url = r
        }
        function y(e, t) {
            var i = new v(e,t);
            return e.__compiled__[i.schema].normalize(i, e),
            i
        }
        function w(e, t) {
            if (!(this instanceof w))
                return new w(e,t);
            t || p(e) && (t = e,
            e = {}),
            this.__opts__ = a({}, c, t),
            this.__index__ = -1,
            this.__last_index__ = -1,
            this.__schema__ = "",
            this.__text_cache__ = "",
            this.__schemas__ = a({}, u, e),
            this.__compiled__ = {},
            this.__tlds__ = h,
            this.__tlds_replaced__ = !1,
            this.re = {},
            b(this)
        }
        w.prototype.add = function(e, t) {
            return this.__schemas__[e] = t,
            b(this),
            this
        }
        ,
        w.prototype.set = function(e) {
            return this.__opts__ = a(this.__opts__, e),
            this
        }
        ,
        w.prototype.test = function(e) {
            if (this.__text_cache__ = e,
            this.__index__ = -1,
            !e.length)
                return !1;
            var t, i, a, r, n, o, s, l, d;
            if (this.re.schema_test.test(e)) {
                s = this.re.schema_search,
                s.lastIndex = 0;
                while (null !== (t = s.exec(e)))
                    if (r = this.testSchemaAt(e, t[2], s.lastIndex),
                    r) {
                        this.__schema__ = t[2],
                        this.__index__ = t.index + t[1].length,
                        this.__last_index__ = t.index + t[0].length + r;
                        break
                    }
            }
            return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (l = e.search(this.re.host_fuzzy_test),
            l >= 0 && (this.__index__ < 0 || l < this.__index__) && null !== (i = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (n = i.index + i[1].length,
            (this.__index__ < 0 || n < this.__index__) && (this.__schema__ = "",
            this.__index__ = n,
            this.__last_index__ = i.index + i[0].length))),
            this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (d = e.indexOf("@"),
            d >= 0 && null !== (a = e.match(this.re.email_fuzzy)) && (n = a.index + a[1].length,
            o = a.index + a[0].length,
            (this.__index__ < 0 || n < this.__index__ || n === this.__index__ && o > this.__last_index__) && (this.__schema__ = "mailto:",
            this.__index__ = n,
            this.__last_index__ = o))),
            this.__index__ >= 0
        }
        ,
        w.prototype.pretest = function(e) {
            return this.re.pretest.test(e)
        }
        ,
        w.prototype.testSchemaAt = function(e, t, i) {
            return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, i, this) : 0
        }
        ,
        w.prototype.match = function(e) {
            var t = 0
              , i = [];
            this.__index__ >= 0 && this.__text_cache__ === e && (i.push(y(this, t)),
            t = this.__last_index__);
            var a = t ? e.slice(t) : e;
            while (this.test(a))
                i.push(y(this, t)),
                a = a.slice(this.__last_index__),
                t += this.__last_index__;
            return i.length ? i : null
        }
        ,
        w.prototype.tlds = function(e, t) {
            return e = Array.isArray(e) ? e : [e],
            t ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter((function(e, t, i) {
                return e !== i[t - 1]
            }
            )).reverse(),
            b(this),
            this) : (this.__tlds__ = e.slice(),
            this.__tlds_replaced__ = !0,
            b(this),
            this)
        }
        ,
        w.prototype.normalize = function(e) {
            e.schema || (e.url = "http://" + e.url),
            "mailto:" !== e.schema || /^mailto:/i.test(e.url) || (e.url = "mailto:" + e.url)
        }
        ,
        w.prototype.onCompile = function() {}
        ,
        e.exports = w
    },
    fd3f: function(e, t, i) {
        "use strict";
        i.r(t);
        var a = function() {
            var e = this
              , t = e._self._c;
            return t("div", {
                staticClass: "content"
            }, [t("div", {
                staticClass: "section mt-0"
            }, [t("h1", {
                staticClass: "title title--h1 title__separate"
            }, [e._v(e._s(e.heading.blog))])]), t("div", [t("div", {
                staticClass: "news-grid section"
            }, e._l(e.blogs, (function(i) {
                return t("article", {
                    key: i.id,
                    staticClass: "news-item box"
                }, [t("div", {
                    staticClass: "news-item__image-wrap overlay overlay--45"
                }, [t("div", {
                    staticClass: "news-item__date"
                }, [e._v(" " + e._s(e.dayFormat(i.publishedAt)) + " "), t("span", [e._v(" " + e._s(e.monthFormat(i.publishedAt)) + " ")])]), t("router-link", {
                    staticClass: "news-item__link",
                    attrs: {
                        to: "/blog/" + i.slug
                    }
                }), t("img", {
                    staticClass: "cover lazyload",
                    attrs: {
                        src: e.getImageUrl(i.thumbnail, "small"),
                        alt: e.getImageAlt(i.thumbnail)
                    }
                })], 1), t("div", {
                    staticClass: "news-item__caption"
                }, [t("h3", {
                    staticClass: "title title--h4"
                }, [t("v-clamp", {
                    attrs: {
                        autoresize: "",
                        "max-lines": 2
                    }
                }, [e._v(" " + e._s(i.title) + " ")])], 1), t("v-clamp", {
                    attrs: {
                        autoresize: "",
                        tag: "p",
                        "max-lines": 2
                    }
                }, [e._v(" " + e._s(i.meta.description) + " ")])], 1)])
            }
            )), 0)])])
        }
          , r = []
          , n = i("1ce8")
          , o = i("d301")
          , s = i("7507")
          , l = i("e211")
          , d = {
            name: "Blog",
            mixins: [o["a"], s["a"]],
            components: {
                VClamp: n["a"]
            },
            data() {
                return {
                    blogs: l.data,
                    page: {
                        meta: {
                            title: "Blog | Adityacprtm | DevOps - SRE - Cloud Engineer",
                            description: "Read some notes that I wrote while developing something, for sharing and personal reference later. Blog Adityacprtm."
                        }
                    },
                    heading: {
                        blog: "Blog"
                    }
                }
            },
            created() {},
            methods: {},
            metaInfo() {
                return {
                    title: this.page.meta ? this.page.meta.title : "Blog | Adityacprtm | DevOps - SRE - Cloud Engineer",
                    meta: [{
                        vmid: "description",
                        name: "description",
                        content: this.page.meta ? this.page.meta.description : "Get to know Aditya Chamim Pratama posts."
                    }, {
                        vmid: "twitter:title",
                        name: "twitter:title",
                        content: this.page.meta ? this.page.meta.title : "Blog | Adityacprtm | DevOps - SRE - Cloud Engineer"
                    }, {
                        vmid: "twitter:description",
                        name: "twitter:description",
                        content: this.page.meta ? this.page.meta.description : "Get to know Aditya Chamim Pratama posts."
                    }, {
                        vmid: "og:title",
                        property: "og:title",
                        content: this.page.meta ? this.page.meta.title : "Blog | Adityacprtm | DevOps - SRE - Cloud Engineer"
                    }, {
                        vmid: "og:description",
                        property: "og:description",
                        content: this.page.meta ? this.page.meta.description : "Get to know Aditya Chamim Pratama posts."
                    }]
                }
            }
        }
          , c = d
          , p = i("2877")
          , u = Object(p["a"])(c, a, r, !1, null, null, null);
        t["default"] = u.exports
    },
    fdfe: function(e, t, i) {
        "use strict";
        var a = i("0068").isSpace;
        e.exports = function(e, t, i, r) {
            var n, o, s, l, d = e.bMarks[t] + e.tShift[t], c = e.eMarks[t];
            if (e.sCount[t] - e.blkIndent >= 4)
                return !1;
            if (n = e.src.charCodeAt(d++),
            42 !== n && 45 !== n && 95 !== n)
                return !1;
            o = 1;
            while (d < c) {
                if (s = e.src.charCodeAt(d++),
                s !== n && !a(s))
                    return !1;
                s === n && o++
            }
            return !(o < 3) && (r || (e.line = t + 1,
            l = e.push("hr", "hr", 0),
            l.map = [t, e.line],
            l.markup = Array(o + 1).join(String.fromCharCode(n))),
            !0)
        }
    }
}]);
//# sourceMappingURL=nYehN9pv7Lyp.1a6418b5.js.map

