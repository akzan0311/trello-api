// const express = require('express')

import express from 'express'
const app = express()



const hostname = '127.0.0.1'
const port = 3000
app.get('/', function (req, res) {
    res.send('<h1>Hello World</h1>')
  })

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})