import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <h3>Filma shqip</h3>
        <div className="d-flex justify-content-end">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/movies" className="nav-link">Movies</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;