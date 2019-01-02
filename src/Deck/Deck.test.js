import React from 'react';
import Deck from './Deck';
import { shallow } from 'enzyme';

const userDeck = {
  deckName: 'Jund',
  price: 2000.0,
  cards: [
    'Misty Rainforeest',
    'Stomping Ground',
    'Windswept Heath',
    'Wooded Foothills',
    'Blood Moon'
  ]
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
      />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call addToFaveDecks when favorite button is clicked', () => {
    wrapper.instance().addToFaveDecks = jest.fn();
    wrapper.update();
    wrapper.find('.deck--button').simulate('click');
    expect(wrapper.instance().addToFaveDecks).toBeCalled();
  });
});
