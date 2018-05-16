/*
 *
 * HomePage reducer
 *
 */
import { success } from 'redux-saga-requests';

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION, GET_POSTS,
} from './constants';

const initialState = fromJS({
  posts: [],
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case success(GET_POSTS):
      return state.set('posts', action.data);
    default:
      return state;
  }
}

export default homePageReducer;
