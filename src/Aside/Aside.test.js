import React from 'react';
import Aside from './Aside';
import { shallow } from 'enzyme';
import cards from '../mockData';

const addUserCardMock = jest.fn();
const compareBuildsMock = jest.fn();
const saveArrayMock = jest.fn();
const userCardsData = [
  { cardName: 'Blood Moon' }, 
  { cardName: 'Breeding Pool' },
  { cardName: 'Arid Mesa' }
];
const wishList = [
  { cardName: "Tarmogoyf" },
  { cardName: "Mox Opal" },
  { cardName: "Karn Liberated" }
];
const faveDecks = [
  { deckName: "Jund" },
  { deckName: "Hollow One" }
];

describe('Aside', () => {
  it('should match the snapshot when asideView is myCardList', () => {
    let wrapper = shallow(
      <Aside
        addUserCard={addUserCardMock}
        userCardsData={userCardsData}
        cards={cards}
        compareBuilds={compareBuildsMock}
        asideView={'myCardList'}
        faveDecks={faveDecks}
        wishList={wishList}
        saveArray={saveArrayMock}/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when asideView is faveDecks', () => {
    let wrapper = shallow(
      <Aside
        addUserCard={addUserCardMock}
        userCardsData={userCardsData}
        cards={cards}
        compareBuilds={compareBuildsMock}
        asideView={'faveDecks'}
        faveDecks={faveDecks}
        wishList={wishList}
        saveArray={saveArrayMock}/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when asideView is wishList', () => {
    let wrapper = shallow(
      <Aside
        addUserCard={addUserCardMock}
        userCardsData={userCardsData}
        cards={cards}
        compareBuilds={compareBuildsMock}
        asideView={'wishList'}
        faveDecks={faveDecks}
        wishList={wishList}
        saveArray={saveArrayMock}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});