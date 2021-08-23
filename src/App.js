import './App.css';
import React, { useState } from 'react';
import { Score } from './features/score/Score.js';
import { Board } from './features/board/Board.js';
import {useDispatch} from 'react-redux';
import {setBoard, resetCards} from './features/board/boardSlice'
// Add import statements below



const App = () => {
  const [hoverGame, isHoverGame] = useState(false);
  const [hoverPar, isHoverPar] = useState(false);


  const tryNewPairButton = {
    backgroundColor : hoverPar ?  '#6400e4' : '#7d1aff'
  }
  const startButton = {
    backgroundColor : hoverGame ?  '#141c3a' : '#2c3f81'
  }
 

  const dispatch = useDispatch();
  // Add dispatch variable below
  

  const startGameHandler = () => {
  dispatch(setBoard());
    
  };

  const tryAgainHandler = () => {
    dispatch(resetCards());
    // Add action dispatch below
  };

  return (

    <div className="App">
      <Score />
      <Board />
      <footer className="footer">
        <button onClick={startGameHandler} style={startButton} onMouseLeave={() => {isHoverGame(false)}}  onMouseEnter={() => {isHoverGame(true)}}>
          Iniciar Juego
        </button>
        <button onClick={tryAgainHandler} style={tryNewPairButton} onMouseLeave={() => {isHoverPar(false)}}  onMouseEnter={() => {isHoverPar(true)}}>
          Tratar otro par
        </button>
      </footer>
    </div>
  );
};

export default App;
