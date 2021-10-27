//@type {import('@sveltejs/kit').Config} 
import adapter from '@sveltejs/adapter-netlify'
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter()
	}
};

export default config;

//top is orig */

/* const adapter = require('@sveltejs/adapter-netlify');
module.exports = {

	kit: {
		adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		prerender: {
			crawl: true,
			enabled: true,
			force: true,
			pages: ['*'],
		},
	},
}; */