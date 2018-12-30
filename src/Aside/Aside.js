import React, { Component } from 'react';
import Controls from '../Controls/Controls.js';
import AsideBody from '../AsideBody/AsideBody.js';
import './Aside.css';

class Aside extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <aside className="aside">
        <Controls
          addUserCard={this.props.addUserCard}
          cards={this.props.cards}
          userCardsData={this.props.userCardsData}/>
        <AsideBody
          asideView={this.props.asideView}
          removeListItem={this.removeListItem}
          setCardCount={this.props.setCardCount}
          userCardsData={this.props.userCardsData}
          compareBuilds={this.props.compareBuilds}
          userFaveDecks={this.props.userFaveDecks}
          removeFaveListItem={this.props.removeFaveListItem}
          wishList={this.props.wishList}
          removeWishListItem={this.props.removeWishListItem}
          saveArray={this.props.saveArray}/>
      </aside>
    );
  }
}

export default Aside;