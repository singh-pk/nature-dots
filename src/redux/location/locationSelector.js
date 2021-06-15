import { createSelector } from 'reselect';

const selectLocation = state => state.location;

export const selectStations = createSelector(
  [selectLocation],
  location => location.stations
);

export const selectCurrentStationId = createSelector(
  [selectLocation],
  location => location.currentStationId
);

export const selectStationById = stationId =>
  createSelector([selectStations], stations => stations[stationId]);

export const selectParametersByStationId = stationId =>
  createSelector(
    [selectStations],
    stations =>
      stations[stationId] &&
      stations[stationId].parameters.filter(
        val => val.parameter === 'no2' || val.parameter === 'o3'
      )
  );
