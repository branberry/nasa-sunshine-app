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
import { DAILY, PowerAPIParameter, Resolution } from './utils/constants';

function App() {

  const [param, setParam] = useState<PowerAPIParameter>('SG_DAY_HOURS');
  const [resolution, setResolution] = useState<Resolution>(DAILY);


  const { lat, lng } = useGeolocaton();

  const { data } = useFetchSolarData({
    parameters: [param],
    param,
    lat,
    lng,
    startDate: '2019-01-01',
    endDate: '2020-01-01',
    resolution,
  });

  console.log(setParam);
  console.log(setResolution);
  console.log(data);

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
