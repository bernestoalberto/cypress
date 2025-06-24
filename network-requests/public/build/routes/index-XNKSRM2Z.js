import {
  Takeaways_default,
  require_prisma
} from "/build/_shared/chunk-JDL4D2BH.js";
import {
  Link,
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
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/index.jsx
var import_prisma = __toESM(require_prisma());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\index.jsx"
  );
  import.meta.hot.lastModified = "1676636712000";
}
function Index() {
  _s();
  const takeways = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "text-center max-w-5xl mx-auto my-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "font-bold text-2xl my-4", children: "Learn Cypress" }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Cypress is an amazing end-to-end testing software and framework." }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Manage your key Cypress takeaways and concepts with our learning app." }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "text-center max-w-5xl mx-auto my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Takeaways_default, { items: takeways }, void 0, false, {
      fileName: "app/routes/index.jsx",
      lineNumber: 37,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/index.jsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/takeaways/new", className: "bg-blue-700 text-blue-50 rounded-sm px-8 py-4 text-lg hover:bg-blue-600", children: "+ Add a new takeaway" }, void 0, false, {
      fileName: "app/routes/index.jsx",
      lineNumber: 41,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/index.jsx",
      lineNumber: 40,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/index.jsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/index.jsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_s(Index, "cAGvmQE/8Cn7qE4M65B0m2EaOno=", false, function() {
  return [useLoaderData];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-XNKSRM2Z.js.map
