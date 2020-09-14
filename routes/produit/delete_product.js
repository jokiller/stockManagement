const Produit = require('../../models/Produit')
const BarCode = require('../../models/Barcode')
const express = require('express')

const router = express.Router()

     // deleting all barcodes for product
router.delete('/deleteProduct', async(req, res) => {
    const products = req.body.products
    await products.map(_ => {
        Produit.findByIdAndDelete(_.id)
            .then((prod) => {
                console.log('deleted: ' + prod)
                BarCode.deleteMany({ id_produit: prod.id }).then((codes) => {
                console.log(codes);
                }).catch(e => console.log(e));
            })
            .catch((e) => {
                console.log(e)
            });    
    })
    res.send('deleted all selected products')
    
})

module.exports = router