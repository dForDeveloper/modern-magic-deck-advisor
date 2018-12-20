import React, { Component } from 'react'
import CardListItem from '../CardListItem/CardListItem.js';
import './CardList.css'

class CardList extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render(props) {
    return (
      <div>
        <ul className="cardlist--ul">
          {
            this.props.cardNames.map((cardName, index) => {
              return (<CardListItem 
                cardName={cardName}
                cardIndex={index}
                key={cardName}
                removeListItem={this.props.removeListItem}
                setCardCount={this.props.setCardCount} 
                userCardsData={this.props.userCardsData}/>)
            }, this)
          }
        </ul>
        <button>Compare Builds</button>
      </div>
    )
  }
}

export default CardList;