import React, { Component } from "react";
import "./CardListItem.css";

class CardListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }

  updateListItem = event => {
    if (event.target.classList.contains("fa-trash-alt")) {
      this.props.removeListItem(parseInt(event.target.closest("li").id));
    } else if (event.target.classList.contains("fa-plus")) {
      this.increaseCardCount();
    } else if (event.target.classList.contains("fa-minus")) {
      this.decreaseCardCount();
    }
  };

  increaseCardCount = props => {
    if (this.state.count < 4) {
      this.setState(
        state => {
          return { count: state.count + 1 };
        },
        () => {
          const newUserCards = this.props.userCards.map(card => {
            if (this.props.cardName === card.cardName) {
              card.cardCount = this.state.count;
            }
            return card;
          });
          return this.props.setCardCount(newUserCards);
        }
      );
    }
  };

  decreaseCardCount = cardName => {
    if (this.state.cardCount > 1) {
      this.setState(state => {
        return { cardCount: state.cardCount - 1 };
      });
      this.props.setCardCount(this.props.cardName, this.state.cardCount - 1);
    }
  };

  render(props) {
    return (
      <li
        onClick={this.updateListItem}
        id={this.props.cardIndex}
        className="cardlist--item"
      >
        {this.props.cardName}
        <i className="fas fa-minus" />
        <span>{this.state.count}</span>
        <i className="fas fa-plus" />
        <i className="far fa-trash-alt" />
      </li>
    );
  }
}

export default CardListItem;
