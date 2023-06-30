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
  default: () => About,
  hydrate: () => hydrate,
  prerender: () => prerender,
  router: () => router
});
var import_index_ee9fdf1a = __toModule(require("../../chunks/index-ee9fdf1a.js"));
var import_title_6152adbf = __toModule(require("../../chunks/title-6152adbf.js"));
const browser = false;
const dev = false;
var about_svelte_svelte_type_style_lang = "";
const css = {
  code: ".hidden.svelte-2046kr{display:none}.content.svelte-2046kr{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}.photo.svelte-2046kr{display:grid;gap:1rem;grid-template-columns:repeat(3, minmax(0, 1fr));grid-auto-flow:column}img.svelte-2046kr{max-width:100%;height:auto}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const About = (0, import_index_ee9fdf1a.c)(($$result, $$props, $$bindings, slots) => {
  const obj = { name: "lhotse", email: "info@info.com" };
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>About</title>`, ""}`, ""}


${(0, import_index_ee9fdf1a.v)(import_title_6152adbf.T, "Title").$$render($$result, { title: "New title for About Page", obj }, {}, {})}

<div class="${"content svelte-2046kr"}"><h1>About this app</h1>

	<p>This is a <a href="${"https://kit.svelte.dev"}">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:
	</p>

	
	<pre>npm init svelte@next</pre>

	<p>The page you&#39;re looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don&#39;t need to load any JavaScript. Try viewing the page&#39;s source, or opening
		the devtools network panel and reloading.
	</p>

	<p>The <a href="${"/todos"}">TODOs</a> page illustrates SvelteKit&#39;s data loading and form handling. Try using
		it with JavaScript disabled!
	</p></div>



<form name="${"test"}" method="${"post"}" netlify-honeypot="${"bot-field"}" data-netlify="${"true"}"><p class="${"hidden svelte-2046kr"}"><label>Don\u2019t fill this out if you\u2019re human: <input name="${"test"}"></label></p>

	<p><label>Your Name: <input type="${"text"}" name="${"name"}"></label></p>
	<p><label>Your Email: <input type="${"email"}" name="${"email"}"></label></p>
	<p><label>Message: <textarea name="${"message"}"></textarea></label></p>
	<p><button type="${"submit"}">Send</button></p></form>

<section><h2>Image block</h2>
	<div class="${"photo svelte-2046kr"}"><img src="${"/anns-back-yard.jpg"}" alt="${"yard"}" class="${"svelte-2046kr"}">

		<img src="${"/boat-office.jpg"}" width="${""}" alt="${"boat office"}" class="${"svelte-2046kr"}">
		<img src="${"/middlebass.jpg"}" alt="${"middlebass"}" class="${"svelte-2046kr"}"></div>
</section>`;
});
