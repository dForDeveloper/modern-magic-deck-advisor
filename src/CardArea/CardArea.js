import React, {Component} from 'react';
import './CardArea.css';
import Card from '../Card/Card.js'

class CardArea extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return(
      <div className="card-area">
      <Card/>
      </div>
    )
  }
}

export default CardArea;