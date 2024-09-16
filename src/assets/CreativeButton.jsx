import React from 'react';
import './CreativeButton.css';  // Import the CSS file for styling

export default function CreativeButton({ label, onClick, className = '' }) {
  return (
    <button className={`creative-button ${className}`} onClick={onClick}>
      {label}
    </button>
  );
}
