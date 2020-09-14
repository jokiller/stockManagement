const mongoose = require('mongoose')

const stock = mongoose.Schema({
    id_produit: {
        type: String
    },
    prix_achat: {
        type: Number
    },
    prix_vente: {
        type: Number
    },
    qte: {
        type: Number
    }
})

const Stock = mongoose.model('Stock', stock)

module.exports = Stock