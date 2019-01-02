import React from 'react';
import Controls from './Controls';
import { shallow } from 'enzyme';
import cards from '../mockData';

const addUserCardMock = jest.fn();
const userCardsData = [
  {
    cardName: 'Blood Moon',
    cardCount: 2
  }
];

describe('Controls', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Controls
        addUserCard={addUserCardMock}
        cards={cards}
        userCardsData={userCardsData}/>
    )
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it(`should should set the state of cardName and suggestions
    on change of the input`, () => {
    wrapper.find('.controls--input').simulate('change',
      { target: { value: 'B' } });
    expect(wrapper.state('cardName')).toEqual('B');
    expect(wrapper.state('suggestions')[0]).toEqual('Breeding Pool')
  });
  
  it(`should call addCardToList when the button is clicked
    and there is a matchedCard`, () => {
    wrapper.instance().addCardToList = jest.fn();
    wrapper.instance().clearInput = jest.fn();
    wrapper.update();
    wrapper.find('.controls--input').simulate('change',
      { target: { value: 'Blood Moon' } });
    wrapper.find('.controls--button').simulate('click',
      { preventDefault: () => {} });
    expect(wrapper.instance().addCardToList).toBeCalled();
  });
  
  it(`should set isInvalidCardName to true in state
    when the button is clicked and there is no matchedCard`, () => {
    expect(wrapper.state('isInvalidCardName')).toEqual(false);
    wrapper.instance().clearInput = jest.fn();
    wrapper.update();
    wrapper.find('.controls--input').simulate('change',
      { target: { value: 'asdfgasd' } });
    wrapper.find('.controls--button').simulate('click',
      { preventDefault: () => {} });
    expect(wrapper.state('isInvalidCardName')).toEqual(true);
  });
  
  it(`should return a card object if the state.cardName matches a card
    in the data set when validateCardName is called`, () => {
    wrapper.find('.controls--input').simulate('change',
      { target: { value: 'Tarmogoyf' } });
    expect(wrapper.instance().validateCardName().cardName)
      .toEqual('Tarmogoyf');
  });

  it(`should call props.addUserCard when addCardToList is called with a valid,
    non-duplicate cardName`, () => {
    wrapper.instance().addCardToList('Mox Opal');
    expect(addUserCardMock).toBeCalled();
  });

  it(`should set hasDuplicates to true in state when addCardToList is called
    with a cardName already in userCardsData`, () => {
      expect(wrapper.state('hasDuplicates')).toEqual(false);
      wrapper.instance().addCardToList('Blood Moon');
      expect(wrapper.state('hasDuplicates')).toEqual(true);
    });
});