import { createSelector } from 'reselect';
import _ from 'lodash';

const postSelector = state => state.posts;
const selectedPostSelector = state => state.selectedPostIds;

const getPosts = (posts, selectedPostIds) => {
  const selectedPosts = _.filter(
    posts,
    posts => _.contains(selectedPostIds, post.id)
  );
  return selectedPosts;
};

export default createSelector(
  postSelector,
  selectedPostSelector,
  getPosts,
);

