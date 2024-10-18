// src/pages/Album.tsx
import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import './AlbumPage.css';

// Define the structure of an Album object
interface Album {
  id: number;
  title: string;
  userId: number;
}

const AlbumPage: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>(''); // State for the search term
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch albums from API
    axios.get<Album[]>('https://jsonplaceholder.typicode.com/albums')
      .then((response: AxiosResponse<Album[]>) => {
        setAlbums(response.data); // Set the albums data
      })
      .catch((error: any) => {
        console.error('Error fetching albums:', error);
      });
  }, []);

  // Filter albums based on the search term
  const filteredAlbums = albums.filter(album =>
    album.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="album-page">
      {/* Navigation Buttons */}
      <div className="nav-buttons">
        <button onClick={() => navigate('/home')}>Home</button>
        <button onClick={() => navigate('/user')}>Users</button>
        <button onClick={() => navigate('/photo')}>Photos</button>
      </div>

      {/* Search Input */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search albums by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term as user types
        />
      </div>

      <h1>Albums</h1>
      <div className="album-grid">
        {filteredAlbums.slice(0, 10).map(album => (
          <div key={album.id} className="album-card">
            <img
              src={`https://picsum.photos/id/${album.id}/200/200`} // Placeholder image
              alt={album.title}
            />
            <h2>{album.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumPage;
