import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import TextInputControl from '../src/components/shared/forms/textInputControl.js';

describe('TextInputControl', () => {
  let onChange = jest.fn();
  let textInput;

  beforeEach(() => {
    onChange = jest.fn();
    textInput = mount(
      <TextInputControl onChange={onChange} 
                        initValue="test"
                        type="text" 
                        name="Test Field" />
      );
  });

  it('TextInputControl renders input', () => {
    expect(textInput.find('input')).to.have.length(1);
  });
  
  it('TextInputControl input default value', () => {
    expect(textInput.find('input').node.value).to.equal("test");
  });

  it('TextInputControl input check value changing', () => {
    textInput.simulate('change', { target: { value: 'Name 4' } });
    expect(textInput.find('input').node.value).to.equal("Name 4");
  });

  it('TextInputControl input check that on blur work', () => {
    textInput.simulate('change', { target: { value: 'Name 4' } });
    textInput.simulate('blur');
  });
});