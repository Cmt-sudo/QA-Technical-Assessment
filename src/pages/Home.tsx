// src/pages/Home.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import the CSS file

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Home Page</h1>
      <p>Welcome to the app!</p>

      {/* Clickable Images */}
      <div className="image-container">
        <div className="image-box" onClick={() => navigate('/user')}>
          <img src="https://via.placeholder.com/150" alt="User" />
          <p>User</p>
        </div>
        <div className="image-box" onClick={() => navigate('/album')}>
          <img src="https://via.placeholder.com/150" alt="Album" />
          <p>Album</p>
        </div>
        <div className="image-box" onClick={() => navigate('/photo')}>
          <img src="https://via.placeholder.com/150" alt="Photo" />
          <p>Photo</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
