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

  sortCardsByName(card1, card2) {
    if (card1.cardName < card2.cardName) {
      return -1;
    } else {
      return 1;
    }
  }

  sortCards() {
    this.props.userCardsData.sort(this.sortCardsByName);
    return this.props.userCardsData.map(userCard => {
      return <Card userCard={userCard} key={userCard.cardName} />
    });
  }

  sortDecks() {
    this.props.userDecks.sort((a, b) => a.price - b.price);
    return this.props.userDecks.map(userDeck => {
      return <Deck userDeck={userDeck} key={userDeck.deckName} />
    });
  }
  
  displayPopup = (event) => {
    let cardPop = document.querySelector('.card--popup');
    if (event.target.classList.contains('card--image')) {
      cardPop.classList.add('card--pop');
      cardPop.classList.remove('card--popup-hide');
    }
  }

  returnToScreen = () => {
    let cardPop = document.querySelector('.card--popup');
    cardPop.classList.add('card--popup-hide');
    cardPop.classList.remove('card--pop');    
  }

  render(props) {
    let cardAreaView = [];
    if (this.props.cardAreaView === 'myCardList') {
      cardAreaView = this.sortCards();
    } else if (this.props.cardAreaView === 'compareDecks') {
      cardAreaView = this.sortDecks();
    }

    return (
      <div onClick={event => this.displayPopup(event)}
      className="card-area">
        <div className="card--popup  card--popup-hide">
          <img
            className="popup--card"
            src="https://img.scryfall.com/cards/large/en/a25/122.jpg"
          />
          <div className="popup-info">
          <div>
            <h1>Card Title</h1>
            <h1>Mana Cost:</h1>
            <h1>Card Type:</h1>
            <h1>Card Price:</h1>
            <h1>Card Avg:</h1>
          </div>
            <i onClick={this.returnToScreen} 
               className="far fa-times-circle"></i>
          </div>
        </div>
        <Header 
          setAsideView={this.props.setAsideView}/>
        <section className="card-area--section">
          {cardAreaView}
        </section>
      </div>
    );
  }
}

export default CardArea;
