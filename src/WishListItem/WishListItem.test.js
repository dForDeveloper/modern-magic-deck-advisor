import React from 'react';
import WishListItem from './WishListItem';
import { shallow } from 'enzyme';

const cardName = "Blood Moon"
const index = 0;
const wishListCount = 2;
const wishList = [{ cardName: 'Blood Moon', wishListCount: 2 }];
const saveArrayMock = jest.fn();

describe("WishListItem", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <WishListItem
        cardName={cardName}
        cardIndex={index}
        wishListCount={wishListCount}
        key={cardName}
        wishList={wishList}
        saveArray={saveArrayMock}/>
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call removeWishListItem when the trash-can is clicked', () => {
    wrapper.find('.fa-trash-alt').simulate('click');
    expect(saveArrayMock).toBeCalled();
  });

  it(`should call updateWishList with the incremented count
  when the plus sign is clicked`, () => {
  wrapper.instance().updateWishList = jest.fn();
  wrapper.update();
  wrapper.find('.fa-plus').simulate('click');
  expect(wrapper.instance().updateWishList).toBeCalledWith(3);
  });

  it(`should call updateWishList with the decremented count
    when the plus sign is clicked`, () => {
    wrapper.instance().updateWishList = jest.fn();
    wrapper.update();
    wrapper.find('.fa-minus').simulate('click');
    expect(wrapper.instance().updateWishList).toBeCalledWith(1);
  });

  it('should call saveArray when updateWishList is called', () => {
    wrapper.instance().updateWishList(3);
    expect(saveArrayMock).toBeCalled();
  });
});