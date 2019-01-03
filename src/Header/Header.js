import React, { Component } from 'react';
import '../styles/main.scss';

class Header extends Component {
  setAsideViewMyCards = () => {
    this.props.setAsideView("myCardList");
    this.props.setCardAreaView("myCardList");
  }

  setAsideViewFaveDecks = () => {
    this.props.setAsideView("faveDecks");
    this.props.setCardAreaView("faveDecks");
  }

  setAsideViewWishList = () => {
    this.props.setAsideView("wishList");
    this.props.setCardAreaView("wishList");
  }

  render(props) {
    return(
      <header className="header">
        <h1>Modern Magic Deck Advisor</h1>
        <ul className="header--ul">
          <li onClick={this.setAsideViewMyCards} className="my-cards">My Cards</li>
          <li onClick={this.setAsideViewFaveDecks} className="fave-decks">Saved Decks</li>
          <li onClick={this.setAsideViewWishList} className="my-wish-list">Wish List</li>
        </ul>
      </header>
    )
  }

}


export default Header;