import { connect } from 'react-redux';

import useMatchId from '../../hooks/useMatchId';

import PieChartSvg from '../../components/PieChartSvg/PieChartSvg';
import CustomButton from '../../components/CustomButton/CustomButton';

import { selectParametersByStationId } from '../../redux/location/locationSelector';

import currentValuePageStyles from './CurrentValuePage.module.scss';

const CurrentValuePage = ({ match, history, parametersById }) => {
  useMatchId(match.params.id);

  const handleClick = () => {
    history.push(`/${match.params.id}/historical-data`);
  };

  return (
    <div className={currentValuePageStyles.currentValuePage}>
      <CustomButton handleClick={handleClick}>Historical Data</CustomButton>

      <PieChartSvg parametersById={parametersById || []} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  parametersById: selectParametersByStationId(ownProps.match.params.id)(state),
});

export default connect(mapStateToProps)(CurrentValuePage);
