// src/components/OvalTagButton.js
import React from 'react';
import './OvalButton.css';

const OvalButton = ({ isActive, onClick, label }) => {
    return (
        <div
            className={`tag ${isActive ? 'active' : ''}`}
            onClick={onClick}
        >
            {label}
        </div>
    );
};

export default OvalButton;