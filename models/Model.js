const { Schema, model } = require("mongoose");


const UserScore = new Schema({
  name: { type: String, default: 'empty_name' },
  score: { type: Number, required: true }
})


module.exports = model('UserScore', UserScore)