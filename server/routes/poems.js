const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
    db.getAllPoems()
        .then(poems => res.json(poems))
})

module.exports = router
