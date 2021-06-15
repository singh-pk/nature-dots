import LocationTypes from './locationTypes';

export const fetchStationsStart = () => ({
  type: LocationTypes.FETCH_STATIONS_START,
});

export const fetchStationsSuccess = results => ({
  type: LocationTypes.FETCH_STATIONS_SUCCESS,
  payload: results,
});

export const fetchStationsFailure = err => ({
  type: LocationTypes.FETCH_STATIONS_FAILURE,
  payload: err,
});

export const setCurrentStationId = id => ({
  type: LocationTypes.SET_CURRENT_STATION_ID,
  payload: id,
});
