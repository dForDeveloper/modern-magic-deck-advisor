import React, { Component } from 'react';
import FaveListItem from '../FaveListItem/FaveListItem.js'

class FaveList extends Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return(
      <div>
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