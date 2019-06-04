var dev = process.env.NODE_ENV == 'development'

module.exports = {
	PORT: dev ? 3001 : 3000,
	DBPATH: dev ? 'mongodb://localhost:27017/app-dev' : 'mongodb://localhost:27017/app'
}