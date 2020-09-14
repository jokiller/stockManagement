const mongoose = require('mongoose')

const facture = mongoose.Schema({
  id_client: {
    type: String,
  },
  date_heure: {
    type: Date,
    default: Date.now,
  },
});

const Facture_Vente = mongoose.model('Facture', facture)

module.exports = Facture_Vente