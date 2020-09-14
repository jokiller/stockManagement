const Produit = require('../../models/Produit')
const BarCode = require('../../models/Barcode')
const express = require('express')

const router = express.Router()

    // testing and scannig Products (barcodes)
router.get('/scan', (req, res) => {
    BarCode.findOne({ barcode: req.body.barcode })
        .then((code) => {
        Produit.findById(code.id_produit)
            .then((prod) => {
            res.send(prod);
            })
            .catch((e) => {
            console.log(e);
            });
        })
        .catch((e) => {
        res.send("Code barre non inséré!")
        })
})

module.exports = router