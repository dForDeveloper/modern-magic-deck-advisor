import React, { Component } from 'react';
import Controls from '../Controls/Controls.js';
import AsideBody from '../AsideBody/AsideBody.js';
import {cards} from '../mtg.js'
import './Aside.css';

class Aside extends Component {
  constructor() {
    super();
    this.state = {
      cardNames: [],
      userCards: [],
      hasDuplicates: false,
      isInvalidCardName: false
    };
  }

  addCardToList = (cardName) => {
    if (!this.state.cardNames.includes(cardName)) {
      const newCard = {
        cardName: cardName,
        cardCount: 1
      }
      const userCards = this.state.userCards.concat([newCard]);
      const cardNames = userCards.map(userCard => userCard.cardName);
      const newState = {
        cardNames: cardNames,
        hasDuplicates: false,
        isInvalidCardName: false,
        userCards: userCards
      };
      this.setState(newState);
      this.props.retrieveCardNames(cardNames);
    } else {
      this.setState({ hasDuplicates: true });
    }
  }

  removeListItem = (indexToRemove) => {
    const newCardNames = [...this.state.cardNames]
    newCardNames.splice(indexToRemove, 1)
    this.setState({ cardNames: newCardNames })
  }

  throwInvalidCardNameError = () => {
    this.setState({ isInvalidCardName: true });
  }
  

  render() {
    return (
      <aside className="aside">
        <Controls addCardToList={this.addCardToList}
                  throwInvalidCardNameError={this.throwInvalidCardNameError}
                  isInvalidCardName={this.state.isInvalidCardName}
                  hasDuplicates={this.state.hasDuplicates}/>
        <AsideBody cardNames={this.state.cardNames} 
        // card names is objects, need array of strings
                    removeListItem={this.removeListItem}/>
      </aside>
    );
  }
}

export default Aside;