const path = require('path')
const express = require('express')

const poems = require('./routes/poems')

const server = express()
server.use(express.static('public'))
server.use(express.json())

server.use('/v1/poems', poems)
server.use('/v1/*', (req, res) => res.sendStatus(404))

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = server
