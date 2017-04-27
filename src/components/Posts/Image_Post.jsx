import React from 'react';

const ImagePost = ({ image, url, changePost }) => {
  if (image.url.includes('gif')) {
    return (
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image">
            <a
              className="btn-floating halfway-fab waves-effect waves-light red"
              onClick={changePost}
            >
              <i className="material-icons">remove</i>
            </a>
            <iframe
              src={url}
              frameBorder="2"
              height={image.height}
              width={image.width}
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image">
            <img src={image.url} alt="" onClick={changePost} />
          </div>
        </div>
      </div>
    </div>
  );
};

ImagePost.propTypes = {};
ImagePost.defaultProps = {};

export default ImagePost;
