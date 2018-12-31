import React, { Component } from "react";
import "./FaveListItem.scss";

class FaveListItem extends Component {
  removeFaveListItem = () => {
    const [...newFaveDecks] = this.props.faveDecks;
    newFaveDecks.splice(this.props.deckIndex, 1);
    this.props.saveArray('faveDecks', newFaveDecks);
  }

  render() {
    return (
      <li id={this.props.deckIndex}>
        {this.props.deckName}
        <i 
          onClick={this.removeFaveListItem}
          className="far fa-trash-alt" />
      </li>
    )
  }
}

export default FaveListItem;