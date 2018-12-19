import React, { Component } from 'react';
import './CardListItem.css'



class CardListItem extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  updateListItem = (event) => {
    if (event.target.classList.contains('fa-trash-alt')) {
      this.props.removeListItem(parseInt(event.target.closest('li').id))
    }
  }

  

  render(props) {
    return(
      <li onClick={this.updateListItem} id={this.props.cardIndex}>
        {this.props.cardName}
        <i class="fas fa-plus"></i>
        <i class="fas fa-minus"></i>
        <i class="far fa-trash-alt"></i>
      </li>                  
    )          
  }
}
 
export default CardListItem;