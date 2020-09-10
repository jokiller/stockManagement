const Produit = require('../../models/Produit')
const express = require('express')

const router = express.Router()
        
        // modification products exists
router.put('/modifier', (req, res) => {
    let newProduct = {}
    if (req.body.reference) newProduct.reference = req.body.reference
    if (req.body.type) newProduct.type = req.body.type
    if (req.body.categorie) newProduct.categorie = req.body.categorie
    // finding product using id
    Produit.findById(req.body.id).then((produit) => {
        Produit.update(produit, newProduct).then(() => {
            res.send(newProduct)
        }).catch((e) => {
            res.send(e)
        })
    })
})

module.exports = router