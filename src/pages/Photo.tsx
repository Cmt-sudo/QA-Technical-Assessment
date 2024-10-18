// src/pages/Photo.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './PhotoPage.css'; // Import the CSS file

// Define the structure of a Photo object
interface Photo {
  id: number;
  title: string;
  thumbnailUrl: string;
}

const PhotoPage: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]); // State for storing the photos array
  const [searchTerm, setSearchTerm] = useState<string>(''); // State for the search input
  const [filteredPhotos, setFilteredPhotos] = useState<Photo[]>([]); // State for storing filtered photos
  const navigate = useNavigate(); // Initialize navigate

  // Fetch photos from the API
  useEffect(() => {
    axios.get<Photo[]>('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        setPhotos(response.data); // Set the photos data
        setFilteredPhotos(response.data); // Initially display all photos
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
      });
  }, []);

  // Function to handle search
  const handleSearch = () => {
    const filtered = photos.filter(photo =>
      photo.title.toLowerCase().includes(searchTerm.toLowerCase()) // Filter based on the photo title
    );
    setFilteredPhotos(filtered); // Update the filtered photos
  };

  return (
    <div className="photo-page">
      {/* Navigation Buttons */}
      <div className="nav-buttons">
        <button onClick={() => navigate('/home')}>Home</button>
        <button onClick={() => navigate('/user')}>Users</button>
        <button onClick={() => navigate('/album')}>Albums</button>
      </div>

      {/* Search Input and Button */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search photos by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>

      <h1>Photos</h1>
      <div className="photo-grid">
        {filteredPhotos.slice(0, 10).map(photo => (  // Display filtered photos (limit to 10)
          <div key={photo.id} className="photo-card">
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <h2>{photo.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoPage;
