import svelte from 'rollup-plugin-svelte'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import scss from 'rollup-plugin-scss'
import multiEntry from "rollup-plugin-multi-entry"
import url from 'rollup-plugin-url'

const production = !process.env.ROLLUP_WATCH

export default {
	input: [
		'src/main.js',
		'node_modules/w3-css',
		'node_modules/@fortawesome/fontawesome-free/css/all.css',
		'node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2',
		'node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2'
	],
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/bundle.js'
	},
	plugins: [

		svelte({
			// enable run-time checks when not in production
			dev: !production,
			
		}),
		multiEntry(),
		scss(),
		url({
			include: ['**/*.woff2'],
			publicFiles: './public',
			fileName: '[dirname][name][extname]'
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration —
		// consult the documentation for details:
		// https://github.com/rollup/rollup-plugin-commonjs
		resolve(),
		commonjs(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()

	],
	watch: {
		clearScreen: false
	}
}
