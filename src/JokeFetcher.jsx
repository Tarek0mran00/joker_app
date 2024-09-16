import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreativeButton from './assets/CreativeButton';  // Import the new CreativeButton component
import './assets/JokeFetcher.css';  // Import the CSS file for styling

export default function JokeFetcher() {
  const [jokes, setJokes] = useState([]);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // Function to fetch 5 jokes
  const fetchJokes = async () => {
    try {
      let fetchedJokes = [];
      for (let i = 0; i < 5; i++) {
        const response = await axios.get('https://v2.jokeapi.dev/joke/Any?type=single');
        fetchedJokes.push(response.data.joke || 'No joke found');
      }
      setJokes(fetchedJokes);
      setError(null);
    } catch (err) {
      setError('Failed to fetch jokes');
    }
  };

  // Toggle favorite selection
  const toggleFavorite = (joke) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(joke)
        ? prevFavorites.filter((fav) => fav !== joke) // Remove if already a favorite
        : [...prevFavorites, joke] // Add if not a favorite
    );
  };

  // Remove joke from favorites
  const removeFavorite = (joke) => {
    setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav !== joke));
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  return (
    <div className="joke-container">
      <h1>Random Jokes</h1>
      {error ? <p style={{ color: 'red', textAlign: 'center' }}>{error}</p> : null}

      <div className="joke-grid">
        <div className="jokes-list">
          <h2>Random Jokes</h2>
          {jokes.map((joke, index) => (
            <div className="joke-item" key={index}>
              <p>{joke}</p>
              <CreativeButton
                label={favorites.includes(joke) ? 'Unselect Favorite' : 'Select as Favorite'}
                onClick={() => toggleFavorite(joke)}
              />
            </div>
          ))}
          <CreativeButton label="Get 5 New Jokes" onClick={fetchJokes} className="refresh-button" />
        </div>

        <div className="favorites-list">
          <h2>My Favorite Jokes</h2>
          {favorites.length === 0 ? (
            <p>No favorites selected</p>
          ) : (
            favorites.map((joke, index) => (
              <div className="joke-item" key={index}>
                <p>{joke}</p>
                <CreativeButton label="❌" onClick={() => removeFavorite(joke)} className="remove-favorite" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
