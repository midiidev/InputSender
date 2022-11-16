const express = require('express')
const fs = require('fs')
const https = require('https')
const bodyParser = require('body-parser')
const ks = require('node-key-sender')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
    console.debug(
        `recieved request from ${req.ip} on ${req.path} (${req.method})`
    )
    next()
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/index.html')
})

app.post('/send-key', (req, res) => {
    ks.sendKey(req.body.key)
    res.json('success')
})

app.post('/send-text', (req, res) => {
    ks.sendText(req.body.text)
    res.json('success')
})

https.createServer(
    {
        key: fs.readFileSync('server.key'),
        cert: fs.readFileSync('server.cert')
    },
    app
).listen(port, () => {
    console.log(`Listening on https on port ${port}`)
})
