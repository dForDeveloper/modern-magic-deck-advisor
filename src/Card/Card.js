import React, { Component } from "react";
import '../styles/main.scss';

class Card extends Component {
  setPopUpData = () => {
    this.props.displayPopUp(this.props.card);
  }

  addToWishlist = () => {
    this.props.addToWishlist(this.props.card);
  }

  render() {
    return (
      <article className="card--container">
        {this.props.cardAreaView === "myCardList" && (
          <div>
            <img
              className="card--image"
              src={this.props.card.imageSource}
              alt={this.props.card.cardName}
              onClick={this.setPopUpData}
            />
            <div className="card--counter-container">
              <h1 className="card--counter">
                {this.props.card.cardCount}X
              </h1>
            </div>
          </div>
        )}
        {this.props.cardAreaView === "expandedDeck" && (
          <div>
            <img
              className="card--image"
              src={this.props.card.imageSource}
              alt={this.props.card.cardName}
              onClick={this.setPopUpData}
            />
            <div className="counter--container">
              <p>{this.props.card.price}</p>
              <button onClick={this.addToWishlist}>
                Add to Wishlist
              </button>
            </div>
          </div>
        )}
      </article>
    );
  }
}

export default Card;
