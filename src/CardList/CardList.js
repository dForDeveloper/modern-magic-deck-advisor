import React, { Component } from 'react'
import CardListItem from '../CardListItem/CardListItem.js';

class CardList extends Component {
  constructor() {
    super()
    this.state = {

    }
  }


  render(props) {
    return (
      <div>
        <ul>
          {
            this.props.cardNames.map(cardName => {
              return (<CardListItem cardName={cardName}/>)
            })
          }
        </ul>
        <button>Compare Builds</button>
      </div>
    )
  }
}

export default CardList;