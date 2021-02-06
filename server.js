const express = require('express')
const PORT = 3000
const app = express()

app.use(express.static('./build'))

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/build/index.html`)
})

app.listen(PORT, err => {
    if (err) return console.log(err)
    console.log(`Server listen on port ${PORT}`)
})