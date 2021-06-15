import axios from 'axios';

export const getStations = () =>
  axios.get('/v2/locations?city=London&parameter=no2&parameter=o3');
