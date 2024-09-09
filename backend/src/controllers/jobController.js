const Job = require('../models/Job');

// Obtener todos los empleos
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate('company');
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo empleo
exports.createJob = async (req, res) => {
  const { title, description, educationLevel, experienceRequired, salaryRange, company } = req.body;
  const newJob = new Job({ title, description, educationLevel, experienceRequired, salaryRange, company });

  try {
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener un empleo por ID
exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate('company');
    if (!job) {
      return res.status(404).json({ message: 'Empleo no encontrado' });
    }
    res.json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un empleo
exports.updateJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!job) {
      return res.status(404).json({ message: 'Empleo no encontrado' });
    }
    res.json(job);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un empleo
exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) {
      return res.status(404).json({ message: 'Empleo no encontrado' });
    }
    res.json({ message: 'Empleo eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};