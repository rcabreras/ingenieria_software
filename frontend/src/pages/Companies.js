import React, { useState, useEffect } from 'react';
import { getCompanies, createCompany, updateCompany, deleteCompany } from '../api'; // Asegúrate de implementar estas funciones en tu API
import CompanyForm from './CompanyForm';
import './Companies.css';

const Companies = () => {
    const [companies, setCompanies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [editingCompany, setEditingCompany] = useState(null);
    const [isCreating, setIsCreating] = useState(false);

    useEffect(() => {
        fetchCompanies();
    }, []);

    const fetchCompanies = async () => {
        try {
            const data = await getCompanies();
            setCompanies(data);
        } catch (error) {
            console.error('Error fetching companies:', error);
        }
    };

    const handleCreate = async (companyData) => {
        try {
            await createCompany(companyData);
            fetchCompanies();
            setIsCreating(false);
        } catch (error) {
            console.error('Error creating company:', error);
        }
    };

    const handleUpdate = async (companyId, companyData) => {
        try {
            await updateCompany(companyId, companyData);
            fetchCompanies();
            setEditingCompany(null);
        } catch (error) {
            console.error('Error updating company:', error);
        }
    };

    const handleDelete = async (companyId) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar esta empresa?')) {
            try {
                await deleteCompany(companyId);
                fetchCompanies();
            } catch (error) {
                console.error('Error deleting company:', error);
            }
        }
    };

    const filteredCompanies = companies.filter(company => 
        company.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="companies-page">
            <h1>Empresas</h1>
            <input 
                type="text" 
                placeholder="Buscar empresas..." 
                value={searchTerm} 
                onChange={e => setSearchTerm(e.target.value)} 
                className="search-input"
            />
            <button 
                className="create-button" 
                onClick={() => setIsCreating(true)}
            >
                Crear Nueva Empresa
            </button>
            {isCreating && (
                <CompanyForm 
                    onSave={handleCreate} 
                    onCancel={() => setIsCreating(false)} 
                />
            )}
            {editingCompany && (
                <CompanyForm 
                    company={editingCompany} 
                    onSave={handleUpdate} 
                    onCancel={() => setEditingCompany(null)} 
                />
            )}
            <table className="companies-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Ubicación</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCompanies.map(company => (
                        <tr key={company._id}>
                            <td>{company.name}</td>
                            <td>{company.description}</td>
                            <td>{company.location}</td>
                            <td>
                                <button 
                                    className="edit-button" 
                                    onClick={() => setEditingCompany(company)}
                                >
                                    Editar
                                </button>
                                <button 
                                    className="delete-button" 
                                    onClick={() => handleDelete(company._id)}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Companies;