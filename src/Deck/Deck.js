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

  render() {
    return (
      <article className="deck--container">
        {this.props.cardAreaView === 'compareDecks' && (
        
            <h2 className="deck--name">{this.props.userDeck.deckName}</h2>
            <h3 className="price--value">${this.props.userDeck.price}</h3>
            <img
              className="deck--image"
              src="https://musingsofalifelongnerd.files.wordpress.com/2015/01/mtg-card-back.jpg"
              alt={this.props.userDeck.deckName}
            />
            <div className="price--container deck--divFlex">
              <button onClick={this.addToFaveDecks}>
                Add to Favorite Decks
              </button>
              <button onClick={this.handleClick}>
                    {this.props.userDeck.cards.length} cards
              </button>
            </div>
        )}
        {this.props.cardAreaView === 'faveDecks' && (
          <div>
            <h2 className="deck--name">{this.props.userDeck.deckName}</h2>
            <img
              className="deck--image"
              src="https://musingsofalifelongnerd.files.wordpress.com/2015/01/mtg-card-back.jpg"
              alt={this.props.userDeck.deckName}
            />
            <button onClick={this.handleClick}>
                    {this.props.userDeck.cards.length} cards
            </button>
            <div className="price--container">
              <h3 className="price--value">${this.props.userDeck.price}</h3>
            </div>
          </div>
        )}

      </article>
    );
  }
}

export default Deck;
