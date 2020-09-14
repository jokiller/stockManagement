const Client = require('../../models/Client')
const express = require('express')

const router = express.Router()

router.post('/add', async(req, res) => {
    const clients = req.body.clients
    await clients.map(_ => {
        const last_name = _.last_name
        const first_name = _.first_name
        const telephone = _.telephone
        const address = _.address
        const total = _.total

        const creditClient = new Client({
            last_name : last_name,
            first_name : first_name,
            telephone : telephone,
            address : address,
            total : total
        })
        creditClient.save().then((client) => {
            res.send(client)
        }).catch((e) => {
            console.log('failed insertion client(s)')
        })    
    })
    
})

module.exports = router
