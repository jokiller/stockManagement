const mongoose = require('mongoose')

const connectionUri = 'mongodb://127.0.0.1:27017/db-connectGestion'

// create a connection between back-end & database
const mongodbServer = () => mongoose.connect(connectionUri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('connection established')
}).catch((e) => {
    console.log(e)
})

module.exports = mongodbServer