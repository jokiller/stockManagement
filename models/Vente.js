const mongoose = require('mongoose')

const vente = mongoose.Schema({
    id_stock: {
        type: String
    },
    id_facture_vente: {
        type: String
    },
    qte_vente: {
        type: Number
    },
})

const Vente = mongoose.model('Vente', vente)

module.exports = Vente