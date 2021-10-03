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
import {  PowerAPIParameter, Resolution } from './utils/constants';

function App() {

  const [param, setParam] = useState<PowerAPIParameter>('SG_DAY_HOURS');
  const [resolution, setResolution] = useState<Resolution>('climatology');
  const [startDate, setStartDate] = useState("2019-01-01");
  const [endDate, setEndDate] = useState("2019-04-01");

  const { lat, lng } = useGeolocaton();

  const { data } = useFetchSolarData({
    parameters: [param],
    param,
    lat,
    lng,
    startDate: startDate,
    endDate: endDate,
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
          <GraphsPage 
            resolution={resolution}
            parameter={param}
            data={data}
            setResolution={setResolution}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setParam={setParam}
          />
        </Route>
        <Route path="/map">
          <MapsPage/>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
