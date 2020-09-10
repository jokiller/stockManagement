const express = require('express')
const Stock = require('../../models/Stock')
const Produit = require('../../models/Produit')

const router = express.Router()

router.post('/add', (req, res) => {
    const id_produit = req.body.id_produit
    const prix_achat = req.body.prix_achat
    const prix_vente = req.body.prix_vente
    const qte = req.body.qte
    
    const productStock = new Stock({
        id_produit: id_produit,
        prix_achat: prix_achat,
        prix_vente: prix_vente,
        qte: qte,
    })
    productStock.save().then((addStock) => {
        res.send(addStock)   
    }).catch(() => {
        console.log("failed insertion in stock");
    })
})


module.exports = router