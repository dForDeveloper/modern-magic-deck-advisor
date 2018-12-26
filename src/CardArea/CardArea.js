import React, { Component } from 'react';
import './CardArea.css';
import Card from '../Card/Card.js';
import Header from '../Header/Header.js';
import Deck from '../Deck/Deck.js';

class CardArea extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(props) {
    let cardAreaView;
    this.props.cardAreaView === 'myCardList' && 
      (cardAreaView = this.props.userCardsData.map(userCard => {
        return <Card userCard={userCard} key={userCard.cardName} />
      }))
    this.props.cardAreaView === 'myCardList' &&
      (cardAreaView = this.props.userDecks.map(deck => {
        return <Deck deckName={deck} />
      }))

    return (
      <div className="card-area">
        <Header 
          setAsideView={this.props.setAsideView}/>
        {cardAreaView}
      </div>
    );
  }
}

export default CardArea;
