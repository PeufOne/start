/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    static: '/',
    src: '/dist',
    ".routify": '/',
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-webpack'
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    secure: true
  },
  buildOptions: {
    /* ... */
  },
  alias: {
    '$': './src/components' 
  },
};
