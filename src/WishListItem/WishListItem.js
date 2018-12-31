import React, { Component } from "react";
import '../styles/main.scss';

class WishListItem extends Component {
  constructor(props) {
    super(props);
  }

  removeWishListItem = event => {
    this.props.removeWishListItem(event.target.closest("li").id)
  }

  render() {
    return(
      <li id={this.props.cardIndex}>
        {this.props.cardName}
        <i 
          onClick={this.removeWishListItem}
          className="far fa-trash-alt" />
      </li>
    )
  }
}

export default WishListItem;