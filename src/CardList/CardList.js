import React, { Component } from 'react'
import CardListItem from '../CardListItem/CardListItem.js';
import './CardList.css'

class CardList extends Component {
  render() {
    const cardNames = this.props.userCardsData.map(card => card.cardName);
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
                  cardCount={this.props.userCardsData[index].cardCount}
                  key={cardName}
                  userCardsData={this.props.userCardsData}
                  saveArray={this.props.saveArray}/>
              )
            }, this)
          }
        </ul>
        <button onClick={this.props.compareBuilds}>Compare Builds</button>
      </div>
    )
  }
}

export default CardList;