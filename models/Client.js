const mongoose = require('mongoose')

const client = mongoose.Schema({
    last_name: {
        type: String
    }, 
    first_name: {
        type: String
    },
    telephone: {
        type: Number
    }, 
    address: {
        type: String
    }, 
    total: {
        type: Number
    },
    deja_paye: {
        type: Number
    }
})

const Client = mongoose.model('Client', client)

module.exports = Client