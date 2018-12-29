import React, {Component} from 'react';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      cardName: ''
    };
  }

  updateCardName = (event) => {
    this.setState({ cardName: event.target.value })
  }

  clearInput = () => {
    this.textInput.current.value = '';
    this.textInput.current.focus();
  }

  addCardToList = (event) => {
    event.preventDefault();
    const matchedCard = this.validateCardName();
    if (matchedCard) {
      this.props.addCardToList(matchedCard.cardName)
    } else {
      this.props.throwInvalidCardNameError();
    }
    this.clearInput();
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
        <input
          type="text"
          className="controls--input"
          onChange={this.updateCardName}
          ref={this.textInput}>
        </input>
        <button
          className="controls--button"
          onClick={this.addCardToList}>
            Add Card
        </button>
        <p>{errorMessage}</p>
      </form>
    )
  }
}

export default Controls;