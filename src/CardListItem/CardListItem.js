import React, { Component } from "react";
import '../styles/main.scss';

class CardListItem extends Component {
  removeListItem = () => {
    const [...newUserCardsData] = this.props.userCardsData;
    newUserCardsData.splice(this.props.cardIndex, 1);
    this.props.saveArray('userCardsData', newUserCardsData);
  }

  increaseCardCount = () => {
    if (this.props.cardCount < 4) {
      this.updateUserCardsData(this.props.cardCount + 1);
    }
  }

  decreaseCardCount = () => {
    if (this.props.cardCount > 1) {
      this.updateUserCardsData(this.props.cardCount - 1);
    }
  }

  updateUserCardsData = (newCount) => {
    const newUserCardsData = this.props.userCardsData.map(card => {
      if (this.props.cardName === card.cardName) {
        card.cardCount = newCount;
      }
      return card;
    });
    this.props.saveArray('userCardsData', newUserCardsData);
  }

  render() {
    return (
      <li id={this.props.cardIndex} className="list--li">
        {this.props.cardName}
        <i className="fas fa-minus" onClick={this.decreaseCardCount}/>
        <span> {this.props.cardCount}</span>
        <i className="fas fa-plus" onClick={this.increaseCardCount}/>
        <i className="far fa-trash-alt" onClick={this.removeListItem}/>
      </li>
    );
  }
}

export default CardListItem;