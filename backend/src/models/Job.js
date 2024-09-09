const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  educationLevel: { type: String, required: true },
  experienceRequired: String,
  salaryRange: String,
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' }
});

module.exports = mongoose.model('Job', jobSchema);
