import React from 'react';
import AsideBody from './AsideBody';
import { shallow } from 'enzyme';

const cardNames = ['blood moon', 'breeding pool'];
const userCards = [{ cardName: 'blood moon', cardCount: 1 }, { cardName: 'breeding pool', cardCount: 1 }];

const removeListItemMock = jest.fn();
const setCardCountMock = jest.fn();

describe('AsideBody', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <AsideBody 
        cardNames={cardNames} 
        removeListItem={removeListItemMock}
        setCardCount={setCardCountMock}
        userCards={userCards} 
      />
    )
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
});

