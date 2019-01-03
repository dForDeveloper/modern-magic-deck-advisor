import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

const setAsideViewMock = jest.fn();
const setCardAreaViewMock = jest.fn();

describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Header
        setAsideView={setAsideViewMock}
        setCardAreaView={setCardAreaViewMock}/>
    )
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  }); 

  it('should call setAsideView and setCardAreaView when My Cards is clicked', () => {
    wrapper.find('.my-cards').simulate('click');
    expect(setAsideViewMock).toBeCalled();
    expect(setCardAreaViewMock).toBeCalled();
  });

  it('should call setAsideView and setCardAreaView when Saved Decks is clicked', () => {
    wrapper.find('.fave-decks').simulate('click');
    expect(setAsideViewMock).toBeCalled();
    expect(setCardAreaViewMock).toBeCalled();
  });

  it('should call setAsideView and setCardAreaView when Wish List is clicked', () => {
    wrapper.find('.my-wish-list').simulate('click');
    expect(setAsideViewMock).toBeCalled();
    expect(setCardAreaViewMock).toBeCalled();
  });
}) ;