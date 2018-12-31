import React from 'react';
import FaveListItem from '../FaveListItem/FaveListItem.js'
import '../styles/main.scss';

function FaveList(props) {
  const faveDeckNames = props.faveDecks.map(deck => deck.deckName);
  faveDeckNames.sort();
  return(
    <div>
      <h1 className="list--h1">My Favorite Decks:</h1>
      <ul className="list--ul">
        {
          faveDeckNames.map((deck, index) => {
            return (
            <FaveListItem
              deckName={deck}
              deckIndex={index}
              key={deck}
              faveDecks={props.faveDecks}
              saveArray={props.saveArray}/>
            )
          })
        }
      </ul>
    </div>
  )
}

export default FaveList;