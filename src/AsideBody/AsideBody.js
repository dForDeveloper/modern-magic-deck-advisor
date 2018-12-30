import React, { Component } from 'react';
import './AsideBody.css';
import CardList from '../CardList/CardList.js';
import FaveList from '../FaveList/FaveList.js';
import WishList from '../WishList/WishList.js';

function AsideBody(props) {
  if (props.asideView === "myCardList") {
    return (
      <div>
        <CardList 
          removeListItem={props.removeListItem}
          setCardCount={props.setCardCount}
          userCardsData={props.userCardsData} 
          compareBuilds={props.compareBuilds}
          saveArray={props.saveArray}/>
      </div>
    )
  } else if (props.asideView === "faveDecks") {
    return (
      <div>
        <FaveList 
          userFaveDecks={props.userFaveDecks}
          removeFaveListItem={props.removeFaveListItem}/>
      </div>
    )
  } else if (props.asideView === "wishList"){
    return (
      <div>
        <WishList 
          wishList={props.wishList}
          removeWishListItem={props.removeWishListItem}
          saveArray={props.saveArray}/>
      </div>
    )
  }
}


export default AsideBody;