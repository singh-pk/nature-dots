import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com',
});

export const getStations = () =>
  instance.get('/v2/locations?city=London&parameter=no2&parameter=o3');

export const getHistoricalData = (id, parameter) =>
  instance.get(
    `/v2/measurements?limit=10&location_id=${id}&date_from=2000-01-01&date_to=${`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`}&parameter=${parameter}&sort=desc&order_by=datetime`
  );
