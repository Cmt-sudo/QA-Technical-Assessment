// src/pages/User.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './UserPage.css'; // Import the CSS file

// Define the structure of a User object
interface User {
  id: number;
  name: string;
  email: string;
}

const UserPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]); // Use User[] as the type for the users array
  const [searchTerm, setSearchTerm] = useState<string>(''); // State for search term
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users') // Specify that axios.get will return an array of User objects
      .then((response) => {
        setUsers(response.data); // Set the users data correctly
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  // Filter users based on the search term
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-page">
      {/* Navigation Buttons */}
      <div className="nav-buttons">
        <button onClick={() => navigate('/home')}>Home</button>
        <button onClick={() => navigate('/album')}>Albums</button>
        <button onClick={() => navigate('/photo')}>Photos</button>
      </div>

      {/* Search Input */}
      <input
        type="text"
        className="search-input"
        placeholder="Search by name or email..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
      />

      <h1>Users</h1>
      <div className="user-grid">
        {filteredUsers.slice(0, 10).map(user => ( // Display only the first 10 filtered users
          <div key={user.id} className="user-card">
            <img
              src={`https://robohash.org/${user.id}?set=set2&size=150x150`} // Placeholder image
              alt={user.name}
            />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPage;
