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
      hasDuplicates: false,
      isInvalidCardName: false
    };
  }

  addCardToList = (cardName) => {
    const matchingCard = cards.find(card => {
      return card.cardName.toLowerCase() === cardName.toLowerCase();
    });
    if (!this.state.cardNames.includes(matchingCard.cardName)) {
      const newState = {
        cardNames: this.state.cardNames.concat([matchingCard.cardName]),
        hasDuplicates: false,
        isInvalidCardName: false
      };
      this.props.retrieveCardName(matchingCard.cardName)
      this.setState(newState);
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
                    removeListItem={this.removeListItem}/>
      </aside>
    );
  }
}

export default Aside;