import React, { Component } from 'react';
import WishListItem from '../WishListItem/WishListItem.js'

class WishList extends Component {
  render() {
    return(
      <div>
        <h1>Wish List:</h1>
        <ul>
          {
            this.props.wishList.map((card, index) => {
              return(
                <WishListItem
                  cardName={card.cardName}
                  cardIndex={index}
                  wishListCount={card.wishListCount}
                  key={card.cardName}
                  wishList={this.props.wishList}
                  saveArray={this.props.saveArray}/>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default WishList;