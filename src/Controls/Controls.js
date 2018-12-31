import React, {Component} from 'react';
import '../styles/main.scss';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      cardName: '',
      isInvalidCardName: false,
      hasDuplicates: false
    };
  }

  updateCardName = (event) => {
    this.setState({ cardName: event.target.value })
  }

  submitCard = (event) => {
    event.preventDefault();
    const matchedCard = this.validateCardName();
    if (matchedCard) {
      this.addCardToList(matchedCard.cardName)
    } else {
      this.throwInvalidCardNameError();
    }
    this.clearInput();
  }

  validateCardName = () => {
    return this.props.cards.find(card => {
      return card.cardName.toLowerCase() === this.state.cardName.toLowerCase();
    });
  }

  addCardToList = (cardName) => {
    let cardNames = this.props.userCardsData.map(card => card.cardName);
    if (!cardNames.includes(cardName)) {
      this.setState({
        hasDuplicates: false,
        isInvalidCardName: false
      });
      this.props.addUserCard(cardName);
    } else {
      this.setState({ 
        hasDuplicates: true,
        isInvalidCardName: false
      });
    }
  }

  throwInvalidCardNameError = () => {
    this.setState({ isInvalidCardName: true });
  }

  clearInput = () => {
    this.textInput.current.value = '';
    this.textInput.current.focus();
  }

  render() {
    let errorMessage;
    if (this.state.isInvalidCardName) {
      errorMessage = "The card name you entered is not in the database"
    } else if (this.state.hasDuplicates) {
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
          onClick={this.submitCard}>
            Add Card
        </button>
        <p>{errorMessage}</p>
      </form>
    )
  }
}

export default Controls;