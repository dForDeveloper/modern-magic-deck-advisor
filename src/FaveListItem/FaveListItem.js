import React, { Component } from "react";
import "./FaveListItem.scss";

class FaveListItem extends Component {
  constructor(props) {
    super(props);
  }

  removeFaveListItem = event => {
    this.props.removeFaveListItem(event.tartet.closest("li").id)
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