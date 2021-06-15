import { all, fork } from 'redux-saga/effects';

import { locationSaga } from './location/locationSaga';

export default function* rootSaga() {
  yield all([fork(locationSaga)]);
}
