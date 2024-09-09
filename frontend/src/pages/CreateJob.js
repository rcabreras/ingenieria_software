import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCompanies, createJob } from '../api'; // Importa createJob para enviar los datos
import './CreateJob.css';

const CreateJob = () => {
    const [jobData, setJobData] = useState({
        title: '',
        description: '',
        educationLevel: '',
        salaryRange: '',
        company: ''
    });
    const [companies, setCompanies] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const companyList = await getCompanies();
                setCompanies(companyList);
            } catch (err) {
                console.error('Error fetching companies:', err);
                setError('No se pudieron cargar las empresas. Intenta nuevamente más tarde.');
            }
        };

        fetchCompanies();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobData({ ...jobData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!jobData.company) {
            alert('Por favor, selecciona una empresa.');
            return;
        }

        try {
            await createJob(jobData); // Llamada a la API para crear un nuevo job
            alert('Oferta de empleo creada exitosamente');
            navigate('/jobs'); // Redirige a la lista de empleos después de crear uno
        } catch (error) {
            console.error('Error al conectar con el backend:', error);
            alert('Error al intentar crear la oferta de empleo');
        }
    };

    return (
        <div className="create-job-page">
            <h1>Crear Nueva Oferta de Empleo</h1>
            <form className="create-job-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Título del Puesto:</label>
                    <input type="text" id="title" name="title" value={jobData.title} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Descripción:</label>
                    <textarea id="description" name="description" value={jobData.description} onChange={handleChange} required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="educationLevel">Nivel de Estudio:</label>
                    <input type="text" id="educationLevel" name="educationLevel" value={jobData.educationLevel} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="salaryRange">Rango Salarial:</label>
                    <input type="text" id="salaryRange" name="salaryRange" value={jobData.salaryRange} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="company">Empresa:</label>
                    <select id="company" name="company" value={jobData.company} onChange={handleChange} required>ß
                        <option value="">Selecciona una empresa</option>
                        {companies.map((company) => (
                            <option key={company._id} value={company._id}>
                                {company.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="submit-button">Guardar Oferta</button>
            </form>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default CreateJob;