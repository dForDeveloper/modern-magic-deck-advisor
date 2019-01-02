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
        <h2 className="deck--name">{this.props.userDeck.deckName}</h2>
        <h3 className="price--value">${this.props.userDeck.price}</h3>
        <img
          className="deck--image"
          src="https://musingsofalifelongnerd.files.wordpress.com/2015/01/mtg-card-back.jpg"
          alt={this.props.userDeck.deckName}
        />
        <div className="deck--divFlex">
          <button className="deck--button" onClick={this.addToFaveDecks}>
            Add to My Favorites
          </button>
          <button className="deck--card-button" onClick={this.handleClick}>
            Show all cards
          </button>
        </div>
      </article>
    );
  }
}

export default Deck;
