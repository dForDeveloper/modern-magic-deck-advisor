import React, { Component } from 'react';
import '../styles/main.scss';

class FaveListItem extends Component {
  removeFaveListItem = () => {
    const [...newFaveDecks] = this.props.faveDecks;
    newFaveDecks.splice(this.props.deckIndex, 1);
    this.props.saveArray('faveDecks', newFaveDecks);
  };

  render() {
    return (
      <li id={this.props.deckIndex} className="list--li">
        <i onClick={this.removeFaveListItem} className="far fa-trash-alt fave--trash" />
        {this.props.deckName}
      </li>
    );
  }
}

export default FaveListItem;
