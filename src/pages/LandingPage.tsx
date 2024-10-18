// src/pages/LandingPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

const LandingPage: React.FC = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to login page when the button is clicked
  };

  return (
    <div className="landing-container">
      <h1>Welcome to the App</h1>
      <p>Please log in to access more features.</p>
      <button className="login-button" onClick={handleLoginClick}>Login</button> {/* Add the login button */}
    </div>
  );
};

export default LandingPage;
