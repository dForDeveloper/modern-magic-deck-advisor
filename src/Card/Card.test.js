import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

const displayPopUpMock = jest.fn();
const addToWishlistMock = jest.fn();
const card = { cardName: 'Black Lotus' };
const getPriceStringMock = jest.fn()

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Card
      card={card} 
      key={card.cardName}
      cardAreaView={'expandedDeck'}
      displayPopUp={displayPopUpMock}
      addToWishlist={addToWishlistMock}
      getPriceString={getPriceStringMock}/>
    );
  });

  it('should match the snapshot when cardAreaView is myCardList', () => {
    let wrapper = shallow(
      <Card
        card={card} 
        key={card.cardName}
        cardAreaView={'myCardList'}
        displayPopUp={displayPopUpMock}
        getPriceString={getPriceStringMock}/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when cardAreaView is wishList', () => {
    let wrapper = shallow(
      <Card
        card={card}
        key={card.cardName}
        cardAreaView={'wishList'}
        displayPopUp={displayPopUpMock}
        getPriceString={getPriceStringMock}/>
    );
    expect(wrapper).toMatchSnapshot();
  })
  
  it('should match the snapshot when cardAreaView is expandedDeck', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call props.displayPopUp when the image is clicked', () => {
    wrapper.find('.card--image').simulate('click');
    expect(displayPopUpMock).toBeCalled();
  });
  
  it('should call props.addToWishlist when the button is clicked', () => {
    wrapper.find('button').simulate('click');
    expect(addToWishlistMock).toBeCalled();
  });
});