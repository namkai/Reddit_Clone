import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';
import Post from './Post';


export class PostList extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }


  generatePostList() {
    const { posts } = this.props.posts;
    const generatedList = posts.map((post) => {
      const { id, subreddit, author, thumbnail, title, url, preview, ups } = post.data;
      return (
        <Post
          id={id}
          subreddit={subreddit}
          author={author}
          thumbnail={thumbnail}
          title={title}
          url={url}
          preview={preview}
          ups={ups}
        />
      );
    });
    return generatedList;
  }

  render() {
    const { posts } = this.props;
    if (posts.length === 0) {
      return (
        <div className="container">
          <div className="progress">
            <div className="indeterminate"/>
          </div>
        </div>
      );
    }
    return (
      <div className="row">
        {this.generatePostList()}
      </div>
    );
  }
}

PostList.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
};
PostList.defaultProps = {
  posts: PropTypes.array.isRequired,
};

const mapStateToProps = ({ posts }) => ({
  posts,
});

export default connect(mapStateToProps, { fetchPosts })(PostList);
