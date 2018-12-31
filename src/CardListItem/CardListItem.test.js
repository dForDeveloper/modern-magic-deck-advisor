import React from 'react';
import CardListItem from './CardListItem';
import { shallow } from 'enzyme';

const cardName = 'Blood Moon';
const index = 0;
const userCardsData = [
  {
    cardName: 'Blood Moon',
    cardCount: 2
  }
];
const saveArrayMock = jest.fn();

describe('CardListItem', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <CardListItem
        cardName={cardName}
        cardIndex={index}
        cardCount={userCardsData[index].cardCount}
        key={cardName}
        userCardsData={userCardsData}
        saveArray={saveArrayMock}/>
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call removeListItem when the trash-can is clicked', () => {
    wrapper.find('.fa-trash-alt').simulate('click');
    expect(saveArrayMock).toBeCalled();
  });

  it(`should call updateUserCardsData with the incremented count
    when the plus sign is clicked`, () => {
    wrapper.instance().updateUserCardsData = jest.fn();
    wrapper.update();
    wrapper.find('.fa-plus').simulate('click');
    expect(wrapper.instance().updateUserCardsData).toBeCalledWith(3);
  });

  it(`should call updateUserCardsData with the decremented count
    when the plus sign is clicked`, () => {
    wrapper.instance().updateUserCardsData = jest.fn();
    wrapper.update();
    wrapper.find('.fa-minus').simulate('click');
    expect(wrapper.instance().updateUserCardsData).toBeCalledWith(1);
  });

  it('should call saveArray when updateUserCardsData is called', () => {
    wrapper.instance().updateUserCardsData(3);
    expect(saveArrayMock).toBeCalled();
  });
});