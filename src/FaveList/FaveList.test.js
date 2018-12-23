import React from 'react';
import FaveList from './FaveList';
import { shallow } from 'enzyme';
import { isMainThread } from 'worker_threads';

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