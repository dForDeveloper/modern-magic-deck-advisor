import React from 'react';
import Controls from './Controls';
import { shallow } from 'enzyme';
import cards from '../mockData';

const addCardToListMock = jest.fn();
const throwInvalidCardNameErrorMock = jest.fn();

describe('Controls', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Controls
        addCardToList={addCardToListMock}
        throwInvalidCardNameError={throwInvalidCardNameErrorMock}
        isInvalidCardName={false}
        hasDuplicates={false}
        cards={cards}/>
    )
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should should set the state of cardName on change of the input', () => {
    wrapper.find('.controls--input').simulate('change', { target: { value: 'B' } });
    expect(wrapper.state()).toEqual({ cardName: 'B' });
  })
  
  it('should call props.addCardToList when the button is clicked and there is a matchedCard', () => {
    wrapper.find('.controls--input').simulate('change', { target: { value: 'Blood Moon' } });
    wrapper.find('.controls--button').simulate('click', { preventDefault: () => {} });
    expect(addCardToListMock).toBeCalled();
  })
  
  it('should call props.throwInvalidCardNameError when the button is clicked and there is no matchedCard', () => {
    wrapper.find('.controls--input').simulate('change', { target: { value: 'asdfgasd' } });
    wrapper.find('.controls--button').simulate('click', { preventDefault: () => {} });
    expect(throwInvalidCardNameErrorMock).toBeCalled();
  });
  
  it('should return a card object if the state.cardName matches a card in the data set when validateCardName is called', () => {
    wrapper.find('.controls--input').simulate('change', { target: { value: 'Tarmogoyf' } });
    expect(wrapper.instance().validateCardName().cardName).toEqual('Tarmogoyf');
  })
})