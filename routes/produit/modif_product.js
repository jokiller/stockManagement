const Produit = require('../../models/Produit')
const express = require('express')

const router = express.Router()
        
        // modification products exists
router.put('/edit', (req, res) => {
    let modifVente = {}
    if (req.body.reference) modifVente.reference = req.body.reference
    if (req.body.type) modifVente.type = req.body.type
    if (req.body.categorie) modifVente.categorie = req.body.categorie
    // finding product using id
    Produit.findById(req.body.id).then((produit) => {
        Produit.update(produit, modifVente).then(() => {
            res.send(modifVente)
        }).catch((e) => {
            res.send(e)
        })
    })
})

module.exports = router