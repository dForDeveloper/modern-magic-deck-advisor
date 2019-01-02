import React from 'react';
import Deck from './Deck';
import { shallow } from 'enzyme';

const userDeck = { deckName: 'Jund', price: 2000.00, cards:[{},{}]};

describe('Deck', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Deck 
        userDeck={userDeck} 
        key={userDeck.deckName}
        cardAreaView={'compareDecks'} />
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
        cardAreaView={'faveDecks'} />
    );
    expect(wrapper).toMatchSnapshot();
  })
});