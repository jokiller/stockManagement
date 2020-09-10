const mongoose = require('mongoose')

const produit = mongoose.Schema({
    reference: {
        type: String
    },
    type: {
        type: String
    },
    categorie: {
        type: String
    }
})

const Produit = mongoose.model('Produit', produit)

module.exports = Produit