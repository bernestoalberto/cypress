var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "stream";
import { Response as Response2 } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          let body = new PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response2(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 82,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response2(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "@remix-run/react";

// app/components/Layout.jsx
import { Form, Link } from "@remix-run/react";

// app/components/NewsletterSignup.jsx
import { useFetcher } from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
function NewsletterSignup() {
  let fetcher = useFetcher(), isSubmitting = fetcher.state === "submitting", result;
  return fetcher.data && fetcher.data.status !== 201 && (result = "error"), fetcher.data && fetcher.data.status === 201 && (result = "success"), /* @__PURE__ */ jsxDEV2("div", { children: [
    result !== "success" && /* @__PURE__ */ jsxDEV2(fetcher.Form, { method: "post", action: "/newsletter", children: [
      /* @__PURE__ */ jsxDEV2("p", { children: [
        /* @__PURE__ */ jsxDEV2(
          "input",
          {
            type: "email",
            name: "email",
            placeholder: "email@example.com",
            className: "px-2 py-1 rounded-l-sm text-slate-900",
            "data-cy": "newsletter-email"
          },
          void 0,
          !1,
          {
            fileName: "app/components/NewsletterSignup.jsx",
            lineNumber: 22,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV2(
          "button",
          {
            type: "submit",
            disabled: isSubmitting,
            className: "px-3 py-1 text-white bg-blue-500 rounded-r-sm",
            "data-cy": "newsletter-submit",
            children: isSubmitting ? /* @__PURE__ */ jsxDEV2("span", { className: "loader" }, void 0, !1, {
              fileName: "app/components/NewsletterSignup.jsx",
              lineNumber: 35,
              columnNumber: 31
            }, this) : "Sign up"
          },
          void 0,
          !1,
          {
            fileName: "app/components/NewsletterSignup.jsx",
            lineNumber: 29,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/NewsletterSignup.jsx",
        lineNumber: 21,
        columnNumber: 11
      }, this),
      result === "error" && /* @__PURE__ */ jsxDEV2("p", { className: "mt-2 text-slate-400", children: fetcher.data.message || "Something went wrong" }, void 0, !1, {
        fileName: "app/components/NewsletterSignup.jsx",
        lineNumber: 39,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NewsletterSignup.jsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    result === "success" && /* @__PURE__ */ jsxDEV2("p", { children: "Thanks for signing up!" }, void 0, !1, {
      fileName: "app/components/NewsletterSignup.jsx",
      lineNumber: 45,
      columnNumber: 32
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/NewsletterSignup.jsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
var NewsletterSignup_default = NewsletterSignup;

// app/components/Layout.jsx
import { Fragment, jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function Layout({ isLoggedIn, children }) {
  return /* @__PURE__ */ jsxDEV3(Fragment, { children: [
    /* @__PURE__ */ jsxDEV3("header", { className: "flex justify-between max-w-5xl mx-auto p-8 items-center", children: [
      /* @__PURE__ */ jsxDEV3("div", { className: "text-3xl font-mono", children: /* @__PURE__ */ jsxDEV3(Link, { to: "/", children: "LearnCypress" }, void 0, !1, {
        fileName: "app/components/Layout.jsx",
        lineNumber: 9,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Layout.jsx",
        lineNumber: 8,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("nav", { children: /* @__PURE__ */ jsxDEV3("ul", { className: "flex gap-6 items-center", children: [
        /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3(
          Link,
          {
            to: "/takeaways",
            className: "text-slate-300 hover:text-slate-200",
            children: "Takeaways"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Layout.jsx",
            lineNumber: 14,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Layout.jsx",
          lineNumber: 13,
          columnNumber: 13
        }, this),
        !isLoggedIn && /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3(
          Link,
          {
            to: "/login",
            className: "bg-blue-700 px-4 py-1 rounded-sm hover:bg-blue-600 border-2 border-blue-700 hover:border-blue-600",
            children: "Login"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Layout.jsx",
            lineNumber: 23,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Layout.jsx",
          lineNumber: 22,
          columnNumber: 15
        }, this),
        isLoggedIn && /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3(Form, { method: "post", action: "/logout", children: /* @__PURE__ */ jsxDEV3("button", { className: "bg-blue-700 px-4 py-1 rounded-sm hover:bg-blue-600", children: "Logout" }, void 0, !1, {
          fileName: "app/components/Layout.jsx",
          lineNumber: 34,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/Layout.jsx",
          lineNumber: 33,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/Layout.jsx",
          lineNumber: 32,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Layout.jsx",
        lineNumber: 12,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Layout.jsx",
        lineNumber: 11,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("main", { children }, void 0, !1, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("footer", { className: "mt-16 text-center", children: /* @__PURE__ */ jsxDEV3(NewsletterSignup_default, {}, void 0, !1, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 45,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
var Layout_default = Layout;

// app/data/auth.server.js
import { hash, compare } from "bcryptjs";
import { createCookieSessionStorage, json, redirect } from "@remix-run/node";

// app/data/prisma.server.js
import { PrismaClient } from "@prisma/client";
var prisma;
global.__db || (global.__db = new PrismaClient(), global.__db.$connect()), prisma = global.__db;

// app/data/auth.server.js
var SESSION_SECRET = process.env.SESSION_SECRET, sessionStorage = createCookieSessionStorage({
  cookie: {
    secure: !1,
    secrets: [SESSION_SECRET],
    sameSite: "lax",
    maxAge: 30 * 24 * 60 * 60,
    // 30 days
    httpOnly: !0
  }
});
async function createUserSession(userId, redirectPath) {
  let session = await sessionStorage.getSession();
  return session.set("userId", userId), redirect(redirectPath, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session)
    }
  });
}
async function getUserFromSession(request) {
  let userId = (await sessionStorage.getSession(
    request.headers.get("Cookie")
  )).get("userId");
  return userId || null;
}
async function destroyUserSession(request) {
  let session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );
  return redirect("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}
async function requireUserSession(request) {
  let userId = await getUserFromSession(request);
  if (!userId)
    throw redirect("/login");
  return userId;
}
async function signup({ email, password }) {
  if (await prisma.user.findFirst({ where: { email } }))
    return json({ status: 409, statusText: "User exists already." });
  let passwordHash = await hash(password, 12), user = await prisma.user.create({
    data: { email, password: passwordHash }
  });
  return createUserSession(user.id, "/takeaways");
}
async function login({ email, password }) {
  let existingUser = await prisma.user.findFirst({ where: { email } });
  return existingUser ? await compare(password, existingUser.password) ? createUserSession(existingUser.id, "/takeaways") : json({ status: 400, statusText: "Invalid credentials (pw)." }) : json({ status: 400, statusText: "Invalid credentials." });
}

// app/styles/main.css
var main_default = "/build/_assets/main-5TQMAH3L.css";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-HIM4HGLW.css";

// app/root.jsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var meta = () => ({
  charset: "utf-8",
  title: "Cypress Requests",
  viewport: "width=device-width,initial-scale=1"
}), links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: main_default },
  { rel: "icon", href: "/favicon.ico" }
];
function App() {
  let isLoggedIn = useLoaderData();
  return /* @__PURE__ */ jsxDEV4("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV4("head", { children: [
      /* @__PURE__ */ jsxDEV4(Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("body", { className: "bg-gradient-to-br from-slate-900 to-slate-800 h-screen text-slate-300", children: [
      /* @__PURE__ */ jsxDEV4(Layout_default, { isLoggedIn, children: /* @__PURE__ */ jsxDEV4(Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 39,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}
async function loader({ request }) {
  return !!await getUserFromSession(request);
}

// app/routes/newsletter.js
var newsletter_exports = {};
__export(newsletter_exports, {
  action: () => action,
  loader: () => loader2
});
import { json as json2 } from "@remix-run/node";

// app/util/validation.server.js
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function isValidPassword(password) {
  return password.length >= 6;
}

// app/util/wait.js
function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

// app/data/newsletter.server.js
async function addNewsletterContact(email) {
  if (!isValidEmail(email))
    throw new Error("Invalid email address.");
  let existingContact = await prisma.newsletterSignup.findUnique({
    where: {
      email
    }
  });
  if (await wait(2e3), existingContact)
    throw new Error("This email is already subscribed.");
  await prisma.newsletterSignup.create({
    data: {
      email
    }
  });
}

// app/util/errors.js
var BadRequestErrorResponse = class extends Response {
  constructor(message, statusText = "Bad request") {
    super(JSON.stringify({ status: 400, message }), {
      headers: {
        "Content-Type": "application/json"
      },
      status: 400,
      statusText
    });
  }
};

// app/routes/newsletter.js
async function action({ request }) {
  if (request.method !== "POST")
    return new BadRequestErrorResponse("HTTP method not allowed.");
  let email = (await request.formData()).get("email");
  try {
    await addNewsletterContact(email);
  } catch (error) {
    return json2(
      { message: error.message },
      {
        status: 400,
        statusText: "Failed to create contact"
      }
    );
  }
  return json2(
    { status: 201 },
    // this is required because useFetcher does not expose the response object
    {
      status: 201,
      statusText: "Added newsletter contact."
    }
  );
}
function loader2() {
  throw new BadRequestErrorResponse("HTTP method not allowed.");
}

// app/routes/takeaways.jsx
var takeaways_exports = {};
__export(takeaways_exports, {
  default: () => takeaways_default,
  loader: () => loader3
});
import { Link as Link2, Outlet as Outlet2, useLoaderData as useLoaderData2 } from "@remix-run/react";

// app/components/Takeaways.jsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function Takeaways({ items }) {
  return /* @__PURE__ */ jsxDEV5("ul", { className: "grid grid-cols-2 gap-8 max-w-2xl mx-auto my-12", children: items.map((item) => /* @__PURE__ */ jsxDEV5("li", { "data-cy": "takeaway-item", children: /* @__PURE__ */ jsxDEV5("article", { className: "bg-slate-800 rounded-md p-8", children: [
    /* @__PURE__ */ jsxDEV5("h3", { className: "font-bold text-lg mb-2 text-blue-400", children: item.title }, void 0, !1, {
      fileName: "app/components/Takeaways.jsx",
      lineNumber: 7,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV5("p", { className: "text-slate-400", children: item.body }, void 0, !1, {
      fileName: "app/components/Takeaways.jsx",
      lineNumber: 8,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Takeaways.jsx",
    lineNumber: 6,
    columnNumber: 11
  }, this) }, item.id, !1, {
    fileName: "app/components/Takeaways.jsx",
    lineNumber: 5,
    columnNumber: 9
  }, this)) }, void 0, !1, {
    fileName: "app/components/Takeaways.jsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}
var Takeaways_default = Takeaways;

// app/routes/takeaways.jsx
import { Fragment as Fragment2, jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function TakewaysLayoutRoute() {
  let takeaways = useLoaderData2();
  return /* @__PURE__ */ jsxDEV6(Fragment2, { children: [
    /* @__PURE__ */ jsxDEV6(Outlet2, {}, void 0, !1, {
      fileName: "app/routes/takeaways.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("h1", { className: "text-center text-3xl font-bold text-slate-400", children: "Your key takeaways" }, void 0, !1, {
      fileName: "app/routes/takeaways.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { className: "text-right my-8 max-w-2xl mx-auto", children: /* @__PURE__ */ jsxDEV6(
      Link2,
      {
        to: "/takeaways/new",
        className: "border-blue-300 px-4 py-3 border-2 text-blue-300 hover:bg-blue-300 hover:text-blue-900",
        children: "+ Add a new takeaway"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/takeaways.jsx",
        lineNumber: 17,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/takeaways.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    takeaways.length === 0 && /* @__PURE__ */ jsxDEV6("p", { className: "text-center my-16 text-xl", children: "You have no key takeaways yet!" }, void 0, !1, {
      fileName: "app/routes/takeaways.jsx",
      lineNumber: 24,
      columnNumber: 34
    }, this),
    /* @__PURE__ */ jsxDEV6(Takeaways_default, { items: takeaways }, void 0, !1, {
      fileName: "app/routes/takeaways.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/takeaways.jsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
var takeaways_default = TakewaysLayoutRoute;
async function loader3({ request }) {
  return await requireUserSession(request), prisma.takeaway.findMany();
}

// app/routes/logout.js
var logout_exports = {};
__export(logout_exports, {
  action: () => action2
});
function action2({ request }) {
  if (request.method !== "POST")
    throw new BadRequestErrorResponse("HTTP method not allowed.");
  return destroyUserSession(request);
}

// app/routes/signup.jsx
var signup_exports = {};
__export(signup_exports, {
  action: () => action3,
  default: () => signup_default
});
import { json as json3 } from "@remix-run/node";

// app/components/Auth.jsx
import { Form as Form2, Link as Link3, useActionData } from "@remix-run/react";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function Auth({ mode: mode2 }) {
  let validationData = useActionData();
  return /* @__PURE__ */ jsxDEV7(
    Form2,
    {
      method: "post",
      action: `/${mode2}`,
      className: "bg-slate-800 px-4 rounded-md my-4 max-w-lg mx-auto p-4",
      children: [
        /* @__PURE__ */ jsxDEV7("p", { children: [
          /* @__PURE__ */ jsxDEV7(
            "label",
            {
              htmlFor: "email",
              className: "font-semibold block mb-1 text-slate-400",
              children: "Email"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Auth.jsx",
              lineNumber: 13,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV7(
            "input",
            {
              type: "email",
              id: "email",
              name: "email",
              className: "mb-2 w-full rounded-sm text-lg px-2 py-1 bg-slate-400 text-slate-900",
              "data-cy": "auth-email"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Auth.jsx",
              lineNumber: 19,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Auth.jsx",
          lineNumber: 12,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV7("p", { children: [
          /* @__PURE__ */ jsxDEV7(
            "label",
            {
              htmlFor: "password",
              className: "font-semibold block mb-1 text-slate-400",
              children: "Password"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Auth.jsx",
              lineNumber: 28,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV7(
            "input",
            {
              type: "password",
              id: "password",
              name: "password",
              required: !0,
              minLength: 6,
              className: "mb-2 w-full rounded-sm text-lg px-2 py-1 bg-slate-400 text-slate-900",
              "data-cy": "auth-password"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Auth.jsx",
              lineNumber: 34,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Auth.jsx",
          lineNumber: 27,
          columnNumber: 7
        }, this),
        validationData && /* @__PURE__ */ jsxDEV7("p", { className: "text-pink-300", children: validationData.statusText }, void 0, !1, {
          fileName: "app/components/Auth.jsx",
          lineNumber: 44,
          columnNumber: 26
        }, this),
        /* @__PURE__ */ jsxDEV7("p", { className: "flex justify-end mt-2 gap-4 items-center", children: [
          /* @__PURE__ */ jsxDEV7(
            Link3,
            {
              to: mode2 === "login" ? "/signup" : "/login",
              className: "text-slate-400 hover:text-slate-500",
              children: mode2 === "login" ? "Create a new account" : "Log in with existing account"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Auth.jsx",
              lineNumber: 46,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV7(
            "button",
            {
              type: "submit",
              className: "bg-blue-600 px-5 py-1 rounded-sm text-white hover:bg-blue-500",
              "data-cy": "auth-submit",
              children: mode2 === "login" ? "Login" : "Create Account"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Auth.jsx",
              lineNumber: 54,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Auth.jsx",
          lineNumber: 45,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Auth.jsx",
      lineNumber: 7,
      columnNumber: 5
    },
    this
  );
}
var Auth_default = Auth;

// app/routes/signup.jsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function SignupRoute() {
  return /* @__PURE__ */ jsxDEV8(Auth_default, { mode: "signup" }, void 0, !1, {
    fileName: "app/routes/signup.jsx",
    lineNumber: 8,
    columnNumber: 10
  }, this);
}
var signup_default = SignupRoute;
async function action3({ request }) {
  let formData = await request.formData(), credentials = Object.fromEntries(formData);
  return !isValidEmail(credentials.email) || !isValidPassword(credentials.password) ? json3({ message: "Invalid credentials entered." }, { status: 400 }) : signup(credentials);
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader4
});
import { Link as Link4, useLoaderData as useLoaderData3 } from "@remix-run/react";
import { Fragment as Fragment3, jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
function Index() {
  let takeways = useLoaderData3();
  return /* @__PURE__ */ jsxDEV9(Fragment3, { children: [
    /* @__PURE__ */ jsxDEV9("section", { className: "text-center max-w-5xl mx-auto my-4", children: [
      /* @__PURE__ */ jsxDEV9("h1", { className: "font-bold text-2xl my-4", children: "Learn Cypress" }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV9("p", { children: "Cypress is an amazing end-to-end testing software and framework." }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV9("p", { children: "Manage your key Cypress takeaways and concepts with our learning app." }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 13,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV9("section", { className: "text-center max-w-5xl mx-auto my-4", children: /* @__PURE__ */ jsxDEV9(Takeaways_default, { items: takeways }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 18,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV9("section", { children: /* @__PURE__ */ jsxDEV9("p", { className: "text-center", children: /* @__PURE__ */ jsxDEV9(Link4, { to: "/takeaways/new", className: "bg-blue-700 text-blue-50 rounded-sm px-8 py-4 text-lg hover:bg-blue-600", children: "+ Add a new takeaway" }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 22,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 21,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
function loader4() {
  return prisma.takeaway.findMany({ take: 2 });
}

// app/routes/login.jsx
var login_exports = {};
__export(login_exports, {
  action: () => action4,
  default: () => login_default
});
import { json as json4 } from "@remix-run/node";
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
function LoginRoute() {
  return /* @__PURE__ */ jsxDEV10(Auth_default, { mode: "login" }, void 0, !1, {
    fileName: "app/routes/login.jsx",
    lineNumber: 8,
    columnNumber: 10
  }, this);
}
var login_default = LoginRoute;
async function action4({ request }) {
  let formData = await request.formData(), credentials = Object.fromEntries(formData);
  return !isValidEmail(credentials.email) || !isValidPassword(credentials.password) ? json4({ message: "Invalid credentials entered." }, { status: 400 }) : login(credentials);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-YKSC5JUS.js", imports: ["/build/_shared/chunk-VKPL4GB7.js", "/build/_shared/chunk-L424PNLQ.js", "/build/_shared/chunk-A5OIDWYU.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-DFC53E46.js", "/build/_shared/chunk-IRPDQIET.js", "/build/_shared/chunk-KVWRS3UY.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-MCI4RJIE.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: "index", index: void 0, caseSensitive: void 0, module: "/build/routes/index-XNKSRM2Z.js", imports: ["/build/_shared/chunk-JDL4D2BH.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-OP6XQELX.js", imports: ["/build/_shared/chunk-SFJBVHVO.js", "/build/_shared/chunk-NL2O7T4N.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-MVG2CT2K.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/newsletter": { id: "routes/newsletter", parentId: "root", path: "newsletter", index: void 0, caseSensitive: void 0, module: "/build/routes/newsletter-EAJOEBGC.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/signup": { id: "routes/signup", parentId: "root", path: "signup", index: void 0, caseSensitive: void 0, module: "/build/routes/signup-KHWIB33U.js", imports: ["/build/_shared/chunk-SFJBVHVO.js", "/build/_shared/chunk-NL2O7T4N.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/takeaways": { id: "routes/takeaways", parentId: "root", path: "takeaways", index: void 0, caseSensitive: void 0, module: "/build/routes/takeaways-VDSQ53E6.js", imports: ["/build/_shared/chunk-JDL4D2BH.js", "/build/_shared/chunk-NL2O7T4N.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "c8d63e62", hmr: { runtime: "/build/_shared\\chunk-A5OIDWYU.js", timestamp: 1750786650431 }, url: "/build/manifest-C8D63E62.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/newsletter": {
    id: "routes/newsletter",
    parentId: "root",
    path: "newsletter",
    index: void 0,
    caseSensitive: void 0,
    module: newsletter_exports
  },
  "routes/takeaways": {
    id: "routes/takeaways",
    parentId: "root",
    path: "takeaways",
    index: void 0,
    caseSensitive: void 0,
    module: takeaways_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/signup": {
    id: "routes/signup",
    parentId: "root",
    path: "signup",
    index: void 0,
    caseSensitive: void 0,
    module: signup_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: "index",
    index: void 0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
