import React from 'react';
import '../styles/main.scss';
import CardList from '../CardList/CardList.js';
import FaveList from '../FaveList/FaveList.js';
import WishList from '../WishList/WishList.js';

function AsideBody(props) {
  if (props.asideView === "myCardList") {
    return (
      <CardList 
        userCardsData={props.userCardsData} 
        compareBuilds={props.compareBuilds}
        saveArray={props.saveArray}/>
    )
  } else if (props.asideView === "faveDecks") {
    return (
      <FaveList 
        faveDecks={props.faveDecks}
        saveArray={props.saveArray}/>
    )
  } else if (props.asideView === "wishList") {
    return (
      <WishList 
        wishList={props.wishList}
        saveArray={props.saveArray}/>
    )
  }
}

export default AsideBody;