import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import TextInputControl from '../src/components/shared/forms/textInputControl.js';

describe('TextInputControl', () => {
  it('TextInputControl renders input', () => {
    const textInput = shallow(<TextInputControl />);
    expect(textInput.find('input')).to.have.length(1);
  });
});