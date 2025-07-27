import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
<a href="/" className="home-button">Home</a>

function Header({ onClassChange }) {
  const navigate = useNavigate();

  const handleClassChange = (e) => {
    const selectedClass = e.target.value;
    if (onClassChange) {
      onClassChange(selectedClass); // Send selected class to parent
    }
    navigate('/courses'); // Navigate to courses page when class is selected
  };

  return (
    <header className="header">
      <h1 className="logo">Eduverse</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/dashboard">Dashboard</Link>
        

        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
