import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Footer component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
