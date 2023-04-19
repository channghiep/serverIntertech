const express = require('express')
const { default: mongoose } = require('mongoose')
const router = express.Router()
const Supply = require('../models/supply')
router.get('/', async(req, res) => {
  try{
    const supplies = await Supply.find()
    res.json(supplies)
  }
  catch(err){
    res.send('Error' + err)
  }
})

router.post('/add', async(req, res) => {
  console.log(req.body)
  try{
    const {name, client, supplies} = req.body;
    // console.log(supplies)
    const newSupply = new Supply({
      name,
      client,
      supplies
    })

    const savedSupply = await newSupply.save();

    res.status(201).json(savedSupply)
  }
  catch(err){
    res.status(500).json({error: 'Failed to create record'})
  }
})



module.exports = router