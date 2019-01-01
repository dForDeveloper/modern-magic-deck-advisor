import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

const setAsideViewMock = jest.fn();

describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Header
        setAsideView={setAsideViewMock}/>
    )
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  }); 

  it('should call setAsideView and return to Cards when My Cards is clicked')
}) 