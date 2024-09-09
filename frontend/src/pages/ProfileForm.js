import React, { useState, useEffect } from 'react';

const ProfileForm = ({ profile = {}, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        program: '',
        educationLevel: '',
        experience: ''
    });

    useEffect(() => {
        if (profile._id) {
            setFormData(profile);
        }
    }, [profile]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (profile._id) {
            onSave(profile._id, formData);
        } else {
            onSave(formData);
        }
    };

    return (
        <form className="profile-form" onSubmit={handleSubmit}>
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
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div className="form-group">
                <label htmlFor="program">Programa:</label>
                <input 
                    type="text" 
                    id="program" 
                    name="program" 
                    value={formData.program} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div className="form-group">
                <label htmlFor="educationLevel">Nivel de Estudio:</label>
                <input 
                    type="text" 
                    id="educationLevel" 
                    name="educationLevel" 
                    value={formData.educationLevel} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div className="form-group">
                <label htmlFor="experience">Experiencia:</label>
                <input 
                    type="text" 
                    id="experience" 
                    name="experience" 
                    value={formData.experience} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <button type="submit" className="save-button">Guardar</button>
            <button type="button" className="cancel-button" onClick={onCancel}>Cancelar</button>
        </form>
    );
};

export default ProfileForm;