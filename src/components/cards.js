import React, { useState } from 'react';
import './cards.css';
import CardItem from './cardsitem';

function Cards() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (text) => {
    setHoveredCard(text);
  };

  return (
    <div className='cards'>
      <h1>Check out our services !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <div className='cards__item'>
          <div class="maincontainer">

            <div class="thecard">

              <div class="thefront"><h1>Web Development</h1><p>This is the front of the card. It contains important information. Please see overleaf for more details.</p></div>

              <div class="theback"><h1>Back of Card</h1><p>Your use of this site is subject to the terms and conditions governing this and all transactions.</p>
            <button>Submit</button></div>

          </div>
          </div>
            <div className='card-text'>
              {hoveredCard === 'Web Development' && 'Text for Web Development'}
            </div>
          </div>

          <div className='cards__item'>
          <div class="maincontainer">
            <div class="thecard">
              <div class="thefront"><h1>CRM</h1><p>This is the front of the card. It contains important information. Please see overleaf for more details.</p></div>
              <div class="theback"><h1>Back of Card</h1><p>Your use of this site is subject to the terms and conditions governing this and all transactions.</p>
            <button>Submit</button></div>
          </div>
          </div>
            <div className='card-text'>
              {hoveredCard === 'CRM' && 'Text for CRM'}
            </div>
          </div>

          <div className='cards__item'>
          <div class="maincontainer">
            <div class="thecard">
              <div class="thefront"><h1>Digital Marketing</h1><p>This is the front of the card. It contains important information. Please see overleaf for more details.</p></div>
              <div class="theback"><h1>Back of Card</h1><p>Your use of this site is subject to the terms and conditions governing this and all transactions.</p>
            <button>Submit</button></div>
          </div>
          </div>
            <div className='card-text'>
              {hoveredCard === 'Digital Marketing' && 'Text for Digital Marketing'}
            </div>
          </div>
        </div>
      </div>
      <div className='text-display'>
        {hoveredCard && (
          <p>
            Displaying text for <strong>{hoveredCard}</strong>
          </p>
        )}
      </div>
    </div>
  );
}

export default Cards;
