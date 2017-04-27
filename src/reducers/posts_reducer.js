import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function (state = initialState.reddit, { type, payload }) {
  console.log(payload, `i'm the payload yo!`)
  switch (type) {
    case (types.GOOD_POSTS_RESPONSE):
      return {
        ...state,
        posts: payload,
      };
    default:
      return state;
  }
}
