import React from 'react';
import FaveListItem from './FaveListItem';
import { shallow } from 'enzyme';

const deckName = "Bant Spirits"
const index = 0;
const removeFaveListItemMock = jest.fn();

describe("FaveListItem", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <FaveListItem 
        deckName={deckName}
        deckIndex={index}
        key={deckName}
        removeFaveListItem={removeFaveListItemMock}
      />
    )
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call removeFaveListItem method from props when removeFaveListItem is called', () => {
    wrapper.find(".fa-trash-alt").simulate("click", {
      target: { 
        closest: () => {
          return { id: "0" }
        } 
      }
    })
    expect(removeFaveListItemMock).toBeCalled();
  });
})