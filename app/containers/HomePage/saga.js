import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';
import { createRequestInstance, sendRequest } from 'redux-saga-requests';
import axiosDriver from 'redux-saga-requests-axios'; // or a different driver
import { GET_POSTS } from './constants';

export default function* rootSaga() {
  yield createRequestInstance(axios, { driver: axiosDriver });
  yield takeLatest(GET_POSTS, sendRequest);
}
