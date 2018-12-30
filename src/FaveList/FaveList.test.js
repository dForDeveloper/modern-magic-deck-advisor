import React from 'react';
import FaveList from './FaveList';
import { shallow } from 'enzyme';

const faveDecks = [
  { deckName: "Bant Spirits" },
  { deckName: "Izzet Phoenix" }
];
const saveArrayMock = jest.fn();

describe('FaveList', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <FaveList
      faveDecks={faveDecks}
      saveArray={saveArrayMock}/>
    )
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});