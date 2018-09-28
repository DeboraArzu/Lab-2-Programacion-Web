const express = require('express')

const app = express()

app.get('/hello/:name', (req, res) => {
    const name = req.params.name
    res.send('Hello' + name)
})

app.listen(3000, () => {
    console.log("Running in http://localhost:3000")
})