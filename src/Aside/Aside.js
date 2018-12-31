import React from 'react';
import Controls from '../Controls/Controls.js';
import AsideBody from '../AsideBody/AsideBody.js';
import './Aside.css';

function Aside(props) {  
  return (
    <aside className="aside">
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