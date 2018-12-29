import React from 'react';
import WishListItem from './WishListItem';
import { shallow } from 'enzyme';

const cardName = "Blood Moon"
const index = 0;
const removeWishListItemMock = jest.fn();

describe("WishListItem", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <WishListItem
        cardName={cardName}
        cardIndex={index}
        key={cardName}
        removeWishListItem={removeWishListItemMock}/>
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call removeWishListItem method from props when removeListItem is called', () => {
    wrapper.find(".fa-trash-alt").simulate("click", {
      target: {
        closest: () => {
          return { id: 0 }
        }
      }
    })
    expect(removeWishListItemMock).toBeCalled();
  });
})