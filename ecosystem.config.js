var dev = process.env.NODE_ENV == 'development'

module.exports = {
  apps : [{
    name   : !dev ? 'app' : 'app-dev',
    script : "./app.js",
    watch: !dev ? false : ['app.js', 'config.js', 'routes', 'models']
  }]
}
