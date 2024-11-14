// src/components/Button/ArrowButton.js
import React from 'react';
import { SlArrowDown } from 'react-icons/sl'; // SlArrowDown 아이콘 import
import './ArrowButton.css';

const ArrowButton = ({ onClick }) => {
  return (
    <button className="arrow-button" onClick={onClick}>
      <SlArrowDown /> {/* SlArrowDown 아이콘 사용 */}
    </button>
  );
};

export default ArrowButton;
