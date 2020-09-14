const Stock = require('../../models/Stock')
const Produit = require('../../models/Produit')

const express = require('express')

const router = express.Router()

router.get('/selectNameProdStock', (req, res) => {
    Produit.findOne({ reference: req.body.reference })
        .then((ref) => {
        Stock.find({ id_produit: ref.id })
            .then((stock) => {
              console.log(stock)
            res.send(stock);
          })
          .catch((_) => res.send("product related to reference not found"));
      })
      .catch((_) => res.send("product not found"));
})

module.exports = router