const Vente = require('../../models/Vente')
const Facture_Vente = require('../../models/Facture_Vente')
const Stock = require('../../models/Stock')
const express = require('express')

const router = express.Router()

// router.post('/caisse', async(req, res) => {
    
//     const id_client = req.body.id_client 
//     const date_heure = req.body.date_heure

//     const facture = new Facture_Vente({
//         id_client: id_client,
//         date_heure: date_heure
//     })
//     facture.save().then((fact) => {
//         const ventes = req.body.ventes

//         //////// Stock Out

//         ////// const {qte} = req.body
//         /////// Stock.find(req.body.id).then((stock) => {
//         // ///////    if (stock.qte >= qte) stock.qte = stock.qte - qte_vente
            
//        .... // }).catch(_ => res.send('quantité insuffisante'))
//         await ventes.map(_ => {
//             const id_facture_vente = fact.id
//             const id_stock = _.id_stock
//             const qte_vente = _.qte_vente
//             const vente = new Vente({
//                 id_facture_vente: id_facture_vente,
//                 id_stock: id_stock,
//                 qte_vente: qte_vente,
//             })
//             vente.save().then((v) => {
//                 res.send(v)
//             }).catch((e) => {
//             res.send(e)
//             })
//         })
//         res.send(v)
//     }).catch((e) => {
//         res.send(e)
//     })
//         res.send("well receive your invoice");
// })

module.exports = router