import React, { Component } from "react";
import "./FaveListItem.scss";

class FaveListItem extends Component {
  constructor(props) {
    super(props);
  }

  removeFaveListItem = event => {
    this.props.removeFaveListItem(event.target.closest("li").id)
  }

  render(props) {
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