import React, {Component} from 'react';
import {cards} from '../mtg.js'

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: ''
    };
  }

  updateCardName = (event) => {
    this.setState({ cardName: event.target.value })
  }

  addCardToList = (event) => {
    event.preventDefault();
    // debugger;
    const matchedCard = this.validateCardName();
    if (matchedCard) {
      this.props.addCardToList(matchedCard.cardName)
    } else {
      this.props.throwInvalidCardNameError();
    }
  }

  validateCardName = () => {
    return cards.find(card => {
      return card.cardName.toLowerCase() === this.state.cardName.toLowerCase();
    });
  }

  render(props) {
    let errorMessage = '';
    if (this.props.isInvalidCardName) {
      errorMessage = "The card name you entered is not in the database"
    } else if (this.props.hasDuplicates) {
      errorMessage = "This card is already in your list"
    }
    return(
      <form>
        <input type="text" onChange={this.updateCardName} className="controls--input"></input>
        <button onClick={this.addCardToList} className="controls--button">Click to add card</button>
        <p>{errorMessage}</p>
      </form>
    )
  }
}

export default Controls;