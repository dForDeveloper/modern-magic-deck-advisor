import React from 'react';
import CardListItem from './CardListItem';
import { shallow } from 'enzyme';

const cardName = 'Blood Moon';
const index = 0;
const userCardsData = [{
  cardName: 'Blood Moon',
  cardCount: 1
}];
const removeListItemMock = jest.fn();
const setCardCountMock = jest.fn();

describe('CardListItem', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <CardListItem 
        cardName={cardName}
        cardIndex={index}
        key={cardName}
        removeListItem={removeListItemMock}
        setCardCount={setCardCountMock} 
        userCardsData={userCardsData}/>
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
    
  });
})