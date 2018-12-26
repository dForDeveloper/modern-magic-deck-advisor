import React from 'react';
import Deck from './Deck';
import { shallow } from 'enzyme';

const userDeck = { deckName: 'Jund', price: 2000.00 };

describe('Deck', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Deck userDeck={userDeck} key={userDeck.deckName} />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});