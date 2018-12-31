import React, { Component } from "react";
import '../styles/main.scss';

class WishListItem extends Component {
  removeWishListItem = () => {
    const [...newWishList] = this.props.wishList;
    newWishList.splice(this.props.cardIndex, 1);
    this.props.saveArray('wishList', newWishList);
  }

  increaseWishListCount = () => {
    if (this.props.wishListCount < 4) {
      this.updateWishList(this.props.wishListCount + 1);
    }
  }

  decreaseWishListCount = () => {
    if (this.props.wishListCount > 1) {
      this.updateWishList(this.props.wishListCount - 1);
    }
  }

  updateWishList = (newCount) => {
    const newWishList = this.props.wishList.map(card => {
      if (this.props.cardName === card.cardName) {
        card.wishListCount = newCount;
      }
      return card;
    });
    this.props.saveArray('wishList', newWishList);
  }

  render() {
    return(
      <li id={this.props.cardIndex} className="wishlist--item">
        {this.props.cardName}
        <i className="fas fa-minus" onClick={this.decreaseWishListCount}/>
        <span>{this.props.wishListCount}</span>
        <i className="fas fa-plus" onClick={this.increaseWishListCount}/>
        <i className="far fa-trash-alt" onClick={this.removeWishListItem}/>
      </li>
    )
  }
}

export default WishListItem;