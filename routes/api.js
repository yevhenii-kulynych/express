const { Router } = require("express");
const route = Router();
const UserScore = require("../models/Model");



route.post('/setScore', async (req, res) => {

  try {

    const {name, score} = req.body;
    const test = new UserScore({name, score})
    await test.save();

    res.status(201).json({message: 'Data added'})

  } catch (e) {

    res.status(500).json({message: 'Server error'})
  }
})

route.get('/getScore', async (req, res) => {

  try {

    const data = await UserScore.find()
    res.status(200).json(data)
  } catch (e) {

    res.status(500).json({message: 'Server error'})
  }
})



module.exports = route;