import React, { Component } from 'react';
import '../styles/main.scss';
import Card from '../Card/Card.js';
import Header from '../Header/Header.js';
import Deck from '../Deck/Deck.js';

class CardArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popUpCard: {},
      showPopUp: false,
      cardsInDeck: []
    };
  }

  sortCards() {
    return this.props.userCardsData.map(userCard => {
      return (
        <Card
          card={userCard} 
          key={userCard.cardName}
          cardAreaView={this.props.cardAreaView}
          displayPopUp={this.displayPopUp}/>
      );
    });
  }

  sortDecks() {
    this.props.userDecks.sort((a, b) => a.price - b.price);
    return this.props.userDecks.map(userDeck => {
      return (
        <Deck 
          userDeck={userDeck} 
          key={userDeck.deckName}
          expandDeck={this.expandDeck}
          setCardAreaView={this.props.setCardAreaView}
          addToFaveDecks={this.props.addToFaveDecks}/>
      );
    });
  }

  displayPopUp = (card) => {
    this.setState({
      popUpCard: card,
      showPopUp: true
    });
  }

  returnToScreen = () => {
    this.setState({ showPopUp: false });
  }
  
  expandDeck = (deckObj) => {
    const cardsInDeck = this.props.getExpandedDeckInfo(deckObj);
    cardsInDeck.map(cardInDeck => {
      const matchedCard = this.props.userCardsData.find(userCard => {
        return userCard.cardName === cardInDeck.cardName;
      });
      cardInDeck.requiredCount = deckObj.cardCounts[cardInDeck.cardName];
      cardInDeck.userCount = matchedCard ? 
        Math.min(cardInDeck.requiredCount, matchedCard.cardCount) : 0;
      return cardInDeck;
    });
    this.setState({ cardsInDeck });
  }

  displayDeck = () => {
    return this.state.cardsInDeck.map(card => {
      return (
        <Card
          card={card} 
          key={card.cardName}
          cardAreaView={this.props.cardAreaView}
          displayPopUp={this.displayPopUp}
          addToWishlist={this.props.addToWishlist}/>
      );
    });
  }

  render() {
    let cardAreaView = [];
    if (this.props.cardAreaView === 'myCardList') {
      cardAreaView = this.sortCards();
    } else if (this.props.cardAreaView === 'compareDecks') {
      cardAreaView = this.sortDecks();
    } else if (this.props.cardAreaView === 'expandedDeck') {
      cardAreaView = this.displayDeck();
    }

    return (
      <div className="card-area">
        {this.state.showPopUp && (
          <div className="popup--div">
            <img
              className="popup--card-image"
              src={this.state.popUpCard.imageSource}
              alt={this.state.popUpCard.cardName}
            />
            <div className="popup--info">
            <div>
              <h2>{this.state.popUpCard.price}</h2>
              <h3>This card is played in:</h3>
              <ul className="popup--list">
                {
                  this.state.popUpCard.decks.map(deck => {
                    return <li>{deck}</li>
                  })
                }
              </ul>
            </div>
              <i onClick={this.returnToScreen} 
                className="far fa-times-circle"></i>
            </div>
          </div>
        )}
        <Header 
          setAsideView={this.props.setAsideView}
          setCardAreaView={this.props.setCardAreaView}/>
        <section className="card-area--section">
          {cardAreaView}
        </section>
      </div>
    );
  }
}

export default CardArea;