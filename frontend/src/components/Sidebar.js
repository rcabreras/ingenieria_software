import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>FUCN Portal</h2>
      <ul>
        <li>
          <NavLink to="/jobs" activeClassName="active">Ofertas de Empleo</NavLink>
        </li>
        <li>
          <NavLink to="/companies" activeClassName="active">Empresas</NavLink>
        </li>
        <li>
          <NavLink to="/profiles" activeClassName="active">Perfiles</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;