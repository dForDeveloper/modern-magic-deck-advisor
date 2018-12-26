import React, { Component } from "react";
import "./CardArea.css";
import Card from "../Card/Card.js";
import Header from "../Header/Header.js";

class CardArea extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.clickedCard = null;
  }

  displayPopup = (event) => {
    if (event.target.classList.contians('card--container')) {
     console.log('hey')
      // this.setState({
      //   clickedCard: 
      // })
    }
  }

  render(props) {
    return (
      <div onClick={this.displayPopup}
           className="card-area">
        <Header 
          setAsideView={this.props.setAsideView}/>
        {this.props.userCardsData.map(userCard => {
          return <Card userCard={userCard} key={userCard.cardName} />;
        })}
      </div>
    );
  }
}

export default CardArea;
