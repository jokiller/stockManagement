const Produit = require('../../models/Produit')
const BarCode = require('../../models/Barcode')
const express = require('express')

const router = express.Router()

    // deleting barcode for product misplaced
router.delete('/delete', (req, res) => {
    BarCode.findOneAndDelete({ barcode: req.body.barcode }).then((code) => {
        if (code) {
          res.send(code);
        } else {
          res.send("barcode not exist");
        }
    }).catch((e) => {
        res.send(e);
    });
});

module.exports = router
