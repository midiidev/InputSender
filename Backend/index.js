const express = require('express')
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
    res.send('success')
})

app.post('/send-text', (req, res) => {
    ks.sendText(req.body.text)
    res.send('success')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
