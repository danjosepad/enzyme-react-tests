import React from 'react';
import { mount } from 'enzyme';

// Project imports 

import App from './App';

describe('Counter Testing', () => {
  
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test('render the title of counter', () => {
    expect(wrapper.find('h1').text()).toContain("This is counter app")
  });

  test('render a button with increment', () => {
    expect(wrapper.find('#increment-btn').text()).toBe('Increment')
  })
  
  test('render the initial value of state', () => {
    expect(wrapper.find('#counter-value').text()).toBe("0");
  })

  test('render click event of increment button and value', () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find("#counter-value").text()).toBe("1");
  });

  test('render click event of decrement button and value', () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find("#counter-value").text()).toBe("1");
    wrapper.find('#decrement-btn').simulate('click');
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test('dont allow to decrement bellow 0', () => {
    wrapper.find('#decrement-btn').simulate('click');
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
});

