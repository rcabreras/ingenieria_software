const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Rutas
const jobRoutes = require('./routes/jobs');
const companyRoutes = require('./routes/companies');
const graduateRoutes = require('./routes/graduates');

app.use('/api/jobs', jobRoutes);
app.use('/api/companies', companyRoutes);
app.use('/api/graduates', graduateRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});