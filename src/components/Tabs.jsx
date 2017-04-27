import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

const Tabs = (props) => {
  const { fetchPosts } = props;

  return (
    <div className="row">
      <div className="col s12">
        <ul className="tabs" style={style.tabStyle}>
          <li className="tab col s2"><a className="active" href="#hot" onClick={() => fetchPosts(undefined, 'hot')}>Hot</a></li>
          <li className="tab col s2"><a href="#New" onClick={() => fetchPosts(undefined, 'new')}>New</a></li>
          <li className="tab col s2"><a href="#Rising" onClick={() => fetchPosts(undefined, 'rising')}>Rising</a></li>
          <li className="tab col s2"><a href="#Controversial" onClick={() => fetchPosts(undefined, 'controversial')}>Controversial</a></li>
          <li className="tab col s2"><a href="#Top" onClick={() => fetchPosts(undefined, 'top')}>Top</a></li>
          <li className="tab col s2"><a href="#Gilded" onClick={() => fetchPosts(undefined, 'gilded')}>Gilded</a></li>
        </ul>
      </div>
    </div>
  );
};

const style = {
  tabStyle: {
    color: 'blue',
  },
};


export default connect(null, { fetchPosts })(Tabs);
