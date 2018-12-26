import React, { Component } from 'react';
import './Deck.css'

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render(props) {
    return (
      <article className="deck--container">
        <h2 className="deck--name">{this.props.userDeck.deckName}</h2>
        <img
          className="deck--image"
          src="https://musingsofalifelongnerd.files.wordpress.com/2015/01/mtg-card-back.jpg"
          alt={this.props.userDeck.deckName}
        />
        <div className="price--container">
          <h3 className="price--value">${this.props.userDeck.price}</h3>
        </div>
      </article>
    );
  }
}

export default Deck;