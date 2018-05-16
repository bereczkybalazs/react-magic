/*
 *
 * HomePage actions
 *
 */

import {
  DEFAULT_ACTION, GET_POSTS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getPosts() {
  return {
    type: GET_POSTS,
    request: { url: 'https://jsonplaceholder.typicode.com/posts' },
  };
}
