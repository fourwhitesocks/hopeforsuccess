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
  default: () => _layout
});
var import_index_ee9fdf1a = __toModule(require("../../chunks/index-ee9fdf1a.js"));
const getStores = () => {
  const stores = (0, import_index_ee9fdf1a.g)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var logo = "/_app/assets/svelte-logo-87df40b8.svg";
const css$1 = {
  code: "header.svelte-1twf6mk.svelte-1twf6mk{display:flex;justify-content:space-between}.corner.svelte-1twf6mk.svelte-1twf6mk{width:3em;height:3em}.corner.svelte-1twf6mk a.svelte-1twf6mk{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.corner.svelte-1twf6mk img.svelte-1twf6mk{width:2em;height:2em;object-fit:contain}nav.svelte-1twf6mk.svelte-1twf6mk{display:flex;justify-content:center;--background:rgba(255, 255, 255, 0.7)}svg.svelte-1twf6mk.svelte-1twf6mk{width:2em;height:3em;display:block}path.svelte-1twf6mk.svelte-1twf6mk{fill:var(--background)}ul.svelte-1twf6mk.svelte-1twf6mk{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-1twf6mk.svelte-1twf6mk{position:relative;height:100%}li.active.svelte-1twf6mk.svelte-1twf6mk::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--accent-color)}nav.svelte-1twf6mk a.svelte-1twf6mk{display:flex;height:100%;align-items:center;padding:0 1em;color:var(--heading-color);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:10%;text-decoration:none;transition:color 0.2s linear}a.svelte-1twf6mk.svelte-1twf6mk:hover{color:var(--accent-color)}",
  map: null
};
const Header = (0, import_index_ee9fdf1a.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_ee9fdf1a.a)(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header class="${"svelte-1twf6mk"}"><div class="${"corner svelte-1twf6mk"}"><a href="${"https://kit.svelte.dev"}" class="${"svelte-1twf6mk"}"><img${(0, import_index_ee9fdf1a.b)("src", logo, 0)} alt="${"SvelteKit"}" class="${"svelte-1twf6mk"}"></a></div>

	<nav class="${"svelte-1twf6mk"}"><svg viewBox="${"0 0 2 3"}" aria-hidden="${"true"}" class="${"svelte-1twf6mk"}"><path d="${"M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"}" class="${"svelte-1twf6mk"}"></path></svg>
		<ul class="${"svelte-1twf6mk"}"><li class="${["svelte-1twf6mk", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-1twf6mk"}">Home</a></li>
			<li class="${["svelte-1twf6mk", $page.url.pathname === "/about" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/about"}" class="${"svelte-1twf6mk"}">About</a></li>
			<li class="${["svelte-1twf6mk", $page.url.pathname === "/todos" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/todos"}" class="${"svelte-1twf6mk"}">Todos</a></li>

			<li class="${["svelte-1twf6mk", $page.url.pathname === "/burger" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/burger"}" class="${"svelte-1twf6mk"}">Burger</a></li></ul>
		<svg viewBox="${"0 0 2 3"}" aria-hidden="${"true"}" class="${"svelte-1twf6mk"}"><path d="${"M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"}" class="${"svelte-1twf6mk"}"></path></svg></nav>

	<div class="${"corner svelte-1twf6mk"}"></div>
</header>`;
});
const css = {
  code: "main.svelte-1izrdc8.svelte-1izrdc8{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:1024px;margin:0 auto;box-sizing:border-box}footer.svelte-1izrdc8.svelte-1izrdc8{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:40px}footer.svelte-1izrdc8 a.svelte-1izrdc8{font-weight:bold}@media(min-width: 480px){footer.svelte-1izrdc8.svelte-1izrdc8{padding:40px 0}}",
  map: null
};
const _layout = (0, import_index_ee9fdf1a.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_ee9fdf1a.v)(Header, "Header").$$render($$result, {}, {}, {})}

<main class="${"svelte-1izrdc8"}">${slots.default ? slots.default({}) : ``}</main>

<footer class="${"svelte-1izrdc8"}"><p>visit <a href="${"https://kit.svelte.dev"}" class="${"svelte-1izrdc8"}">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>`;
});
