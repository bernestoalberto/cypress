import {
  require_client
} from "/build/_shared/chunk-VKPL4GB7.js";
import {
  RemixBrowser
} from "/build/_shared/chunk-L424PNLQ.js";
import {
  createHotContext
} from "/build/_shared/chunk-A5OIDWYU.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-DFC53E46.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-IRPDQIET.js";
import {
  require_react
} from "/build/_shared/chunk-KVWRS3UY.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/entry.client.jsx
var import_react2 = __toESM(require_react());
var import_client = __toESM(require_client());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\entry.client.jsx"
  );
  import.meta.hot.lastModified = "1676636712000";
}
function hydrate() {
  (0, import_react2.startTransition)(() => {
    (0, import_client.hydrateRoot)(
      document,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemixBrowser, {}, void 0, false, {
        fileName: "app/entry.client.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/entry.client.jsx",
        lineNumber: 20,
        columnNumber: 7
      }, this)
    );
  });
}
if (typeof requestIdleCallback === "function") {
  requestIdleCallback(hydrate);
} else {
  setTimeout(hydrate, 1);
}
//# sourceMappingURL=/build/entry.client-YKSC5JUS.js.map
