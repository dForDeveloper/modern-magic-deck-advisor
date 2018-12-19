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
            this.props.cardNames.map((cardName, index) => {
              return (<CardListItem cardName={cardName}
                                    cardIndex={index}
                                    removeListItem={this.props.removeListItem} />)
            }, this)
          }
        </ul>
        <button>Compare Builds</button>
      </div>
    )
  }
}

export default CardList;