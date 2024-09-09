import React from 'react';
import { useNavigate } from 'react-router-dom';
import JobList from '../components/JobList';
import './Jobs.css'; // Asegúrate de tener los estilos para la página y el botón

const Jobs = () => {
  const navigate = useNavigate();

  const handleCreateJob = () => {
      navigate('/create-job'); // Navega a la página de creación de ofertas de empleo
  };

  return (
    <div className="jobs-page">
      <h1>Puestos Disponibles</h1>
      <button className="create-job-button" onClick={handleCreateJob}>
          Crear Nueva Oferta de Empleo
      </button>
      <JobList />
    </div>
  );
};

export default Jobs;