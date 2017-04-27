import * as types from '../constants/actionTypes';

const URL = 'https://www.reddit.com/r';
//let storedUrl = `https://www.reddit.com/r/${subreddit}`

export const fetchPosts = (subreddit = 'all', topic = '') => {
  console.log(subreddit, `subreddit`)
  console.log(topic, `topic`)

  return {
    type: types.FETCH_POSTS,
    payload: `${URL}/${subreddit}/${topic}/.json`,
  };
};
