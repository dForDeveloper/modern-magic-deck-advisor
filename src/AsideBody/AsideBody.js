import React, { Component } from 'react';
// import Controls from '../Controls/Controls.js';
import './AsideBody.css';
import CardList from '../CardList/CardList.js';

function AsideBody(props) {


  return (
    <div>
      <CardList cardNames={props.cardNames}/>
    </div>
  )
}


export default AsideBody;