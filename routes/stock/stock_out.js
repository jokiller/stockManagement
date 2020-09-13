const Stock = require('../../models/Stock')

const express = require('express')

const router = express.Router()

router.put('/stockOut', (req, res) => {
    let restStock = {}
    let { qte } = req.body

    Stock.findById(req.body.id).then((stock) => {
        console.log(stock)
        if(stock.qte >= qte) restStock.qte = stock.qte - qte
        else res.send('qte not available')
        Stock.updateOne(stock, restStock).then((rest) => {
            res.send(rest)
        }).catch((e) => {
            res.send(e)
        })
    })
})

module.exports = router