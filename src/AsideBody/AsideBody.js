import React, { Component } from 'react';
// import Controls from '../Controls/Controls.js';
import './AsideBody.css';
import CardList from '../CardList/CardList.js';
import FaveList from '../FaveList/FaveList.js';

function AsideBody(props) {
  if (props.asideView === "myCardList") {
    return (
      <div>
        <CardList cardNames={props.cardNames} 
                  removeListItem={props.removeListItem}
                  setCardCount={props.setCardCount}
                  userCardsData={props.userCardsData} 
                  compareBuilds={props.compareBuilds}/>
      </div>
    )
  } else if (props.asideView === "faveDecks") {
    return (
      <div>
        <FaveList userFaveDecks={props.userFaveDecks}
                  removeFaveListItem={props.removeFaveListItem}/>
      </div>
    )
  } else if (props.asideView === "wishList"){
    return (
      <div>
        <p>Wish List Goes HERE!</p>
      </div>
    )
  }
}


export default AsideBody;