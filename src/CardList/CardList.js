import React, { Component } from 'react'
import CardListItem from '../CardListItem/CardListItem.js';
import '../styles/main.scss';

class CardList extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {
    this.props.cardNames.sort();
    return (
      <div>
        <h1>My Cards:</h1>
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
        <button onClick={this.props.compareBuilds}>Compare Builds</button>
      </div>
    )
  }
}

export default CardList;