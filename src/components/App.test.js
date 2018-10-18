import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App', () => {
  const app = shallow(<App />);

  it('renders the `Flashcard pro` title', () => {
    expect(app.find('h2').text()).toEqual('Flashcard pro')
  });

  it('renders the StackList', () => {
    expect(app.find('Connect(StackList)').exists()).toBe(true);
  })

  it('renders a link to create new stacks', () => {
    expect(app.find('h4').text()).toEqual('Create a New Stack')
  })
});