const Produit = require('../../models/Produit')
const BarCode = require('../../models/Barcode')
const express = require('express')

const router = express.Router()

     // deleting all barcodes for product
router.delete('/deleteProduct', (req, res) => {
    Produit.findByIdAndDelete(req.body.id).then((prod) => {
        BarCode.deleteMany({ id_produit: prod.id }).then((codes) => {
            res.send(codes);
        });
    }).catch((e) => {
      res.send(e)
    })
})

module.exports = router