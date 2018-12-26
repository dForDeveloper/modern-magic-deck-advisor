import React from 'react';
import FaveList from './FaveList';
import { shallow } from 'enzyme';

describe('FaveList', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <FaveList/>
    )
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})