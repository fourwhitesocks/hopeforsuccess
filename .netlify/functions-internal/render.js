const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["anns-back-yard.jpg","boat-office.jpg","favicon.png","middlebass.jpg","robots.txt","svelte-welcome.png","svelte-welcome.webp"]),
	_: {
		mime: {".jpg":"image/jpeg",".png":"image/png",".txt":"text/plain",".webp":"image/webp"},
		entry: {"file":"start-d7a7cade.js","js":["start-d7a7cade.js","chunks/vendor-e526f11b.js"],"css":["assets/vendor-8826ed58.css"]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js'))
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/burger\/?$/,
				params: null,
				path: "/burger",
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/todos\.json$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/todos/index.json.js'))
			},
			{
				type: 'page',
				pattern: /^\/todos\/?$/,
				params: null,
				path: "/todos",
				a: [0,3],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/todos\/([^/]+?)\.json$/,
				params: (m) => ({ uid: m[1]}),
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/todos/_uid_.json.js'))
			}
		]
	}
});
