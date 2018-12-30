import React from 'react';
import './AsideBody.css';
import CardList from '../CardList/CardList.js';
import FaveList from '../FaveList/FaveList.js';
import WishList from '../WishList/WishList.js';

function AsideBody(props) {
  if (props.asideView === "myCardList") {
    return (
      <CardList 
        removeListItem={props.removeListItem}
        userCardsData={props.userCardsData} 
        compareBuilds={props.compareBuilds}
        saveArray={props.saveArray}/>
    )
  } else if (props.asideView === "faveDecks") {
    return (
      <FaveList 
        userFaveDecks={props.userFaveDecks}
        removeFaveListItem={props.removeFaveListItem}/>
    )
  } else if (props.asideView === "wishList") {
    return (
      <WishList 
        wishList={props.wishList}
        removeWishListItem={props.removeWishListItem}
        saveArray={props.saveArray}/>
    )
  }
}

export default AsideBody;