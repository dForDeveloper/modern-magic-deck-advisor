import React from 'react';
import WishList from './WishList';
import { shallow } from 'enzyme';
import { isMainThread } from 'worker_threads';

const wishList = [{ cardName: "Blood Moon" }, { cardName: "Mox Opal" }, { cardName: "Breeding Pool" }];
const removeWishListItemMock = jest.fn();

describe('WishList', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(
      <WishList
        wishList={wishList}
        removeWishListItem={removeWishListItemMock}/>
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})