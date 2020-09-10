const express = require('express')
const bodyParser = require('body-parser')
const mongodbServer = require('./config/connect-db')
const BarCode = require('./models/Barcode')
const Produit = require('./models/Produit')
    
    // create a statement to express (express)
const app = express()

    // define parser json use express method 
app.use(bodyParser.json())

    // initialization port 
const PORT = process.env.PORT || 3000

    // initialization db server
mongodbServer()

            // endPoints
    // consulte all produits 
app.get('/products', (req, res) => {
    Produit.find({}, (err, prod) => {
        res.send(prod)
    })
})    

    // Ading & posting a new product
app.post('/addProduct', (req, res) => {
    const reference = req.body.reference
    const type = req.body.type
    const categorie = req.body.categorie
    const codebars = req.body.barcode

    const product = new Produit({
        reference: reference,
        type: type,
        categorie: categorie
    })

    product.save().then((prod) => {
        codebars.map((codebar) => {
            const code = new BarCode({
                barcode: codebar,
                id_produit: prod.id
            })
            code.save().then((codeProd) => {
                console.log(codeProd)
            }).catch((e) => {
                console.log(e)
            })
        })
        res.send('insertion successfully <3')
    
    }).catch((e) => {
        console.log(e)
    })
})

        // testing and scannig Products (barcodes)
app.get('/scanProduct', (req, res) => {
    BarCode.findOne({ barcode: req.body.barcode }).then((code) => {
        Produit.findById(code.id_produit).then((prod) => {
            res.send(prod)
        }).catch((e) => {
            console.log(e)
        })
    }).catch((e) => {
        res.send('Code barre non inséré!')
    })
})
        // deleting barcode for product misplaced
app.delete('/deleteCodeProd', (req, res) => {
    BarCode.findOneAndDelete({ barcode: req.body.barcode }).then((code) => {
        if (code) {
            res.send(code)
        } else {
            res.send('barcode not exist')
        }
    }).catch((e) => {
        res.send(e)
    })
})

        // deleting all barcodes for product
app.delete('/deleteAllCodesProd', (req, res) => {
    Produit.findByIdAndDelete(req.body.id).then((prod) => {
        BarCode.deleteMany({ id_produit: prod.id }).then((codes) => {
            res.send(codes)
        })
    }).catch((e) => {
        res.send(e)
    })
})
        
        // modification products exists
app.put('/modifProduct', (req, res) => {
    let newProduct = {}
    if (req.body.reference) newProduct.reference = req.body.reference
    if (req.body.type) newProduct.type = req.body.type
    if (req.body.categorie) newProduct.categorie = req.body.categorie

    Produit.findById(req.body.id).then((produit) => {
        Produit.update(produit, newProduct).then(() => {
            res.send(newProduct)
        }).catch((e) => {
            res.send(e)
        })
    })
})

        // search to products 
app.get('/searchProduct', (req, res) => {
    Produit.find({reference: req.body.reference}).then((prod) => {
        res.send(prod)
    }).catch((e) => {
        res.send(e)
    })
}) 

        // testing & exposing server port
app.listen(PORT, (req, res) => {
    console.log(`Server on at port ${PORT}`);
})