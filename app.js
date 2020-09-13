const express = require('express')
const bodyParser = require('body-parser')
const mongodbServer = require('./config/connect-db')

        // routes product 
const showProducts = require('./routes/produit/show_products') 
const addProduct = require('./routes/produit/add_product')
const scanProduct = require('./routes/produit/scan_product')  
const deleteCodProd = require('./routes/produit/delete_codeProd') 
const deleteProduct = require("./routes/produit/delete_product")
const modifProduct = require('./routes/produit/modif_product')
const searchProduct = require('./routes/produit/search_product')
        // routes stock
const showStock = require('./routes/stock/show_stock')
const addStock = require('./routes/stock/add_stock')
const StockIn = require('./routes/stock/stock_in')
const StockOut = require('./routes/stock/stock_out')
const SelectStockBarCode = require('./routes/stock/select_prod_stock')
const SelectStockName = require('./routes/stock/search_product_stock')

    // create a statement to express (express)
const app = express()

    // define parser json use express method 
app.use(bodyParser.json())

    // initialization port 
const PORT = process.env.PORT || 3000

    // initialization db server
mongodbServer()

        // middleware to route showStock 

    // Stock
app.use('/', showStock)
app.use('/stock', addStock)
app.use('/stock', StockIn)
app.use('/stock', StockOut)
app.use('/stock', SelectStockBarCode)
app.use('/stock', SelectStockName)
    // products 
app.use('/', showProducts)
app.use('/product', addProduct)
app.use('/product', scanProduct)
app.use('/product', deleteCodProd)
app.use('/product', deleteProduct)
app.use('/product', modifProduct)
app.use('/product', searchProduct)
       

        // testing & exposing server port.
app.listen(PORT, (req, res) => {
    console.log(`Server on at port ${PORT}`);
})