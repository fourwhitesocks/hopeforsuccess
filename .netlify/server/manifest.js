var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  manifest: () => manifest
});
const manifest = {
  appDir: "_app",
  assets: new Set(["anns-back-yard.jpg", "boat-office.jpg", "favicon.png", "middlebass.jpg", "robots.txt", "svelte-welcome.png", "svelte-welcome.webp"]),
  _: {
    mime: { ".jpg": "image/jpeg", ".png": "image/png", ".txt": "text/plain", ".webp": "image/webp" },
    entry: { "file": "start-d7a7cade.js", "js": ["start-d7a7cade.js", "chunks/vendor-e526f11b.js"], "css": ["assets/vendor-8826ed58.css"] },
    nodes: [
      () => Promise.resolve().then(() => __toModule(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/5.js")))
    ],
    routes: [
      {
        type: "page",
        pattern: /^\/$/,
        params: null,
        path: "/",
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/burger\/?$/,
        params: null,
        path: "/burger",
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/about\/?$/,
        params: null,
        path: "/about",
        a: [0, 4],
        b: [1]
      },
      {
        type: "endpoint",
        pattern: /^\/todos\.json$/,
        params: null,
        load: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/todos/index.json.js")))
      },
      {
        type: "page",
        pattern: /^\/todos\/?$/,
        params: null,
        path: "/todos",
        a: [0, 5],
        b: [1]
      },
      {
        type: "endpoint",
        pattern: /^\/todos\/([^/]+?)\.json$/,
        params: (m) => ({ uid: m[1] }),
        load: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/todos/_uid_.json.js")))
      }
    ]
  }
};
