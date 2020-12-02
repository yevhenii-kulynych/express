const { Schema, model } = require("mongoose");


const UserScore = new Schema({
  name: { type: String, default: 'empty_name' },
  score: { type: Number, required: true },
  date: { type: Date, default: Date.now }
})


module.exports = model('UserScore', UserScore)