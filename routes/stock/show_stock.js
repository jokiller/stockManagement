const Stock = require('../../models/Stock')
const express = require('express')

const router = express.Router()

router.get('/Show', (req, res) => {
    Stock.find({}).then((stock) => {
        res.send(stock)
    }).catch((e) => {
        res.send(e)
    })  
})

module.exports = router