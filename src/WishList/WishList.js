import React from 'react';
import WishListItem from '../WishListItem/WishListItem.js'
import '../styles/main.scss';

function WishList(props) {
  return(
    <div>
      <h1>Wish List:</h1>
      <ul>
        {
          props.wishList.map((card, index) => {
            return(
              <WishListItem
                cardName={card.cardName}
                cardIndex={index}
                wishListCount={card.wishListCount}
                key={card.cardName}
                wishList={props.wishList}
                saveArray={props.saveArray}/>
            )
          })
        }
      </ul>
    </div>
  )
}

export default WishList;