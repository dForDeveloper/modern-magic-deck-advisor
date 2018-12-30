import React, { Component } from 'react';
import FaveListItem from '../FaveListItem/FaveListItem.js'

class FaveList extends Component {
  render() {
    const faveDeckNames = this.props.faveDecks.map(deck => deck.deckName);
    faveDeckNames.sort();
    return(
      <div>
        <h1>My Favorite Decks:</h1>
        <ul>
          {
            faveDeckNames.map((deck, index) => {
              return (
              <FaveListItem
                deckName={deck}
                deckIndex={index}
                key={deck}
                faveDecks={this.props.faveDecks}
                saveArray={this.props.saveArray}/>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default FaveList;