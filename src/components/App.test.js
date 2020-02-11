import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

jest.mock('chance', () => (class Chance { 
  name(){return 'my name';}
  city(){return 'my city';}
  pickone(){return 'great choice';}
  animal(){return 'the best animal';}
}));

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
