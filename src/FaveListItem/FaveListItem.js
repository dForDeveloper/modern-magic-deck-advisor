import React, { Component } from "react";
import "./FaveListItem.scss";

class FaveListItem extends Component {
  constructor(props) {
    super(props);
  }

  removeFaveListItem = event => {
    event.preventDefault();
    this.props.removeFaveListItem(event.target.closest("li").id)
  }

  render(props) {
    return(
      <li>
        {this.props.deckName}
        <i 
          onClick={this.removeFaveListItem}
          id={this.props.deckIndex}
          className="far fa-trash-alt" />
      </li>
    )
  }
}

export default FaveListItem;