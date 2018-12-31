import React from 'react';
import FaveListItem from './FaveListItem';
import { shallow } from 'enzyme';

const deckName = 'Bant Spirits'
const index = 0;
const faveDecks = [
  { deckName: 'Bant Spirits' },
  { deckName: 'Izzet Phoenix' }
];
const saveArrayMock = jest.fn();

describe('FaveListItem', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(
      <FaveListItem 
        deckName={deckName}
        deckIndex={index}
        key={deckName}
        faveDecks={faveDecks}
        saveArray={saveArrayMock}/>
    )
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call props.saveArray when the trash can is clicked', () => {
    wrapper.find('.fa-trash-alt').simulate('click');
    expect(saveArrayMock).toBeCalled();
  });
});