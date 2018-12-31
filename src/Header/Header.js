import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props);
  }

  setAsideViewMyCards = () => {
    this.props.setAsideView("myCardList");
    this.returnToCards()
  }

  setAsideViewFaveDecks = () => {
    this.props.setAsideView("faveDecks");
  }

  setAsideViewWishList = () => {
      this.props.setAsideView("wishList")
  }

  returnToCards = () => {
    window.location.reload()
  }

  render(props) {
    return(
      <header className="header">
        <img alt="Magic The Gathering" src="./magic_logo.png" className="magic-logo"></img>
        <ul className="header--ul">
          <li onClick={this.setAsideViewMyCards} className="my-cards">My Cards</li>
          <li onClick={this.setAsideViewFaveDecks} className="fave-decks">My Favorites</li>
          <li onClick={this.setAsideViewWishList} className="my-wish-list">My Wish List</li>
        </ul>
      </header>
    )
  }

}


export default Header;