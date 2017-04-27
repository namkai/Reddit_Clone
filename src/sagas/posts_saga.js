import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';

export function* getPostsData({ payload }) {
  try {
    const response = yield call(axios, payload);
    yield put({ type: types.GOOD_POSTS_RESPONSE, payload: response.data.data.children });
  } catch (error) {
    yield put({ type: types.BAD_POSTS_RESPONSE, payload: error });
  }
}

