import React from 'react';
import CardList from './CardList';
import { shallow } from 'enzyme';

const userCardsData = [
  {
    cardName: 'Blood Moon',
    cardCount: 2
  }
]
describe('CardList', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <CardList
        userCardsData={userCardsData}
       /> 
    )
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})