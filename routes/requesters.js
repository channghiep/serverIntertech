const express = require('express')
const { default: mongoose } = require('mongoose')
const router = express.Router()
const Requester = require('../models/requester')

router.get('/', async(req, res) => {
  try{
    const requesters = await Requester.find()
    res.json(requesters)
  }
  catch(err){
    res.send('Error' + err)
  }
})

//Create a new requester
router.post('/addRequester', async(req, res) => {
  try{
    const {requester, client} = req.body;

    const newRequester = new Requester({
      requester,
      client
    })

    const savedRequester = await newRequester.save()
    console.log(savedRequester._id.toString())

    const requestRes = await axios.get(`http://localhost:4000/requests/getRequest/6435baf8f9406d6a6cde283e`)
    // console.log(requestRes)
    // res.status(201).json(savedRequester)
    res.json(requestRes.data)
  }
  catch(err){
    res.status(500).json({error: 'Failed to create record'})
  }
})

////

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