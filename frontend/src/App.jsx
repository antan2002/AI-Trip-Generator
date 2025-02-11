import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Custom/Header';
import Footer from './components/Custom/Footer';
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import SignUp from './components/Custom/SignUp';
import LogIn from './components/Custom/LogIn';
import './App.css';
import ViewTrip from './View-Trip/[tripId]/ViewTrip';
import Profile from './routes/Profile';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <>
      <Header isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="/signup" element={<SignUp onAuthSuccess={handleAuthSuccess} />} />
            <Route path="/login" element={<LogIn onAuthSuccess={handleAuthSuccess} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/view-trip/:tripID" element={<ViewTrip />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
