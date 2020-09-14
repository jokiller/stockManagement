const Client = require('../../models/Client')
const express = require('express')

const router = express.Router()

router.put('/', (req, res) => {
    modifClient = {}
    if (req.body.last_name) modifClient.last_name = req.body.last_name; 
    if (req.body.first_name) modifClient.first_name = req.body.first_name 
    if (req.body.telephone) modifClient.telephone = req.body.telephone; 
    if (req.body.address) modifClient.address = req.body.address; 
    if (req.body.deja_paye) modifClient.deja_paye = req.body.deja_paye; 

    Client.findById(req.body.id).then((client) => {
        Client.update(client, modifClient).then((newClient) => {
            res.send(newClient)
        }).catch((_) => {
            console.log('modification error!')
        })
    })
    
})

module.exports  = router