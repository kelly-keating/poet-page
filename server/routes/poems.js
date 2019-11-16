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

router.get('/:id', (req, res) => {
    db.getPoemById(req.params.id)
        .then(poem => {
            poem.lines = JSON.parse(poem.lines)
            res.json(poem)
        })
})

module.exports = router
