const Graduate = require('../models/Graduate');

// Obtener todos los egresados
exports.getAllGraduates = async (req, res) => {
  try {
    const graduates = await Graduate.find();
    res.json(graduates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo egresado
exports.createGraduate = async (req, res) => {
  const { name, email, program, educationLevel, experience } = req.body;
  const newGraduate = new Graduate({ name, email, program, educationLevel, experience });

  try {
    const savedGraduate = await newGraduate.save();
    res.status(201).json(savedGraduate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener un egresado por ID
exports.getGraduateById = async (req, res) => {
  try {
    const graduate = await Graduate.findById(req.params.id);
    if (!graduate) {
      return res.status(404).json({ message: 'Egresado no encontrado' });
    }
    res.json(graduate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un egresado
exports.updateGraduate = async (req, res) => {
  try {
    const graduate = await Graduate.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!graduate) {
      return res.status(404).json({ message: 'Egresado no encontrado' });
    }
    res.json(graduate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un egresado
exports.deleteGraduate = async (req, res) => {
  try {
    const graduate = await Graduate.findByIdAndDelete(req.params.id);
    if (!graduate) {
      return res.status(404).json({ message: 'Egresado no encontrado' });
    }
    res.json({ message: 'Egresado eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};