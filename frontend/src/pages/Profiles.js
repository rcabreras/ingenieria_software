import React, { useState, useEffect } from 'react';
import { getProfiles, createProfile, updateProfile, deleteProfile } from '../api'; // Asegúrate de implementar estas funciones en tu API
import ProfileForm from './ProfileForm';
import './Profiles.css';

const Profiles = () => {
    const [profiles, setProfiles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [editingProfile, setEditingProfile] = useState(null);
    const [isCreating, setIsCreating] = useState(false);

    useEffect(() => {
        fetchProfiles();
    }, []);

    const fetchProfiles = async () => {
        try {
            const data = await getProfiles();
            setProfiles(data);
        } catch (error) {
            console.error('Error fetching profiles:', error);
        }
    };

    const handleCreate = async (profileData) => {
        try {
            await createProfile(profileData);
            fetchProfiles();
            setIsCreating(false);
        } catch (error) {
            console.error('Error creating profile:', error);
        }
    };

    const handleUpdate = async (profileId, profileData) => {
        try {
            await updateProfile(profileId, profileData);
            fetchProfiles();
            setEditingProfile(null);
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    const handleDelete = async (profileId) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este perfil?')) {
            try {
                await deleteProfile(profileId);
                fetchProfiles();
            } catch (error) {
                console.error('Error deleting profile:', error);
            }
        }
    };

    const filteredProfiles = profiles.filter(profile => 
        profile.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="profiles-page">
            <h1>Perfiles de Egresados</h1>
            <input 
                type="text" 
                placeholder="Buscar perfiles..." 
                value={searchTerm} 
                onChange={e => setSearchTerm(e.target.value)} 
                className="search-input"
            />
            <button 
                className="create-button" 
                onClick={() => setIsCreating(true)}
            >
                Crear Nuevo Perfil
            </button>
            {isCreating && (
                <ProfileForm 
                    onSave={handleCreate} 
                    onCancel={() => setIsCreating(false)} 
                />
            )}
            {editingProfile && (
                <ProfileForm 
                    profile={editingProfile} 
                    onSave={handleUpdate} 
                    onCancel={() => setEditingProfile(null)} 
                />
            )}
            <table className="profiles-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Programa</th>
                        <th>Nivel de Estudio</th>
                        <th>Experiencia</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProfiles.map(profile => (
                        <tr key={profile._id}>
                            <td>{profile.name}</td>
                            <td>{profile.email}</td>
                            <td>{profile.program}</td>
                            <td>{profile.educationLevel}</td>
                            <td>{profile.experience}</td>
                            <td>
                                <button 
                                    className="edit-button" 
                                    onClick={() => setEditingProfile(profile)}
                                >
                                    Editar
                                </button>
                                <button 
                                    className="delete-button" 
                                    onClick={() => handleDelete(profile._id)}
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

export default Profiles;