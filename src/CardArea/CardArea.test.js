import React from 'react';
import CardArea from './CardArea';
import { shallow } from 'enzyme';
import cards from '../mockData';

const userCardsData = [
  { cardName: 'Blood Moon', cardCount: 2 }, 
  { cardName: 'Breeding Pool', cardCount: 2 },
  { cardName: 'Arid Mesa', cardCount: 2 }
];
const userDecks = [
  { deckName: 'Ponza' },
  { deckName: 'Burn' },
  { deckName: 'Hollow One' }
];
const faveDecks = [
  { deckName: "Bant Spirits" },
  { deckName: "Izzet Phoenix" }
];
const wishList = [
  { cardName: "Blood Moon"},
  { cardName: "Mox Opal" },
  { cardName: "Breeding Pool" }
];
const expandedDeckInfo = [
  { cardName: 'Blood Moon' }, 
  { cardName: 'Arid Mesa' }
]
const popUpView = false;
const cardAreaView = 'myCardList';
const setAsideViewMock = jest.fn(); 
const setCardAreaViewMock = jest.fn(); 
const setPopUpViewMock = jest.fn(); 
const getExpandedDeckInfoMock = jest.fn(() => expandedDeckInfo); 
const addToWishlistMock = jest.fn(); 
const addToFaveDecksMock = jest.fn(); 

describe('CardArea', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <CardArea
        userCardsData={userCardsData}
        faveDecks={faveDecks}
        setAsideView={setAsideViewMock}
        cardAreaView={cardAreaView}
        setCardAreaView={setCardAreaViewMock}
        userDecks={userDecks}
        getExpandedDeckInfo={getExpandedDeckInfoMock}
        addToWishlist={addToWishlistMock}
        addToFaveDecks={addToFaveDecksMock}
        wishList={wishList}
        cards={cards}
        popUpView={popUpView}
        setPopUpView={setPopUpViewMock}/>
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it(`should set popUpCard in state and call setPopUpView when
    displayPopUp is called`, () => {
      expect(wrapper.state('popUpCard').cardName).toEqual(undefined);
      wrapper.instance().displayPopUp(userCardsData[0]);
      expect(wrapper.state('popUpCard').cardName).toEqual('Blood Moon');
  });

  it('should call props.setPopUpView when returnToScreen is called', () => {
    wrapper.instance().returnToScreen();
    expect(setPopUpViewMock).toBeCalled();
  });

  it('should set cardsInDeck in state when expandDeck is called', () => {
    expect(wrapper.state('cardsInDeck').length).toEqual(0);
    wrapper.instance().expandDeck({
      deckName: 'some deck',
      cards: ['Blood Moon', 'Arid Mesa'],
      cardCounts: {
        'Blood Moon': 2,
        'Arid Mesa': 3
      }
    });
    expect(wrapper.state('cardsInDeck').length).toEqual(2);
  });

  it(`should return a string of a number with two decimal places
    when getPriceString is called`, () => {
      expect(wrapper.instance().getPriceString(12.345)).toEqual('12.35');
    });
});