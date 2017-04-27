import React from 'react';
import PostList from './Posts/Post_List';
import Tabs from './Tabs';

const App = () => (
  <div className="container">
    <Tabs/>
    <PostList />
  </div>
);

export default App;
