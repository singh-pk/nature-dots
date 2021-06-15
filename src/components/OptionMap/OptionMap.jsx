import React from 'react';

const OptionMap = ({ stations }) => {
  return Object.keys(stations).map(station => (
    <option key={station} value={station}>
      {stations[station].name}
    </option>
  ));
};

export default OptionMap;
