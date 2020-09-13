const Vente = require('../../models/Vente')
const express = require('express')

const router = express.Router()

router.delete('/delete', async(req, res) => {
    const ventes = req.body.ventes
    await ventes.map(_ => {
        Vente.findByIdAndDelete(_.id).then((vente) => {
            console.log('deleted ' + vente)
            // Stock In
        }).catch((e) => {
            console.log(e)
        })
    })
    res.send('deleted all products sells on bill')
})

module.exports = router