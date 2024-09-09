import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Jobs from './pages/Jobs';
import Companies from './pages/Companies';
import Profile from './pages/Profiles';
import Sidebar from './components/Sidebar'; // Importa el componente Sidebar
import CreateJob from './pages/CreateJob'; // Importa correctamente CreateJob
import './App.css'; // Incluye los estilos

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/jobs" />} />
            <Route path="/create-job" element={<CreateJob />} /> {/* Asegúrate de que esta ruta esté correctamente definida */}
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/profiles" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;