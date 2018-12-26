import React, { Component } from 'react';
import Controls from '../Controls/Controls.js';
import AsideBody from '../AsideBody/AsideBody.js';
import './Aside.css';

class Aside extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNames: [],
      hasDuplicates: false,
      isInvalidCardName: false
    };
  }

  addCardToList = (cardName) => {
    if (!this.state.cardNames.includes(cardName)) {
      const cardNames = this.state.cardNames.concat([cardName]);
      this.setState({
        cardNames: cardNames,
        hasDuplicates: false,
        isInvalidCardName: false,
      });
      this.props.retrieveCardNames(cardNames);
    } else {
      this.setState({ hasDuplicates: true });
    }
  }

  removeListItem = (indexToRemove) => {
    const [...newCardNames] = this.state.cardNames;
    newCardNames.splice(indexToRemove, 1)
    this.setState({ cardNames: newCardNames })
    this.props.retrieveCardNames(newCardNames);
  }

  throwInvalidCardNameError = () => {
    this.setState({ isInvalidCardName: true });
  }
  
  render(props) {
    return (
      <aside className="aside">
        <Controls addCardToList={this.addCardToList}
                  throwInvalidCardNameError={this.throwInvalidCardNameError}
                  isInvalidCardName={this.state.isInvalidCardName}
                  hasDuplicates={this.state.hasDuplicates}
                  cards={this.props.cards}/>
        <AsideBody asideView={this.props.asideView}
                   cardNames={this.state.cardNames} 
                   removeListItem={this.removeListItem}
                   setCardCount={this.props.setCardCount}
                   userCardsData={this.props.userCardsData}
                   compareBuilds={this.props.compareBuilds}
                   userFaveDecks={this.props.userFaveDecks}
                   removeFaveListItem={this.props.removeFaveListItem} />
      </aside>
    );
  }
}

export default Aside;