import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CurrentValuePage from './pages/CurrentValuePage/CurrentValuePage';
import Error404Page from './pages/Error404Page/Error404Page';

import CustomInput from './components/CustomInput/CustomInput';
import WithSpinner from './components/WithSpinner/WithSpinner';

import { selectStations } from './redux/location/locationSelector';
import { fetchStationsStart } from './redux/location/locationAction';

import './App.scss';
import HistoricalDataPage from './pages/HistoricalDataPage/HistoricalDataPage';

const CustomInputWithSpinner = WithSpinner(CustomInput);
const CurrentValuePageWithSpinner = WithSpinner(CurrentValuePage);
const HistoricalDataPageWithSpinner = WithSpinner(HistoricalDataPage);

const App = ({ stations, fetchStationsStart }) => {
  useEffect(() => {
    fetchStationsStart();
  }, []);

  let isFetching = !Object.keys(stations).length;

  return (
    <>
      <CustomInputWithSpinner isLoading={isFetching} />

      <Switch>
        <Route exact path='/' component={null} />
        <Route
          exact
          path='/:id'
          render={props => (
            <CurrentValuePageWithSpinner isLoading={isFetching} {...props} />
          )}
        />
        <Route
          exact
          path='/:id/historical-data'
          render={props => (
            <HistoricalDataPageWithSpinner isLoading={isFetching} {...props} />
          )}
        />
        <Route exact path='/page-not-found' component={Error404Page} />
        <Route component={Error404Page} />
      </Switch>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  stations: selectStations,
});

const mapDispatchToProps = dispatch => ({
  fetchStationsStart: () => dispatch(fetchStationsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
