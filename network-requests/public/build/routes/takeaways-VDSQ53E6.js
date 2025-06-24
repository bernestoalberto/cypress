import {
  Takeaways_default,
  require_prisma
} from "/build/_shared/chunk-JDL4D2BH.js";
import {
  require_auth
} from "/build/_shared/chunk-NL2O7T4N.js";
import {
  Link,
  Outlet,
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

// app/routes/takeaways.jsx
var import_auth = __toESM(require_auth());
var import_prisma = __toESM(require_prisma());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\takeaways.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\takeaways.jsx"
  );
  import.meta.hot.lastModified = "1676636712000";
}
function TakewaysLayoutRoute() {
  _s();
  const takeaways = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/takeaways.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center text-3xl font-bold text-slate-400", children: "Your key takeaways" }, void 0, false, {
      fileName: "app/routes/takeaways.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-right my-8 max-w-2xl mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/takeaways/new", className: "border-blue-300 px-4 py-3 border-2 text-blue-300 hover:bg-blue-300 hover:text-blue-900", children: "+ Add a new takeaway" }, void 0, false, {
      fileName: "app/routes/takeaways.jsx",
      lineNumber: 35,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/takeaways.jsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    takeaways.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center my-16 text-xl", children: "You have no key takeaways yet!" }, void 0, false, {
      fileName: "app/routes/takeaways.jsx",
      lineNumber: 39,
      columnNumber: 34
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Takeaways_default, { items: takeaways }, void 0, false, {
      fileName: "app/routes/takeaways.jsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/takeaways.jsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_s(TakewaysLayoutRoute, "mLS+dR4IPcT1rDySBHMo9iqRDgs=", false, function() {
  return [useLoaderData];
});
_c = TakewaysLayoutRoute;
var takeaways_default = TakewaysLayoutRoute;
var _c;
$RefreshReg$(_c, "TakewaysLayoutRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  takeaways_default as default
};
//# sourceMappingURL=/build/routes/takeaways-VDSQ53E6.js.map
