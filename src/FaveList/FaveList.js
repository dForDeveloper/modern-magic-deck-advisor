import React, { Component } from 'react';
import FaveListItem from '../FaveListItem/FaveListItem.js'
import '../styles/main.scss';

class FaveList extends Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return(
      <div>
        <h1>My Favorite Decks:</h1>
        <ul>
          {
            this.props.userFaveDecks.map((deck, index) => {
              return( <FaveListItem
                deckName={deck.deckName}
                deckIndex={index}
                key={deck.deckName}
                removeFaveListItem={this.props.removeFaveListItem}
                />)
            })
          }
        </ul>
      </div>
    )
  }
  
}

  

export default FaveList;