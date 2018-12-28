import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

const userCardsData = [
  {
    cardName: "Blood Moon",
    cardCount: 1
  },
  {
    cardName: "Mox Opal",
    cardCount: 1
  },
];

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App />
    )
  });
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should save userCardsData in state when setCardCount is called', () => {
    expect(wrapper.state('userCardsData').length).toEqual(0);
    wrapper.instance().setCardCount(userCardsData);
    expect(wrapper.state('userCardsData').length).toEqual(2);
  });

  it('should remove an element from userCardsData when removeUserCard is called', () => {
    expect(wrapper.state('userCardsData').length).toEqual(2);
    expect(wrapper.state('userCardsData')[0].cardName).toEqual('Blood Moon');
    wrapper.instance().removeUserCard(0);
    expect(wrapper.state('userCardsData').length).toEqual(1);
    expect(wrapper.state('userCardsData')[0].cardName).toEqual('Mox Opal');
  });

  it('should return strings formatted for the API fetch when getURLArray is called', () => {
    let url = wrapper.instance().getURLArray(userCardsData);
    expect(url[0]).toEqual(`%21"Blood+Moon"`);
    expect(url[1]).toEqual(`%21"Mox+Opal"`);
  });
});
