import React from 'react';
import './Header.css'

function Header() {
  return(
    <header className="header">
      <img src="./magic_logo.png" className="magic-logo"></img>
      <ul className="header--ul">
        <li>My Cards</li>
        <li>My Favorites</li>
        <li>My Wish List</li>
      </ul>
    </header>
  )
}

export default Header;