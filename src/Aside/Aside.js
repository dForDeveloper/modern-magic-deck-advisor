import React from 'react';
import '../styles/main.scss';
import Controls from '../Controls/Controls.js';
import CardList from '../CardList/CardList.js';
import FaveList from '../FaveList/FaveList.js';
import WishList from '../WishList/WishList.js';

function Aside(props) {  
  return (
    <aside className="aside">
      <img alt="Magic The Gathering" src="./magic_logo.png" className="aside--magic-logo"></img>
      <Controls
        addUserCard={props.addUserCard}
        cards={props.cards}
        userCardsData={props.userCardsData}/>
      {props.asideView === "myCardList" &&
        <CardList 
          userCardsData={props.userCardsData} 
          compareBuilds={props.compareBuilds}
          saveArray={props.saveArray}/>}
      {props.asideView === "faveDecks" &&
        <FaveList 
          faveDecks={props.faveDecks}
          saveArray={props.saveArray}/>}
      {props.asideView === "wishList" &&
        <WishList 
          wishList={props.wishList}
          saveArray={props.saveArray}/>}
    </aside>
  );
}

export default Aside;