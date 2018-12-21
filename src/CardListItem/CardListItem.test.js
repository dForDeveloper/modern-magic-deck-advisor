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

  it('should call removeListItem when the trash-can is clicked', () => {
    wrapper.find('.cardlist--item').simulate('click', {
      target: {
        classList: {
          contains: (className) => {
            if (className === 'fa-trash-alt') {
              return true;
            } else {
              return false;
            }
          }
        },
        closest: () => {
          return {id: '0'}
        }
      }
    })
    expect(removeListItemMock).toBeCalled();
  })

})