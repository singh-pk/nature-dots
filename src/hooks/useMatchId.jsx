import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { setCurrentStationId } from '../redux/location/locationAction';
import { selectStations } from '../redux/location/locationSelector';

const useMatchId = id => {
  const stations = useSelector(selectStations);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (stations[id]) {
      dispatch(setCurrentStationId(id));
    } else {
      dispatch(setCurrentStationId(''));
      history.push('/page-not-found');
    }

    // eslint-disable-next-line
  }, [id]);

  return null;
};

export default useMatchId;
