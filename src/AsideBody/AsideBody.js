import React, { Component } from 'react';
// import Controls from '../Controls/Controls.js';
import './AsideBody.css';
import CardList from '../CardList/CardList.js';

function AsideBody(props) {


  return (
    <div>
      <CardList cardNames={props.cardNames} 
                removeListItem={props.removeListItem}
                setCardCount={props.setCardCount}
                userCardsData={props.userCardsData} />
    </div>
  )
}


export default AsideBody;