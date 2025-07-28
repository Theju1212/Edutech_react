import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header({ onClassChange }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClassChange = (e) => {
    const selectedClass = e.target.value;
    if (onClassChange) {
      onClassChange(selectedClass);
    }
    navigate('/courses');
    setMenuOpen(false); // close menu on navigation
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <h1 className="logo">Eduverse</h1>

      <button className="hamburger" onClick={toggleMenu} aria-label="Menu">
        ☰
      </button>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/courses" onClick={closeMenu}>Courses</Link>
        <Link to="/dashboard" onClick={closeMenu}>Dashboard</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
