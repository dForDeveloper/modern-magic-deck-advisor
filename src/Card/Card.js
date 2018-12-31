import React, { Component } from "react";
import "./Card.scss";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setPopUpData = () => {
    console.log(this.props.cardAreaView)
    this.props.displayPopUp(this.props.card);
  }

  render(props) {
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
            <div className="counter--container">
              <h1 className="card--counter">
                {this.props.card.cardCount}x
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
            </div>
          </div>
        )}
      </article>
    );
  }
}

export default Card;
