import React from 'react';
import FaveListItem from '../FaveListItem/FaveListItem.js'
import '../styles/main.scss';

function FaveList(props) {
  return(
    <div>
      <h1 className="list--h1">Saved Decks:</h1>
      <ul className="list--ul">
        {
          props.faveDecks.map((deck, index) => {
            return (
            <FaveListItem
              deckName={deck.deckName}
              deckIndex={index}
              key={deck.deckName}
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