const Produit = require('../../models/Produit')
const express = require('express')

const router = express.Router()

 // search to products 
router.get('/search', (req, res) => {
    Produit.find({reference: req.body.reference}).then((prod) => {
        res.send(prod)
    }).catch((e) => {
        res.send(e)
    })
}) 

module.exports = router