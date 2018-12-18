import React, { Component } from 'react';



class CardListItem extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render(props) {
    return(
      <li>
        {this.props.cardName}
      </li>                  
    )          
  }
}
 
export default CardListItem;