import React, { Component } from 'react';
import './CardArea.css';
import Card from '../Card/Card.js';
import Header from '../Header/Header.js';
import Deck from '../Deck/Deck.js';

class CardArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popUpCard: {},
      showPopUp: false,
      selectedDeck: []
    };
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
      return <Card userCard={userCard} 
                   key={userCard.cardName}
                   cardAreaView={this.props.cardAreaView}
                   displayPopUp={this.displayPopUp} />
    });
  }

  sortDecks() {
    this.props.userDecks.sort((a, b) => a.price - b.price);
    return this.props.userDecks.map(userDeck => {
      return <Deck 
                userDeck={userDeck} 
                key={userDeck.deckName}
                expandDeck={this.expandDeck}
                setCardAreaView={this.props.setCardAreaView}
              />
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
    let selectedDeck = this.props.getExpandedDeckInfo(deckObj)
    this.setState({ selectedDeck });
  }

  displayDeck = () => {
      return this.state.selectedDeck.map(card => {
        return <Card cardImage={card.imageSource} 
                    price={card.price}
                    key={card.cardName}
                    cardAreaView={this.props.cardAreaView}/>
      })
  }

  render(props) {
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
          <div className="card--pop">
            <img
              className="popup--card"
              src={this.state.popUpCard.imageSource}
              alt={this.state.popUpCard.cardName}
            />
            <div className="popup-info">
            <div>
              <h2>{this.state.popUpCard.price}</h2>
              <h3>This card is played in:</h3>
              <ul>
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
          setAsideView={this.props.setAsideView}/>
        <section className="card-area--section">
          {cardAreaView}
        </section>
      </div>
    );
  }
}

export default CardArea;
