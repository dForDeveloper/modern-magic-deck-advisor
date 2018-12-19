import React, {Component} from 'react';
import './CardArea.css';
import Card from '../Card/Card.js'
import Header from '../Header/Header.js'


class CardArea extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(props) {
    return(
      <div className="card-area">
        <Header/>
        <Card currentCard={this.props.currentCard}/>
      </div>
    )
  }
}

export default CardArea;