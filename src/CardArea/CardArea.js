import React, {Component} from 'react';
import './CardArea.css';
import Header from '../Header/Header.js'

class CardArea extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return(
      <div className="card-area">
        <Header />
      </div>
    )
  }
}

export default CardArea;