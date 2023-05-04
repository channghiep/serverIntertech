const express = require('express')
const { default: mongoose } = require('mongoose')
const router = express.Router()
const Test = require('../models/test')

router.get('/', async(req, res) => {
  let requests;
  try{
    requests = await Test.find()
    res.json(requests)
  }
  catch(err){
    res.send('Error' + err)
  }

  // try{
  //   const clients = requests.map(request => request.clients);
  //   console.log(clients);
  //   return res.json(clients);
    
  // }
  // catch(err){
  //   res.send('Error' + err)
  // }
})


router.post('/add', async(req, res) => {
  // console.log(req.body)
  try{
    const {requester, clients, date} = req.body;
    const newTest = new Test({
      requester,
      clients,
      date
    })

    const savedTest = await newTest.save();

    res.status(201).json({res: "Success!"})
  }
  catch(err){
    res.status(500).json({error: 'Failed to create record'})
  }
})



module.exports = router