const mongoose = require('mongoose');

const graduateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  program: String,
  educationLevel: String,
  experience: String,
  applications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }]
});

module.exports = mongoose.model('Graduate', graduateSchema);
