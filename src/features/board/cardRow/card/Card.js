import React from 'react';
import {useSelector} from 'react-redux';
import {selectVisibleIDs, flipCard, selectMatchedIDs} from '../../boardSlice';
import {useDispatch} from 'react-redux';
import BackgroundImage from '../../../../images/Background.jpg';

// Add import statements below


export const Card = ({ id, contents }) => {
  const visibleIDs = useSelector(selectVisibleIDs);
  const matchedIDs = useSelector(selectMatchedIDs);
  const dispatch = useDispatch();
  
  // flip card action
  const flipHandler = (id) => {
    dispatch(flipCard(id));
    
  };

  let cardStyle = 'resting'
  let click = () => flipHandler(id);
  
  let cardText = (
    <img src={BackgroundImage} className="logo-placeholder" alt="Card option" height={105} width={500}/>
  );

  // 1st if statement
  // implement card id array membership check
  if (visibleIDs.includes(id) || matchedIDs.includes(id)) {
    cardText = contents;
    click = () => {};
  }

  // 2nd if statement
  // implement card id array membership check
  if (matchedIDs.includes(id)) {
    cardStyle = 'matched';
  }

  // 3rd if statement
  // implement number of flipped cards check
  if (visibleIDs.length === 2) {
    click = () => {};
  }

  return (
    <button onClick={click} className={`card ${cardStyle}`}>
      {cardText}
    </button>
  );
};
