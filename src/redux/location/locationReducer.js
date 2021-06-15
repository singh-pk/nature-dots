import LocationTypes from './locationTypes';

const INITIAL_STATE = {
  stations: {},
  currentStationId: null,
  isFetching: true,
  error: null,
};

const locationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //     case LocationTypes.FETCH_STATIONS_START:
    //       return {
    //         ...state,
    //         error: null,
    //         isFetching: true,
    //       };
    case LocationTypes.FETCH_STATIONS_SUCCESS:
      return {
        ...state,
        stations: action.payload,
        error: null,
        isFetching: false,
      };
    case LocationTypes.FETCH_STATIONS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case LocationTypes.SET_CURRENT_STATION_ID:
      return {
        ...state,
        currentStationId: action.payload,
      };
    default:
      return state;
  }
};

export default locationReducer;
