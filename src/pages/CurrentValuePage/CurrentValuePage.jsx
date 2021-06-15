import { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  selectStations,
  selectParametersByStationId,
} from '../../redux/location/locationSelector';
import { setCurrentStationId } from '../../redux/location/locationAction';

import PieChartSvg from '../../components/PieChartSvg/PieChartSvg';

import currentValuePageStyles from './CurrentValuePage.module.scss';

const CurrentValuePage = ({
  match,
  setCurrentStationId,
  stations,
  history,
  parametersById,
}) => {
  useEffect(() => {
    const { id } = match.params;

    if (stations[id]) {
      setCurrentStationId(id);
    } else {
      setCurrentStationId('');
      history.push('/page-not-found');
    }

    // eslint-disable-next-line
  }, [match.params.id]);

  return (
    <div className={currentValuePageStyles.currentValuePage}>
      <PieChartSvg parametersById={parametersById} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  stations: selectStations(state),
  parametersById: selectParametersByStationId(ownProps.match.params.id)(state),
});

const mapDispatchToProps = dispatch => ({
  setCurrentStationId: id => dispatch(setCurrentStationId(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentValuePage);
