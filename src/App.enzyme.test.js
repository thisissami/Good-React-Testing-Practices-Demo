import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';

import App from './App';
// import List from './WithContext/List';
import List from './WithProps/List';
import libraries from './libraries';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
/** Jest Config for Enzyme */

// "setupFilesAfterEnv": ["jest-enzyme"],
// "testEnvironment": "enzyme" ("jsdom" otherwise)


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Enzyme Mount tests', () => {
  const wrapper = mount(<App />);
  it('should have a List', () => {
    expect(wrapper.contains(List)).toBe(true);
  });
  it('should have 3 items', () => {
    expect(wrapper.find(List).children('h3')).toHaveLength(3);
  });
  it('should have a button to add a new library', () => {
    expect(wrapper.find(List).children('button')).toHaveLength(1);
    expect(wrapper.find(List).children('button').at(0).text()).toEqual('Add A Library');
  });
});

describe('Enzyme Shallow tests', () => {
  const wrapper = shallow(<List libraries={libraries} />);
  it('should have 3 items', () => {
    expect(wrapper.find('h3')).toHaveLength(3);
  });
  it('should have a button to add a new library', () => {
    // console.log(wrapper.debug());
    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find('button').at(0).text()).toEqual('Add A Library');
  });
});
