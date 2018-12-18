import React, {Component} from 'react';
import Controls from '../Controls/Controls.js';
import AsideBody from '../AsideBody/AsideBody.js';
import './Aside.css';

class Aside extends Component {
  constructor() {
    super();
    this.state = {
      cardNames: []
    };
  }

  addCardToList = (cardName) => {
    const newState = {
      cardNames: this.state.cardNames.concat([cardName])
    };
    this.setState(newState);
  }

  render() {
    return (
      <aside className="aside">
        <Controls addCardToList={this.addCardToList}/>
        <AsideBody cardNames={this.state.cardNames} />
      </aside>
    );
  }
}

export default Aside;