const Produit = require('../../models/Produit')
const BarCode = require('../../models/Barcode')
const express = require('express')

const router = express.Router()

        // Ading & posting a new product
router.post('/add', async (req, res) => {
    const products = req.body.products;
    await products.map(_ => {
        const reference = _.reference;
        const type = _.type;
        const categorie = _.categorie;
        const codebars = _.barcode;

        const product = new Produit({
          reference: reference,
          type: type,
          categorie: categorie,
        });

        product.save()
          .then((prod) => {
            codebars.map((codebar) => {
              const code = new BarCode({
                barcode: codebar,
                id_produit: prod.id,
              });
              code
                .save()
                .then((codeProd) => {
                  console.log(codeProd);
                })
                .catch((e) => {
                  console.log(e);
                });
            });
            console.log("insertion successfully <3");
          })
          .catch((e) => {
            console.log(e);
          });
    })
    res.send('all good mate!')
})

module.exports = router
