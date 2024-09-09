const API_URL = 'http://54.196.137.99:3000/api';

export const getJobs = async () => {
  try {
    const response = await fetch(`${API_URL}/jobs`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching jobs:', error);
  }
};

export const getCompanies = async () => {
  const response = await fetch(`${API_URL}/companies`); // Asegúrate de que la URL esté correcta
  if (!response.ok) {
    throw new Error('Failed to fetch companies');
  }
  return response.json(); // Asegúrate de que el backend esté retornando JSON
};

// Función para crear un nuevo trabajo
export const createJob = async (jobData) => {
  try {
    const response = await fetch(`${API_URL}/jobs`, { // Asegúrate de que la URL esté correcta
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jobData),
    });
    if (!response.ok) {
      throw new Error('Error al crear la oferta de empleo');
    }
    return response.json(); // Devuelve la respuesta del backend si es necesario
  } catch (error) {
    console.error('Error en la solicitud de creación:', error);
    throw error;
  }
};


// Función para obtener la lista de perfiles
export const getProfiles = async () => {
  try {
    const response = await fetch(`${API_URL}/graduates`); // Asegúrate de que esta ruta esté definida en tu backend
    if (!response.ok) {
      throw new Error('Error al obtener los perfiles');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching profiles:', error);
    throw error;
  }
};

// Función para crear un nuevo perfil
export const createProfile = async (profileData) => {
  try {
    const response = await fetch(`${API_URL}/graduates`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profileData),
    });
    if (!response.ok) {
      throw new Error('Error al crear el perfil');
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating profile:', error);
    throw error;
  }
};

// Función para actualizar un perfil existente
export const updateProfile = async (profileId, profileData) => {
  try {
    const response = await fetch(`${API_URL}/graduates/${profileId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profileData),
    });
    if (!response.ok) {
      throw new Error('Error al actualizar el perfil');
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating profile:', error);
    throw error;
  }
};

// Función para eliminar un perfil
export const deleteProfile = async (profileId) => {
  try {
    const response = await fetch(`${API_URL}/graduates/${profileId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Error al eliminar el perfil');
    }
    return await response.json();
  } catch (error) {
    console.error('Error deleting profile:', error);
    throw error;
  }
};


// Función para crear una nueva empresa
export const createCompany = async (companyData) => {
  try {
    const response = await fetch(`${API_URL}/companies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(companyData),
    });
    if (!response.ok) {
      throw new Error('Error al crear la empresa');
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating company:', error);
    throw error;
  }
};

// Función para actualizar una empresa existente
export const updateCompany = async (companyId, companyData) => {
  try {
    const response = await fetch(`${API_URL}/companies/${companyId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(companyData),
    });
    if (!response.ok) {
      throw new Error('Error al actualizar la empresa');
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating company:', error);
    throw error;
  }
};

// Función para eliminar una empresa
export const deleteCompany = async (companyId) => {
  try {
    const response = await fetch(`${API_URL}/companies/${companyId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Error al eliminar la empresa');
    }
    return await response.json();
  } catch (error) {
    console.error('Error deleting company:', error);
    throw error;
  }
};