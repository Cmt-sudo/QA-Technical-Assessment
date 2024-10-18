// src/routes.js

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import User from './pages/User';
import Album from './pages/Album';
import Photo from './pages/Photo';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/user" element={<PrivateRoute><User /></PrivateRoute>} />
          <Route path="/album" element={<PrivateRoute><Album /></PrivateRoute>} />
          <Route path="/photo" element={<PrivateRoute><Photo /></PrivateRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;


