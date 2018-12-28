import React, {Component} from 'react';

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

  clearInput = () => {
    document.querySelector('.controls--input').value = '';
  }

  addCardToList = (event) => {
    event.preventDefault();
    const matchedCard = this.validateCardName();
    if (matchedCard) {
      this.props.addCardToList(matchedCard.cardName)
      this.clearInput()
    } else {
      this.props.throwInvalidCardNameError();
      this.clearInput()
    }
  }

  validateCardName = () => {
    return this.props.cards.find(card => {
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