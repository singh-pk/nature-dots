import { takeLatest, all, call, put } from 'redux-saga/effects';

import { fetchStationsSuccess, fetchStationsFailure } from './locationAction';

import { getStations } from '../../services/services';

import transformData from '../../utils/transformData';

import LocationTypes from './locationTypes';

function* fetchStations() {
  try {
    let res = yield getStations();

    let transformedData = yield call(transformData, res.data.results);

    yield put(fetchStationsSuccess(transformedData));
  } catch (err) {
    yield put(fetchStationsFailure(err));
  }
}

function* onFetchStationsStart() {
  yield takeLatest(LocationTypes.FETCH_STATIONS_START, fetchStations);
}

export function* locationSaga() {
  yield all([call(onFetchStationsStart)]);
}
