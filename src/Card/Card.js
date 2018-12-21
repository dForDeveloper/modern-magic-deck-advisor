import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(props) {
    return (
      <article className="card--container">
        <img
          className="card--image"
          src={this.props.userCard.imageSource}
          alt={this.props.userCard.cardName}
        />
        <div className="counter--container">
          <h1 className="card--counter">{this.props.userCard.cardCount}x</h1>
        </div>
      </article>
    );
  }
}

export default Card;
