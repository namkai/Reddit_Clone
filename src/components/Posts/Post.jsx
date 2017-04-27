import React, { Component } from 'react';
import ImagePost from './Image_Post';
import TextPost from './Text_Post';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: 'text',
    };
    this.swapPost = this.swapPost.bind(this);
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.title !== nextProps.title) {
      return true;
    }
    if (this.state.post !== nextState.post) {
      return true;
    }
    console.log(`i didn't need to update`)
    return false;
  }
  swapPost() {
    const { post } = this.state;
    if (post === 'text') {
      this.setState({
        post: 'image',
      });
    }
    if (post === 'image') {
      this.setState({
        post: 'text',
      });
    }
  }

  render() {
    const { id, subreddit, author, title, url, preview, thumbnail } = this.props;
    console.log(preview);
    let image;
    if (preview !== undefined) {
      image = preview.images[0].source;
    } else {
      image = 'https://assets.ifttt.com/images/channels/1352860597/icons/on_color_large.png';
    }
    if (this.state.post === 'text') {
      return (
        <TextPost
          changePost={this.swapPost}
          title={title}
          thumbnail={thumbnail}
          url={url}
          id={id}
          author={author}
          subreddit={subreddit}
          image={image}
        />
      );
    }
    if (this.state.post === 'image') {
      return (
        <ImagePost image={image} url={url} changePost={this.swapPost} />
      );
    }
  }
}
const style = {
  titleStyle: {
    color: 'black',
  },
};

export default Post;
