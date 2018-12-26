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
        <img
          className="deck--image"
          src="https://musingsofalifelongnerd.files.wordpress.com/2015/01/mtg-card-back.jpg"
          alt={this.props.userCard.cardName}
        />
        <div className="price--container">
          <h1 className="price--counter">{this.props.userCard.cardCount}x</h1>
        </div>
      </article>
    );
  }
}

export default Deck;