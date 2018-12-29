import React from 'react';
import FaveList from './FaveList';
import { shallow } from 'enzyme';

const userFaveDecks = [{ deckName: "Bant Spirits" }, { deckName: "Izzet Phoenix" }, { deckName: "Death's Shadow" }];
const removeFaveListItemMock = jest.fn();

describe('FaveList', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <FaveList
      userFaveDecks={userFaveDecks}
      removeFaveListItem={removeFaveListItemMock}
      />
    )
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})