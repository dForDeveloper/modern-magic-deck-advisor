import React from 'react';
import '../styles/main.scss';
import Controls from '../Controls/Controls.js';
import AsideBody from '../AsideBody/AsideBody.js';

function Aside(props) {  
  return (
    <aside className="aside">
      <img alt="Magic The Gathering" src="./magic_logo.png" className="aside--magic-logo"></img>
      <Controls
        addUserCard={props.addUserCard}
        cards={props.cards}
        userCardsData={props.userCardsData}/>
      <AsideBody
        asideView={props.asideView}
        userCardsData={props.userCardsData}
        compareBuilds={props.compareBuilds}
        faveDecks={props.faveDecks}
        wishList={props.wishList}
        saveArray={props.saveArray}/>
    </aside>
  );
}

export default Aside;