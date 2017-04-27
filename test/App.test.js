import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/components/App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('Welcome renders its child components', () => {
    const app = shallow(<App />);
    expect(app.find('div').text()).toEqual('<Connect(Tabs) /><Connect(PostList) />');
  });
})

