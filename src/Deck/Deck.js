import React, { Component } from 'react';
import './Deck.css'

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  handleClick = (event) => {
    let target = event.target.className;
  }
  
  render(props) {
    return (
      <article className="deck--container">
        <p className="deck--name">{this.props.userDeck.deckName}</p>
        <img
          className="deck--image"
          src="https://musingsofalifelongnerd.files.wordpress.com/2015/01/mtg-card-back.jpg"
          alt={this.props.userDeck.deckName}
        />
        <button onClick={this.handleClick}
                className={this.props.userDeck.deckName}
                >
          {this.props.userDeck.cards.length} cards
        </button>
        <div className="price--container">
          <h3 className="price--value">${this.props.userDeck.price}</h3>
        </div>
      </article>
    );
  }
}

export default Deck;