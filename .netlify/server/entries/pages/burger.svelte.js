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
  default: () => Burger
});
var import_index_ee9fdf1a = __toModule(require("../../chunks/index-ee9fdf1a.js"));
const css$2 = {
  code: "button.svelte-hbdsxb.svelte-hbdsxb{position:absolute;left:0px;top:0px;margin:5px;z-index:10;background-color:Transparent;background-repeat:no-repeat;border:none;cursor:pointer;overflow:hidden;outline:none}svg.svelte-hbdsxb line.svelte-hbdsxb{stroke:currentColor;stroke-width:3}.open.svelte-hbdsxb #top.svelte-hbdsxb{transform:translate(10px, 0px) rotate(45deg)\n    }.open.svelte-hbdsxb #mid.svelte-hbdsxb{opacity:0\n    }.open.svelte-hbdsxb #bot.svelte-hbdsxb{transform:translate(-15px, 8px) rotate(-45deg)\n    }",
  map: null
};
const BurgerButton = (0, import_index_ee9fdf1a.c)(($$result, $$props, $$bindings, slots) => {
  let { open } = $$props;
  let { duration } = $$props;
  let { burgerColor } = $$props;
  let { menuColor } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.burgerColor === void 0 && $$bindings.burgerColor && burgerColor !== void 0)
    $$bindings.burgerColor(burgerColor);
  if ($$props.menuColor === void 0 && $$bindings.menuColor && menuColor !== void 0)
    $$bindings.menuColor(menuColor);
  $$result.css.add(css$2);
  return `<button style="${"transition: color " + (0, import_index_ee9fdf1a.e)(duration) + "s ease-in-out; color: " + (0, import_index_ee9fdf1a.e)(open ? menuColor : burgerColor) + ";"}" class="${["svelte-hbdsxb", open ? "open" : ""].join(" ").trim()}"><svg width="${"32"}" height="${"32"}" class="${"svelte-hbdsxb"}"><line id="${"top"}" x1="${"0"}" y1="${"9"}" x2="${"32"}" y2="${"9"}" style="${"transition: transform " + (0, import_index_ee9fdf1a.e)(duration) + "s ease-in-out, opacity " + (0, import_index_ee9fdf1a.e)(duration) + "s ease-in-out;"}" class="${"svelte-hbdsxb"}"></line><line id="${"mid"}" x1="${"0"}" y1="${"18.5"}" x2="${"32"}" y2="${"18.5"}" style="${"transition: transform " + (0, import_index_ee9fdf1a.e)(duration) + "s ease-in-out, opacity " + (0, import_index_ee9fdf1a.e)(duration) + "s ease-in-out;"}" class="${"svelte-hbdsxb"}"></line><line id="${"bot"}" x1="${"0"}" y1="${"28"}" x2="${"32"}" y2="${"28"}" style="${"transition: transform " + (0, import_index_ee9fdf1a.e)(duration) + "s ease-in-out, opacity " + (0, import_index_ee9fdf1a.e)(duration) + "s ease-in-out;"}" class="${"svelte-hbdsxb"}"></line></svg></button>`;
});
const css$1 = {
  code: "#container.svelte-1q8nmai{position:absolute;height:100vh;top:0px;overflow-y:auto}#menu.svelte-1q8nmai{text-align:left}",
  map: null
};
const SideMenu = (0, import_index_ee9fdf1a.c)(($$result, $$props, $$bindings, slots) => {
  let { open } = $$props;
  let { duration } = $$props;
  let { width } = $$props;
  let { padding } = $$props;
  let { paddingTop } = $$props;
  let { backgroundColor } = $$props;
  let { menuColor } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.paddingTop === void 0 && $$bindings.paddingTop && paddingTop !== void 0)
    $$bindings.paddingTop(paddingTop);
  if ($$props.backgroundColor === void 0 && $$bindings.backgroundColor && backgroundColor !== void 0)
    $$bindings.backgroundColor(backgroundColor);
  if ($$props.menuColor === void 0 && $$bindings.menuColor && menuColor !== void 0)
    $$bindings.menuColor(menuColor);
  $$result.css.add(css$1);
  return `<div id="${"container"}" style="${"background-color: " + (0, import_index_ee9fdf1a.e)(backgroundColor) + "; color: " + (0, import_index_ee9fdf1a.e)(menuColor) + "; width: " + (0, import_index_ee9fdf1a.e)(width) + "; left: " + (0, import_index_ee9fdf1a.e)(open ? "0px" : "-" + width) + "; transition: left " + (0, import_index_ee9fdf1a.e)(duration) + "s ease-in-out"}" class="${"svelte-1q8nmai"}"><div id="${"menu"}" style="${"padding: " + (0, import_index_ee9fdf1a.e)(padding) + "; padding-top: " + (0, import_index_ee9fdf1a.e)(paddingTop) + ";"}" class="${"svelte-1q8nmai"}">${slots.default ? slots.default({}) : ``}</div></div>`;
});
const BurgerMenu = (0, import_index_ee9fdf1a.c)(($$result, $$props, $$bindings, slots) => {
  let open = false;
  let { duration = 0.4 } = $$props;
  let { width = "300px" } = $$props;
  let { padding = "25px" } = $$props;
  let { paddingTop = "50px" } = $$props;
  let { backgroundColor = "rgb(1, 0, 74)" } = $$props;
  let { burgerColor = "rgb(18.4, 18.4, 18.4)" } = $$props;
  let { menuColor = "rgb(180, 180, 180)" } = $$props;
  let burgerProps = { duration, burgerColor, menuColor };
  let menuProps = {
    duration,
    width,
    padding,
    paddingTop,
    backgroundColor,
    menuColor
  };
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.paddingTop === void 0 && $$bindings.paddingTop && paddingTop !== void 0)
    $$bindings.paddingTop(paddingTop);
  if ($$props.backgroundColor === void 0 && $$bindings.backgroundColor && backgroundColor !== void 0)
    $$bindings.backgroundColor(backgroundColor);
  if ($$props.burgerColor === void 0 && $$bindings.burgerColor && burgerColor !== void 0)
    $$bindings.burgerColor(burgerColor);
  if ($$props.menuColor === void 0 && $$bindings.menuColor && menuColor !== void 0)
    $$bindings.menuColor(menuColor);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${(0, import_index_ee9fdf1a.v)(BurgerButton, "BurgerButton").$$render($$result, Object.assign(burgerProps, { open }), {
      open: ($$value) => {
        open = $$value;
        $$settled = false;
      }
    }, {})}

${(0, import_index_ee9fdf1a.v)(SideMenu, "SideMenu").$$render($$result, Object.assign(menuProps, { open }), {
      open: ($$value) => {
        open = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const css = {
  code: "h2.svelte-1glg354{color:white}.box.svelte-1glg354{width:100px;height:100px;background:black}",
  map: null
};
const Burger = (0, import_index_ee9fdf1a.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_ee9fdf1a.v)(BurgerMenu, "BurgerMenu").$$render($$result, {}, {}, {
    default: () => {
      return `<h2 class="${"svelte-1glg354"}">Home</h2>
	<h2 class="${"svelte-1glg354"}">About</h2>`;
    }
  })}

<h1 class="${"text"}">Hello GSAP is very moving!</h1>

<h2 class="${"svelte-1glg354"}">Check this out:
	https://answers.netlify.com/t/deploy-failed-build-script-returned-non-zero-exit-code-2/44263/2
</h2>

<br>
<br>

<div class="${"box svelte-1glg354"}"></div>`;
});
