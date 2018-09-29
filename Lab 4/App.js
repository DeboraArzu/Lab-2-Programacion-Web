const express = require('express')

const app = express()

app.get('/hello/:name', (req, res) => {
    const name = req.params.name
    res.send('Hello' + name)
})

app.get('', (req, res) =>{
  res.send('Lab-4  By Debora Arzu')
})

app.listen(3000, () => {
    console.log("Running in http://localhost:3000")
})