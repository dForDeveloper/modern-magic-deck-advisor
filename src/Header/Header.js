import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props);
  }

  setAsideView = event => {
    if (event.target.classList.contains("my-cards")) {
      this.props.setAsideView("myCardList");
    } else if (event.target.classList.contains("fave-decks")) {
      this.props.setAsideView("faveDecks");
    } else if (event.target.classList.contains("my-wish-list")) {
      this.props.setAsideView("wishList")
    }
  }


  render(props) {
    return(
      <header className="header">
        <img alt="Magic The Gathering" src="./magic_logo.png" className="magic-logo"></img>
        <ul className="header--ul">
          <li onClick={this.setAsideView} className="my-cards">My Cards</li>
          <li onClick={this.setAsideView} className="fave-decks">My Favorites</li>
          <li onClick={this.setAsideView} className="my-wish-list">My Wish List</li>
        </ul>
      </header>
    )
  }

}


export default Header;