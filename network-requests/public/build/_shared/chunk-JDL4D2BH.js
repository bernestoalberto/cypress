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

// empty-module:../data/prisma.server
var require_prisma = __commonJS({
  "empty-module:../data/prisma.server"(exports, module) {
    module.exports = {};
  }
});

// app/components/Takeaways.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Takeaways.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Takeaways.jsx"
  );
  import.meta.hot.lastModified = "1676636712000";
}
function Takeaways({
  items
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "grid grid-cols-2 gap-8 max-w-2xl mx-auto my-12", children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { "data-cy": "takeaway-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "bg-slate-800 rounded-md p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-bold text-lg mb-2 text-blue-400", children: item.title }, void 0, false, {
      fileName: "app/components/Takeaways.jsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-slate-400", children: item.body }, void 0, false, {
      fileName: "app/components/Takeaways.jsx",
      lineNumber: 28,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Takeaways.jsx",
    lineNumber: 26,
    columnNumber: 11
  }, this) }, item.id, false, {
    fileName: "app/components/Takeaways.jsx",
    lineNumber: 25,
    columnNumber: 26
  }, this)) }, void 0, false, {
    fileName: "app/components/Takeaways.jsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = Takeaways;
var Takeaways_default = Takeaways;
var _c;
$RefreshReg$(_c, "Takeaways");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Takeaways_default,
  require_prisma
};
//# sourceMappingURL=/build/_shared/chunk-JDL4D2BH.js.map
