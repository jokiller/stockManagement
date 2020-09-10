const Produit = require('../../models/Produit')
const BarCode = require('../../models/Barcode')
const express = require('express')

const router = express.Router()

        // Ading & posting a new product
router.post('/add', (req, res) => {
    const reference = req.body.reference
    const type = req.body.type
    const categorie = req.body.categorie
    const codebars = req.body.barcode

    const product = new Produit({
      reference: reference,
      type: type,
      categorie: categorie,
    })

    product.save().then((prod) => {
    codebars.map((codebar) => {
        const code = new BarCode({
        barcode: codebar,
        id_produit: prod.id,
        });
        code
        .save()
        .then((codeProd) => {
            console.log(codeProd)
        })
        .catch((e) => {
            console.log(e)
        });
    });
    res.send("insertion successfully <3")
    })
    .catch((e) => {
    console.log(e)
    })
})

module.exports = router
