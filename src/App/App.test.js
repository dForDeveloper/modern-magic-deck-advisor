import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

const userCardsData = [
  { cardName: "Blood Moon", cardCount: 1 },
  { cardName: "Mox Opal", cardCount: 1 }
];
const wishList = [
  { cardName: "Jace, the Mind Sculptor", wishListCount: 4 }
];
const deck = { deckName: 'Izzet Phoenix' };

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App />
    );
  });
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should save an array in state when saveArray is called', () => {
    expect(wrapper.state('userCardsData').length).toEqual(0);
    wrapper.instance().saveArray('userCardsData', userCardsData);
    expect(wrapper.state('userCardsData').length).toEqual(2);
  });

  it(`should return strings formatted for the API fetch
    when getURLArray is called`, () => {
    let url = wrapper.instance().getURLArray(userCardsData);
    expect(url[0]).toEqual(`%21"Blood+Moon"`);
    expect(url[1]).toEqual(`%21"Mox+Opal"`);
  });

  it('should add a card to state.wishList when addToWishList is called',
    () => {
    expect(wrapper.state('wishList').length).toEqual(0);
    wrapper.instance().addToWishlist(wishList[0]);
    expect(wrapper.state('wishList').length).toEqual(1);
  });

  it('should add a deck to state.faveDecks when addToFaveDecks is called',
    () => {
    expect(wrapper.state('faveDecks').length).toEqual(0);
    wrapper.instance().addToFaveDecks(deck);
    expect(wrapper.state('faveDecks').length).toEqual(1);
  });
});