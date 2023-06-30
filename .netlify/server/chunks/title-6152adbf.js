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
  T: () => Title
});
var import_index_ee9fdf1a = __toModule(require("./index-ee9fdf1a.js"));
var index_svelte_svelte_type_style_lang = "";
var title_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-bikgha{font-weight:bolder;color:blue;font-size:3rem}",
  map: null
};
const Title = (0, import_index_ee9fdf1a.c)(($$result, $$props, $$bindings, slots) => {
  let { title = "SvelteKit Sandbox Site" } = $$props;
  let { email = "info@info.com" } = $$props;
  let { name = "name" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.email === void 0 && $$bindings.email && email !== void 0)
    $$bindings.email(email);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  $$result.css.add(css);
  return `
<div class="${"title"}"><h1 class="${"svelte-bikgha"}">${(0, import_index_ee9fdf1a.e)(title)}</h1>
	<h4>${(0, import_index_ee9fdf1a.e)(email)} ${(0, import_index_ee9fdf1a.e)(name)}</h4>
</div>`;
});
