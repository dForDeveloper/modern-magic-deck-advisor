import React from 'react';
import FaveListItem from './FaveListItem';
import { shallow } from 'enzyme';

const deckName = "Bant Spirits"
const index = 0;
const userFavoriteDecks = [{ deckName: "Bant Spirits" }, { deckName: "Izzet Phoenix" }, { deckName: "Death's Shadow" }]

describe("FaveListItem", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <FaveListItem />
    )
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})