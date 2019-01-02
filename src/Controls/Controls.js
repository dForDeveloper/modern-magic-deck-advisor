import React, {Component} from 'react';
import '../styles/main.scss';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      cardName: '',
      isInvalidCardName: false,
      hasDuplicates: false,
      suggestions: []
    };
  }

  updateCardName = (event) => {
    let newSuggestions = [];
    if (event.target.value.length !== 0) {
      newSuggestions = this.props.cards.filter(card => {
        const cardName = card.cardName.toLowerCase();
        return cardName.startsWith(event.target.value.toLowerCase());
      })
        .map(card => card.cardName);
    }
    this.setState({ 
      cardName: event.target.value,
      suggestions: newSuggestions
     })
  }

  chooseSuggestion = (event) => {
    this.textInput.current.value = event.target.id;
    this.textInput.current.focus();
    this.setState({
      cardName: event.target.id,
      suggestions: [] 
    });
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
          placeholder="Enter cards you own"
          ref={this.textInput}>
        </input>
        <button
          className="controls--button"
          onClick={this.submitCard}>
            Add Card
        </button>
        <div className="controls--suggestion-area">
          {this.state.suggestions.map(cardName => {
            return (
              <span
                className="controls--suggestion"
                key={cardName}
                id={cardName}
                onClick={this.chooseSuggestion}>
              {cardName.slice(0,24)}
              </span>
            );
          })}
        </div>
        <p className="controls--error">{errorMessage}</p>
      </form>
    )
  }
}

export default Controls;