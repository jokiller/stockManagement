const Stock = require('../../models/Stock')
const express = require('express')

const router = express.Router()

router.put('/edit', (req, res) => {
    let updateStock = {}
    if (req.body.id_produit) updateStock.id_produit = req.body.id_produit
    if (req.body.prix_achat) updateStock.prix_achat = req.body.prix_achat
    if (req.body.prix_vente) updateStock.prix_vente = req.body.prix_vente
    if (req.body.qte) updateStock.qte = req.body.qte 
    
    Stock.findById(req.body.id).then((stock) => {
        Stock.update(stock, updateStock).then((newStock) => {
            res.send(newStock)
        }).catch((e) => {
            res.send(e)
        })
    }).catch((e) => {
        res.send(e)
    })

})

module.exports = router