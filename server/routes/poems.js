const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
    db.getAllPoems()
        .then(poems => {
            poems = poems.map(poem => {
                poem.lines = JSON.parse(poem.lines)
                return poem
            })
            res.json(poems)
        })
})

module.exports = router
