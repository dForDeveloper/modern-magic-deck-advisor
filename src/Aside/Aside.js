import React, { Component } from 'react';
import Controls from '../Controls/Controls.js';
import AsideBody from '../AsideBody/AsideBody.js';
import './Aside.css';

class Aside extends Component {  
  render() {
    return (
      <aside className="aside">
        <Controls
          addUserCard={this.props.addUserCard}
          cards={this.props.cards}
          userCardsData={this.props.userCardsData}/>
        <AsideBody
          asideView={this.props.asideView}
          userCardsData={this.props.userCardsData}
          compareBuilds={this.props.compareBuilds}
          faveDecks={this.props.faveDecks}
          wishList={this.props.wishList}
          saveArray={this.props.saveArray}/>
      </aside>
    );
  }
}

export default Aside;