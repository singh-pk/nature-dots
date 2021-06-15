import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from 'recharts';

import useMatchId from '../../hooks/useMatchId';

import CustomButton from '../../components/CustomButton/CustomButton';

import { getHistoricalData } from '../../services/services';

import { selectParametersByStationId } from '../../redux/location/locationSelector';

import historicalDataPageStyles from './HistoricalDataPage.module.scss';

const HistoricalDataPage = ({ match, history, parametersById }) => {
  const [o3Data, setO3Data] = useState(null);
  const [no2Data, setNo2Data] = useState(null);

  useMatchId(match.params.id);

  useEffect(() => {
    data();
  }, []);

  const data = async () => {
    try {
      let res1 = await getHistoricalData(match.params.id, 'o3');
      let res2 = await getHistoricalData(match.params.id, 'no2');

      setO3Data(res1.data.results);
      setNo2Data(res2.data.results);

      console.log(res1, res2);
    } catch (err) {
      console.table(err);
    }
  };

  const handleClick = () => {
    history.push(`/${match.params.id}`);
  };

  return (
    <div className={historicalDataPageStyles.historicalDataPage}>
      <CustomButton handleClick={handleClick}>Current Data</CustomButton>

      {no2Data && o3Data && (
        <LineChart width={900} height={500}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='value' domain={['auto', 'auto']} />
          <YAxis dataKey='parameter' />
          <Tooltip />
          <Legend />
          <Line
            type='monotone'
            data={o3Data}
            dataKey='o3'
            stroke='#8884d8'
            activeDot={{ r: 8 }}
          />
          <Line type='monotone' data={no2Data} dataKey='no2' stroke='#82ca9d' />
        </LineChart>
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  parametersById: selectParametersByStationId(ownProps.match.params.id)(state),
});

export default connect(mapStateToProps)(HistoricalDataPage);
