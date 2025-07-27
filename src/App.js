// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from "./pages/Courses";
import CourseDetails from './pages/CourseDetails';
import Dashboard from './pages/Dashboard'; // adjust path if needed
import QuizPage from './pages/QuizPage';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
           <Route path="/course-details" element={<CourseDetails />} />
           <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/quiz" element={<QuizPage />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
