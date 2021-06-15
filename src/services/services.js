import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com',
});

export const getStations = () =>
  instance.get('/v2/locations?city=London&parameter=no2&parameter=o3');
