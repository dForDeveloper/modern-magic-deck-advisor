import React, { Component } from 'react';
import '../styles/main.scss';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  setAsideViewMyCards = () => {
    this.props.setAsideView("myCardList");
    this.props.setCardAreaView("myCardList");
  }

  setAsideViewFaveDecks = () => {
    this.props.setAsideView("faveDecks");
  }

  setAsideViewWishList = () => {
    this.props.setAsideView("wishList");
  }

  render(props) {
    return(
      <header className="header">
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