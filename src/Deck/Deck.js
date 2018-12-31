import React, { Component } from 'react';
import './Deck.scss'

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  handleClick = () => {
    this.props.setCardAreaView('expandedDeck') 
    this.props.expandDeck(this.props.userDeck);
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
        <button onClick={this.handleClick}>
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