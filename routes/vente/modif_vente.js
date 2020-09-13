const Vente = require('../../models/Vente')
const express = require('express')

const router = express.Router()
router.put('/edit', (req, res) => {
    modifVente = {}
    if (req.body.id_stock) modifVente.id_stock = req.body.id_stock 
    if (req.body.qte_vente) modifVente.qte_vente = req.body.qte_vente 
    
    // stock Out

    Vente.findById(req.body.id).then((vente) => {
        Vente.update(vente, modifVente).then((newVente) => {
            res.send(newVente)
        }).catch((e) => {
            res.send(e)
        })
    }).catch((e) => {
        res.send(e)
    })
})

module.exports = router