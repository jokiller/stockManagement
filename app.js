const express = require('express')
const bodyParser = require('body-parser')
const mongodbServer = require('./config/connect-db')

        // imports product 
const showProducts = require('./routes/produit/show_products') 
const addProduct = require('./routes/produit/add_product')
const scanProduct = require('./routes/produit/scan_product')  
const deleteCodProd = require('./routes/produit/delete_codeProd') 
const deleteProduct = require("./routes/produit/delete_product")
const modifProduct = require('./routes/produit/modif_product')
const searchProduct = require('./routes/produit/search_product')
        // imports stock
const showStock = require('./routes/stock/show_stock')
const addStock = require('./routes/stock/add_stock')
const StockIn = require('./routes/stock/stock_in')
const StockOut = require('./routes/stock/stock_out')
const SelectStockBarCode = require('./routes/stock/select_prod_stock')
const SelectStockName = require('./routes/stock/search_product_stock')

    //imports Vente 
const caisse = require('./routes/vente/caisse')
const deleteVente = require('./routes/vente/delete_products_vente')
const modifVente = require('./routes/vente/modif_vente')

    // imports Client
const addClient = require('./routes/client/add_client') 


    // create a statement to express (express)
const app = express()

    // define parser json use express method 
app.use(bodyParser.json())

    // initialization port 
const PORT = process.env.PORT || 3000

    // initialization db server
mongodbServer()

        // middleware to route showStock 

    // Stock Routes
app.use('/', showStock)
app.use('/stock', addStock)
app.use('/stock', StockIn)
app.use('/stock', StockOut)
app.use('/stock', SelectStockBarCode)
app.use('/stock', SelectStockName)
    // Products Routes 
app.use('/', showProducts)
app.use('/product', addProduct)
app.use('/product', scanProduct)
app.use('/product', deleteCodProd)
app.use('/product', deleteProduct)
app.use('/product', modifProduct)
app.use('/product', searchProduct)
       
    // Ventes Routes
app.use('/sell', caisse)
app.use('/vente', deleteVente)
app.use('/vente', modifVente)

    // Clients Routes
app.use('/client', addClient)


        // testing & exposing server port.
app.listen(PORT, (req, res) => {
    console.log(`Server on at port ${PORT}`);
})


// ki ykon day sel3a noss ml 9dim w noss m jdiid kifah tokhrej la facture portant code bare wahed mais le prix deferent 
// stock kifach selection meno 
// prix ta3 lma fardo w bl 9ar3a machi kifkif f data base 
// exmple : 3 fardo b 17 * 3  mais bl 9ar3a twali 3 * 18  = prix ta3 bl wahda 

// system promotion important fl gestion