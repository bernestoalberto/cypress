import {
  Auth_default,
  require_node,
  require_validation
} from "/build/_shared/chunk-SFJBVHVO.js";
import {
  require_auth
} from "/build/_shared/chunk-NL2O7T4N.js";
import "/build/_shared/chunk-L424PNLQ.js";
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
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/login.jsx
var import_node = __toESM(require_node());
var import_auth = __toESM(require_auth());
var import_validation = __toESM(require_validation());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\login.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\login.jsx"
  );
  import.meta.hot.lastModified = "1676636873000";
}
function LoginRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Auth_default, { mode: "login" }, void 0, false, {
    fileName: "app/routes/login.jsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = LoginRoute;
var login_default = LoginRoute;
var _c;
$RefreshReg$(_c, "LoginRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  login_default as default
};
//# sourceMappingURL=/build/routes/login-OP6XQELX.js.map
