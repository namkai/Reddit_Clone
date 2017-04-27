import { takeEvery } from 'redux-saga/effects';
import { getPostsData } from './posts_saga';
import * as types from '../constants/actionTypes';


export default function* watchResponseData() {
  yield takeEvery(types.FETCH_POSTS, getPostsData);
}
