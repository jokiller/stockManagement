const Produit = require('../../models/Produit')
const express = require('express')

const router = express.Router()

router.get('/products', (req, res) => {
    Produit.find({}, (err, prod) => {
        res.send(prod)
    })
})    

module.exports = router