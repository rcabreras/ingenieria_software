import React, { useEffect, useState } from 'react';
import { getJobs } from '../api'; // Asegúrate de que esta función obtenga los datos correctos del API
import './JobList.css'; // Asegúrate de que los estilos estén aplicados

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobList = await getJobs();
        setJobs(jobList);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  const handleApply = (jobTitle) => {
    alert(`Has aplicado a la oferta: ${jobTitle}`);
    // Aquí puedes añadir lógica adicional para la solicitud de aplicación
  };

  return (
    <div className="job-list-container">
      <h2>Ofertas de Empleo</h2>
      <div className="job-list">
        {jobs.map((job) => (
          <div key={job._id} className="job-card">
            <h3>{job.title}</h3>
            <p><strong>Empresa:</strong> {job.company.name}</p> {/* Muestra el nombre de la empresa */}
            <p>{job.description}</p>
            <p><strong>Nivel de Estudio:</strong> {job.educationLevel}</p>
            <p><strong>Rango Salarial:</strong> {job.salaryRange}</p>
            <button className="apply-button" onClick={() => handleApply(job.title)}>Aplicar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;