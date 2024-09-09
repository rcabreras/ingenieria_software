import React, { useState, useEffect } from 'react';

const CompanyForm = ({ company = {}, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        location: ''
    });

    useEffect(() => {
        if (company._id) {
            setFormData(company);
        }
    }, [company]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (company._id) {
            onSave(company._id, formData);
        } else {
            onSave(formData);
        }
    };

    return (
        <form className="company-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Nombre:</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Descripción:</label>
                <textarea 
                    id="description" 
                    name="description" 
                    value={formData.description} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div className="form-group">
                <label htmlFor="location">Ubicación:</label>
                <input 
                    type="text" 
                    id="location" 
                    name="location" 
                    value={formData.location} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <button type="submit" className="save-button">Guardar</button>
            <button type="button" className="cancel-button" onClick={onCancel}>Cancelar</button>
        </form>
    );
};

export default CompanyForm;