import React from 'react';
import './JokeItem.css'; // Import the CSS file for styling

const JokeItem = ({ joke, isFavorite, onToggleFavorite, onRemoveFavorite }) => {
  return (
    <div className="joke-item">
      <p>{joke}</p>
      <div className="joke-actions">
        <button onClick={onToggleFavorite}>
          {isFavorite ? 'Unselect Favorite' : 'Select as Favorite'}
        </button>
        {onRemoveFavorite && (
          <button className="remove-favorite" onClick={onRemoveFavorite}>
            ❌
          </button>
        )}
      </div>
    </div>
  );
};

export default JokeItem;
