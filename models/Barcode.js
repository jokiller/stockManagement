const mongoose = require('mongoose')

const barCode = mongoose.Schema({
    barcode: {
        type: String
    },
    id_produit: {
        type: String
    }
})

const BarCode = mongoose.model('BarCodes', barCode)

module.exports = BarCode