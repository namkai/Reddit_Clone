import React from 'react';


const TextPost = ({ url, title, thumbnail, changePost, image }) => {
  let picture = thumbnail;
  if (thumbnail === 'default' || thumbnail === 'image' || thumbnail === 'self') {
    picture = 'https://pbs.twimg.com/profile_images/1273503290/reddit_alien_logo_400x400.png';
  }
  return (
    <div className="col s12 m6">
      <div className="card horizontal">
        <div className="card-image">
          <img style={style.imageStyle} src={picture} onClick={changePost} />
        </div>
        <div className="card-stacked">
          <div className="card-content" style={style.contentStyle}>
            <a href={url}>{title}</a>
          </div>
          <div className="card-action">
            <a href={url}>This is a link</a>
          </div>
        </div>
      </div>
    </div>
  );
};

TextPost.propTypes = {};
TextPost.defaultProps = {};
const style = {
  imageStyle: {
    height: '130px',
  },
  contentStyle: {
    overflow: 'auto',
  },
};

export default TextPost;