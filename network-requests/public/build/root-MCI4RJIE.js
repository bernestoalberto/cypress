import {
  Form,
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useFetcher,
  useLoaderData
} from "/build/_shared/chunk-L424PNLQ.js";
import {
  createHotContext
} from "/build/_shared/chunk-A5OIDWYU.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-DFC53E46.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-IRPDQIET.js";
import "/build/_shared/chunk-KVWRS3UY.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:./data/auth.server
var require_auth = __commonJS({
  "empty-module:./data/auth.server"(exports, module) {
    module.exports = {};
  }
});

// app/components/NewsletterSignup.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\NewsletterSignup.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\NewsletterSignup.jsx"
  );
  import.meta.hot.lastModified = "1676636858000";
}
function NewsletterSignup() {
  _s();
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";
  let result;
  if (fetcher.data && fetcher.data.status !== 201) {
    result = "error";
  }
  if (fetcher.data && fetcher.data.status === 201) {
    result = "success";
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    result !== "success" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, { method: "post", action: "/newsletter", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", name: "email", placeholder: "email@example.com", className: "px-2 py-1 rounded-l-sm text-slate-900", "data-cy": "newsletter-email" }, void 0, false, {
          fileName: "app/components/NewsletterSignup.jsx",
          lineNumber: 37,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, className: "px-3 py-1 text-white bg-blue-500 rounded-r-sm", "data-cy": "newsletter-submit", children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "loader" }, void 0, false, {
          fileName: "app/components/NewsletterSignup.jsx",
          lineNumber: 39,
          columnNumber: 31
        }, this) : "Sign up" }, void 0, false, {
          fileName: "app/components/NewsletterSignup.jsx",
          lineNumber: 38,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/NewsletterSignup.jsx",
        lineNumber: 36,
        columnNumber: 11
      }, this),
      result === "error" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-slate-400", children: fetcher.data.message || "Something went wrong" }, void 0, false, {
        fileName: "app/components/NewsletterSignup.jsx",
        lineNumber: 42,
        columnNumber: 34
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/NewsletterSignup.jsx",
      lineNumber: 35,
      columnNumber: 32
    }, this),
    result === "success" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Thanks for signing up!" }, void 0, false, {
      fileName: "app/components/NewsletterSignup.jsx",
      lineNumber: 46,
      columnNumber: 32
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/NewsletterSignup.jsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_s(NewsletterSignup, "2WHaGQTcUOgkXDaibwUgjUp1MBY=", false, function() {
  return [useFetcher];
});
_c = NewsletterSignup;
var NewsletterSignup_default = NewsletterSignup;
var _c;
$RefreshReg$(_c, "NewsletterSignup");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Layout.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Layout.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Layout.jsx"
  );
  import.meta.hot.lastModified = "1676636712000";
}
function Layout({
  isLoggedIn,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "flex justify-between max-w-5xl mx-auto p-8 items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-3xl font-mono", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/", children: "LearnCypress" }, void 0, false, {
        fileName: "app/components/Layout.jsx",
        lineNumber: 30,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Layout.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "flex gap-6 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/takeaways", className: "text-slate-300 hover:text-slate-200", children: "Takeaways" }, void 0, false, {
          fileName: "app/components/Layout.jsx",
          lineNumber: 35,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/Layout.jsx",
          lineNumber: 34,
          columnNumber: 13
        }, this),
        !isLoggedIn && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/login", className: "bg-blue-700 px-4 py-1 rounded-sm hover:bg-blue-600 border-2 border-blue-700 hover:border-blue-600", children: "Login" }, void 0, false, {
          fileName: "app/components/Layout.jsx",
          lineNumber: 40,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/Layout.jsx",
          lineNumber: 39,
          columnNumber: 29
        }, this),
        isLoggedIn && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "post", action: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "bg-blue-700 px-4 py-1 rounded-sm hover:bg-blue-600", children: "Logout" }, void 0, false, {
          fileName: "app/components/Layout.jsx",
          lineNumber: 46,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/Layout.jsx",
          lineNumber: 45,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/Layout.jsx",
          lineNumber: 44,
          columnNumber: 28
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Layout.jsx",
        lineNumber: 33,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Layout.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { children }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "mt-16 text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NewsletterSignup_default, {}, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 56,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c2 = Layout;
var Layout_default = Layout;
var _c2;
$RefreshReg$(_c2, "Layout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.jsx
var import_auth = __toESM(require_auth());

// app/styles/main.css
var main_default = "/build/_assets/main-5TQMAH3L.css";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-HIM4HGLW.css";

// app/root.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\root.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\root.jsx"
  );
}
var meta = () => ({
  charset: "utf-8",
  title: "Cypress Requests",
  viewport: "width=device-width,initial-scale=1"
});
var links = () => [{
  rel: "stylesheet",
  href: tailwind_default
}, {
  rel: "stylesheet",
  href: main_default
}, {
  rel: "icon",
  href: "/favicon.ico"
}];
function App() {
  _s2();
  const isLoggedIn = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 47,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { className: "bg-gradient-to-br from-slate-900 to-slate-800 h-screen text-slate-300", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Layout_default, { isLoggedIn, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 51,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 55,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 44,
    columnNumber: 10
  }, this);
}
_s2(App, "g7RG4Zs03JgwAWtnd456z3oZl9w=", false, function() {
  return [useLoaderData];
});
_c3 = App;
var _c3;
$RefreshReg$(_c3, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-MCI4RJIE.js.map
