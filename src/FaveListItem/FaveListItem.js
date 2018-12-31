import React, { Component } from "react";
import '../styles/main.scss';

class FaveListItem extends Component {
  constructor(props) {
    super(props);
  }

  removeFaveListItem = event => {
    this.props.removeFaveListItem(event.target.closest("li").id)
  }

  render() {
    return(
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