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
    this.props.cardAreaView === 'compareDecks' &&
      (cardAreaView = this.props.userDecks.map(userDeck => {
        return <Deck userDeck={userDeck} key={userDeck.deckName} />
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
