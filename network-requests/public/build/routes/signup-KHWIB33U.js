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

// app/routes/signup.jsx
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
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\signup.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\signup.jsx"
  );
  import.meta.hot.lastModified = "1676636881000";
}
function SignupRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Auth_default, { mode: "signup" }, void 0, false, {
    fileName: "app/routes/signup.jsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = SignupRoute;
var signup_default = SignupRoute;
var _c;
$RefreshReg$(_c, "SignupRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  signup_default as default
};
//# sourceMappingURL=/build/routes/signup-KHWIB33U.js.map
