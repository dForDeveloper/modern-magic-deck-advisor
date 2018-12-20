import React, { Component } from 'react';
import './CardListItem.css'



class CardListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cardCount: 1
    }
  }

  updateListItem = (event) => {
    if (event.target.classList.contains('fa-trash-alt')) {
      this.props.removeListItem(parseInt(event.target.closest('li').id))
    } else if (event.target.classList.contains('fa-plus')) {
      // console.log('before', this.state.cardCount)
      this.increaseCardCount();
      // console.log('after', this.state.cardCount)
    } else if (event.target.classList.contains('fa-minus')) {
      this.decreaseCardCount();
    }
  }

  increaseCardCount = () => {
    if (this.state.cardCount < 4) {
      // const newCardCount = this.state.cardCount + 1;
      this.setState(state => {
        return { cardCount: state.cardCount + 1 }
      }, () => {
        this.props.updateCardCount(this.props.cardName, this.state.cardCount)
      })
    }
  }

  // componentDidUpdate() {
  //   this.props.updateCardCount(this.props.cardName, this.state.cardCount)
  // }

  decreaseCardCount = (cardName) => {
    if (this.state.cardCount > 1) {
      this.setState((state) => {
        return { cardCount: state.cardCount - 1 }
      });
      this.props.updateCardCount(this.props.cardName, this.state.cardCount - 1 )
    }
  }

  render(props) {
    return(
      <li onClick={this.updateListItem} id={this.props.cardIndex} className="cardlist--item">
        {this.props.cardName}
        <i className="fas fa-minus"></i>
        <span>{this.state.cardCount}</span>
        <i className="fas fa-plus"></i>
        <i className="far fa-trash-alt"></i>
      </li>                  
    )          
  }
}
 
export default CardListItem;