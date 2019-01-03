import React, { Component } from 'react';
import '../styles/main.scss';

class Card extends Component {
  setPopUpData = () => {
    this.props.displayPopUp(this.props.card);
  };

  addToWishlist = () => {
    this.props.addToWishlist(this.props.card);
  };

  render() {
    return (
      <article className="card--container">
        {this.props.cardAreaView === 'myCardList' && (
          <div>
            <div className="card--header-div">
              <h2>{this.props.card.cardName}</h2>
            </div>
            <img
              className="card--image"
              src={this.props.card.imageSource}
              alt={this.props.card.cardName}
              onClick={this.setPopUpData}
            />
            <div className="card--counter-container">
              <p className="card--counter">
                {this.props.card.cardCount} in My Cards
              </p>
            </div>
          </div>
        )}
        {this.props.cardAreaView === 'expandedDeck' && (
          <div>
            <div className="card--header-div">
              <h2>{this.props.card.cardName}</h2>
            </div>
            <p>${this.props.getPriceString(this.props.card.price)}</p>
            <img
              className="card--image"
              src={this.props.card.imageSource}
              alt={this.props.card.cardName}
              onClick={this.setPopUpData}
            />
            <div className="card--counter-container">
              <p>
                {`You have ${this.props.card.userCount}
                   of ${this.props.card.requiredCount}`}
              </p>
              <button onClick={this.addToWishlist}>Add to Wish List</button>
            </div>
          </div>
        )}
        {this.props.cardAreaView === 'wishList' && (
          <div>
            <div className="card--header-div">
              <h2>{this.props.card.cardName}</h2>
            </div>
            <img
              className="card--image"
              src={this.props.card.imageSource}
              alt={this.props.card.cardName}
              onClick={this.setPopUpData}
            />
            <div>
              <p className="card--wishlist-price">
                Total Cost of {this.props.card.wishListCount} - $
                {this.props.getPriceString(this.props.card.price * this.props.card.wishListCount)}
              </p>
            </div>
          </div>
        )}
      </article>
    );
  }
}

export default Card;
