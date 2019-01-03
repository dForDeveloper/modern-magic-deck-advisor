import React from 'react';
import Deck from './Deck';
import { shallow } from 'enzyme';
import cards from '../mockData';

const userDeck = {
  deckName: 'Jund',
  price: 2000.0,
  cards: [
    'Misty Rainforeest',
    'Stomping Ground',
    'Windswept Heath',
    'Wooded Foothills',
    'Blood Moon'
  ],
  signatureCards: ['Blood Moon', 'Breeding Pool']
};

const setCardAreaViewMock = jest.fn();
const addToFaveDecksMock = jest.fn();
const expandDeckMock = jest.fn();

describe('Deck', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Deck
        userDeck={userDeck}
        key={userDeck.deckName}
        expandDeck={expandDeckMock}
        setCardAreaView={setCardAreaViewMock}
        addToFaveDecks={addToFaveDecksMock}
        cardAreaView={'compareDecks'}
        cards={cards}
      />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when cardAreaView is faveDecks', () => {
    let wrapper = shallow(
      <Deck
        userDeck={userDeck}
        key={userDeck.deckName}
        expandDeck={expandDeckMock}
        setCardAreaView={setCardAreaViewMock}
        addToFaveDecks={addToFaveDecksMock}
        cardAreaView={'faveDecks'}
        cards={cards}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should call addToFaveDecks when favorite button is clicked', () => {
    wrapper.find('.deck--button').simulate('click');
    expect(addToFaveDecksMock).toBeCalled();
  });
});
