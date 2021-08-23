import React from 'react';
import { useSelector } from 'react-redux';
import { selectMatchedIDs } from '../board/boardSlice';
// Add import statement below


export const Score = () => {
  const cardsMatched = useSelector(selectMatchedIDs);
  

  return (
    // implement selected data inside <div>
    <div className="score-container">Cartas Combinadas: {cardsMatched.length}</div>
  );
};