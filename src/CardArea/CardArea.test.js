import React from 'react';
import CardArea from './CardArea';
import { shallow } from 'enzyme';

const userCardsData = [
  { cardName: 'Blood Moon' }, 
  { cardName: 'Breeding Pool' },
  { cardName: 'Arid Mesa' }
];
const userDecks = [
  { deckName: 'Ponza' },
  { deckName: 'Burn' },
  { deckName: 'Hollow One' }
];
const cardAreaView = 'myCardList';
const setAsideViewMock = jest.fn(); 

describe('CardArea', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <CardArea
          userCardsData={userCardsData}
          setAsideView={setAsideViewMock}
          cardAreaView={cardAreaView}
          userDecks={userDecks} />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should sort card objects when sortCardsByName is called', () => {
    const userCardsData = [
      { cardName: 'Blood Moon' }, 
      { cardName: 'Breeding Pool' },
      { cardName: 'Arid Mesa' }
    ];
    expect(userCardsData[0].cardName).toEqual('Blood Moon');
    userCardsData.sort(wrapper.instance().sortCardsByName);
    expect(userCardsData[0].cardName).toEqual('Arid Mesa');
  });
});