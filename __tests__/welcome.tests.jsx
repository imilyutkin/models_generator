import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Welcome from '../src/components/welcome.js';

describe('Welcome', () => {
  it('Welcome renders hello world', () => {
    const welcome = shallow(<Welcome />);
    expect(welcome.find('div').text()).toEqual('Hello world');
  });
});