import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import {
  selectStations,
  selectCurrentStationId,
} from '../../redux/location/locationSelector';

import OptionMap from '../OptionMap/OptionMap';

import customInputStyles from './CustomInput.module.scss';

const CustomInput = ({ stations, history, currentStationId }) => {
  const handleChange = event => {
    history.push(`/${event.target.value}`);
  };

  return (
    <div
      className={`${customInputStyles.wrapper} ${
        !currentStationId && customInputStyles.homeWrapper
      }`}
    >
      <select
        className={customInputStyles.select}
        value={currentStationId || ''}
        onChange={handleChange}
      >
        <option value='' disabled hidden>
          Choose a station
        </option>

        <OptionMap stations={stations} />
      </select>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  stations: selectStations,
  currentStationId: selectCurrentStationId,
});

export default connect(mapStateToProps)(withRouter(CustomInput));
