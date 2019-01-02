import React, { Component } from 'react';
import '../styles/main.scss';

class Deck extends Component {
  handleClick = () => {
    this.props.setCardAreaView('expandedDeck');
    this.props.expandDeck(this.props.userDeck);
  };

  addToFaveDecks = () => {
    this.props.addToFaveDecks(this.props.userDeck);
  };

  getDeckImage = () => {
    const images = [];
    this.props.userDeck.signatureCards.forEach(sigCard => {
      images.push(this.props.cards.find(card => card.cardName === sigCard).imageSource)
    });
    return images;
  }

  render() {
    const images = this.getDeckImage();
    return (
      <article className="deck--container">
        <div>
          <h2 className="deck--name">{this.props.userDeck.deckName}</h2>
          <h3 className="price--value">${this.props.userDeck.price}</h3>
          <div className="deck--signature">
            {images.map(image => {
              return (
                <img
                  className="deck--image"
                  src={image}
                  alt={this.props.userDeck.deckName}/>
              )
            })}
          </div>
          {this.props.cardAreaView === 'compareDecks' && (
          <button className="deck--button" onClick={this.addToFaveDecks}>
            Save Deck
          </button>)}
          <button className="deck--card-button" onClick={this.handleClick}>
            Show all cards
          </button>
        </div>
      </article>
    );
  }
}

export default Deck;
