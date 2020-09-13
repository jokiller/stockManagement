const Stock = require('../../models/Stock')
const Barcode = require('../../models/Barcode')
const express = require('express')

const router = express.Router()

router.get('/selectCodeStock', (req, res) => {
    Barcode.findOne({ barcode: req.body.codebarre }).then((code) => {
      Stock.find({ id_produit: code.id_produit })
        .then((stocks) => {
          res.send(stocks);
        }).catch((_) => res.send("product related to barcode not found"));
    }).catch(_ => res.send('codebar not found'))
})

module.exports = router