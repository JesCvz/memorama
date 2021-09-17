import React from 'react';
import {useSelector} from 'react-redux';
import {selectVisibleIDs, flipCard, selectMatchedIDs} from '../../boardSlice';
import {useDispatch} from 'react-redux';
import BackgroundImage from '../../../../images/Background.jpg';
import Card1 from '../../../../images/1.jpg';
import Card2 from '../../../../images/2.jpg';
import Card3 from '../../../../images/3.jpg';
import Card4 from '../../../../images/4.jpg';
import Card5 from '../../../../images/5.jpg';
import Card6 from '../../../../images/6.jpg';
import Card7 from '../../../../images/7.jpg';
import Card8 from '../../../../images/8.jpg';
// Add import statements below


export const Card = ({ id, contents }) => {
  const visibleIDs = useSelector(selectVisibleIDs);
  const matchedIDs = useSelector(selectMatchedIDs);
  const dispatch = useDispatch();
  const cardImage = contents
  // flip card action

  const getBackGroundImage = () => {
    switch(cardImage){
      case 'Card1':{
        return Card1;
      }
      case 'Card2':{
        return Card2;
      }
      case 'Card3':{
        return Card3;
      }
      case 'Card4':{
        return Card4;
      }
      case 'Card5':{
        return Card5;
      }
      case 'Card6':{
        return Card6;
      }
      case 'Card7':{
        return Card7;
      }
      case 'Card8':{
        return Card8;
      }
    }
  }
  const getColor = () => {
    if(cardStyle === 'matched'){
      return 'green'
    }
    
  }
  const flipHandler = (id) => {
    dispatch(flipCard(id));
    
  };

  let cardStyle = 'resting'
  let click = () => flipHandler(id);
  
  let cardText = (
    <img src={BackgroundImage} className="logo-placeholder" alt="Card option" height={155} width={500}/>
  );

  // 1st if statement
  // implement card id array membership check
  if (visibleIDs.includes(id) || matchedIDs.includes(id)) {
    
    cardText = <img src={getBackGroundImage()} className="logo-placeholder" alt="Card option" height={155} width={500} style={{borderRadius: 10, marginTop:3}}/>;
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
    <div>
      <button onClick={click} style={{ backgroundColor: getColor(), borderRadius: 10, border: 'none'}}>
        {cardText}
      </button>
    </div>
 
    
  );
};
