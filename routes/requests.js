const express = require('express')
const { default: mongoose } = require('mongoose')
const router = express.Router()
const Request = require('../models/request')

router.get('/', async(req, res) => {
  try{
    const requests = await Request.find()
    res.json(requests)
  }
  catch(err){
    res.send('Error' + err)
  }
})

router.get('/getRequest/:id', async(req, res) => {
  try{
    const requests = await Request.find( {requesterID : { $eq : req.params.id}})
    res.json(requests)
  }
  catch(err){
    res.send('Error' + err)
  }
})
// router.post('/add', async(req, res) => {
//   console.log(req.body)
//   try{
//     const {name, client, supplies} = req.body;

//     const newSupply = new Supply({
//       name,
//       client,
//       supplies
//     })

//     const savedSupply = await newSupply.save();

//     res.status(201).json(savedSupply)
//   }
//   catch(err){
//     res.status(500).json({error: 'Failed to create record'})
//   }
// })



module.exports = router