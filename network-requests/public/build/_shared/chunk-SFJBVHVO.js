import {
  Form,
  Link,
  useActionData
} from "/build/_shared/chunk-L424PNLQ.js";
import {
  createHotContext
} from "/build/_shared/chunk-A5OIDWYU.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-IRPDQIET.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// empty-module:../util/validation.server
var require_validation = __commonJS({
  "empty-module:../util/validation.server"(exports, module) {
    module.exports = {};
  }
});

// app/components/Auth.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Auth.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Auth.jsx"
  );
  import.meta.hot.lastModified = "1676636712000";
}
function Auth({
  mode
}) {
  _s();
  const validationData = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", action: `/${mode}`, className: "bg-slate-800 px-4 rounded-md my-4 max-w-lg mx-auto p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "font-semibold block mb-1 text-slate-400", children: "Email" }, void 0, false, {
        fileName: "app/components/Auth.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", id: "email", name: "email", className: "mb-2 w-full rounded-sm text-lg px-2 py-1 bg-slate-400 text-slate-900", "data-cy": "auth-email" }, void 0, false, {
        fileName: "app/components/Auth.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Auth.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", className: "font-semibold block mb-1 text-slate-400", children: "Password" }, void 0, false, {
        fileName: "app/components/Auth.jsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "password", id: "password", name: "password", required: true, minLength: 6, className: "mb-2 w-full rounded-sm text-lg px-2 py-1 bg-slate-400 text-slate-900", "data-cy": "auth-password" }, void 0, false, {
        fileName: "app/components/Auth.jsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Auth.jsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    validationData && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-pink-300", children: validationData.statusText }, void 0, false, {
      fileName: "app/components/Auth.jsx",
      lineNumber: 41,
      columnNumber: 26
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "flex justify-end mt-2 gap-4 items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: mode === "login" ? "/signup" : "/login", className: "text-slate-400 hover:text-slate-500", children: mode === "login" ? "Create a new account" : "Log in with existing account" }, void 0, false, {
        fileName: "app/components/Auth.jsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "bg-blue-600 px-5 py-1 rounded-sm text-white hover:bg-blue-500", "data-cy": "auth-submit", children: mode === "login" ? "Login" : "Create Account" }, void 0, false, {
        fileName: "app/components/Auth.jsx",
        lineNumber: 46,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Auth.jsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Auth.jsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_s(Auth, "ZAnoqTKTrHJfdaS2Y+vY2vZsnTQ=", false, function() {
  return [useActionData];
});
_c = Auth;
var Auth_default = Auth;
var _c;
$RefreshReg$(_c, "Auth");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  require_node,
  Auth_default,
  require_validation
};
//# sourceMappingURL=/build/_shared/chunk-SFJBVHVO.js.map
