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
  default: () => Routes,
  prerender: () => prerender
});
var import_index_ee9fdf1a = __toModule(require("../../chunks/index-ee9fdf1a.js"));
var import_title_6152adbf = __toModule(require("../../chunks/title-6152adbf.js"));
var import_cookie = __toModule(require("cookie"));
const subscriber_queue = [];
function writable(value, start = import_index_ee9fdf1a.n) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if ((0, import_index_ee9fdf1a.d)(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = import_index_ee9fdf1a.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_ee9fdf1a.n;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map((_, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i]));
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = (0, import_index_ee9fdf1a.f)();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = (0, import_index_ee9fdf1a.f)();
      cancel_task = false;
      task = (0, import_index_ee9fdf1a.l)((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now2 - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store.set(value = next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token)
          fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
const css$1 = {
  code: ".counter.svelte-ltn89m.svelte-ltn89m{display:flex;border-top:1px solid rgba(0, 0, 0, 0.1);border-bottom:1px solid rgba(0, 0, 0, 0.1);margin:1rem 0}.counter.svelte-ltn89m button.svelte-ltn89m{width:2em;padding:0;display:flex;align-items:center;justify-content:center;border:0;background-color:transparent;color:var(--text-color);font-size:2rem}.counter.svelte-ltn89m button.svelte-ltn89m:hover{background-color:var(--secondary-color)}svg.svelte-ltn89m.svelte-ltn89m{width:25%;height:25%}path.svelte-ltn89m.svelte-ltn89m{vector-effect:non-scaling-stroke;stroke-width:2px;stroke:var(--text-color)}.counter-viewport.svelte-ltn89m.svelte-ltn89m{width:8em;height:4em;overflow:hidden;text-align:center;position:relative}.counter-viewport.svelte-ltn89m strong.svelte-ltn89m{position:absolute;display:block;width:100%;height:100%;font-weight:400;color:var(--accent-color);font-size:4rem;display:flex;align-items:center;justify-content:center}.counter-digits.svelte-ltn89m.svelte-ltn89m{position:absolute;width:100%;height:100%}",
  map: null
};
function modulo(n, m) {
  return (n % m + m) % m;
}
const Counter = (0, import_index_ee9fdf1a.c)(($$result, $$props, $$bindings, slots) => {
  let offset;
  let $displayed_count, $$unsubscribe_displayed_count;
  let count = 0;
  const displayed_count = spring();
  $$unsubscribe_displayed_count = (0, import_index_ee9fdf1a.a)(displayed_count, (value) => $displayed_count = value);
  $$result.css.add(css$1);
  {
    displayed_count.set(count);
  }
  offset = modulo($displayed_count, 1);
  $$unsubscribe_displayed_count();
  return `<div class="${"counter svelte-ltn89m"}"><button aria-label="${"Decrease the counter by one"}" class="${"svelte-ltn89m"}"><svg aria-hidden="${"true"}" viewBox="${"0 0 1 1"}" class="${"svelte-ltn89m"}"><path d="${"M0,0.5 L1,0.5"}" class="${"svelte-ltn89m"}"></path></svg></button>

	<div class="${"counter-viewport svelte-ltn89m"}"><div class="${"counter-digits svelte-ltn89m"}" style="${"transform: translate(0, " + (0, import_index_ee9fdf1a.e)(100 * offset) + "%)"}"><strong style="${"top: -100%"}" aria-hidden="${"true"}" class="${"svelte-ltn89m"}">${(0, import_index_ee9fdf1a.e)(Math.floor($displayed_count + 1))}</strong>
			<strong class="${"svelte-ltn89m"}">${(0, import_index_ee9fdf1a.e)(Math.floor($displayed_count))}</strong></div></div>

	<button aria-label="${"Increase the counter by one"}" class="${"svelte-ltn89m"}"><svg aria-hidden="${"true"}" viewBox="${"0 0 1 1"}" class="${"svelte-ltn89m"}"><path d="${"M0,0.5 L1,0.5 M0.5,0 L0.5,1"}" class="${"svelte-ltn89m"}"></path></svg></button>
</div>`;
});
var fields = [
  {
    title: "Friday Morning!",
    author: "Betty",
    image: "https://justfields.com/storage/projects/7M5raAn9/guinea-pig-2400.jpg",
    post_text: "<div>This is my sample content!&nbsp; I'm <strong>BOLD.</strong></div><ul><li>beer</li><li>whiskey</li><li>wine</li><li>chocolate</li></ul><blockquote>TGIF</blockquote><div><br>Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.</div>"
  },
  {
    title: "Saturday Morning",
    author: "Fred",
    image: "https://justfields.com/storage/projects/7M5raAn9/opportunist woodpecker-op.jpg",
    post_text: "<div>This is my sample content!&nbsp; I'm <strong>BOLD.</strong></div><ul><li>beer</li><li>whiskey</li><li>wine</li><li>chocolate</li></ul><blockquote>TGIF</blockquote><div><br>Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.</div>"
  }
];
var dogs = [
  {
    species: "Boxer",
    age: "12",
    fav_food: "biscuits"
  },
  {
    species: "Dobe",
    age: "5",
    fav_food: "fish"
  },
  {
    species: "Shephard",
    age: "2",
    fav_food: "Cheese"
  },
  {
    species: "Border",
    age: "2",
    fav_food: "fish"
  },
  {
    species: "Husky",
    age: "4",
    fav_food: "Hot dogs"
  },
  {
    species: "Corgi",
    age: "2",
    fav_food: "people food"
  }
];
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-1r4m5ow.svelte-1r4m5ow{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1}h1.svelte-1r4m5ow.svelte-1r4m5ow{width:100%;font-size:3rem}h2.svelte-1r4m5ow.svelte-1r4m5ow{font-weight:400;font-size:2rem}.welcome.svelte-1r4m5ow.svelte-1r4m5ow{position:relative;width:100%;height:0;padding:0 0 calc(100% * 495 / 2048) 0}.welcome.svelte-1r4m5ow img.svelte-1r4m5ow{position:absolute;width:100%;height:100%;top:0;display:block}",
  map: null
};
const prerender = true;
const Routes = (0, import_index_ee9fdf1a.c)(($$result, $$props, $$bindings, slots) => {
  let y;
  $$result.css.add(css);
  {
    console.log(y);
  }
  return `

${$$result.head += `${$$result.title = `<title>Home</title>`, ""}`, ""}

<section class="${"svelte-1r4m5ow"}">${``}
	
	${(0, import_index_ee9fdf1a.v)(import_title_6152adbf.T, "Title").$$render($$result, {}, {}, {})}
	<h2 class="${"svelte-1r4m5ow"}">I am a custom font <strong>YAY! I&#39;m kinda cool!</strong></h2>

	<h3>This is <strong>NEW!</strong></h3>
	<h4>Adding in some <strong>JSON</strong></h4>

	${(0, import_index_ee9fdf1a.v)(Counter, "Counter").$$render($$result, {}, {}, {})}</section>

<article><h3>This is from a blog post from Rodney Labs: https://rodneylab.com/sveltekit-json-import/</h3>
	<h4>His github code for this is: https://github.com/rodneylab/sveltekit-json-import</h4>
	<p>In this learning example I used his blog post but for the fileds I used the application of
		JustFields.com for some of the JSON.
		https://stackoverflow.com/questions/59665222/innerhtml-from-json-file
	</p>

	<div class="${"fields"}"><h2 class="${"svelte-1r4m5ow"}">My JSON fields</h2>
		
		${(0, import_index_ee9fdf1a.h)(fields, ({ title, author, image, post_text }, index) => {
    return `<h2 class="${"svelte-1r4m5ow"}">${(0, import_index_ee9fdf1a.e)(author)}</h2>
			<p><strong>${(0, import_index_ee9fdf1a.e)(title)}</strong></p>

			<p id="${"mystery"}"><!-- HTML_TAG_START -->${post_text}<!-- HTML_TAG_END --></p>

			<img${(0, import_index_ee9fdf1a.b)("src", image, 0)} alt="${"some alt text here"}" width="${"500"}">`;
  })}</div>

	<h1 class="${"svelte-1r4m5ow"}">Information about the dogs</h1>
	${(0, import_index_ee9fdf1a.h)(dogs, ({ species, age, fav_food }, index) => {
    return `<div class="${"dogs"}"><h2 class="${"svelte-1r4m5ow"}">Type of dog is a: ${(0, import_index_ee9fdf1a.e)(species)}</h2>
			<h3>It is ${(0, import_index_ee9fdf1a.e)(age)} years old.</h3>
			<h4>The dogs favorite food is: ${(0, import_index_ee9fdf1a.e)(fav_food)}.</h4>
		</div>`;
  })}
</article>`;
});
