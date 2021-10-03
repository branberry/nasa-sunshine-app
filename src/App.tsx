import React, { useState } from 'react';
// import Box from '@mui/material/Box';
import './App.css';
import SolarAppBar from './components/SolarAppBar';
import GraphsPage from './pages/graphs';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import MapsPage from './pages/map';
import useGeolocaton from './hooks/useGeolocation';
import useFetchSolarData from './hooks/useFetchSolarData';
import { PowerAPIParameter } from './utils/constants';

function App() {

  const [param, setParam] = useState<PowerAPIParameter>('SOLAR_DEFICITS_BLW_CONSEC_07');

  const { lat, lng } = useGeolocaton();
   
  const { data } = useFetchSolarData({
    parameters: [param],
    param,
    lat,
    lng,
    startDate: '2019-01-01',
    endDate: '2020-01-01',
  });

  return (
    <Router>
      <div className="App">
        <SolarAppBar/>
      </div>
      <Switch>
        <Route path="/">
          <GraphsPage />
        </Route>
        <Route path="/map">
          <MapsPage/>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
