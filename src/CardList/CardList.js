import React from 'react'
import CardListItem from '../CardListItem/CardListItem.js';
import '../styles/main.scss';

function CardList(props) {
  const cardNames = props.userCardsData.map(card => card.cardName);
  cardNames.sort();
  return (
    <div>
      <h1>My Cards:</h1>
      <ul className="cardlist--ul">
        {
          cardNames.map((cardName, index) => {
            return (
              <CardListItem 
                cardName={cardName}
                cardIndex={index}
                cardCount={props.userCardsData[index].cardCount}
                key={cardName}
                userCardsData={props.userCardsData}
                saveArray={props.saveArray}/>
            )
          }, this)
        }
      </ul>
      <button onClick={props.compareBuilds}>Compare Builds</button>
    </div>
  )
}

export default CardList;