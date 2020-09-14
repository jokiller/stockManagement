const Stock = require('../../models/Stock')
const express = require('express')

const router = express.Router()

router.put('/stockIn', (req, res) => {
    let newStockIn = {}
    newStockIn.qte = 0
    const {qte} = req.body
    Stock.findById(req.body.id).then((stock) => {
        if (qte) newStockIn.qte = stock.qte + qte;
        else res.send('no value in new qte')
        Stock.updateOne(stock, newStockIn).then((stockIn) => {
            res.send(stockIn)
            console.log(newStockIn);
        }).catch((e) => {
            res.send(e)
        })
    })
})

module.exports = router