import { shallow } from 'enzyme';
import React from 'react';
import {PostList} from '../../src/components/Posts/Post_List';

describe('PostList', () => {
  it('PostList renders a list of posts', () => {
    const postlist = shallow(<PostList />);
    expect(postlist.find('div').text()).toEqual('<Connect(Tabs) /><Connect(PostList) />');
  });
})
